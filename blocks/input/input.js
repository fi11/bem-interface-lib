modules.define('input',
    ['i-bem__dom', 'control', 'tick', 'idle'],
    function(provide, BEMDOM, control, tick, idle) {

var instances = {}, oldValues = {}, boundToTick, inputCount = 0;

function bindToTick(instance) {
    instances[instance._index] = instance;
    oldValues[instance._index] = instance.getValue();

    if (boundToTick ) return;

    boundToTick = true;

    tick.on('tick', checkInput).start();
    idle.on({
        idle : function() {
            tick.un('tick', checkInput);
        },
        wakeup : function() {
            tick.on('tick', checkInput);
        }
    }).start();
}

function checkInput() {
    for (var key in instances) {
        var item = instances[key];

        if (item === null) continue;
        var value = item.getValue();

        if (value !== oldValues[key]) onChange(item, value, key);
    }
}

function onChange(instance, value, key) {
    if (instance._isTel) {
        var newValue = value.replace(/[^0-9-()]/g, '');
        value === newValue || instance.elem('control').val(newValue);
        value = newValue;
    }

    oldValues[key] = value;
    instance.emit('change', value);
}

provide(BEMDOM.decl({ block: 'input', baseBlock: 'control' }, {
    onSetMod: {
        'js' : {
            'inited': function() {
                this.__base.apply(this, arguments);

                this._index = ++inputCount;
                this._isTel = this.hasMod('type', 'tel');

                bindToTick(this);

                this.on('change', this._updateEmpty, this);
            },

            '': function() {
                delete instances[this._index];
            }
        }

    },

    /**
     * Returns control value
     * @returns {String}
     */
    getValue : function() {
        return this.elem('control').val() || '';
    },

    /**
     * Sets control value
     * @param {String} value value
     * @returns {this}
     */
    setValue : function(value) {
        value = '' + value;

        if (oldValues[this._index] !== value) {
            oldValues[this._index] = value;
            this.elem('control').val(value);

            this.emit('change', value);
        }
    },

    clear: function() {
        this.setValue('');
    },

    _updateEmpty: function() {
        this.setMod('empty', !this.getValue());
    }

}, {
    live: function() {
        this.__base.apply(this, arguments);
        this.liveBindTo('clear', 'pointerclick', this.prototype.clear);
    }
}))});
