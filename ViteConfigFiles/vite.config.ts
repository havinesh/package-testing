import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/lib/index.ts"),
      name: "HavineshLib",
      formats: ["es", "umd"],
      fileName: (format) => `havinesh-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
