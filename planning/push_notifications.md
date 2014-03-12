Push Notifications
========================

Sending Push Notificaions for the Android and iOS environments

### Introduction
In practice MOM will need to be able to be able to check in with people even 
when they are not paying attention. Push notifications will act as the best method 
to engage a smartphone user who may be preoccupied with something else. MOM will be a constant
reminder to the user by checking up on him/her.




### iOS vs Android

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

3. Build the application for Android
   `$ phonegap local build android`

4. Install the PushPlugin from its github location:
   `$ phonegap local plugin add https://github.com/phonegap-build/PushPlugin`

5. Add the PushNotification.js file referenced 
[here](https://github.com/freesurface/mom/blob/master/planning/js/PushNotification.js) to your `PushNotificationSample/www` folder

6. Add the following script line to your index.html to reference the PushNotification.js.
   `<script type="text/javascript" src="PushNotification.js"></script>`

## Registering the GCM service with our app
### To enable the GCM service
Under your google developer console project:

1. In the sidebar on the left, select **APIs & auth**.

2. In the displayed list of APIs, turn the **Google Cloud Messaging for Android** toggle to ON.

We need to make some changes to our `www/js/index.js` file, in order to register our app.
The final index.js file should look like [this](https://github.com/freesurface/mom/blob/master/planning/js/index.js)
but with your *projectID* where it says *senderID* as referenced below.

What we added:

- In the *receivedEvent* function, we added the following code to get a reference to
the push notification plugin object and call the register function. You will
need to pass in a success and error callback function and then a couple of parameters 
**including the project id you were assigned when you set up your project with Google Cloud Messaging 
as the senderID** and a callback function for any messages received from GCM as the ecb parameter:

```javascript
var pushNotification = window.plugins.pushNotification;
pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"824841663931","ecb":"app.onNotificationGCM"});
```

**Note: Instead of 82484166391 put your projectID seen on your project homepage**

- We then added a *successHandler* and *errorHandler* which will be called whether the registration is successful or not.
The result if successful will contain the registration token shown from the *onNotificationGCM* function. 

##Running the Application
We now want to run the application to get the **registrationID**
You can run the application on your phone through USB if you have USB Debugging Enabled with:

   `$ phonegap local run android`

When you run the application you should see a call made to register your 
android device and a token received in an alert such as shown below:

![](https://github.com/freesurface/mom/blob/master/planning/img/android-notify-reg.png?raw=true)

The registration ID is essentially the ID of the phone that you want to send notifications
to. Since we will need this ID for our app, the best way to get it is by using the Android adb tool to
monitor the device log. Assuming you have the android-sdk tools and platform-tools set on your 
environment path you can simply run `adb logcat` from the command line to show your device log.

##Sending our Push Notification

To send our Notification we will need 2 things:

1. The API Key of the source for the message
2. The registrationID(s) of the device(s) we want to send to

To obtain an API key, return to our google project and do the following:

1. In the sidebar on the left, select **APIs & auth > Credentials**.
2. Under **Public API access**, click **Create new key**.
3. In the **Create a new key** dialog, click **Server key**.
4. Click Create.


Open an editor and create a file called notify.js and paste in the following, replacing the Sender key(API KEY)
and device registration id(s) with yours.

node-gcm is required : `npm install node-gcm`

```javascript
var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCDx8v9R0fMsAsjoAffF-P3FCFWXlvwLhg');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"this is the test message");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bwu-47V0L7xB55zoVd47zOJahUgBFFuxDiUBjLAUdpuWwEcLd3FvbcNTPKTSnDZwjN384qTyfWW2KAJJW7ArZ-QVPExnxWK91Pc-uTzFdFaJ3URK470WmTl5R1zL0Vloru1B-AfHO6QFFg47O4Cnv6yBOWEFcvZlHDBY8YaDc4UeKUe7ao');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
```

**Note: Replace the Sender key with your API_KEY and registrationID with your ID**
