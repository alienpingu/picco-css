import { defineConfig } from 'vite';
import gzip from 'rollup-plugin-gzip';

export default defineConfig({
    build: {
        outDir: 'dist',   // Cartella di output
        rollupOptions: {
            input: 'src/styles/main.css', // Punto di ingresso per il CSS
            plugins: [
                // Usa il plugin gzip per comprimere il CSS
                gzip({
                    filter: /\.(css)$/,  // Applica solo ai file CSS
                    minSize: 0, // Comprime anche i file piccoli
                    filename: 'style.min.css.gz',  // Rinomina il file compresso
                }),
            ],
            output: {
                // Usa un template per generare il nome del file CSS
                assetFileNames: 'style.min.css', // Imposta il nome del file CSS
            },
        },
    },
    plugins: [
        {
            name: 'vite-plugin-postcss-import',
            enforce: 'pre',
        },
    ],
});
