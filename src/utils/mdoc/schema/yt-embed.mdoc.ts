import type { Schema } from '@markdoc/markdoc';

export const ytEmbed: Schema = {
    render: 'YTVideoEmbed',
    attributes: {
      url: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
};
