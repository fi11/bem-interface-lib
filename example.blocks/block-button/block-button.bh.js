module.exports = function(bh) {
    bh.match('block-button', function(ctx) {
        ctx.content([
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 's' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 'm' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 's', color: 'accept' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 'm', color: 'accept' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 's', color: 'decline' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'button',
                    text: 'Click me',
                    mods: { theme: 'flat', size: 'm', color: 'decline' }
                }
            }
        ]);
    });
};
