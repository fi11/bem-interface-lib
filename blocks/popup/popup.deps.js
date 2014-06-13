({
    mustDeps: ['i-bem'],
    shouldDeps: [
        'dom',
        'keyboard',
        'next-tick',
        { block : 'i-bem', elems : 'dom' },
        { mods: { theme: 'flat' } },
        { block: 'cross', mods: { size: 'm' } },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
    ]
})
