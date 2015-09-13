function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openCamera() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        image: event.media
                    });
                    var selectedImage = Alloy.createController("selectedImage").getView();
                    selectedImage.add(imageView);
                    var navGroup = Titanium.UI.iOS.createNavigationWindow({
                        window: selectedImage
                    });
                    navGroup.open();
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Please run this test on device" : "Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    function openGallery() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        image: event.media
                    });
                    var selectedImage = Alloy.createController("selectedImage").getView();
                    selectedImage.add(imageView);
                    var navGroup = Titanium.UI.iOS.createNavigationWindow({
                        window: selectedImage
                    });
                    navGroup.open();
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Please run this test on device" : "Unexpected error: " + error.code);
                a.show();
            },
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "camera";
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
    $.__views.cameraWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleAttributes: {
            color: "#C41230"
        },
        layout: "vertical",
        id: "cameraWindow",
        title: "Garden"
    });
    $.__views.cameraWindow && $.addTopLevelView($.__views.cameraWindow);
    $.__views.cameraId = Ti.UI.createImageView({
        preventDefaultImage: true,
        id: "cameraId",
        image: "/images/Camera/camera.png"
    });
    $.__views.cameraWindow.add($.__views.cameraId);
    openCamera ? $.__views.cameraId.addEventListener("click", openCamera) : __defers["$.__views.cameraId!click!openCamera"] = true;
    $.__views.gallery = Ti.UI.createImageView({
        preventDefaultImage: true,
        id: "gallery",
        image: "/images/Camera/gallery.jpg"
    });
    $.__views.cameraWindow.add($.__views.gallery);
    openGallery ? $.__views.gallery.addEventListener("click", openGallery) : __defers["$.__views.gallery!click!openGallery"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.cameraId!click!openCamera"] && $.__views.cameraId.addEventListener("click", openCamera);
    __defers["$.__views.gallery!click!openGallery"] && $.__views.gallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;