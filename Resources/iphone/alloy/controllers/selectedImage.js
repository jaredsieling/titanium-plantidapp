function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        $.imageSpot = args.arg1;
        $.selectedImage.rightNavButton = Ti.UI.createLabel({
            text: "",
            color: "#fff",
            font: {
                fontFamily: "icomoon",
                fontSize: 36
            }
        });
        $.selectedImage.rightNavButton.addEventListener("click", function() {
            var camera = Alloy.createController("camera").getView();
            var navGroup = Titanium.UI.iOS.createNavigationWindow({
                window: camera
            });
            navGroup.open();
        });
        $.selectedImage.leftNavButton = Ti.UI.createLabel({
            text: "Virtual Garden",
            color: "#fff",
            font: {
                fontFamily: "icomoon",
                fontSize: 12
            }
        });
        $.selectedImage.leftNavButton.addEventListener("click", function() {
            var directory = Alloy.createController("directory").getView();
            var navGroup = Titanium.UI.iOS.createNavigationWindow({
                window: directory
            });
            navGroup.open();
        });
    }
    function openProfile() {
        var profile = Alloy.createController("profile").getView();
        var navGroup = Titanium.UI.iOS.createNavigationWindow({
            window: profile
        });
        navGroup.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "selectedImage";
    this.args = arguments[0] || {};
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
    $.__views.selectedImage = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleAttributes: {
            color: "#fff"
        },
        barColor: "#83a614",
        id: "selectedImage",
        title: "Selected plant"
    });
    $.__views.selectedImage && $.addTopLevelView($.__views.selectedImage);
    $.__views.imageSpot = Ti.UI.createImageView({
        preventDefaultImage: true,
        id: "imageSpot"
    });
    $.__views.selectedImage.add($.__views.imageSpot);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId47"
    });
    $.__views.selectedImage.add($.__views.__alloyId47);
    $.__views.callBtn = Ti.UI.createLabel({
        text: "Yes",
        height: 60,
        width: 60,
        color: "#C41230",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#C41230",
        backgroundColor: "#33C41230",
        textAlign: "center",
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        left: "10%",
        id: "callBtn"
    });
    $.__views.__alloyId47.add($.__views.callBtn);
    openProfile ? $.__views.callBtn.addEventListener("click", openProfile) : __defers["$.__views.callBtn!click!openProfile"] = true;
    $.__views.emailBtn = Ti.UI.createLabel({
        text: "No",
        height: 60,
        width: 60,
        color: "#C41230",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#C41230",
        backgroundColor: "#33C41230",
        textAlign: "center",
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        left: "10%",
        id: "emailBtn"
    });
    $.__views.__alloyId47.add($.__views.emailBtn);
    openProfile ? $.__views.emailBtn.addEventListener("click", openProfile) : __defers["$.__views.emailBtn!click!openProfile"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    init();
    __defers["$.__views.callBtn!click!openProfile"] && $.__views.callBtn.addEventListener("click", openProfile);
    __defers["$.__views.emailBtn!click!openProfile"] && $.__views.emailBtn.addEventListener("click", openProfile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;