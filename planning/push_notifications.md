Push Notifications
========================

Sending Push Notificaions for the Android and iOS environments

### Overview

iOS devices recieve push notifications from Apple Push Notifications (APN) 
Service, where Android devices recieve them from Google Cloud Messaging (GCM). 
There are differences in the two services in terms of the size, certificates 
required, etc. Although both act as a store and forward type of service where they 
recieve a message from a 3rd party, identify the recipient and pass the message 
along. When recieving the message, your application that has been registered 
can examine the contents and act accordingly. The way the notifications are received 
is a combination of the settings in the application code as well as the user’s 
device settings for notifications.

### Pre-requisites for Android
- Phonegap version 3.0.0 or later `phonegap --version`
- A Project on [Google Developer Console](https://console.developers.google.com/)

### Configure your app for PushPlugin 
1. Create a basic PhoneGap project, which we will use as our example app
   `$ phonegap create PushNotificationSample --id "com.pushapp" --name "PushNotificationApp"`

2. cd into the newly created project folder
   `$ cd PushNotificationSample`

3. Build the application for Android (also adds it as a platform under the /platforms folder)
   `$ phonegap local build android`

4. Install the PushPlugin from its github location via the PhoneGap CLI:
   `$ phonegap local plugin add https://github.com/phonegap-build/PushPlugin`

5. Add the PushNotification.js file referenced [here](https://github.com/freesurface/mom/blob/master/planning/js/PushNotification.js) to your `/PushNotificationSample/www` folder

6. Add the following script line to your index.html to reference the PushNotification.js.
   `<script type="text/javascript" src="PushNotification.js"></script>`
