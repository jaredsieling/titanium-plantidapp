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
        $.listView.addMarker({
            sectionIndex: 0,
            itemIndex: 15
        });
        $.listView.addMarker({
            sectionIndex: 1,
            itemIndex: 15
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
    function onRowAction(e) {
        console.info("[rowAction] " + JSON.stringify(e, null, 2));
        $.toast.text = "[marker]\n" + e.action;
    }
    function onScrollstart(e) {
        console.info("[scrollstart] " + JSON.stringify(e, null, 2));
        $.toast.text = "[scrollstart]\nfirstVisibleSectionIndex: " + e.firstVisibleSectionIndex + "\nfirstVisibleItemIndex: " + e.firstVisibleItemIndex + "\nvisibleItemCount: " + e.visibleItemCount;
    }
    function onScrollend(e) {
        console.info("[scrollend] " + JSON.stringify(e, null, 2));
        $.toast.text = "[scrollend]\nfirstVisibleSectionIndex: " + e.firstVisibleSectionIndex + "\nfirstVisibleItemIndex: " + e.firstVisibleItemIndex + "\nvisibleItemCount: " + e.visibleItemCount;
    }
    function onMarker(e) {
        console.info("[marker] " + JSON.stringify(e, null, 2));
        $.toast.text = "[marker]\nsectionIndex: " + e.sectionIndex + "\nitemIndex: " + e.itemIndex;
    }
    function doUncaughtException(e) {
        e.doesNotExist();
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
        title: "Map Vector Overlays",
        id: "__alloyId2"
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
    $.__views.__alloyId2.add($.__views.map);
    $.__views.__alloyId1 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.__alloyId2,
        title: "Map",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.CFG.brandPrimary,
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        title: "ListView events",
        id: "__alloyId4"
    });
    var __alloyId7 = [];
    $.__views.__alloyId8 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.0",
            id: "__alloyId8"
        }
    };
    __alloyId7.push($.__views.__alloyId8);
    $.__views.__alloyId9 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.1",
            id: "__alloyId9"
        }
    };
    __alloyId7.push($.__views.__alloyId9);
    $.__views.__alloyId10 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.2",
            id: "__alloyId10"
        }
    };
    __alloyId7.push($.__views.__alloyId10);
    $.__views.__alloyId11 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.3",
            id: "__alloyId11"
        }
    };
    __alloyId7.push($.__views.__alloyId11);
    $.__views.__alloyId12 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.4",
            id: "__alloyId12"
        }
    };
    __alloyId7.push($.__views.__alloyId12);
    $.__views.__alloyId13 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.5",
            id: "__alloyId13"
        }
    };
    __alloyId7.push($.__views.__alloyId13);
    $.__views.__alloyId14 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.6",
            id: "__alloyId14"
        }
    };
    __alloyId7.push($.__views.__alloyId14);
    $.__views.__alloyId15 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.7",
            id: "__alloyId15"
        }
    };
    __alloyId7.push($.__views.__alloyId15);
    $.__views.__alloyId16 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.8",
            id: "__alloyId16"
        }
    };
    __alloyId7.push($.__views.__alloyId16);
    $.__views.__alloyId17 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.9",
            id: "__alloyId17"
        }
    };
    __alloyId7.push($.__views.__alloyId17);
    $.__views.__alloyId18 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.10",
            id: "__alloyId18"
        }
    };
    __alloyId7.push($.__views.__alloyId18);
    $.__views.__alloyId19 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.11",
            id: "__alloyId19"
        }
    };
    __alloyId7.push($.__views.__alloyId19);
    $.__views.__alloyId20 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.12",
            id: "__alloyId20"
        }
    };
    __alloyId7.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.13",
            id: "__alloyId21"
        }
    };
    __alloyId7.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.14",
            id: "__alloyId22"
        }
    };
    __alloyId7.push($.__views.__alloyId22);
    $.__views.__alloyId23 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 0.15",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK,
            id: "__alloyId23"
        }
    };
    __alloyId7.push($.__views.__alloyId23);
    $.__views.__alloyId5 = Ti.UI.createListSection({
        headerTitle: "Section 0",
        id: "__alloyId5"
    });
    $.__views.__alloyId5.items = __alloyId7;
    var __alloyId24 = [];
    __alloyId24.push($.__views.__alloyId5);
    var __alloyId27 = [];
    $.__views.__alloyId28 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.0",
            id: "__alloyId28"
        }
    };
    __alloyId27.push($.__views.__alloyId28);
    $.__views.__alloyId29 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.1",
            id: "__alloyId29"
        }
    };
    __alloyId27.push($.__views.__alloyId29);
    $.__views.__alloyId30 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.2",
            id: "__alloyId30"
        }
    };
    __alloyId27.push($.__views.__alloyId30);
    $.__views.__alloyId31 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.3",
            id: "__alloyId31"
        }
    };
    __alloyId27.push($.__views.__alloyId31);
    $.__views.__alloyId32 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.4",
            id: "__alloyId32"
        }
    };
    __alloyId27.push($.__views.__alloyId32);
    $.__views.__alloyId33 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.5",
            id: "__alloyId33"
        }
    };
    __alloyId27.push($.__views.__alloyId33);
    $.__views.__alloyId34 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.6",
            id: "__alloyId34"
        }
    };
    __alloyId27.push($.__views.__alloyId34);
    $.__views.__alloyId35 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.7",
            id: "__alloyId35"
        }
    };
    __alloyId27.push($.__views.__alloyId35);
    $.__views.__alloyId36 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.8",
            id: "__alloyId36"
        }
    };
    __alloyId27.push($.__views.__alloyId36);
    $.__views.__alloyId37 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.9",
            id: "__alloyId37"
        }
    };
    __alloyId27.push($.__views.__alloyId37);
    $.__views.__alloyId38 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.10",
            id: "__alloyId38"
        }
    };
    __alloyId27.push($.__views.__alloyId38);
    $.__views.__alloyId39 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.11",
            id: "__alloyId39"
        }
    };
    __alloyId27.push($.__views.__alloyId39);
    $.__views.__alloyId40 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.12",
            id: "__alloyId40"
        }
    };
    __alloyId27.push($.__views.__alloyId40);
    $.__views.__alloyId41 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.13",
            id: "__alloyId41"
        }
    };
    __alloyId27.push($.__views.__alloyId41);
    $.__views.__alloyId42 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.14",
            id: "__alloyId42"
        }
    };
    __alloyId27.push($.__views.__alloyId42);
    $.__views.__alloyId43 = {
        properties: {
            canEdit: true,
            editActions: [ {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE,
                title: "Destr."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL,
                title: "Norm."
            }, {
                style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT,
                title: "Def."
            }, {
                color: "#337ab7",
                title: "Color"
            } ],
            title: "Item 1.15",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK,
            id: "__alloyId43"
        }
    };
    __alloyId27.push($.__views.__alloyId43);
    $.__views.__alloyId25 = Ti.UI.createListSection({
        headerTitle: "Section 1",
        id: "__alloyId25"
    });
    $.__views.__alloyId25.items = __alloyId27;
    __alloyId24.push($.__views.__alloyId25);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId24,
        id: "listView"
    });
    $.__views.__alloyId4.add($.__views.listView);
    onMarker ? $.__views.listView.addEventListener("marker", onMarker) : __defers["$.__views.listView!marker!onMarker"] = true;
    onScrollstart ? $.__views.listView.addEventListener("scrollstart", onScrollstart) : __defers["$.__views.listView!scrollstart!onScrollstart"] = true;
    onScrollend ? $.__views.listView.addEventListener("scrollend", onScrollend) : __defers["$.__views.listView!scrollend!onScrollend"] = true;
    onRowAction ? $.__views.listView.addEventListener("rowAction", onRowAction) : __defers["$.__views.listView!rowAction!onRowAction"] = true;
    $.__views.toast = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: "#8000",
        borderRadius: 5,
        color: "white",
        text: "scroll to see events\nmarker at 0.15 and 1.15",
        id: "toast"
    });
    $.__views.__alloyId4.add($.__views.toast);
    $.__views.__alloyId3 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.__alloyId4,
        title: "ListView",
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.otherWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.CFG.brandPrimary,
        navTintColor: "#FFF",
        translucent: false,
        titleAttributes: {
            color: "#FFF"
        },
        id: "otherWin",
        title: "Other"
    });
    $.__views.__alloyId45 = Ti.UI.createScrollView({
        scrollType: "vertical",
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        id: "__alloyId45"
    });
    $.__views.otherWin.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        textid: "hello_world",
        top: "20",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createButton({
        title: "uncaughtException",
        top: "20",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    doUncaughtException ? $.__views.__alloyId48.addEventListener("click", doUncaughtException) : __defers["$.__views.__alloyId48!click!doUncaughtException"] = true;
    if (true && !Alloy.Globals.production) {
        $.__views.__alloyId49 = Ti.UI.createLabel({
            width: Ti.UI.FILL,
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            color: "gray",
            text: "Because you're not in production, you will first see the red screen and then the alert opened by the listener.",
            top: "5",
            id: "__alloyId49"
        });
        $.__views.__alloyId46.add($.__views.__alloyId49);
    }
    $.__views.__alloyId44 = Ti.UI.createTab({
        icon: "/images/tabIcon.png",
        activeTitleColor: "#929292",
        titleColor: Alloy.CFG.brandPrimary,
        window: $.__views.otherWin,
        title: "Other",
        id: "__alloyId44"
    });
    __alloyId0.push($.__views.__alloyId44);
    $.__views.index = Ti.UI.createTabGroup({
        tabsBackgroundColor: "white",
        tabsTintColor: Alloy.CFG.brandPrimary,
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    !function() {
        initMap();
        initListView();
        initOther();
        $.index.open();
    }(arguments[0] || {});
    __defers["$.__views.listView!marker!onMarker"] && $.__views.listView.addEventListener("marker", onMarker);
    __defers["$.__views.listView!scrollstart!onScrollstart"] && $.__views.listView.addEventListener("scrollstart", onScrollstart);
    __defers["$.__views.listView!scrollend!onScrollend"] && $.__views.listView.addEventListener("scrollend", onScrollend);
    __defers["$.__views.listView!rowAction!onRowAction"] && $.__views.listView.addEventListener("rowAction", onRowAction);
    __defers["$.__views.__alloyId48!click!doUncaughtException"] && $.__views.__alloyId48.addEventListener("click", doUncaughtException);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;