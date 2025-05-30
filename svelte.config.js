import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from 'sveltekit/vite';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  },
  preprocess: vitePreprocess()
};
