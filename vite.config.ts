import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        createVuePlugin({}),
        tsconfigPaths({}),
    ],
    server: {
        port: 3000,
        open: true,
    },
})
