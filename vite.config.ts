/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"],
      exclude: ["src/shared/*", "src/utils/theme.utils.ts"],
    },
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/__tests__/setup.ts",
  },
  plugins: [react(), dts({ insertTypesEntry: true }), peerDepsExternal()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Calendar",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
})
