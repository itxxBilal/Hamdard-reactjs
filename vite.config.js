import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from any device on the local network
    port: 3000,        // Optional: Change the port if necessary
    strictPort: true,  // Optional: Ensures the server always uses the specified port
  },
})
