import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			// Transforme les 404 sur les images manquantes en avertissements non bloquants
			handleHttpError: 'warn'
		}
	}
};

export default config;