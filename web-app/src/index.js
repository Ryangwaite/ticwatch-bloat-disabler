import ConnectionManager from './ConnectionManager';



const connectionManager = new ConnectionManager;

// Bind click listeners
document.getElementById("connect-usb-btn")
        .addEventListener("click", () => connectionManager.initializeUsbConnection());

document.getElementById("connect-adb-btn")
        .addEventListener("click", () => connectionManager.connectAdb());

document.getElementById("disconnect-usb-adb-btn")
        .addEventListener("click", () => connectionManager.closeConnection());

