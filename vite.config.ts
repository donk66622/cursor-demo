import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
