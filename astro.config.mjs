import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

function rewriteConfigPlugin() {
  return {
    name: 'rewrite-config-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        /*
         * bugfix: localhost and server resolve descrepancy
         */
        if (req.url === '/config.yml') {
          req.url = '/admin/config.yml';
        }
        next();
      });
    },
  };
}

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [rewriteConfigPlugin()],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
