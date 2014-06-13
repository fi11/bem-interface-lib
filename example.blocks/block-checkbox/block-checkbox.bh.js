module.exports = function(bh) {
    bh.match('block-checkbox', function(ctx) {
        ctx.content([
            {
                block: 'example',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'flat', size: 's' },
                    value: true
                }
            },
            {
                block: 'example',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'flat', size: 'm' },
                    value: true
                }
            },
            {
                block: 'example',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'flat', size: 's' },
                    value: false,
                    label: 'Check me!'
                }
            },
            {
                block: 'example',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'flat', size: 'm' },
                    value: false,
                    label: 'Check me!'
                }
            }
        ])
    });
};
