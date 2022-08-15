import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: path.join(__dirname, 'node_modules/$1'),
      },
      {
        find: /@\//,
        replacement: path.join(__dirname, 'src/'),
      },
    ],
  },
})
