# Astro - Ink
Crisp, minimal, personal blog theme for Astro

<img src="./public/astro-banner.png" alt="Astro Banner" />


Astro Ink is a minimal theme created to serve minimalistic markdown-based blog needs. It ships with almost all the basic Astro components that you might need while creating light-weight, performant, personal blogs, that focus on shipping less Javascript by default.

It's hugely inspired by [Hugo](https://github.com/knadh/hugo-ink)'s Ink theme and strives to remain light, while providing the basis for a beautiful, minimal blog.

## Features
- __Minimal, Crisp, Markdown-Blog Ready__
- __Uses `astro@next`__ - It uses Astro's [next](https://next.docs.astro.build/getting-started) APIs under the hood
- __Svelte Ready__ - In its effort to remain light-weight, performant, and more approachable from Astro's POV, Svelte is used for interactive components like the theme switcher
- __Modular__ - The structure is highly modular, with components doing just one job, and one job well.
- __Collection + Dynamic Pages__ - It's ready with Next.js like dynamic pages, to support a tag-based classification system with paginated results, all configurable
- __Dark Mode & Color Codes (beta)__ - It supports dark mode, and 6+ color modes that could be configured using `tailwind.config.js`. Remember to restart when developing, and enable just one group of colors at a time. To customize the blog section, add any of the Tailwind Typography's `prose-{color}` classes as referred [here](./src/components/Prose.astro)
