module.exports = function(bh) {
    bh.match('block-input', function(ctx) {
        ctx.content([
            { block: 'example', content: { block: 'input', mods: { size: 's', theme: 'flat' } } },
            {
                block: 'example',
                title: 'Simple small input',
                content: {
                    block: 'input',
                    mods: { size: 'm', theme: 'flat' }
                }
            },
            {
                block: 'example',
                title: 'Simple medium input',
                content: {
                    block: 'input',
                    mods: { size: 's', theme: 'flat' },
                    placeholder: 'Input your full name',
                    label: 'Full name'
                }
            },
            {
                block: 'example',
                title: 'Simple medium input',
                content: {
                    block: 'input',
                    mods: { size: 'm', theme: 'flat' },
                    placeholder: 'Input your full name',
                    label: 'Full name'
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    mods: { size: 's', theme: 'flat' },
                    hasClear: false,
                    type: 'tel'
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    mods: { size: 'm', theme: 'flat' },
                    hasClear: false,
                    type: 'tel'
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    hasClear: true,
                    mods: { size: 's', theme: 'flat' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    hasClear: true,
                    mods: { size: 'm', theme: 'flat' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    hasClear: true,
                    type: 'text',
                    mods: { size: 's', theme: 'flat' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    hasClear: true,
                    type: 'text',
                    mods: { size: 'm', theme: 'flat' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    type: 'text',
                    placeholder: 'Input your awesome text...',
                    label: 'Some text',
                    mods: { size: 's', theme: 'flat' }
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    type: 'text',
                    placeholder: 'Input your awesome text...',
                    label: 'Some text',
                    mods: { size: 'm', theme: 'flat' }
                }
            }
        ])
    });
};
