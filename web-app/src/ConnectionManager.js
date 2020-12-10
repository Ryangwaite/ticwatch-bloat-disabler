import Adb from 'webadb';

/**
 * All possible states for the ConnectionManager
 */
const ConnectionManagerState = Object.freeze({
    DISCONNECTED:       0,
    USB_CONNECTED:      1,
    ADB_CONNECTED:      2,
    EXECUTING_CMD:      3,
});

export default class ConnectionManager {

    constructor() {
        this._webUsbConnection = null;
        this._adbConnection = null;
        this._state = ConnectionManagerState.DISCONNECTED;
        this._textDecoder = new TextDecoder(); // used for decoding all received command outputs

        // Bind methods to this class so we can call them correctly from eventhandlers
        this.initializeUsbConnection = this.initializeUsbConnection.bind(this);
        this.connectAdb = this.connectAdb.bind(this);
        this.closeConnection = this.closeConnection.bind(this);
        this.runShellCmd = this.runShellCmd.bind(this);
        this.getDeviceStats = this.getDeviceStats.bind(this);
        this.disablePackage = this.disablePackage.bind(this);
        this.enablePackage = this.enablePackage.bind(this);
        this.listDisabledPackages = this.listDisabledPackages.bind(this);
    };

    get state() {
        return this._state;
    }

    /**
     * Prompt user with chrome dialog to select the USB device.
     * The list is filtered to only return those with:
     *      classCode = 255, subclassCode = 66, protocolCode = 1 (ADB) or 3 (fastboot)
     * Then connects to it at the USB level.
     */
    async initializeUsbConnection() {

        if (this._state !== ConnectionManagerState.DISCONNECTED) {
            console.warn("A USB connection has already been established");
            return;
        }
        
        try {
            // Prompt user to select adb device in chrome dialogue
            this._webUsbConnection = await Adb.open("WebUSB"); // "WebUSB" is the only allowed transport here
            this._state = ConnectionManagerState.USB_CONNECTED;
            console.info("Successfully created USB Connection");
        } catch (error) {
            console.warn(`No ADB device selected. Error: ${error}`);
            return;
        }
    };

    /**
     * Prompts the user on the watch to allow this browser to create an ADB connection.
     */
    async connectAdb(watchPromptCallback = (productName) => {
        console.warn(`Accept the ADB connection on your ${productName} watch`);
    }) {

        // Exit with an appropriate warning if not in correct state
        switch (this._state) {
            case ConnectionManagerState.ADB_CONNECTED:
                console.warn("An ADB connection has already been established");
                return;
            case ConnectionManagerState.DISCONNECTED:
                console.warn("A USB connection must be established first");
                return;
            default:
                break;
        }
        
        if (!this._webUsbConnection.isAdb()) {
            console.error("Cannot initialize an ADB connection. The connected device is not ADB capable");
        }

        try {
            // Connect to ADB with banner = "host::". IDK what this is but all the examples use this
            this._adbConnection = await this._webUsbConnection.connectAdb("host::", () => {
                watchPromptCallback(this._webUsbConnection.device.productName);
            });
            this._state = ConnectionManagerState.ADB_CONNECTED;
            console.info(`Successfully established ADB connection to ${this._webUsbConnection.device.productName}`);
        } catch (error) {
            this._state = ConnectionManagerState.USB_CONNECTED;
            console.error(`Failed to create an ADB connection: Error: ${error}`);    
        }
    };

    /**
     * Close the ADB and USB connection
     */
    async closeConnection() {

        if (this._state === ConnectionManagerState.DISCONNECTED) {
            console.warn("Tried to disconnect a device that wasn't connected");
            return;
        }

        if (this._webUsbConnection) {
            this._webUsbConnection.close();
            this._state = ConnectionManagerState.DISCONNECTED;
            console.info("Successfully terminated the USB Connection");
        }
    };

