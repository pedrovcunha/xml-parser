import { defineConfig } from "vite";

export default defineConfig({
    root: "src", // Set "src" as the root directory
  build: {
    outDir: "../dist", // Output compiled files outside "src"
  },
  server: {
    open: true,
  },
});
