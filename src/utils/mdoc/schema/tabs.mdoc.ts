import { component } from '@astrojs/markdoc/config';

/** @type {import('@markdoc/markdoc').Schema} */
export const tabs = {
    render: component('./src/components/mdoc/Tabs/Tabs.astro'),
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
