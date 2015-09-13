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
        var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "userData/data.json");
        users = JSON.parse(file.read().text).users;
        users = _.sortBy(users, function(user) {
            return user.lastName;
        });
        if (users) {
            indexes = [];
            var sections = [];
            var userGroups = _.groupBy(users, function(item) {
                return item.lastName.charAt(0);
            });
            _.each(userGroups, function(group) {
                var dataToAdd = preprocessForListView(group);
                if (dataToAdd.length < 1) return;
                indexes.push({
                    index: indexes.length,
                    title: group[0].lastName.charAt(0)
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
        _args.title && ($.wrapper.title = _args.title);
        _args.restrictToFavorites ? true && ($.searchBar.showBookmark = false) : $.wrapper.leftNavButton = Ti.UI.createLabel({
            text: "",
            color: "#C41230",
            font: {
                fontFamily: "icomoon",
                fontSize: 36
            }
        });
    }
    function onItemClick(e) {
        Ti.Analytics.featureEvent(Ti.Platform.osname + "." + title + ".contact.clicked");
        var item = $.listView.sections[e.sectionIndex].items[e.itemIndex];
        Alloy.Globals.Navigator.open("profile", item.properties.user);
    }
    function onRowAction(e) {
        var row = e.section.getItemAt(e.itemIndex);
        var id = row.properties.user.id;
        "+ Favorite" === e.action ? $FM.add(id) : $FM.remove(id);
        $.listView.editing = false;
        init();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
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
    $.__views.wrapper = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleAttributes: {
            color: "#C41230"
        },
        layout: "vertical",
        id: "wrapper",
        title: "Garden"
    });
    $.__views.wrapper && $.addTopLevelView($.__views.wrapper);
    $.__views.searchBar = Ti.UI.createSearchBar({
        backgroundColor: "#fff",
        borderWidth: 0,
        borderColor: "#fff",
        tintColor: "#C41230",
        hintText: "Search",
        barColor: "#fff",
        showBookmark: true,
        id: "searchBar"
    });
    $.__views.wrapper.add($.__views.searchBar);
    onBookmarkClick ? $.__views.searchBar.addEventListener("bookmark", onBookmarkClick) : __defers["$.__views.searchBar!bookmark!onBookmarkClick"] = true;
    onSearchFocus ? $.__views.searchBar.addEventListener("focus", onSearchFocus) : __defers["$.__views.searchBar!focus!onSearchFocus"] = true;
    onSearchCancel ? $.__views.searchBar.addEventListener("cancel", onSearchCancel) : __defers["$.__views.searchBar!cancel!onSearchCancel"] = true;
    onSearchChange ? $.__views.searchBar.addEventListener("change", onSearchChange) : __defers["$.__views.searchBar!change!onSearchChange"] = true;
    var __alloyId1 = {};
    var __alloyId3 = [];
    var __alloyId5 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId6 = [];
            var __alloyId7 = {
                type: "Ti.UI.ImageView",
                bindId: "userPhoto",
                properties: {
                    preventDefaultImage: true,
                    borderWidth: 1,
                    borderColor: "#acacac",
                    height: 75,
                    width: 75,
                    top: 12,
                    left: 0,
                    borderRadius: 35,
                    bindId: "userPhoto"
                }
            };
            __alloyId6.push(__alloyId7);
            var __alloyId9 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId10 = [];
                    var __alloyId11 = {
                        type: "Ti.UI.Label",
                        bindId: "name",
                        properties: {
                            font: {
                                fontSize: 14
                            },
                            left: 85,
                            color: "#444",
                            bindId: "name"
                        }
                    };
                    __alloyId10.push(__alloyId11);
                    var __alloyId12 = {
                        type: "Ti.UI.Label",
                        bindId: "userCompany",
                        properties: {
                            font: {
                                fontSize: 10
                            },
                            left: 85,
                            height: 20,
                            color: "#666",
                            bindId: "userCompany"
                        }
                    };
                    __alloyId10.push(__alloyId12);
                    return __alloyId10;
                }(),
                properties: {
                    layout: "vertical",
                    height: Ti.UI.SIZE,
                    width: Ti.UI.SIZE,
                    left: 0
                }
            };
            __alloyId6.push(__alloyId9);
            var __alloyId14 = {
                type: "Ti.UI.View",
                properties: {
                    bottom: 0,
                    backgroundColor: "#ececec",
                    width: Ti.UI.FILL,
                    height: 1
                }
            };
            __alloyId6.push(__alloyId14);
            return __alloyId6;
        }(),
        properties: {
            left: 10
        }
    };
    __alloyId3.push(__alloyId5);
    var __alloyId2 = {
        properties: {
            height: 100,
            width: Ti.UI.FILL,
            name: "userTemplate"
        },
        childTemplates: __alloyId3
    };
    __alloyId1["userTemplate"] = __alloyId2;
    var __alloyId16 = [];
    var __alloyId18 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId19 = [];
            var __alloyId20 = {
                type: "Ti.UI.ImageView",
                bindId: "userPhoto",
                properties: {
                    preventDefaultImage: true,
                    borderWidth: 1,
                    borderColor: "#acacac",
                    height: 75,
                    width: 75,
                    top: 12,
                    left: 0,
                    borderRadius: 35,
                    bindId: "userPhoto"
                }
            };
            __alloyId19.push(__alloyId20);
            var __alloyId22 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId23 = [];
                    var __alloyId24 = {
                        type: "Ti.UI.Label",
                        bindId: "userName",
                        properties: {
                            font: {
                                fontSize: 14
                            },
                            left: 85,
                            color: "#444",
                            bindId: "userName"
                        }
                    };
                    __alloyId23.push(__alloyId24);
                    var __alloyId25 = {
                        type: "Ti.UI.Label",
                        bindId: "userEmail",
                        properties: {
                            font: {
                                fontSize: 10
                            },
                            left: 85,
                            height: 20,
                            color: "#666",
                            bindId: "userEmail"
                        }
                    };
                    __alloyId23.push(__alloyId25);
                    var __alloyId26 = {
                        type: "Ti.UI.Label",
                        bindId: "userCompany",
                        properties: {
                            font: {
                                fontSize: 10
                            },
                            left: 85,
                            height: 20,
                            color: "#666",
                            bindId: "userCompany"
                        }
                    };
                    __alloyId23.push(__alloyId26);
                    return __alloyId23;
                }(),
                properties: {
                    layout: "vertical",
                    height: Ti.UI.SIZE,
                    width: Ti.UI.SIZE,
                    left: 0
                }
            };
            __alloyId19.push(__alloyId22);
            var __alloyId28 = {
                type: "Ti.UI.Label",
                properties: {
                    font: {
                        fontSize: 25,
                        fontFamily: "icomoon"
                    },
                    color: "#038BC8",
                    text: "",
                    right: 10
                }
            };
            __alloyId19.push(__alloyId28);
            var __alloyId30 = {
                type: "Ti.UI.View",
                properties: {
                    bottom: 0,
                    backgroundColor: "#ececec",
                    width: Ti.UI.FILL,
                    height: 1
                }
            };
            __alloyId19.push(__alloyId30);
            return __alloyId19;
        }(),
        properties: {
            left: 10
        }
    };
    __alloyId16.push(__alloyId18);
    var __alloyId15 = {
        properties: {
            height: 100,
            width: Ti.UI.FILL,
            name: "favoriteTemplate"
        },
        childTemplates: __alloyId16
    };
    __alloyId1["favoriteTemplate"] = __alloyId15;
    $.__views.listView = Ti.UI.createListView({
        tintColor: "#666",
        templates: __alloyId1,
        id: "listView",
        defaultItemTemplate: "userTemplate"
    });
    $.__views.wrapper.add($.__views.listView);
    onItemClick ? $.__views.listView.addEventListener("itemclick", onItemClick) : __defers["$.__views.listView!itemclick!onItemClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {}, $FM = (Alloy.Globals.App, require("favoritesmgr")), users = null, indexes = [];
    var title = _args.title ? _args.title.toLowerCase() : "directory";
    Ti.Analytics.featureEvent(Ti.Platform.osname + "." + title + ".viewed");
    var preprocessForListView = function(rawData) {
        _args.restrictToFavorites && (rawData = _.filter(rawData, function(item) {
            return $FM.exists(item.id);
        }));
        return _.map(rawData, function(item) {
            var isFavorite = $FM.exists(item.id);
            return {
                template: isFavorite ? "favoriteTemplate" : "userTemplate",
                properties: {
                    searchableText: item.firstName + " " + item.lastName + " " + item.company + " " + item.email,
                    user: item,
                    editActions: [ {
                        title: isFavorite ? "- Favorite" : "+ Favorite",
                        color: isFavorite ? "#C41230" : "#038BC8"
                    } ],
                    canEdit: true
                },
                userName: {
                    text: item.firstName + " " + item.lastName
                },
                userCompany: {
                    text: item.company
                },
                userPhoto: {
                    image: item.photo
                },
                name: {
                    text: item.name
                }
            };
        });
    };
    var onSearchChange, onSearchFocus, onSearchCancel;
    var onBookmarkClick = function() {
        Ti.Analytics.featureEvent(Ti.Platform.osname + "." + title + ".favorites.clicked");
        Alloy.Globals.Navigator.open("directory", {
            restrictToFavorites: true,
            title: "Favorites",
            displayHomeAsUp: true
        });
    };
    onSearchChange = function(e) {
        $.listView.searchText = e.source.value;
    };
    onSearchFocus = function() {
        $.searchBar.showBookmark = false;
        $.searchBar.showCancel = true;
    };
    onSearchCancel = function() {
        if (!_args.restrictToFavorites) {
            $.searchBar.showBookmark = true;
            $.searchBar.showCancel = false;
        }
        $.searchBar.blur();
    };
    $.listView.addEventListener("rowAction", onRowAction);
    $.wrapper.addEventListener("open", function() {
    });
    Ti.App.addEventListener("refresh-data", function() {
        init();
    });
    init();
    __defers["$.__views.searchBar!bookmark!onBookmarkClick"] && $.__views.searchBar.addEventListener("bookmark", onBookmarkClick);
    __defers["$.__views.searchBar!focus!onSearchFocus"] && $.__views.searchBar.addEventListener("focus", onSearchFocus);
    __defers["$.__views.searchBar!cancel!onSearchCancel"] && $.__views.searchBar.addEventListener("cancel", onSearchCancel);
    __defers["$.__views.searchBar!change!onSearchChange"] && $.__views.searchBar.addEventListener("change", onSearchChange);
    __defers["$.__views.listView!itemclick!onItemClick"] && $.__views.listView.addEventListener("itemclick", onItemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;