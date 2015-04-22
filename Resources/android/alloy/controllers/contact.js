function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen(e) {
        var actionBar = e.source.activity.actionBar;
        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            e.source.activity.invalidateOptionsMenu();
        }
    }
    function addElement(ele1, ele2) {
        var view = Ti.UI.createView({
            width: "100%",
            height: Ti.UI.SIZE,
            top: 5
        });
        view.add(ele1);
        view.add(ele2);
        scrollView.add(view);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contact = Ti.UI.createWindow({
        backgroundColor: "#222",
        id: "contact",
        title: "Contact Us"
    });
    $.__views.contact && $.addTopLevelView($.__views.contact);
    doOpen ? $.__views.contact.addEventListener("open", doOpen) : __defers["$.__views.contact!open!doOpen"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#fff",
        text: "Please feel free to contact us if you are interested or have any questions!",
        top: "15",
        left: "10",
        right: "10",
        id: "__alloyId1"
    });
    $.__views.contact.add($.__views.__alloyId1);
    $.__views.lvContainer = Ti.UI.createView({
        top: "65",
        width: "280dp",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "orange",
        borderWidth: 0,
        id: "lvContainer"
    });
    $.__views.contact.add($.__views.lvContainer);
    $.__views.fname = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: false,
        top: "6dp",
        left: "4dp",
        bottom: "2dp",
        right: "4dp",
        paddingLeft: "4dp",
        backgroundColor: "#fff",
        color: "#000",
        width: "260dp",
        height: "40dp",
        border: 1,
        borderColor: "#000",
        id: "fname",
        hintText: "First Name"
    });
    $.__views.lvContainer.add($.__views.fname);
    $.__views.lname = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: false,
        top: "6dp",
        left: "4dp",
        bottom: "2dp",
        right: "4dp",
        paddingLeft: "4dp",
        backgroundColor: "#fff",
        color: "#000",
        width: "260dp",
        height: "40dp",
        border: 1,
        borderColor: "#000",
        id: "lname",
        hintText: "Last Name"
    });
    $.__views.lvContainer.add($.__views.lname);
    $.__views.email = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: false,
        top: "6dp",
        left: "4dp",
        bottom: "2dp",
        right: "4dp",
        paddingLeft: "4dp",
        backgroundColor: "#fff",
        color: "#000",
        width: "260dp",
        height: "40dp",
        border: 1,
        borderColor: "#000",
        id: "email",
        hintText: "Email Address"
    });
    $.__views.lvContainer.add($.__views.email);
    $.__views.phone = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: false,
        top: "6dp",
        left: "4dp",
        bottom: "2dp",
        right: "4dp",
        paddingLeft: "4dp",
        backgroundColor: "#fff",
        color: "#000",
        width: "260dp",
        height: "40dp",
        border: 1,
        borderColor: "#000",
        id: "phone",
        hintText: "Phone Number"
    });
    $.__views.lvContainer.add($.__views.phone);
    $.__views.submit = Ti.UI.createButton({
        id: "submit",
        title: "Submit",
        color: "#fff",
        bottom: "150"
    });
    $.__views.contact.add($.__views.submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = Ti.UI.currentWindow;
    Titanium.Network.createHTTPClient();
    var scrollView = Titanium.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 5,
        borderRadius: 10,
        backgroundColor: "white",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: false
    });
    win.add(scrollView);
    var Pseudo = Titanium.UI.createLabel({
        color: "#000",
        left: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Username"
    });
    var username = Titanium.UI.createTextField({
        color: "#336699",
        right: 20,
        width: 250,
        height: Ti.UI.SIZE,
        hintText: "min 4 car",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        suppressReturn: false
    });
    addElement(Pseudo, username);
    var passwordd = Titanium.UI.createLabel({
        color: "#000",
        left: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Password"
    });
    var password1 = Titanium.UI.createTextField({
        color: "#336699",
        right: 20,
        width: 250,
        height: Ti.UI.SIZE,
        hintText: "Password",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        suppressReturn: false
    });
    addElement(passwordd, password1);
    var passworddd = Titanium.UI.createLabel({
        color: "#000",
        left: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Confirm Password"
    });
    var password2 = Titanium.UI.createTextField({
        color: "#336699",
        right: 20,
        width: 250,
        height: Ti.UI.SIZE,
        hintText: "Cofirm Password ",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        suppressReturn: false
    });
    addElement(passworddd, password2);
    var emaill = Titanium.UI.createLabel({
        color: "#000",
        left: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "email"
    });
    var email = Titanium.UI.createTextField({
        color: "#336699",
        right: 20,
        width: 250,
        height: Ti.UI.SIZE,
        hintText: "my@email.com",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    addElement(emaill, email);
    var createBtn = Titanium.UI.createButton({
        title: "Create Account",
        width: 150,
        height: Ti.UI.SIZE,
        borderRadius: 1,
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        }
    });
    win.add(createBtn);
    __defers["$.__views.contact!open!doOpen"] && $.__views.contact.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;