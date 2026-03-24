import { defineConfig } from 'vite';
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin';

export default defineConfig({
  worker: {
    format: 'es'
  },

  build: {
    outDir: '../monaco',
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    reportCompressedSize: false,
    rollupOptions: {
      input: 'src/index.html'
    }
  },

  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin]
    }
  },

  plugins: [
    {
      name: 'strip-csp',
      transformIndexHtml(html) {
        return html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/gi, '');
      }
    }
  ]
});