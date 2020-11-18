import Adb from 'webadb';

/**
 * All possible states for the connection to the watch to be in
 */
const ConnectionState = Object.freeze({
    CONNECTED:      0,
});

export default class ConnectionManager {

    constructor() {
        this._webUsbConnection = null;
        this._adbConnection = null;
        this._state = null;

        // Bind methods to this class so we can call them correctly from eventhandlers
        this.initializeUsbConnection = this.initializeUsbConnection.bind(this);
        this.connectAdb = this.connectAdb.bind(this);
        this.closeConnection = this.closeConnection.bind(this);
    };

    /**
     * Prompt user with chrome dialog to select the USB device.
     * The list is filtered to only return those with:
     *      classCode = 255, subclassCode = 66, protocolCode = 1 (ADB) or 3 (fastboot)
     * Then connects to it at the USB level.
     */
    async initializeUsbConnection() {
        
        try {
            // Prompt user to select adb device in chrome dialogue
            this._webUsbConnection = await Adb.open("WebUSB"); // "WebUSB" is the only allowed transport here
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
        console.warn(`Accept the ADB connection on your ${productName} watch.`);
    }) {    
        
        if (this._webUsbConnection && this._webUsbConnection.isAdb()) {
            try {
                // Connect to ADB with banner = "host::". IDK what this is but all the examples use this
                this._adbConnection = await this._webUsbConnection.connectAdb("host::", () => {
                    watchPromptCallback(this._webUsbConnection.device.productName);
                });
                console.info(`Successfully established ADB connection to ${this._webUsbConnection.device.productName}`);
            } catch (error) {
                console.error(`Failed to create an ADB connection: Error: ${error}`);    
            }
        } else {
            console.error("Tried to create an ADB connection without a USB connection");
        }
    };

    /**
     * Close the ADB and USB connection
     */
    async closeConnection() {
        if (this._webUsbConnection) {
            this._webUsbConnection.close();
            console.info("Successfully terminated the USB Connection");
        } else {
            console.warn("Tried to disconnect a device that wasn't connected");
        }
    };
};