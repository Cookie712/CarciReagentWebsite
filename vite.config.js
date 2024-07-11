import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'locales',
                    dest: ''
                },
                {
                    src: 'files',
                    dest: ''
                }
            ]
        })
    ]
})
