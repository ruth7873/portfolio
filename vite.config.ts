import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// הגדרת base בצורה נכונה, כלומר '/portfolio-site/'
export default defineConfig({
  base: '/portfolio/',  // הגדרת base כאן
  plugins: [react()],
})
