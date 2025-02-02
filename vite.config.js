// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     build: {
//         chunkSizeWarningLimit: 100000000
//     },
//     base: "/new-portfolio",
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  // Remove the `base` setting
});