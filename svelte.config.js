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
      fallback: 'index.html',
    }),
    paths: {
      base: isDev ? '' : '/strong-charts',
    },
    prerender: {
      default: false,
    },
  },
}

export default config
