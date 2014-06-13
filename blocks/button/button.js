modules.define('button', ['i-bem__dom', 'control'], function(provide, BEMDOM, control) {

    provide(BEMDOM.decl({ block: 'button', baseBlock: control }, {
        _onPress: function() {
            this.setMod('pressed');
        },

        _onUnpress: function() {
            this.setMod('pressed', '');
        }

    }, {
        live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo('pointerpress', this.prototype._onPress);
            this.liveBindTo('pointerrelease', this.prototype._onUnpress);
        }
    }));
});
