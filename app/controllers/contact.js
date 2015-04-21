var args = arguments[0] || {};

var win 		= Ti.UI.currentWindow;
var contactReq 	= Titanium.Network.createHTTPClient();

function doOpen(e){
	var actionBar = e.source.activity.actionBar;

	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures

	if (actionBar) {
		actionBar.displayHomeAsUp = true;
		actionBar.onHomeIconItemSelected = function() {
			e.source.close();
		};

		e.source.activity.invalidateOptionsMenu();
	}	
}

//-- First Name Text Field
var fname = Titanium.UI.createTextField({
	color:'#336699',
	top:100,
	left:10,
	width:300,
	height:40,
	hintText:'First Name',
	backgroundImage:'../images/textfield.png',
	paddingLeft:8,
	paddingRight:8,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	suppressReturn:false
});

//-- Last Name Text Field
var lname = Titanium.UI.createTextField({
	color:'#336699',
	top:100,
	left:10,
	width:300,
	height:40,
	hintText:'Last Name',
	backgroundImage:'../images/textfield.png',
	paddingLeft:8,
	paddingRight:8,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	suppressReturn:false
});

//-- Email Text Field
var email = Titanium.UI.createTextField({
	color:'#336699',
	top:140,
	left:10,
	width:300,
	height:40,
	hintText:'Email',
	backgroundImage:'../images/textfield.png',
	paddingLeft:8,
	paddingRight:8,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	suppressReturn:false
});

//-- Phone Number Field
var phone = Titanium.UI.createTextField({
	color:'#336699',
	top:180,
	left:10,
	width:300,
	height:40,
	hintText:'Phone',
	backgroundImage:'../images/textfield.png',
	paddingLeft:8,
	paddingRight:8,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
});

//-- Listen for the next click on the key board
fname.addEventListener('return',function(){lname.focus();});
lname.addEventListener('return',function(){email.focus();});
email.addEventListener('return',function(){phone.focus();});

win.add(fname);
win.add(lname);
win.add(email);
win.add(phone);

//-- Submit order. Check if the text fields are blank
$.contact.addEventListener('click',function(){
	if (fname.value == '' || lname.value == '' || email.value == '' || phone.value == '')
	{
		alert('All fields are required');
	}
	else
	{
		//-- Disable fields and buttons before making are http request
		fname.enabled 	= false;
		lname.enabled 	= false;
		email.enabled 	= false;
		phone.enabled 	= false;
		
		//-- URL to submit_order.php
		contactReq.open('POST','http://localhost/submit_order.php');
		var params = {
			fname: fname.value,
			lname: lname.value,
			email: email.value,
			phone: phone.value
		
		};
		contactReq.send(params);
	}
});


//-- onLoad method for our http request
contactReq.onload = function()
{
	var json = this.responseText;
	var response = JSON.parse(json);
	
	//-- Mail was sent
	if (response.mail == true)
	{
		var alertDialog = Titanium.UI.createAlertDialog({
			title: 'Success',
			message: 'Your order has been submitted (check the email you used in your submit_order.php file)',
			buttonNames: ['OK']
		});
		alertDialog.show();
		alertDialog.addEventListener('click',function(e)
		{
			Ti.App.fireEvent('resetApp');
		});	
	}
	else
	{
		//-- Mail failed
		alert("PHP failed to send the order to the email provided in submit_order.php. Are you sure you have a mail client on your server?");
		fname.enabled 	= false;
		lname.enabled 	= false;
		email.enabled 	= false;
		phone.enabled 	= false;	
	}
};

//-- Network error
contactReq.onerror = function(event)
{
	alert('Network error: ' + JSON.stringify(event));
	fname.enabled 	= false;
	lname.enabled 	= false;
	email.enabled 	= false;
	phone.enabled 	= false;
};

$.contact.open();

