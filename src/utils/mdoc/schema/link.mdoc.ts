import type { Schema } from '@markdoc/markdoc';
import { Tag } from '@markdoc/markdoc';

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


export const link: Schema = {
    render: 'Link',
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
    transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);

        const target = getHrefTarget(attributes);

        return new Tag("Link", { ...attributes, target }, children);
    },
};
