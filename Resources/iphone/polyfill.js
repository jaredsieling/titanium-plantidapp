exports.createCommandBar = function(params) {
    var commandBar = Ti.UI.Windows.createCommandBar(params);
    commandBar.add = function(item) {
        var items = this.items;
        this.items.push(item);
        this.items = items;
    };
    return commandBar;
};

exports.createAppBarButton = function(params) {
    return Ti.UI.Windows.createAppBarButton(params);
};

exports.createAppBarToggleButton = function(params) {
    return Ti.UI.Windows.createAppBarToggleButton(params);
};

exports.createAppBarSeparator = function() {
    return Ti.UI.Windows.createAppBarSeparator();
};