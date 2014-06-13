modules.define('popup',
    ['i-bem__dom', 'ua', 'dom', 'keyboard', 'next-tick'],
    function(provide, BEMDOM, ua, dom, keyboard, nextTick) {

    provide(BEMDOM.decl('popup', {
        onSetMod: {
            js: {
                inited: function() {
                }
            }
        },
    
        show: function(owner, isAutoclosable, direction) {
            var position = {};
            var ownerPosition = owner.domElem.offset();

            direction = direction || 'bottom';

            this._append(owner);

            if (direction === 'bottom')
                position = { top: owner.domElem.height(), left: 0 };
            else if (direction === 'right')
                position = { top: ownerPosition.top, left: ownerPosition.left + owner.domElem.width() };
            else if (direction === 'left')
                position = { top: ownerPosition.top, left: ownerPosition.left - this.domElem.outerWidth() };
            else if (direction === 'top')
                position = { top: ownerPosition.top - owner.domElem.height(), left: ownerPosition.left };


            this.domElem.css(position);
            this.setMod('hide', '');

            isAutoclosable && nextTick(this._onAutoclosable.bind(this));
            this.emit('show');

            return this;
        },
    
        hide: function() {
            this.setMod('hide', true);

            this._offAutoclosable();
            this.emit('hide');

            return this;
        },
    
        _onAutoclosable: function() {

            this.bindToDoc('pointerclick', this._onClick, this);
            this.bindToDoc(keyboard.event, this._onKeyDown, this);
        },

        _onClick: function(e) {
            if (!dom.contains(this.domElem, $(e.target))) this.hide();
        },

        _onKeyDown: function(e) {
            if (e.keyCode === keyboard.codes.ESC) this.hide();
        },

        _offAutoclosable: function() {
            this.unbindFromDoc('pointerclick', this._onClick);
            this.unbindFromDoc(keyboard.event, this._onKeyDown, this);
        },

        _append: function(owner) {
            if (this._isAppended) return;

            ((owner && owner.domElem) || BEMDOM.scope).append(this.domElem);
            this._isAppended = true;
        },

        setContent: function(content) {
            BEMDOM.update(this.domElem, content);

            return this;
        }
    }, {}));
});
