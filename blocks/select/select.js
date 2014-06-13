modules.define('select',
    ['i-bem__dom', 'bh', 'jquery', 'keyboard'],
    function(provide, BEMDOM, bh, $, keyboard) {

    provide(BEMDOM.decl('select', {
        onSetMod: {
            js: {
                inited: function() {
                    var control = this._getControl();
                    var value = this.params.value;

                    if (value) this._setChecked(value);

                    control.on('click', function() {
                        this._opened ? this.close() : this.open();
                    }, this);
                }
            }
        },

        open: function() {
            this._opened = true;

            var popup = this._getPopup()
                .setContent(this._getMenu())
                .show(this, true, 'bottom')
                .once('hide', this._onClose.bind(this));

            var menu = this._getMenuBlock();

            menu && menu.on('checked', this._onMenuChecked, this);
            this.bindToDoc(keyboard.event, this._onKeyDown, this);
        },

        close: function() {
            this._onClose();
            this._getPopup().hide();
        },

        setValue: function(index) {
            var value = this._value = this._getItems()[index].value;

            this._checkedIndex = index;
            this.emit('change', value);
        },

        getValue: function() {
            return this._value;
        },

        setText: function(index) {
            var control = this._getControl();

            control.setValue(this._getItems()[index].text);
            control.focus();
        },

        getText: function() {
            return this._getControl().getValue();
        },

        _getChecked: function() {
            return this._checkedIndex;
        },

        _setChecked: function(value) {
            (this._getItems() || []).some(function(item, index) {
                var isEqual = item.value == value;
                if (isEqual) this._checkedIndex = index;

                return isEqual;
            }, this);
        },

        _onClose: function() {
            this._opened = false;
            this._getMenuBlock().un('checked', this._onMenuChecked, this);

            this._menu = null;
            this.unbindFromDoc(keyboard.event, this._onKeyDown, this);
        },

        _getPopup: function() {
            if (this._popup) return this._popup;

            var popup = this._popup = this.findBlockOn($(bh.apply({
                block: 'popup',
                mix: { block: 'select', elem: 'popup' }
            })), 'popup');

            return popup;
        },

        _getMenu: function() {
            return bh.apply({ block: 'menu', items: this._getItems(), checked: this._getChecked() });
        },

        _getMenuBlock: function() {
            return this._menu || (this._menu = this._getPopup().findBlockInside('menu'));
        },

        _getItems: function() {
            return this._items || this.params.items;
        },

        _getControl: function() {
            return this._control || (this._control = this.findBlockOn('input'));
        },

        _onMenuChecked: function(e, value) {
            this.setText(value);
            this.setValue(value);
        },

        _onKeyDown: function(e) {
            if (e.keyCode === keyboard.codes.TAB) this.close();
        }

    }, {
        live: function() {
            this.liveInitOnBlockEvent('click focus', 'input');
        }
    }));
});
