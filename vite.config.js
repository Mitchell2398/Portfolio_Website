import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig(() => {
  const config = {
    base: `/https://jackmitchellsportfolio.com/`,
    plugins: [react()],
    esbuild: {
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    },
  };

  return config;
});