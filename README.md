# Astro - Ink
Crisp, minimal, personal blog theme for Astro

<img src="./public/astro-banner.png" alt="Astro Banner" />

Astro Ink is a minimal theme created to serve minimalistic markdown-based blog needs. It ships with almost all the basic Astro components that you might need while creating light-weight, performant, personal blogs, that focus on shipping less Javascript by default.

It's hugely inspired by [Hugo](https://github.com/knadh/hugo-ink)'s Ink theme and strives to remain light, while providing the basis for a beautiful, minimal blog.

> Astro Ink is based on a version of Astro ([v0.21](https://docs.astro.build/en/migrate/#migrate-to-v021)) that doesn't supports SSR, and achieves its core functionalities differently. Nothing should ideally break if you wanna clone and work with this, but you might not get all the latest/best, amazing, or stable features Astro shipped since v0.21. I'm working on the upgrade and looking forward to drop the updates in a week or two(10th May, 2022). You can watch the repo to be notified of the updates.

## Features
- __Minimal, Crisp, Markdown-Blog Ready__
- __Uses `astro@next`__ - It uses Astro's [next](https://next.docs.astro.build/getting-started) APIs under the hood
- __Svelte Ready__ - In its effort to remain light-weight, performant, and more approachable from Astro's POV, Svelte is used for interactive components like the theme switcher
- __Modular__ - The structure is highly modular, with components doing just one job, and one job well.
- __Collection + Dynamic Pages__ - It's ready with Next.js like dynamic pages, to support a tag-based classification system with paginated results, all configurable
- __Dark Mode & Color Codes (beta)__ - It supports dark mode, and 6+ color modes that could be configured using `tailwind.config.js`. Remember to restart when developing, and enable just one group of colors at a time. To customize the blog section, add any of the Tailwind Typography's `prose-{color}` classes as referred [here](./src/components/Prose.astro)
- __Netlify CMS<sup>*NEW</sup>__ - Add/Edit/Update all the posts in the `/blog` directory by visiting `your-site.netlify.com/admin` ex: [astro-ink.netlify.app/admin](https://astro-ink.netlify.app/admin) with your Netlify credentials. It needs Netlify Identity(https://app.netlify.com/sites/your-site/settings/identity#registration
) and Git Gateway(https://app.netlify.com/sites/your-site/settings/identity#services) enabled. (_Write-up coming soon!_)
- __Future Posts<sup>*NEW</sup>__(with Github Actions) - Create posts in the `/src/drafts` directory with a future `date` in the `YYYY-MM-DD` format, and let a specially crafted [Github Action](https://github.com/marketplace/actions/ssg-publish-drafts) take care of auto-publishing it on your specified date. You can configure the check interval in [Github Action](https://github.com/one-aalam/astro-ink/blob/main/.github/workflows/main.yml).(_Write-up coming soon!_)
- __Client-Side Search<sup>*NEW</sup>__ - Allow your users get to your blog posts quickly with client-side search feat. Lunr.js

## Built with Astro Ink
- [jamesperkins.dev](https://www.jamesperkins.dev/) - Personal site of developer, YouTube instructor [James R Perkins](https://twitter.com/james_r_perkins)
- [highlandcows.github.io](https://highlandcows.github.io/) [Nick Jacob](https://github.com/njacobs5074)'s personal blog

> know a site built with Astro Ink? Let me know on [Twitter](https://twitter.com/aftabbuddy)

## Wanna learn Astro while building Ink?
Head over to `aalam.in/blog` and learn
- [How to set Astro up and get it running with essential defaults for styling, prototyping, and incremental deployments](https://aalam.in/blog/astro-get-up-and-running)
- [Managing presentational components and creating Astro pages](https://aalam.in/blog/astro-and-site-strcuture)
- [Feeding local as well as remote data to the Astro pages](https://aalam.in/blog/astro-and-data)
- [Putting interactivity where you absolutely cannot do without it in Astro](https://aalam.in/blog/astro-and-interactivity)
- [Creating data-driven, dynamic pages and paginated results in Astro](https://aalam.in/blog/astro-and-dynamic-pages)
