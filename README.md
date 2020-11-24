# Ticwatch Bloat Disabler

A scripted version of the steps explained in ['Make your Ticwatch smoother than ever disabling TicSystem via ADB!'](https://forum.xda-developers.com/wear-os/development/make-ticwatch-smoother-disabling-t3951734)

> **Disclaimer**: Like the author in the post above, i also am not an expert and have no idea if doing this can damage your device. I accept no responsibility for damage you do to anything. Proceed at your own risk.

This leverages the awesome [wedadb.js](https://github.com/webadb/webadb.js) package to communicate with the watch, as such you don't need any android tools installed on your host machine. 

## Scripts

Theres two scripts here each with the following purposes:
- `tw-disable-bloat.sh` - runs on the ticwatch itself
- `disable-bloat` - runs from the host and copies and runs the `tw-disable-bloat.sh` on the Ticwatch

## Prerequisites 

- A ticwatch with ADB enabled:
   1. Go to 'settings' -> 'System' -> 'About' and repeatedly tap the 'Build number' until it says your a developer
   2. Back in settings, go to 'Developer options' and enable 'ADB debugging'

- A USB cable to connect watch to PC
- A linux PC to act as the host for communicating with the Ticwatch

## Usage

First make sure you have adb installed then run:
```bash
cd cli
./disable-bloat
```
If your getting `No adb device with model 'Ticwatch_E' found` then make sure you can connect directly with ADB to the watch before running again.



  