import {defineConfig} from '@micra/vite-config/library';
import {cwd} from '@micra/vite-config/utilities/cwd';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@micra/core',
        '@micra/error',
        'react',
        'react-dom',
        'react-dom/client',
        'react-dom/server',
      ],
      input: {
        index: cwd('index.ts'),
        'ServiceProvider.web': cwd('ServiceProvider.web.ts'),
        'ServiceProvider.server': cwd('ServiceProvider.server.ts'),
      },
    },
  },
});
