import type { Schema } from '@markdoc/markdoc';

export const tabs: Schema = {
    render: 'Tabs',
    children: ['paragraph', 'tag', 'list'],
    attributes: {
      tabs: {
        type: Array,
      },
      heading: {
        type: String
      }
    }
};
