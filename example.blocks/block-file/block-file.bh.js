module.exports = function(bh) {
    bh.match('block-file', function(ctx) {
        ctx.content([
            {
                block: 'example',
                content: {
                    block: 'button',
                    mods: { theme: 'flat', size: 'm' },
                    text: 'Attach some file',
                    mix: { block: 'file', js: true }
                }
            }
        ]);
    });
};
