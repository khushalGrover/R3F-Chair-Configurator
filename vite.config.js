import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'R3F-Chair-Configurator',
  plugins: [react()],
  server: {
    host: true
  },
})
