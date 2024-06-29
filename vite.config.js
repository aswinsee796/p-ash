// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//  build: {
//     rollupOptions: {
//       external: ['react-router-dom']
//     }
//   }
// }
  
// )
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react-dom/client'],
    },
  },
};
