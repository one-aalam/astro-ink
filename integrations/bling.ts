import type { AstroIntegration, AstroConfig } from "astro";
import { bling } from '@tanstack/bling/vite'
import { fileURLToPath } from 'url'

export function astroBling()  {
    let astroConfig: AstroConfig
    return {
        name: 'bling',
        hooks: {
            'astro:config:setup': (config) => {
                config.updateConfig({
                    vite: {
                        plugins: [
                            bling()
                        ]
                    }
                })
            },
            'astro:config:done': (config) => {
                astroConfig = config.config
            },
            'astro:build:ssr': (config) => {
                let entryClient = fileURLToPath(
                    new URL('./src/app/entry-client.tsx', astroConfig.root),
                )
                ;(config.manifest as any)['entry-client'] = config.manifest.entryModules[entryClient]
            },
            'astro:build:done': (config) => {},
            'astro:build:setup': (config) => {
                if (config.target === 'client') {
                    if (Array.isArray(config.vite.build?.rollupOptions?.input)) {
                      config.vite.build?.rollupOptions?.input.push(
                        'src/app/entry-client.tsx',
                      )
                    }

                    if (config.vite.build) {
                      config.vite.build.ssrManifest = true
                      config.vite.build.manifest = true
                    }
                  }
            },
        }
    } satisfies AstroIntegration
}
