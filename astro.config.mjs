import { defineConfig } from 'astro/config'

import aws from 'astro-sst'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import icon from 'astro-icon'

export default defineConfig({
	output: 'server',
	site: 'https://arpadgabor.com',
	adapter: aws(),
	integrations: [mdx(), sitemap(), tailwind(), metaTags(), robotsTxt(), icon()],
})
