export default {
    links: [
        { text: 'Home', url: '/', type: 'link', hidden: ['xs', 'sm'] },
        { text: 'Services', url: '/services', type: 'link', hidden: ['xs', 'sm'] },
        { text: 'My Journey', url: '/my-journey', type: 'link', hidden: ['xs', 'sm'] },
        { text: 'Contact Us', url: '/contact-us', type: 'link', hidden: ['xs', 'sm'] },
        { text: 'divider1', type: 'divider', hidden: ['xs', 'sm', 'md', 'md'] },
        { text: 'Questionairre', url: '/questionairre', type: 'link', hidden: ['xs', 'sm', 'md', 'lg'] },
    ],
    navProps: {
        hidden: ['xl']
    }

};
