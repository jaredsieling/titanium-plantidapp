var FavoritesManager = {
    favorites: Ti.App.Properties.getList("favorites", []),
    exists: function(id) {
        return _.find(this.favorites, function(item) {
            return id === item;
        });
    },
    add: function(id) {
        this.exists(id) || this.favorites.push(id);
        Ti.App.Properties.setList("favorites", this.favorites);
    },
    remove: function(id) {
        this.favorites = _.difference(this.favorites, [ id ]);
        Ti.App.Properties.setList("favorites", this.favorites);
    }
};

module.exports = FavoritesManager;