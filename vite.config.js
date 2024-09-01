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
                },
                {
                    src: 'sitemap.xml',
                    dest: ''
                },
                {
                    src: 'robots.txt',
                    dest: ''
                }
            ]
        })
    ]
})
