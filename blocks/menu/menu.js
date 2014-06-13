modules.define('menu', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('menu', {
        onSetMod: {
            js: {
                inited: function() {
                }
            }
        },

        _onItemClick: function(item) {
            var id = item.params.id;

            this._setChecked(id);
            this._updateChecked();
            this.emit('checked', id);
        },

        _getChecked: function() {
            return this._checkedId;
        },

        _setChecked: function(id) {
            this._checkedId = id;
        },

        _getItems: function() {
            return this._items || (this._items = this.findBlocksInside('menu-item'));
        },

        _updateChecked: function() {
            (this._getItems() || []).forEach(function(item) {
                item.setMod('checked', this._isChecked(item.params.id));
            }, this);
        },

        _isChecked: function(id) {
            return id === this._getChecked();
        }
    }, {
        live: function() {
            this.liveInitOnBlockInsideEvent('click', 'menu-item', function(e) {
                this._onItemClick(e.target);
            });
        }
    }));
});
