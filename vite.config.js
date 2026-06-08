import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/goit-js-hw-10/', // Додано базовий шлях для GitHub Pages
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        timer: './src/1-timer.html',
        snackbar: './src/2-snackbar.html'
      }
    }
  }
});