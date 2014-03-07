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

### Preparing your Google Project

