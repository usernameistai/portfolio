import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/kit/build';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      out: 'build'
    }),
  },
  preprocess: vitePreprocess()
};
export default config;