module.exports = function(bh) {
    bh.match('button', function(ctx, json) {
        var content = [];

        if (json.type === 'file')
            console.log('!!!');
        ctx.tag('button');
        ctx.js(true);
        ctx.mix({ elem: 'control' });

        json.text && content.push({ elem: 'text', content: json.text });

        ctx.content(content);
    });
};