    /**
     * Runs the 'cmd' on the watch and returns the output.
     * 
     * Only one concurrent shell cmd can execute at a time. Trying to run another while one
     * is currently under way will raise an exception.
     * 
     * @param {string} cmd shell Command to run on the watch over ADB connection
     * @throws {string} when the ConnectionManagers state is not ADB_CONNECTED
     */
    async runShellCmd(cmd) {
        if (this._state === ConnectionManagerState.EXECUTING_CMD) {
            throw "A shell command is currently executing. Cannot start another until the current one finishes";
        } else if (this._state !== ConnectionManagerState.ADB_CONNECTED) {
            throw "Cannot run shell commands without an active ADB connection";
        }

        // Set the state to gaurd against concurrent Shell cmd execution
        this._state = ConnectionManagerState.EXECUTING_CMD;

        // TODO: Add some error handling around this
        let shell = await this._adbConnection.shell(cmd);
        let responseBundle = await shell.receive();
        shell.close(); // Without this successive shellCmd's can throw an exception.

        let output = responseBundle.data !== null ?
                this._textDecoder.decode(responseBundle.data) : "";
                
        console.debug(`cmd: ${cmd}\noutput: ${output}`);

        // Allow new shell commands to be sent
        this._state = ConnectionManagerState.ADB_CONNECTED;

        return output;
    }

    /**
     * Queries the connected device for:
     *  - model
     *  - serial number
     *  - Android version
     *  - battery percentage
     * 
     * @returns an object where the keys are those above and values are that queried from device
     */
    async getDeviceStats() {

        /**
         * Note: from testing i realised that each of these asyncs operations
         * must complete synchronously for it to work. I can't start all commands
         * then wait on the results of them all at once. 
         */

        console.debug("Entered getDeviceStats()");

        /**
         * This cmd returns:
         *
         * $ getprop ro.product.model                                                                                                                                                                  
         * Ticwatch E
         */
        let model = await this.runShellCmd("getprop ro.product.model")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ getprop ro.serialno                                                                                                                                                                       
         * M6600TB1234F
         */
        let serialNo = await this.runShellCmd("getprop ro.serialno")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ getprop ro.build.version.release                                                                                                                                                          
         * 8.0.0
         */
        let androidVersion = await this.runShellCmd("getprop ro.build.version.release")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ dumpsys battery | grep level                                                                                                                                                            
         *   level: 100
         * 
         * The value is then extracted.
         */
        let batteryPercent = await this.runShellCmd("dumpsys battery | grep level")
                .then(value => {
                    const items = value.split(" ");
                    return items[items.length - 1].trim();
                });

        return {
            model: model,
            serialNo: serialNo,
            androidVersion: androidVersion,
            batteryPercent: batteryPercent
        };
    }

    /**
     * Disables the package on the watch by running a cmd of the form:
     * 
     * $ pm disable-user --user 0 <packageName>
     * 
     * @param {string} packageName the package to disable on the watch
     */
    async disablePackage(packageName) {

        console.debug("Entered 'disablePackage()");
        
        const cmd = `pm disable-user --user 0 ${packageName}`;

        console.log("packageName is: ", packageName);

        // NOTE: For testing the UI's response when disabling a package
        //       fails, you can uncomment the following
        // if (packageName === "com.mobvoi.wear.health.aw") {
        //     throw "i deliberatly fail this just to confirm it works in my testing";
        // }
 
        await this.runShellCmd(cmd);
    }

    /**
     * Enables the package on the watch by running a cmd of the form:
     * 
     * $ pm enable <packageName>
     * 
     * @param {string} packageName the package to enable on the watch
     */
    async enablePackage(packageName) {
        console.debug("Entered 'enablePackage()");

        const cmd = `pm enable ${packageName}`;

        await this.runShellCmd(cmd);
    }

    /**
     * Lists all disabled packages on the watch by running:
     * 
     * $ pm list packages -d
     */
    async listDisabledPackages() {
        console.debug("Entered 'listDisabledPackages()");

        const cmd = "pm list packages -d";

        let result = await this.runShellCmd(cmd);

        return result;
    }
};