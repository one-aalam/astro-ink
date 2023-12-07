export type GithubContentURL = `https://api.github.com/repos/${string}/contents/${string}`

export type MediaExternallyHostedVideo = {
    title: string
    description: string
    url: string
    host: string
    participants: Array<string>
    date: string
    thumbnail?: string
}

export const DEFAULT_MEDIA_URL: GithubContentURL = 'https://api.github.com/repos/one-aalam/astro-ink/contents/src/data/astro-media.json'

