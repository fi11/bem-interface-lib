module.exports = function(bh) {
    bh.match('popup', function(ctx) {
        ctx.js(true);
        ctx.mod('hide', true);
    });
};
