module.exports = function(bh) {
    bh.match('tick', function(ctx) {
        ctx.tag('i');
    });    
};
