module.exports = function(bh) {
    bh.match('cross', function(ctx) {
        ctx.tag('a');
    });
};
