
import type { MediaExternallyHostedVideo } from './media'

export type Feed2JsonYtFeedItem = {
    guid: `yt:video:${string}`
    url: string
    title: string
    date_published: string
    author: {
        name: string
    }
}

export function toFeedToJsonUrl(ytVideoChannelId: string) {
   return `https://feed2json.org/convert?url=https://www.youtube.com/feeds/videos.xml?channel_id=${ytVideoChannelId}`
}

export function toMediaFormatFromFeed2JsonUrl(posts: { items: Array<Feed2JsonYtFeedItem>}): Array<MediaExternallyHostedVideo> {
    return posts?.items?.length ? posts.items.map(post => ({ title: post.title, description: "", url: post.url, participants: [ ], date: post.date_published, host: post.author.name })) : []
}
