var args = arguments[0] || {}; //loads whatever from index.js. We technically don't need this here.'

/* This might need some work. The goal is to tell index to load the actionbar 
 * for Android and load the normal stuff for iOS if that is the platform.
 * Help here would be appreciated. I think this is where it is having an 
 * issue loading for iOS.
 */
/*
if (OS_IOS) {
	Alloy.Globals.navgroup = $.index;
}
if (OS_ANDROID) {
	$.index.getView().open();
} else {
	$.index.open();
}*/

/* Adds the options wrench in Android and is supposed to add options menu for iOS
 * Works for Android but haven't tested on iOS
 */
function clickedSettings(e) {
	var settingsController = Alloy.createController('settings');
	var win = settingsController.getView();

	if (Alloy.Globals.navgroup) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

//Main page buttons, likened to the WT app

// cob button
//opens the WT CoB page. Correct me if this is the wrong site.
$.cobButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx");
}); 

// calendar button
//not functional yet
$.calendarButton.addEventListener('click', function(e)
{
	if(OS_IOS){
		Titanium.Platform.openURL('CALSHOW://');//show calendar
	} else {
		    if (Titanium.Platform.osname=="android"){

	        //Params needed to create the android intent.
	        var packageStr = "com.google.android.calendar";
	        var classStr = "com.android.calendar.LaunchActivity";
	        var actionStr = Ti.Android.ACTION_VIEW;
	
	        var model = Ti.Platform.model;
	
	
	        if ((model.indexOf("HTC") != -1) || (model.indexOf("htc") != -1)){
	            //If it's a HTC device
	            packageStr = "com.htc.calendar";
	            classStr = "com.htc.calendar.MonthActivity";
	            actionStr = Ti.Android.ACTION_MAIN;
	        }
	        else {
	            //For android versions before Gingerbread (2.3)
	            var version = parseFloat(Ti.Platform.version);
	            if (version < 2.4) packageStr = "com.android.calendar";
	        }
	
	        //Launch native calendar
	        var intent = Ti.Android.createIntent({
	            action: actionStr,
	            packageName: packageStr,
	            className: classStr
	        });
	        Ti.Android.currentActivity.startActivity(intent);
	    }
	}
});

// contact us button
function contactUs(e) {
	Alloy.createController('contact').getView();
}
 //---------------------------------------------------
 
 // facebook button
$.facebookButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB");
	
	/*var strUrl = "http://www.facebook.com/WTAMUCOB";
	if (OS_IOS) {
	    strUrl = "http://www.facebook.com/WTAMUCOB";
	    if (Titanium.Platform.canOpenURL(strUrl)) {
	        Ti.Platform.openURL(strUrl);
	    } else {
	        strUrl = "http://www.facebook.com/WTAMUCOB";
	        Ti.Platform.openURL(strUrl);
	    }
	} else {
	
	    var result = Ti.Platform.openURL(strUrl);
	    Ti.API.info('RESULT = ' + result);
	}  */
});

// youtube button
$.youtubeButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ");
});

//---------------------------------------------------
//This is what the documentation says to do in regards to setting up Cloudpush modules retrievedDeviceToken(). --Lauren
// Require the module

var CloudPush = require('ti.cloudpush');
var Cloud = require("ti.cloud");
var deviceToken = null;
 
// Initialize the module
CloudPush.retrieveDeviceToken({
    success: deviceTokenSuccess,
    error: deviceTokenError
});
// Enable push notifications for this device
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
	alert('please work' + e.deviceToken);
    deviceToken = e.deviceToken;
    subscribeToChannel(deviceToken);
}
function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}
 
// Process incoming push notifications
CloudPush.addEventListener('callback', function (evt) {
    alert("Notification received: " + evt.payload);
});


function subscribeToChannel (deviceToken) {
 // Subscribes the device to the 'news_alerts' channel
 // Specify the push type as either 'android' for Android or 'ios' for iOS
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'news_alerts',
        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
    }, function (e) {
 if (e.success) {
            alert('Subscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

// open window
$.index.open(); 