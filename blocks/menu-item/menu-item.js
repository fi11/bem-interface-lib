modules.define('menu-item', ['i-bem__dom', 'control'], function(provide, BEMDOM, control) {

    provide(BEMDOM.decl({ block: 'menu-item', baseBlock: control }, {}));
});
