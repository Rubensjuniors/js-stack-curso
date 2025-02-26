import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, type UserConfigExport } from 'vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/setupTests.ts',
    transformMode: {
      web: [/\.tsx$/],
    },

  },
} as UserConfigExport)
