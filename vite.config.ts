import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react()
  ],
  server: {
    host: '0.0.0.0', // 允许外网访问
    port: 3000,       // 端口号改为3000
    open: false,      // 不自动打开浏览器
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
