modules.define('control', ['i-bem__dom', 'interactive'], function(provide, BEMDOM, interactive) {

    provide(BEMDOM.decl({ block: 'control', baseBlock: interactive }, {
        onSetMod: {
            js: {
                inited: function() {
                    this.__base.apply(this, arguments);
                }
            },

            focused: {
                'true': function() {
                    this._focused || this.focus();
                },
                '': function() {
                    this._focused && this.blur();
                }
            }
        },

        focus: function() {
            this.elem('control').focus();
        },

        blur: function() {
            this.elem('control').blur();
        },

        _onFocus : function() {
            this._focused = true;
            this.setMod('focused');
            this.emit('focus');
        },

        _onBlur : function() {
            this._focused = false;
            this.delMod('focused');

            this.emit('blur');
        }
    }, {
        live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo('control', 'focusin', this.prototype._onFocus);
            this.liveBindTo('control', 'focusout', this.prototype._onBlur);
        }
    }));
});
