import type { Schema } from '@markdoc/markdoc';

export const tweetEmbed: Schema = {
    render: 'TweetEmbed',
    attributes: {
      url: {
        type: String,
        required: true
      }
    }
};
