---
title: Astro 2.0 - 100% Type-safe MD and MDX Experience
description: There's a simple secret to building a faster website — just ship less.
tags:
  - astro
  - jam-stack
  - srr
date: "2023-01-25T10:23:31.210Z"
category: design
---

Unfortunately, modern web development has been trending in the opposite direction—towards more. More JavaScript, more features, more moving parts, and ultimately more complexity needed to keep it all running smoothly.

Today I'm excited to publicly share Astro: a new kind of static site builder that delivers lightning-fast performance with a modern developer experience. To design Astro, we borrowed the best parts of our favorite tools and then added a few innovations of our own, including:

- Bring Your Own Framework (BYOF): Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.
- 100% Static HTML, No JS: Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.
- On-Demand Components: Need some JS? Astro can automatically hydrate interactive components when they become visible on the page. If the user never sees it, they never load it.
- Fully-Featured: Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any of your favorite npm packages.
- SEO Enabled: Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication.

## H1 is good

### H2 is good too

> links are better

[I know](they-are-better)

This post marks the first public beta release of Astro. Missing features and bugs are still to be expected at this early stage. There are still some months to go before an official 1.0 release, but there are already several fast sites built with Astro in production today. We would love your early feedback as we move towards a v1.0 release later this year.

> To learn more about Astro and start building your first site, check out the project README.

# Example - Syntax Highlighting

## Shell(Bash)

```bash
# make a new project directory and jump into it
mkdir my-astro-project && cd $_

# create a new project with npm
npm create astro@latest

# or yarn
yarn create astro

# or pnpm
pnpm create astro@latest
```

## Python

```python
print('hello world')
```

## Javascript

```js
const func = () => {alert("hello")}
```
