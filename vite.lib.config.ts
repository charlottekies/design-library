// Responsible for building my src directory as an npm packageimport { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DesignLibrary',
      fileName: 'index',
      formats: ['es', 'cjs']
    },

    rollupOptions: {
      external: ['react', 'react-dom'],

      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});