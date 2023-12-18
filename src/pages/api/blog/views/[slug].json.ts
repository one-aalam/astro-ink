import type { APIRoute } from "astro";
// import { getViewsBySlug } from "src/utils/views/turso";
// import { getViewsBySlug } from "src/utils/views/ioredis";
import { getViewsBySlug } from "src/utils/views/in-memory";

// In development/HMR, you can accidentally make this call numerous times and exceed your quota...
// thus, the in-memory version of `getViewsBySlug` is used

// When deploying, and you have either `ioredis` or `turso` configured with your cloned version - 
// please uncomment the respective line


export const GET: APIRoute = async ({ params, request }) => {
	return new Response(
		JSON.stringify({
			views: params.slug ? await getViewsBySlug(params.slug) : 0,
		}),
	);
};
