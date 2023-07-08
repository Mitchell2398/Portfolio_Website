import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config

export default defineConfig(({ command }) => {
  const config = {
    base: "/Portfolio_Website",
    plugins: [react()],
    base: '/',
    jsx: "react",
  }

  

  if (command !== 'serve') {
    config.base = '/Portfolio_Website/'
  }

  return config
})
