import { component } from "@astrojs/markdoc/config";

/** @type {import('@markdoc/markdoc').Schema} */
export const ytEmbed = {
	render: component("./src/components/mdoc/YTVideoEmbed.astro"),
	attributes: {
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
