import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  esbuild: {
    exclude: ["**/*.test.*", "./src/docs/**"]
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/lib/index.ts"),
      name: "svelte-tuicss",
      fileName: (format) => `svelte-tuicss.${format}.js`
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['svelte'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       'react': 'react',
    //       'react-dom': 'react-dom'
    //     }
    //   }
    // }
  }
})
