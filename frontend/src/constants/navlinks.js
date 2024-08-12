
export const navLinks = [
    {
        title: 'Home',
        path: '/',
    },{
        title: 'Crops',
        path: '/crops',
    },{
        title: 'Crop planning',
        path: '/crop-planning',
    },{
        title: 'Plots',
        path: '/plots',
    },{
        title: 'Crop stocks',
        options: [
            { title: 'Current', path: '/crop-stocks/current' },
            { title: 'Future', path: '/crops-stocks/future' },
        ]
    },{
        title: 'Water resources',
        path: '/water-resources',
    },{
        title: 'Machinery & Manpower',
        options: [
            { title: 'Machinery', path: '/mach-man/machinery' },
            { title: 'Manpower', path: '/mach-man/manpower'},
        ]
    },{
        title: 'Reports',
        path: '/reports',
    },{
        title: 'Sales & Purchase',
        path: '/sales-purchase'
    },
];