import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    base: './', // ✅ 重點：設定相對路徑以支援 Vercel 靜態部署
  plugins: [vue()],
})
