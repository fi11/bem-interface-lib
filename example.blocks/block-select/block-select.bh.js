module.exports = function(bh) {
    bh.match('block-select', function(ctx) {
        var items = [
            { text: 'First items', value: 1  },
            { text: 'Second items', value: 2 },
            { text: 'Third items', value: 3 },
            { text: 'Fourth items', value: 4 }
        ];

        ctx.content([
            {
                block: 'example',
                content: {
                    block: 'input',
                    placeholder: 'Choose value',
                    readonly: true,
                    hasArrow: true,
                    mods: { theme: 'flat', size: 's' }, mix: [{ block: 'select', js: { items: items }}]
                }
            },
            {
                block: 'example',
                content: {
                    block: 'input',
                    readonly: true,
                    hasArrow: true,
                    placeholder: 'Choose value',
                    label: 'Your value',
                    mods: { theme: 'flat', size: 'm' }, mix: [{ block: 'select', js: { items: items, value: 3 }}]
                }
            }
        ]);
    });
};
