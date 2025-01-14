import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/portfolio',  // ודא שהנתיב שלך כאן נכון
  plugins: [react()]
})
