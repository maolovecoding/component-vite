import { defineConfig } from 'vite';
import vueSFCPlugin from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vueSFCPlugin(), vueJsx()
  ],
  // 添加苦库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "maoUi",
      fileName: "mao-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  }
});