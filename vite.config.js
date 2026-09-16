/** vite.config.js */

import { defineConfig } from "vite"
import { resolve } from "path"
import dts from 'vite-plugin-dts';

// plugins
import gleam from "vite-plugin-gleam"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
  plugins: [gleam(), tailwind(), dts({
    // Aponta para a pasta onde os arquivos .d.ts do Gleam
    include: ['build/dev/javascript/gbr_ui_storybook/**/*'],
    // Evita criar subpastas desnecessárias (ex: dist/build/dev/...)
    entryRoot: 'build/dev/javascript/gbr_ui_storybook',
  })],
  build: {
    lib: {
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
  }
})
