import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://volodymyr-kuzmin.pp.ua/',
  server: {
    open: true,
  },
});
