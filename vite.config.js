import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  envDir: path.resolve(__dirname, './env'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue(),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: ['vue', 'vue-router']
    }),
    Components(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],

  server: {
    open: true,
    port: 8080,
    strictPort: true,
    cors: true
  }
})
