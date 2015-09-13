function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.__alloyId31 = Alloy.createController("directory", {
        id: "__alloyId31"
    });
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#fff",
        window: $.__views.__alloyId31.getViewEx({
            recurse: true
        }),
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.Navigator = {
        navGroup: $.nav,
        open: function(controller, payload) {
            var win = Alloy.createController(controller, payload || {}).getView();
            $.nav.openWindow(win);
        }
    };
    $.nav.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;