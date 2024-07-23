import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@canvasjs/react-charts']
  },
});
