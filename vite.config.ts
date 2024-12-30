import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@atoms': path.resolve(__dirname, './src/components/atoms'),
            '@styled': path.resolve(__dirname, './src/components/styled'),
        },
    },
});
