modules.define('checkbox', ['i-bem__dom', 'control'], function(provide, BEMDOM, control) {

    provide(BEMDOM.decl({ block: 'checkbox', baseBlock: control }, {
        onSetMod: {
            js: {
                inited: function() {
                    this.__base.apply(this, arguments);
                }
            }
        },

        setValue: function(value) {
            this.elem('control').prop('checked', value);
            this.setMod('checked', !!value);
            this.emit('change', value);
        },

        getValue: function() {
            return this.elem('control').prop('checked');
        },

        _onClick: function() {
            this.__base.apply(this, arguments);
            this.setValue(!this.getValue());
        }
    }));
});
