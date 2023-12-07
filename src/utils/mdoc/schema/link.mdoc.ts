import { component } from '@astrojs/markdoc/config';

const SITE_DOMAIN = 'astro-ink.vercel.app'
function getHrefTarget(attributes) {
    const href = attributes.href;
    if (
      href.includes(SITE_DOMAIN) ||
      href.startsWith("/") ||
      href.startsWith("#") ||
      href.startsWith("?")
    ) {
      return "_self";
    } else {
      return "_blank";
    }
}

/** @type {import('@markdoc/markdoc').Schema} */
export const link = {
    render: component('./src/components/mdoc/Link.astro'),
    children: ["strong", "em", "s", "code", "text", "tag"],
    attributes: {
      href: {
        type: String,
        required: true
      },
      title: {
        type: String
      },
      target: {
        type: String
      }
    },
};
