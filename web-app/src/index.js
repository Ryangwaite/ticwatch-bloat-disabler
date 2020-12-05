import './style.less'; // Js will dynamically add the CSS transpilation in the <head> of the webpage
import ConnectionManager from './ConnectionManager';
import cross from './images/cross.svg';

const ConnectionButtonMode = Object.freeze({
    CONNECT:         0,
    DISCONNECT:      1,
});

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

/**
 * Connects to the watch first over USB which causes the browser to
 * prompt the user for a USB device. Once accepted, displays a modal
 * prompting the user to accept the ADB connection on the watch. Next,
 * fetches the watches stats and displays them in the stats section.
 * Changes the connection button to "disconnect" mode
 */
async function connect() {
    await connectionManager.initializeUsbConnection();

    // TODO: Add a modal while waiting for adb connection to be accepted

    await connectionManager.connectAdb();
    let deviceStats = await connectionManager.getDeviceStats()
            .then(stats => {
                console.log("Got device stats from watch: ", stats);
                return stats;
            }).catch(err => {
                // TODO: display this in the stats container
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

    changeConnectionButtonTo(ConnectionButtonMode.DISCONNECT);
}

/**
 * Closes the ADB connection to the watch. Clears the stats.
 * Changes the connection button to "connect" mode.
 */
async function disconnect() {
    await connectionManager.closeConnection();

    // Clear the stats and show the no device connected message
    document.querySelector("#watch-stats-container > .watch-stats-container__text").classList.remove("watch-stats-container__text--hidden");
    document.querySelector("#watch-stats-container > .watch-stats-container__grid").classList.add("watch-stats-container__grid--hidden");

    changeConnectionButtonTo(ConnectionButtonMode.CONNECT);
}

/**
 * Changes the connection button to the state indicated by
 * newButtonState.
 * 
 * Binds the click listener for the indicated state.
 * 
 * @param {number} newButtonState state to set the connection button to 
 */
function changeConnectionButtonTo(newButtonState) {
    const connectionBtn = document.getElementById("connection-btn");

    // Clear any current event listeners
    connectionBtn.removeEventListener("click", connect);
    connectionBtn.removeEventListener("click", disconnect);

    switch (newButtonState) {
        case ConnectionButtonMode.CONNECT:
            connectionBtn.textContent = "Connect"; // Set button label
            connectionBtn.addEventListener("click", connect);
            break;
        case ConnectionButtonMode.DISCONNECT:
            connectionBtn.textContent = "Disconnect"; // Set button label
            connectionBtn.addEventListener("click", disconnect);
            break;
        default:
            throw `Invalid button state '${newButtonState}' for the connection button`;
    }
}

// Bind click listeners
changeConnectionButtonTo(ConnectionButtonMode.CONNECT);

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