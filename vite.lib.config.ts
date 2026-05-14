import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      // We point to the tsconfig, but omit outDir/outputDir.
      // The plugin will automatically use the 'dist' folder defined below.
      tsconfigPath: path.resolve(__dirname, './tsconfig.lib.json'),
      
      // This ensures your main type file is linked correctly
      insertTypesEntry: true,
      
      // If rollupTypes gave you trouble, bundleTypes is the 
      // alternative name used in some versions of this plugin.
      // But for now, we'll keep it simple to ensure it builds.
    }),
  ],

  // IMPORTANT: isolate library build from app/playground/public assets
  publicDir: false,

  build: {
    // THIS is the master setting for where files end up
    outDir: 'dist', 

    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DesignLibrary',
      fileName: 'index',
      formats: ['es'],
    },

    rollupOptions: {
      // Prevents bundling React; the consumer app (Next.js) will provide it
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