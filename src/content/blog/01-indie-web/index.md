---
title: "A little exploration of the indie web"
description: "Hit the ground running."
date: "2024-09-13"
---

---

## Install astro-micro

Clone the [Astro Micro repository](https://github.com/trevortylerlee/astro-micro.git).

```sh
git clone https://github.com/trevortylerlee/astro-micro.git my-astro-micro
```

```sh
cd my-astro-micro
```

```sh
npm i
```

```sh
npm run build
```

```sh
npm run dev
```

## Customize the website metadata

To change the website metadata, edit `src/consts.ts`.

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
  EMAIL: "trevortylerlee@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field        | Req | Description                                          |
| :----------- | :-- | :--------------------------------------------------- |
| TITLE        | Yes | Displayed in header and footer. Used in SEO and RSS. |
| DESCRIPTION  | Yes | Used in SEO and RSS.                                 |
| EMAIL        | Yes | Displayed in contact section.                        |
| NUM_POSTS    | Yes | Limit number of posts on home page.                  |
| NUM_PROJECTS | Yes | Limit number of projects on home page.               |

---

## Customize metadata for individual pages

```ts
// src/consts.ts

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Astro Micro is a fork of Astro Nano.",
};
```

| Field       | Req | Description                                    |
| :---------- | :-- | :--------------------------------------------- |
| TITLE       | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS.                           |

---


## Set up RSS

Change the `site` option to the deployed site's URL.

```js
// astro.config.mjs

export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
```