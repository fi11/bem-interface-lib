module.exports = function(bh) {
    bh.match('menu', function(ctx, json) {
        var length = json.items.length;

        ctx.content((json.items || []).map(function(item, index) {
            return {
                block: 'menu-item',
                js: { id: index },
                content: item.text,
                mods:  { checked: index === json.checked, leader: index === 0, trailer: index === length - 1 }
            }
        }));

        ctx.js(true);
    });
};
