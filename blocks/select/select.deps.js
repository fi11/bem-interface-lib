[
    {
        tech : 'js',
        mustDeps : [
            { tech : 'bh', block : 'menu' },
            { tech : 'bh', block : 'popup' }
        ]
    },
    {
        mustDeps: ['i-bem'],
        shouldDeps: [
            'dom',
            'keyboard',
            { block : 'i-bem', elems : 'dom' },
            { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
            { block: 'popup' },
            { block: 'menu' }
        ]
    }
]
