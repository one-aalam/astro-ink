import type { Config } from '@markdoc/markdoc';
import { callout } from './schema/callout.mdoc';
import { link } from './schema/link.mdoc';
import { tweetEmbed } from './schema/tweet-embed.mdoc';
import { tabs } from './schema/tabs.mdoc';
import { ytEmbed } from './schema/yt-embed.mdoc';
// import { heading } from './schema/heading.mdoc';

export const config: Config = {
    tags: {
        callout,
        link,
        tweet: tweetEmbed,
        yt: ytEmbed,
        tabs
    },
    functions: {
        getCountryEmoji: {
          transform(parameters) {
            const [country] = Object.values(parameters);
            const countryToEmojiMap = {
              japan: '🇯🇵',
              spain: '🇪🇸',
              france: '🇫🇷',
            }
            return countryToEmojiMap[country] ?? '🏳'
          },
        },
    }
}
