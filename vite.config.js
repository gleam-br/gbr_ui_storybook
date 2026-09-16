/** vite.config.js */

import { defineConfig } from "vite"
import { resolve } from "path"

// plugins
import gleam from "vite-plugin-gleam"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
  plugins: [gleam(), tailwind()],
  build: {
    lib: {
      // Aponta para o arquivo .mjs que o compilador do Gleam gerou
      entry: resolve(import.meta.dirname, 'src', 'index.js'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') {
          return `index.js`
        } else {
          return `index.cjs`
        }
      }
    },
    rollupOptions: {
      // Caso sua lib use pacotes externos, liste-os aqui para não embuti-los no bundle
      external: [],
      output: {
        globals: {},
      },
    },
  }
})
