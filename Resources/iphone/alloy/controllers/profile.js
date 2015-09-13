function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function buyPlant() {
        Ti.Platform.openURL("http://www.amazon.com/Jmbamboo-Japanese-Juniper-Juniperus-Procumbens/dp/B001EBJSKC");
    }
    function toggleFavorite() {
        if ($FM.exists(_args.id)) {
            Ti.Analytics.featureEvent(Ti.Platform.osname + ".profile.removeFromFavorites.clicked");
            $FM.remove(_args.id);
            $.addFavoriteBtn.setTitle("+ Add To Planted");
        } else {
            Ti.Analytics.featureEvent(Ti.Platform.osname + ".profile.addToFavorites.clicked");
            $FM.add(_args.id);
            $.addFavoriteBtn.setTitle("- Remove From Planted");
        }
        Ti.App.fireEvent("refresh-data");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleAttributes: {
            color: "#fff"
        },
        barColor: "#83a614",
        layout: "vertical",
        theme: "appcelerator",
        id: "profile",
        opacity: "0.0",
        title: "Details"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.contactInfo = Ti.UI.createScrollView({
        layout: "vertical",
        top: 0,
        id: "contactInfo"
    });
    $.__views.profile.add($.__views.contactInfo);
    $.__views.pic_wrapper = Ti.UI.createView({
        layout: "vertical",
        height: 240,
        width: 375,
        top: 0,
        id: "pic_wrapper"
    });
    $.__views.contactInfo.add($.__views.pic_wrapper);
    $.__views.main_photo = Ti.UI.createImageView({
        preventDefaultImage: true,
        left: 0,
        right: 0,
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        id: "main_photo"
    });
    $.__views.pic_wrapper.add($.__views.main_photo);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 0,
        id: "__alloyId18"
    });
    $.__views.contactInfo.add($.__views.__alloyId18);
    $.__views.name = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        top: 10,
        font: {
            fontSize: 24
        },
        color: "#83a614",
        touchEnabled: false,
        text: "Plant Name",
        id: "name"
    });
    $.__views.__alloyId18.add($.__views.name);
    $.__views.sci_name = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        font: {
            fontSize: 14
        },
        color: "#666",
        touchEnabled: false,
        text: "Scientific Name",
        id: "sci_name"
    });
    $.__views.__alloyId18.add($.__views.sci_name);
    $.__views.native = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        font: {
            fontSize: 14
        },
        color: "#666",
        touchEnabled: false,
        text: "Native Lands",
        id: "native"
    });
    $.__views.__alloyId18.add($.__views.native);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.contactInfo.add($.__views.__alloyId19);
    $.__views.callBtn = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        height: 60,
        width: 60,
        color: "#83a614",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#83a614",
        backgroundColor: "#3383a614",
        textAlign: "center",
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        left: "10%",
        id: "callBtn",
        text: ""
    });
    $.__views.__alloyId19.add($.__views.callBtn);
    buyPlant ? $.__views.callBtn.addEventListener("click", buyPlant) : __defers["$.__views.callBtn!click!buyPlant"] = true;
    $.__views.emailBtn = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        height: 60,
        width: 60,
        color: "#83a614",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#83a614",
        backgroundColor: "#3383a614",
        textAlign: "center",
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        left: "10%",
        id: "emailBtn",
        text: ""
    });
    $.__views.__alloyId19.add($.__views.emailBtn);
    $.__views.msgBtn = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        height: 60,
        width: 60,
        color: "#83a614",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#83a614",
        backgroundColor: "#3383a614",
        textAlign: "center",
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        left: "10%",
        id: "msgBtn",
        text: ""
    });
    $.__views.__alloyId19.add($.__views.msgBtn);
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 0,
        id: "__alloyId20"
    });
    $.__views.contactInfo.add($.__views.__alloyId20);
    $.__views.addFavoriteBtn = Ti.UI.createButton({
        top: 10,
        width: "100%",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        title: "+ Add To Planted",
        id: "addFavoriteBtn",
        textid: "bookmarkBtn"
    });
    $.__views.__alloyId20.add($.__views.addFavoriteBtn);
    toggleFavorite ? $.__views.addFavoriteBtn.addEventListener("click", toggleFavorite) : __defers["$.__views.addFavoriteBtn!click!toggleFavorite"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        top: 25,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId21"
    });
    $.__views.contactInfo.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.contactInfo.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        top: 0,
        left: 0,
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        color: "#83a614",
        text: "",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 18
        },
        color: "#83a614",
        text: "Watering Schedule",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.__alloyId22.add($.__views.__alloyId26);
    $.__views.water = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        color: "#666",
        text: "Water this plant 2-3 quarts every 2-3 days. If you happen to forget a day, don't over water this thing, or it will get angry at you.'",
        id: "water"
    });
    $.__views.__alloyId26.add($.__views.water);
    $.__views.__alloyId27 = Ti.UI.createView({
        top: 25,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId27"
    });
    $.__views.contactInfo.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId28"
    });
    $.__views.contactInfo.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        top: 0,
        left: 0,
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        color: "#83a614",
        text: "",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 18
        },
        color: "#83a614",
        text: "Light",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId32"
    });
    $.__views.__alloyId28.add($.__views.__alloyId32);
    $.__views.light = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        color: "#666",
        text: "Water this plant 2-3 quarts every 2-3 days. If you happen to forget a day, don't over water this thing, or it will get angry at you.'",
        id: "light"
    });
    $.__views.__alloyId32.add($.__views.light);
    $.__views.__alloyId33 = Ti.UI.createView({
        top: 25,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId33"
    });
    $.__views.contactInfo.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId34"
    });
    $.__views.contactInfo.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        top: 0,
        left: 0,
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        color: "#83a614",
        text: "",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 18
        },
        color: "#83a614",
        text: "Soil Care",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId38"
    });
    $.__views.__alloyId34.add($.__views.__alloyId38);
    $.__views.soil = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        color: "#666",
        id: "soil"
    });
    $.__views.__alloyId38.add($.__views.soil);
    $.__views.__alloyId39 = Ti.UI.createView({
        top: 25,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId39"
    });
    $.__views.contactInfo.add($.__views.__alloyId39);
    var __alloyId40 = [];
    $.__views.mapview = (require("ti.map").createView || Ti.UI.createView)({
        top: 0,
        touchEnabled: false,
        enableZoomControls: false,
        compassEnabled: false,
        height: "30%",
        annotations: __alloyId40,
        id: "mapview"
    });
    $.__views.contactInfo.add($.__views.mapview);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "vertical",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId41"
    });
    $.__views.contactInfo.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        top: 0,
        left: 0,
        font: {
            fontSize: 20,
            fontFamily: "FontAwesome"
        },
        color: "#83a614",
        text: "",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 18
        },
        color: "#83a614",
        text: "What other's say...",
        id: "__alloyId44"
    });
    $.__views.__alloyId42.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId45"
    });
    $.__views.__alloyId41.add($.__views.__alloyId45);
    $.__views.social = Ti.UI.createLabel({
        autoLink: Ti.UI.AUTOLINK_ALL,
        left: 10,
        right: 10,
        font: {
            fontSize: 12
        },
        color: "#666",
        id: "social"
    });
    $.__views.__alloyId45.add($.__views.social);
    $.__views.__alloyId46 = Ti.UI.createView({
        top: 25,
        height: 1,
        width: "90%",
        backgroundColor: "#acacac",
        id: "__alloyId46"
    });
    $.__views.contactInfo.add($.__views.__alloyId46);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {}, Map = require("ti.map"), $FM = require("favoritesmgr");
    $.name.text = _args.name;
    $.sci_name.text = _args.sci_name;
    $.native.text = _args.native;
    $.water.text = _args.water;
    $.soil.text = _args.soil;
    $.light.text = _args.light;
    $.social.text = _args.social;
    $.main_photo.image = _args.photo;
    var lat = _args.latitude;
    $.mapview.setRegion({
        latitude: lat || 30.631256,
        longitude: _args.longitude || -97.675422,
        latitudeDelta: 32,
        longitudeDelta: 32,
        zoom: 6,
        tilt: 45
    });
    var mapAnnotation = Map.createAnnotation({
        latitude: _args.latitude || 30.631256,
        longitude: _args.longitude || -97.675422,
        customView: Alloy.createController("annotation", {
            image: _args.photo
        }).getView(),
        animate: true
    });
    $.mapview.addAnnotation(mapAnnotation);
    $FM.exists(_args.id) && $.addFavoriteBtn.setTitle("- Remove From Planted");
    Ti.Analytics.featureEvent(Ti.Platform.osname + ".profile.viewed");
    $.profile.addEventListener("postlayout", function() {
        $.profile.animate({
            opacity: 1,
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
    });
    __defers["$.__views.callBtn!click!buyPlant"] && $.__views.callBtn.addEventListener("click", buyPlant);
    __defers["$.__views.addFavoriteBtn!click!toggleFavorite"] && $.__views.addFavoriteBtn.addEventListener("click", toggleFavorite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;