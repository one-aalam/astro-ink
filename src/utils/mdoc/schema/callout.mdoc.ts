import { component } from '@astrojs/markdoc/config';

/** @type {import('@markdoc/markdoc').Schema} */
export const callout = {
    render: component('./src/components/mdoc/Callout.astro'),
    children: ['paragraph', 'tag', 'list'],
    attributes: {
      type: {
        type: String,
        default: 'note goes here...',
        matches: ['error', 'check', 'note', 'warning'],
        errorLevel: 'critical'
      },
      title: {
        type: String
      }
    }
};
