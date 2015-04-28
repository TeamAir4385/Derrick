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
<<<<<<< HEAD
/*
var scrollView = Titanium.UI.createView({
   width:Ti.UI.FILL,
   height:Ti.UI.SIZE,
   layout:"vertical",
   top:5,
   borderRadius:10,
   backgroundColor:"white",
   showVerticalScrollIndicator:true,
   showHorizontalScrollIndicator:false
});
win.add(scrollView);
var Pseudo=Titanium.UI.createLabel({
    color:'#000',
    left:20,
    height:Ti.UI.SIZE,
    width:Ti.UI.SIZE,
    text:'Username'
});
 
var username = Titanium.UI.createTextField({
    color:'#336699',
    right:20,
    width:250,
    height:Ti.UI.SIZE,
    hintText:'min 4 car',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    suppressReturn:false
});
 
addElement(Pseudo,username);
 
var passwordd = Titanium.UI.createLabel({
    color:'#000',
    left:20,
    height:Ti.UI.SIZE,
    width:Ti.UI.SIZE,
    text:'Password'
});
var password1 = Titanium.UI.createTextField({
    color:'#336699',
    right:20,
    width:250,
    height:Ti.UI.SIZE,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    suppressReturn:false
});
 
addElement(passwordd,password1);
 
var passworddd = Titanium.UI.createLabel({
    color:'#000',
    left:20,
    height:Ti.UI.SIZE,
    width:Ti.UI.SIZE,
    text:'Confirm Password'
 
});
var password2 = Titanium.UI.createTextField({
    color:'#336699',
    right:20,
    width:250,
    height:Ti.UI.SIZE,
    hintText:'Cofirm Password ',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    suppressReturn:false
});
 
addElement(passworddd,password2);
 
 
var emaill = Titanium.UI.createLabel({
    color:'#000',
    left:20,
    height:Ti.UI.SIZE,
    width:Ti.UI.SIZE,
    text:'email'
 
});
var email = Titanium.UI.createTextField({
    color:'#336699',
    right:20,
    width:250,
    height:Ti.UI.SIZE,
    hintText:'my@email.com',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
addElement(emaill,email);
 
var createBtn = Titanium.UI.createButton({
    title:'Create Account',
    width:150,
    height:Ti.UI.SIZE,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(createBtn);
 
function addElement(ele1,ele2)
{
    var view=Ti.UI.createView({
        width:'100%',
        height:Ti.UI.SIZE,
        top:5,
    });
    view.add(ele1);
    view.add(ele2);
    scrollView.add(view);
}
*/
/* 
https://sendgrid.com/blog/send-email-titanium-sendgrid/

var sendgrid = require('tisendgrid')('SENDGRID-USERNAME', 'SENDGRID-PASSOWORD');
var email = sendgrid.Email({
  to: 'john@email.com',
  from: 'doe@email.com',
  subject: 'Welcome!',
  text: 'This is inside of the template!'
});
 
email.addFilter('template', 'enable', 1);
email.addFilter('template', 'text/html',
'<html><body>General template stuff.<% body %></body></html>');
sendgrid.send(email, function (e) {
  if (e) {
    console.log('Oups :( : ' + e);
  }
});
*/
/*
function doClick(e) {
	var emailDialog = Titanium.UI.createEmailDialog();
	
	emailDialog.setMessageBody($.fname.value);
}
*/
=======
//this will open an email once submit is clicked 
>>>>>>> 62789ddebe100a603b8b9d9caf1927694b27a2c8
$.submit.addEventListener('click', function(e) {
	
	var emailDialog = Titanium.UI.createEmailDialog();
		emailDialog.setSubject("I'm curious about Going Green!");
		emailDialog.setToRecipients(['ralkkai1337@gmail.com']);
		emailDialog.setCcRecipients(['ralkkai1337@gmail.com']);
		emailDialog.setBccRecipients(['ralkkai1337@gmail.com']);
		
		
	if (Ti.Platform.name == 'iPhone OS') {
		emailDialog.setMessageBody("<b>I'm curious about what the College of Business has to offer!" + '\n' + '\n' +
			'First Name: ' + $.fname.value + '\n' +
			'Last Name : ' + $.lname.value + '\n' +
			'Email: ' + $.email.value + '\n' +
			'Phone number: ' + $.phone.value + "</b>å");	
	    //emailDialog.setMessageBody("<b>I'm curious about what the College of Business has to offer!</b>å");
	    emailDialog.setHtml(true);
	    emailDialog.setBarColor('#336699');
	} else {
		emailDialog.setMessageBody("I'm curious about what the College of Business has to offer!" + '\n' + '\n' +
			'First Name: ' + $.fname.value + '\n' +
			'Last Name: ' + $.lname.value + '\n' +
			'Email: ' + $.email.value + '\n' +
			'Phone number: ' + $.phone.value);
		
	    //emailDialog.setMessageBody("I'm curious about what the College of Business has to offer!");
	}
	
	emailDialog.addEventListener('complete',function(e)
	{
	    if (e.result == emailDialog.SENT)
	    {
	        if (Ti.Platform.osname != 'android') {
	            // android doesn't give us useful result codes.
	            // it anyway shows a toast.
	            alert("message was sent");
	        }
	    }
	    else
	    {
	        alert("message was not sent. result = " + e.result);
	    }
	});
	

	
	emailDialog.open();
});

<<<<<<< HEAD
/*function doClick(e) {
	alert($.fname.value);
}*/

=======
>>>>>>> 62789ddebe100a603b8b9d9caf1927694b27a2c8
$.contact.open();