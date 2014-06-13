module.exports = function(bh) {
    bh.match('down-arrow', function(ctx) {
        ctx.tag('i');
    });
};
