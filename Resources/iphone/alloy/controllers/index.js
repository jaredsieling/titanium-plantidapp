function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function initListView() {
        var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "userPlantData/samples.json");
        userPlants = JSON.parse(file.read().text).userPlants;
        userPlants = _.sortBy(plant, function(plant) {
            return plant.name;
        });
        if (userPlants) {
            indexes = [];
            var sections = [];
            var plantGroups = _.groupBy(userPlants, function(item) {
                return item.group;
            });
            _.each(plantGroups, function(group) {
                var dataToAdd = _.map(rawData, function(item) {
                    return {
                        template: "userPlantTemplate",
                        properties: {
                            userPlant: item
                        },
                        name: {
                            text: item.company
                        },
                        photo: {
                            image: item.photo
                        }
                    };
                });
                if (dataToAdd.length < 1) return;
                indexes.push({
                    index: indexes.length,
                    title: group[0].group
                });
                var sectionHeader = Ti.UI.createView({
                    backgroundColor: "#ececec",
                    width: Ti.UI.FILL,
                    height: 30
                });
                var sectionLabel = Ti.UI.createLabel({
                    text: group[0].lastName.charAt(0),
                    left: 20,
                    font: {
                        fontSize: 20
                    },
                    color: "#666"
                });
                sectionHeader.add(sectionLabel);
                var section = Ti.UI.createListSection({
                    headerView: sectionHeader
                });
                section.items = dataToAdd;
                sections.push(section);
            });
            $.listView.sections = sections;
            $.wrapper.addEventListener("swipe", function(e) {
                "left" === e.direction && ($.listView.sectionIndexTitles = indexes);
                "right" === e.direction && ($.listView.sectionIndexTitles = null);
            });
        }
        _args.restrictToFavorites ? true && ($.searchBar.showBookmark = false) : $.wrapper.leftNavButton = Ti.UI.createLabel({
            text: "",
            color: "#C41230",
            font: {
                fontFamily: "icomoon",
                fontSize: 36
            }
        });
    }
    function initMap() {
        $.map.addCircle(Alloy.Globals.map.createCircle({
            center: {
                longitude: -122.050215,
                latitude: 37.38951
            },
            strokeColor: Alloy.CFG.brandPrimary,
            strokeWidth: 5,
            fillColor: Alloy.CFG.brandPrimary.replace("#", "#88"),
            radius: 1e4
        }));
        $.map.addPolyline(Alloy.Globals.map.createPolyline({
            points: [ [ -122.084189, 37.422345 ], {
                longitude: -122.050215,
                latitude: 37.38951
            }, [ -122.030189, 37.331692 ] ],
            strokeColor: "#337ab7",
            strokeWidth: 5
        }));
        $.map.addPolygon(Alloy.Globals.map.createPolygon({
            points: [ [ -122.0546632, 37.4365219 ], [ -122.0107179, 37.4362493 ], [ -122.0344072, 37.4594175 ] ],
            strokeColor: "#5cb85c",
            strokeWidth: 5,
            fillColor: "#885cb85c"
        }));
    }
    function initOther() {
        Ti.App.addEventListener("uncaughtException", function(e) {
            console.info("[uncaughtException " + JSON.stringify(e, null, 2));
            $.otherWin.addEventListener("focus", function onFocus() {
                $.otherWin.removeEventListener("focus", onFocus);
                Ti.UI.createAlertDialog({
                    title: "uncaughtException worked:",
                    message: JSON.stringify(e)
                }).show();
            });
        });
    }
    function onUserPlantClick(e) {
        var item = $.listView.sections[e.sectionIndex].items[e.itemIndex];
        Alloy.Globals.Navigator.open("userPlantDetails", item);
    }
    function doUncaughtException() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: win.width,
                        height: win.height,
                        image: event.media
                    });
                    win.add(imageView);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.CFG.brandPrimary,
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        title: "Virtual Garden",
        id: "__alloyId2"
    });
    var __alloyId3 = {};
    var __alloyId5 = [];
    var __alloyId7 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId8 = [];
            var __alloyId9 = {
                type: "Ti.UI.ImageView",
                bindId: "photo",
                properties: {
                    bindId: "photo"
                }
            };
            __alloyId8.push(__alloyId9);
            var __alloyId11 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId12 = [];
                    var __alloyId13 = {
                        type: "Ti.UI.Label",
                        bindId: "name",
                        properties: {
                            width: Ti.UI.FILL,
                            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                            bindId: "name"
                        }
                    };
                    __alloyId12.push(__alloyId13);
                    return __alloyId12;
                }(),
                properties: {}
            };
            __alloyId8.push(__alloyId11);
            var __alloyId15 = {
                type: "Ti.UI.View",
                properties: {}
            };
            __alloyId8.push(__alloyId15);
            return __alloyId8;
        }(),
        properties: {}
    };
    __alloyId5.push(__alloyId7);
    var __alloyId4 = {
        properties: {
            name: "userTemplate"
        },
        childTemplates: __alloyId5
    };
    __alloyId3["userTemplate"] = __alloyId4;
    $.__views.listView = Ti.UI.createListView({
        templates: __alloyId3,
        id: "listView",
        defaultItemTemplate: "userPlantTemplate"
    });
    $.__views.__alloyId2.add($.__views.listView);
    onUserPlantClick ? $.__views.listView.addEventListener("itemclick", onUserPlantClick) : __defers["$.__views.listView!itemclick!onUserPlantClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.__alloyId2,
        title: "Garden",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.otherWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.CFG.brandPrimary,
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        id: "otherWin",
        title: "Nearby Plants"
    });
    $.__views.__alloyId17 = Ti.UI.createScrollView({
        scrollType: "vertical",
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.otherWin.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        textid: "hello_world",
        top: "20",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "uncaughtException",
        top: "20",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    doUncaughtException ? $.__views.__alloyId20.addEventListener("click", doUncaughtException) : __defers["$.__views.__alloyId20!click!doUncaughtException"] = true;
    if (true && !Alloy.Globals.production) {
        $.__views.__alloyId21 = Ti.UI.createLabel({
            width: Ti.UI.FILL,
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            color: "gray",
            text: "Because you're not in production, you will first see the red screen and then the alert opened by the listener.",
            top: "5",
            id: "__alloyId21"
        });
        $.__views.__alloyId18.add($.__views.__alloyId21);
    }
    $.__views.__alloyId16 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.otherWin,
        title: "Nearby",
        id: "__alloyId16"
    });
    __alloyId0.push($.__views.__alloyId16);
    $.__views.__alloyId23 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.CFG.brandPrimary,
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        title: "Map",
        id: "__alloyId23"
    });
    $.__views.map = (require("ti.map").createView || Ti.UI.createView)({
        mapType: Alloy.Globals.map.NORMAL_TYPE,
        region: {
            longitude: -122.050215,
            latitude: 37.38951,
            latitudeDelta: .5,
            longitudeDelta: .5
        },
        id: "map"
    });
    $.__views.__alloyId23.add($.__views.map);
    $.__views.__alloyId22 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.__alloyId23,
        title: "Map",
        id: "__alloyId22"
    });
    __alloyId0.push($.__views.__alloyId22);
    $.__views.index = Ti.UI.createTabGroup({
        tabsBackgroundColor: "white",
        tabsTintColor: Alloy.CFG.brandPrimary,
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {}, userPlants = (Alloy.Globals.App, null), indexes = [];
    var userPlants = _args.userPlants;
    initListView();
    initOther();
    initMap();
    $.index.open();
    __defers["$.__views.listView!itemclick!onUserPlantClick"] && $.__views.listView.addEventListener("itemclick", onUserPlantClick);
    __defers["$.__views.__alloyId20!click!doUncaughtException"] && $.__views.__alloyId20.addEventListener("click", doUncaughtException);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;