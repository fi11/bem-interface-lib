module.exports = function(bh) {
    bh.match('select', function(ctx) {
        ctx.js(true);
    });
};
