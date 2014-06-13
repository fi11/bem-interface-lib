modules.define('interactive', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('interactive', {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('mouseleave', this._onMouseLeave);
                }
            },

            disabled: {
                'true': function() {
                    this.delMod('hovered');
                }
            }
        },

        _onMouseOver : function() {
            this.setMod('hovered');
        },

        _onMouseLeave : function() {
            this.setMod('hovered', '');
        },

        _onClick: function() {
            this.emit('click');
            this._focused || this.focus();
        }

    },
    {
        live: function() {
            this.liveBindTo('mouseover', this.prototype._onMouseOver);
            this.liveBindTo('pointerclick', this.prototype._onClick);
        }
    }));
});
