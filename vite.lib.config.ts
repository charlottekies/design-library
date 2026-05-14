import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, './tsconfig.lib.json'),
      insertTypesEntry: true,
    }),
  ],

  publicDir: false,

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',

    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js', 
    },

    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime', 
        'styled-components',
        '@emotion/react',
        '@emotion/styled'
      ],
      output: {
        format: 'es' // Ensures the Rollup output uses ESM
    }
    }
  }
});