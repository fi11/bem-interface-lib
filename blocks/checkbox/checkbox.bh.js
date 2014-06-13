module.exports = function(bh) {
    bh.match('checkbox', function(ctx, json) {
        var id = ctx.generateId();
        var attrs = { type : 'checkbox', autocomplete : 'off', id: id };


        ctx.js(true);
        ctx.mod('checked', json.value);

        if (json.value) attrs.checked ='checked';
        if (json.disable) attrs.disable ='disable';

        ctx.content([
            { elem: 'label', content: json.label, tag: 'label', attrs: { onclick: '', for: id } },
            { block: 'tick', mix: { block: 'checkbox', elem: 'tick' } },
            { elem: 'control', tag: 'input', attrs: attrs }
        ]);
    });    
};
