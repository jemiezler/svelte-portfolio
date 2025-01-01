import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
      pages: 'build',  // This should match the deploy folder
      assets: 'build', // Ensure this is the correct assets folder
      fallback: null,  // Optional: Add fallback if needed (e.g., for single-page apps)
    }),
    paths: {
      // If deploying to GitHub Pages, use the repository name as the base path
      base: process.env.NODE_ENV === 'production' ? '/svelte-portfolio' : '',
    },
	}
};

export default config;
