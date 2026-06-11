import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createProxyMiddleware } from 'http-proxy-middleware'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://restcountries.com/v3.1',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('error', (err) => console.log('proxy error', err))
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Origin', 'https://restcountries.com')
          })
        },
      },
    },
  },
})
