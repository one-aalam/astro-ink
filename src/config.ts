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
    name: 'Ink',
    title: 'Astro - Ink',
    description: 'Crisp, minimal, personal blog theme for Astro',
    url: 'https://astro-ink.vercel.app',
    githubUrl: 'https://github.com/one-aalam/astro-ink',
    listDrafts: true,
    image: 'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
    // Optional, user settings (example)
    // YT video channel Id (used in media.astro)
    ytChannelId: ''
}

export const PAGE_SIZE = 8
