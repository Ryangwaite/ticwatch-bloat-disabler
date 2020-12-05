import './style.less'; // Js will dynamically add the CSS transpilation in the <head> of the webpage
import ConnectionManager from './ConnectionManager';
import cross from './images/cross.svg';

// Manages the connection state and allows for communication with the watch
const connectionManager = new ConnectionManager;

/**
 * Returns an array of objects with properties:
 * 
 * {
 *      packageName,
 *      tableDataElement
 * }
 * 
 */
function getTablePackageElements() {
    const tableDataElements = [...document.querySelectorAll("#package-table td")]; // Spread the StaticNodeList to convert to Array so map can be used below
    return tableDataElements.map(x => ({packageName: x.textContent.trim(), tableDataElement: x}));
}

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

        // Read the labels out of the table and DOM elements
        const tablePackageElements = getTablePackageElements();

        // Disable each package individually and display the result in the DOM
        for (const packageElement of tablePackageElements) {
            const packageName = packageElement.packageName;

            // Disable the package
            let success = true;
            try {
                await connectionManager.disablePackage(packageName);
            } catch (err) {
                success = false;
            }

            let statusImg = packageElement.tableDataElement.querySelector("img");

            // Set the icon accordingly (defaults to a tick/success so only change on fail)
            if (!success) {
                statusImg.setAttribute("src", cross);
            }

            // TODO: probably should put a tooltip with fail message on icon if failed

            // Unhide the status img in the dom
            statusImg.classList.remove("row__status-icon--hidden");

            // Shift the label from the center to the left, show the icon on the right
            packageElement.tableDataElement.classList.remove("table__row--hidden-status-icon");
            packageElement.tableDataElement.classList.add("table__row--visible-status-icon");
        }

    });

// document.getElementById("disconnect-usb-adb-btn")
//     .addEventListener("click", () => connectionManager.closeConnection());