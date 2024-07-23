import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [commonjs()]
    }
  },
  base: '/' 
});
