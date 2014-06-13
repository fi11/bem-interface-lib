modules.define('link', ['i-bem__dom', 'interactive'], function(provide, BEMDOM, interactive) {

    provide(BEMDOM.decl({ block: 'link', baseBlock: interactive }));
});
