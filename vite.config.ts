import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/Ng-landing-Page/',
  plugins: [react()],
  resolve: {
    alias: {
      'sonner@2.0.3': 'sonner',         // ← clave
      // agrega más si aparecen errores similares:
      // 'lucide-react@0.487.0': 'lucide-react',
      // 'recharts@2.15.2': 'recharts',
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: { target: 'esnext', outDir: 'dist' },
})
