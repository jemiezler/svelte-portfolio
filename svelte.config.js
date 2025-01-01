import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Adapter for static site generation (suitable for GitHub Pages)
    adapter: adapter({
			// Optionally specify options here, like the `pages` and `assets` directories
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
    
    paths: {
      // If deploying to GitHub Pages, use the repository name as the base path
      base: process.env.NODE_ENV === 'production' ? '/svelte-portfolio' : '',
    },

    // If using SSR (Server-Side Rendering), you can set this to false.
    // However, for GitHub Pages, static site is ideal.
    ssr: false,  
  },
};

export default config;
