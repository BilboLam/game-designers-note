import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { editorPlugin } from './tools/editor-plugin.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode, isSsrBuild }) => ({
  plugins: [
    react(),
    ...(mode === 'development' ? [editorPlugin()] : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // SSR build uses eager registry so all pages are synchronously available
      ...(isSsrBuild ? {
        './pagesRegistry.js': path.resolve(__dirname, 'src/app/pagesRegistry.ssr.js'),
      } : {}),
    },
  },
  build: {
    outDir: 'docs',
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
}))
