import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vue3-every-layout/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    build: {
        assetsDir: './',
        outDir: 'docs',
    },
    plugins: [vue()],
    server: {
        host: true
    },
})
