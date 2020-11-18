import Adb from 'webadb';

/**
 * All possible states for the ConnectionManager
 */
const ConnectionManagerState = Object.freeze({
    DISCONNECTED:       0,
    USB_CONNECTED:      1,
    ADB_CONNECTED:      2,
});

export default class ConnectionManager {

    constructor() {
        this._webUsbConnection = null;
        this._adbConnection = null;
        this._state = ConnectionManagerState.DISCONNECTED;

        // Bind methods to this class so we can call them correctly from eventhandlers
        this.initializeUsbConnection = this.initializeUsbConnection.bind(this);
        this.connectAdb = this.connectAdb.bind(this);
        this.closeConnection = this.closeConnection.bind(this);
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
};