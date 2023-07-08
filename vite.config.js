import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig(() => {
  const config = {
    base: `https://Mitchell2398.github.io/Portfolio_Website/tree/`,
    plugins: [react()],
    esbuild: {
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    },
  };

  return config;
});