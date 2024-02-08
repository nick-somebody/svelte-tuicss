import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        "vite.*",
        "svelte.config.js",
        "src/docs",
        "src/App.svelte",
        "src/main.ts",
        "src/vite-env.d.ts"
      ]
    }
  },
})