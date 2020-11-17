import { Adb } from 'webadb';


let webusb = null;
let state;


/**
 * Prompt user with chrome dialog to select the ADB device
 */
async function connect() {

    console.log(`webusb is ${webusb}`);
    
    try {
        // Prompt user to select adb device in chrome dialogue
        webusb = await Adb.open("WebUSB"); // "WebUSB" is the only allowed transport here
    } catch (error) {
        console.warn("No ADB device selected");
        return;
    }

};

export default connect;

// need to use webpack expose-loader to expose module to global object for onclickreferences
// to be able to access the methods