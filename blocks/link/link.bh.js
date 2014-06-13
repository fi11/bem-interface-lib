module.exports = function(bh) {
    bh.match('link', function(ctx, json) {
        var tag = 'a';

        if (ctx.js())  {
            ctx.mod('pseudo', true);
            ctx.mix({ block: 'link', elem: 'control' });
            tag = 'span';
        } else {
            ctx.attrs({
                tabIndex: json.tabIndex,
                href: json.url,
                title: json.title,
                target: json.target
            });
        }

        ctx.tag(tag);
    });    
};
