import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Slim-mom-frontend/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
// ../docs
