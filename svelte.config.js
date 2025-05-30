import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  },
  preprocess: vitePreprocess()
};

export default config;
