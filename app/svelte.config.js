import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // vite: {
    //   optimizeDeps: {
    //     include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    //   },
    // }
  },
  preprocess: vitePreprocess(),
  assetsInclude: ["**/*.JPG"],
};

export default config;