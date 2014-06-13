module.exports = function(bh) {
    bh.match('block-popup', function(ctx) {
        ctx.content([
            { block: 'example', content: { block: 'popup' } }
        ]);
    });
};
