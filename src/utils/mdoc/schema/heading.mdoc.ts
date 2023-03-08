import type { Schema } from '@markdoc/markdoc';
import { Tag } from '@markdoc/markdoc';

export const heading: Schema = {
    children: ["inline"],
    attributes: {
      id: { type: String },
      level: { type: Number, required: true, default: 1 },
    },
    transform(node, config) {
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);

      return new Tag(
        `h${node.attributes["level"]}`,
        { ...attributes },
        children
      );
    }
}
