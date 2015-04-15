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
    function clickedLogin() {
        Alloy.createController("login").getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "#fff",
        color: "#fff",
        id: "settings",
        title: "Settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    doOpen ? $.__views.settings.addEventListener("open", doOpen) : __defers["$.__views.settings!open!doOpen"] = true;
    $.__views.loginButton = Ti.UI.createButton({
        id: "loginButton",
        color: "#fff",
        title: "Login"
    });
    $.__views.settings.add($.__views.loginButton);
    clickedLogin ? $.__views.loginButton.addEventListener("click", clickedLogin) : __defers["$.__views.loginButton!click!clickedLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.settings.open();
    __defers["$.__views.settings!open!doOpen"] && $.__views.settings.addEventListener("open", doOpen);
    __defers["$.__views.loginButton!click!clickedLogin"] && $.__views.loginButton.addEventListener("click", clickedLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;