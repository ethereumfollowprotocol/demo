import { defineConfig } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: Number(process.env.PORT || 3_034)
  },
  build: {
    target: 'ESNext',
    emptyOutDir: true
  },
  plugins: [million.vite({ auto: true }), react(), tsconfigPaths()]
})
