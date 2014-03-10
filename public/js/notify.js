var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyDK3UcLavxEpKX8QPtuKh3nZf1bZYDuof8');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"this is a test message");
message.addData('title','Jordans Test Notification' );
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bEtvL1WqCKAGe1CBpBjn2rFuxmxBd2f6hRXoPrBRiwontKTgZeNdK2vjZaGBfGR5ExY49oJxaUh6kDEfERNLk051-7ERQTfBFko6gZbnEPbDbXs99yJf-5n8QMoKdmlL3_5yDDRfsooWjbLpZqkjjlN38GofAEFesp7oUiTeEdwZ_0wG7U');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
