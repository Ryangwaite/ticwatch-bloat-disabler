import './style.less'; // Js will dynamically add the CSS transpilation in the <head> of the webpage
import ConnectionManager from './ConnectionManager';

const connectionManager = new ConnectionManager;

// Bind click listeners
document.getElementById("connection-btn")
    .addEventListener("click", async () => {
        await connectionManager.initializeUsbConnection();

        // TODO: Add a toast while waiting for adb connection to be accepted

        await connectionManager.connectAdb(); // I don't think i really need to wait on this one
    });


// document.getElementById("disconnect-usb-adb-btn")
//     .addEventListener("click", () => connectionManager.closeConnection());