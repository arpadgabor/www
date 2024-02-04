import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://arpadgabor.com',
	integrations: [mdx(), sitemap(), tailwind(), metaTags(), robotsTxt(), icon()],
})
