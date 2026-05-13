import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: isolate library build from app/playground/public assets
  publicDir: false,

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DesignLibrary',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      external: ['react', 'react-dom'],

      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },

    // optional but helps ensure clean builds
    emptyOutDir: true,
  },
});