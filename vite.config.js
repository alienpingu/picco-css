import { defineConfig } from 'vite';
export default defineConfig({
    root: 'public',
    build: {
        outDir: '../dist',
    },
    publicDir: 'public', // Assicura che public/ venga servita correttamente
    server: {
        open: true,
        strictPort: true,
        middlewareMode: false, // Evita il fallback su index.html per richieste dirette
    },
});
