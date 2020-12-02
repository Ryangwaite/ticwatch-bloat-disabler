import './style.less'; // Js will dynamically add the CSS transpilation in the <head> of the webpage
import ConnectionManager from './ConnectionManager';

// Manages the connection state and allows for communication with the watch
const connectionManager = new ConnectionManager;

// Bind click listeners
document.getElementById("connection-btn")
    .addEventListener("click", async () => {
        await connectionManager.initializeUsbConnection();

        // TODO: Add a toast while waiting for adb connection to be accepted

        await connectionManager.connectAdb();
        let deviceStats = await connectionManager.getDeviceStats()
                .then(stats => {
                    console.log("Got device stats from watch: ", stats);
                }).catch(err => {
                    console.error("Failed to get device stats from watch. Error: ", err);
                });
    });

// document.getElementById("disconnect-usb-adb-btn")
//     .addEventListener("click", () => connectionManager.closeConnection());