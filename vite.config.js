import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file URL
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // this aliases live under src/shared/*, are meant for global use
      '@assets': path.resolve(__dirname, 'src/shared/assets'),
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@contexts': path.resolve(__dirname, 'src/shared/contexts'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@lib': path.resolve(__dirname, 'src/shared/lib'),
      '@utils': path.resolve(__dirname, 'src/shared/utils'),
    }

    // NOTE: there is not alias for `@shared`, `@features`, `@app` because they always should be place in `/src` root
    //       then, the team is forced to import as `@/shared`, `@/features`, `@/app`
  }
});