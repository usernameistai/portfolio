import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'node:fs';
// import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // out: 'build',
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false
    }),
  },
  preprocess: vitePreprocess()
};
export default config;