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
                    return stats;
                }).catch(err => {
                    console.error("Failed to get device stats from watch. Error: ", err);
                });

        // Populate the device stats
        document.getElementById("model_status").textContent = deviceStats.model;
        document.getElementById("serialno_status").textContent = deviceStats.serialNo;
        document.getElementById("android_status").textContent = deviceStats.androidVersion;
        document.getElementById("battery_status").textContent = `${deviceStats.batteryPercent} %`;

        // Hide the text stats container message and show the retrieved stats
        document.querySelector("#watch-stats-container > .watch-stats-container__text").classList.add("watch-stats-container__text--hidden");
        document.querySelector("#watch-stats-container > .watch-stats-container__grid").classList.remove("watch-stats-container__grid--hidden");
    });

document.getElementById("run-btn")
    .addEventListener("click", async () => {
        const packageName = "com.mobvoi.wear.fitness.aw";
        await connectionManager.disablePackage(packageName);
        console.log(`Disabled package: ${packageName}`);

        let disabledPackages = await connectionManager.listDisabledPackages();
        console.log("Disabled packages: ", disabledPackages);
    });

// document.getElementById("disconnect-usb-adb-btn")
//     .addEventListener("click", () => connectionManager.closeConnection());