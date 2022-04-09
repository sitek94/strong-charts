import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const isDev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      base: isDev ? '' : '/strong-charts',
    },
  },
}

export default config
