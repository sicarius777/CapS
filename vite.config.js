// vite.config.js

import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://quote-garden.herokuapp.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api/v3'), // Rewrite /api to /api/v3 in the request path
      },
    },
  },
};
