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

        /*
         * Handle Netlify Identity authentication tokens
         * Redirect recovery_token and invite_token to admin page
         */
        if (req.url === '/' && req.headers.referer) {
          const refererUrl = new URL(req.headers.referer);
          const { hash } = refererUrl;
          if (hash && (hash.includes('recovery_token') || hash.includes('invite_token'))) {
            res.writeHead(302, { Location: `/admin/${hash}` });
            res.end();

            return;
          }
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
