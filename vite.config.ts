import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vue3-oop/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vuejsx(), vue()],
  optimizeDeps: {
    exclude: ['@tmatrix/ui']
  }
})
