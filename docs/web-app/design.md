# web-app Design

## Connection Manager
The connection manager is responsible for managing the USB and ADB connection to the watch as well as sending and receiving commands and output. It is backed by the following state machine:

![ConnectionManager States](connection-manager-states.drawio.svg)

(Note: to edit the diagram open `connection-manager-states.drawio.svg` with the VS Code extension [hediet.vscode-drawio](https://github.com/hediet/vscode-drawio) )

The states have the following definitions:

State | Description 
---------|----------
 DISCONNECTED | The initial state before the user has established a USB connection.
 USB_CONNECTED | When a USB connection has been established but an ADB connection is yet to be established over the top.
 ADB_CONNECTED | When the connection to the watch has been fully established and it is ready to send and receive commands.
 EXECUTING_CMD | A short lived state entered when the browser has sent a command to the watch. Once the browser has received the response, it returns to the ADB_CONNECTED state. Its purpose is to prevent concurrent execution of commands on the watch which is not supported by webadb.

 ## UI/UX Prototype

 Early on [a prototype](../../web-app/figma/ticwatch-debloat-web-app-v1_0.fig) was built in Figma. Once it was entirely implemented it was clear that the font-size and dimensions of the prototype were well off the actual thing. Nevertheless, the design is very similar. The prototype was not changed retrospectively to match the implemented design.
