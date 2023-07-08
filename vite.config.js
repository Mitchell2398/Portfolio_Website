import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config

export default defineConfig(({ command }) => {
  const config = {
    base: "/jackmitchllsportfolio/",
    plugins: [react()],
    esbuild: {
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
    },
  }



  return config
})
