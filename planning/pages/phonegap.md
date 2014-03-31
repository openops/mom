Phonegap
====================

Phonegap will be used in MOM as a way to compile our app for multiple platforms.
Phonegap creates a easy way for us to reach many platforms from one source.


## Platforms
### OSX

- `npm install phonegap -g`
- `brew update`
- `brew install ant`
- `brew install android-sdk`
- type `android`
- Ensure that you have platform and build tools installed, and ensure you have at least version 19

### Ubuntu 12.04 LTS
- The following packages are needed as pre-requisites:

```bash
sudo apt-get install git gnupg flex bison gperf build-essential \
     zip curl libc6-dev libncurses5-dev:i386 x11proto-core-dev \
     libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-glx:i386 \
     libgl1-mesa-dev g++-multilib mingw32 tofrodos \
     python-markdown libxml2-utils xsltproc zlib1g-dev:i386
```
- `sudo ln -s /usr/lib/i386-linux-gnu/mesa/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so`
- `sudo apt-get update`
- `npm install phonegap -g`
- `sudo apt-get install android-sdk`
- type `android`
- Ensure that you have platform and build tools installed, and ensure you have at least version 19

## Preparing Your Phone

**Make sure that you have Unknown Sources checked in your phones security menu. This ensures that you
are allowed to install apps from third-party sources.**

### Enabling USB Debugging on your Phone

#### Gingerbread (Android 2.3)

- *Settings> Applications> Development> USB Debugging*

#### Ice Cream Sandwich (Android 4.0)

- *Settings> Developer Options> USB Debugging*

#### Developer Options on Jelly Bean (Android 4.1):

- *Settings> Developer Options> USB Debugging*

#### How to Enable Developers Options on Android 4.2

If your device is using Android 4.2 Jelly Bean or higher installed, you will have to enable developer options
since they are hidden by default.

1. Open *Settings> About* **OR** *Settings> More tab> About* **OR** *Settings> General> About* depending on your device
2. Now scroll to the **build number** and tap it 7 times
3. You will see a message reading *"You are now a developer!"*. If you have a Galaxy S4 or any other Samsung 
   Galaxy device with Android 4.2, the message reads as follows- *"Developer mode has been enabled"*.


## Usage
```
$ phonegap create my-app
$ cd my-app
$ phonegap run android
```

## Useful Commands
- `create <path>`    creates a phonegap project
- `build <platform>`    build a specific platform
- `install <platform>`    install a specific platform
- `run <platform>`    build and install a specific platform
- `local [command]`    development on local system
- `remote [command]`   development in cloud with phonegap/build

## Platforms Supported
- Android
- iOS
- wp8
- Blackberry 10




