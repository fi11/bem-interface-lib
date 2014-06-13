modules.define('file', ['i-bem__dom', 'bh', 'jquery'], function(provide, BEMDOM, bh, $) {

    provide(BEMDOM.decl('file', {
        onSetMod: {
            js: {
                inited: function() {
                    var control = this._getControl();
                    this.domElem.append(control);
                }
            }
        },
        
        _onFileChange: function() {
            var control = this._getControl();
            this.unbindFrom(control, 'change');
            console.log(control);
            this._reloadControl();
            this.emit('file', control);
        },

        _getControl: function() {
            if (this._control) return this._control;

            var control = this._control = $(bh.apply({
                block: 'file',
                elem: 'control',
                attrs: { type: 'file' },
                tag: 'input'
            }));

            this.bindTo(control, 'change', this._onFileChange, this);

            return control;
        },

        _reloadControl: function() {
            var control = this._getControl();
            this._control = null;

            control.replaceWith(this._getControl());
        }

    }, {
        live: function() {
            this.liveBindTo('mouseover');
        }
    }));
});
