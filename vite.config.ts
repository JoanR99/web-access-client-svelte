import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: [
				sveltePreprocess({
					scss: true,
				}),
			],
		}),
	],
	server: {
		proxy: {
			'^/api/.*': {
				target: 'http://127.0.0.1:8000/',
				changeOrigin: true,
			},
		},
	},
});
