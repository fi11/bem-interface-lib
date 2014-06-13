module.exports = function(bh) {
    bh.match('input', function(ctx, json) {
        ctx.mod('empty', !json.value && json.value !== 0);
        ctx.js(true);

        var attrType = {
            password: 'password',
            tel: 'text',
            text: 'textarea'
        };

        var control =  {
            elem: 'control',
            tag: json.type === 'text' ? 'textarea' : 'input',
            attrs: {
                name: json.name,
                autocomplete: json.autocomplete ? '' : json.autocomplete === undefined ? '': 'off',
                value: json.value,
                type: attrType[json.type] || 'text',
                readonly: json.readonly
            }
        };

        if (json.type === 'text') {
            control.attrs.rows  = json.rows || 4;
        }

        var content = [control];

        if (json.type === 'password') content.push({ elem: 'see' });
        else if (json.type === 'tel')
            content.unshift({ elem: 'tel-code', content: '+' + (json.telCode || '7'), tag: 'span' }) &&
                ctx.param('placeholder', json.telHint || '9008765431') &&
                ctx.mod('type', 'tel');
        else if (json.type === 'select')
            ctx.mod('type', 'select');

        if (json.hasClear && !json.hasArrow)
            content.push({ block: 'cross', mix: [{ block: 'input', elem: 'clear' }] }) && ctx.mod('hasClear', true);

        if (json.placeholder) content.unshift({ elem: 'placeholder', content: json.placeholder  });
        if (json.label) content.unshift({ elem: 'label', tag: 'label', content: json.label });

        if (json.hasArrow)
            content.push({ block: 'down-arrow' }) && ctx.mod('hasArrow', true);

        ctx.content(content);
    });
};
