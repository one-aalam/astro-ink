import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Tiff Labs',
    title: 'Tiff Labs',
    description: 'A blog about smart homes made with Home Assistant and home labs.',
    url: 'https://tifflabs.org',
    githubUrl: 'https://github.com/twhite96/astro-ss',
    listDrafts: true,
    image: 'https://res.cloudinary.com/twhiteblog/image/upload/v1690994638/tifflabs_evc9ih.png',
    // YT video channel Id (used in media.astro)
    ytChannelId: '',
    // Optional, user/author settings (example)
    // Author: name
    author: '', // Example: Fred K. Schott
    // Author: Twitter handler
    authorTwitter: '', // Example: FredKSchott
    // Author: Image external source
    authorImage: '', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
    // Author: Bio
    authorBio: 'Home lab enthusiast and Home Assistant tinkerer.',
}

// Ink - Theme configuration
export const PAGE_SIZE = 8
export const USE_POST_IMG_OVERLAY = false
export const USE_MEDIA_THUMBNAIL = true

export const USE_AUTHOR_CARD = true
export const USE_SUBSCRIPTION = false /* works only when USE_AUTHOR_CARD is true */
