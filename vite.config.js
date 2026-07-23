import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/abstracts/functions" as *;
          @use "@/scss/abstracts/variables" as *;
          @use "@/scss/abstracts/mixins" as *;
        `,
      },
    },
  },
})