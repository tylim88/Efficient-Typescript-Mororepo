import react from '@vitejs/plugin-react-swc'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig, mergeConfig, UserConfigExport } from 'vite'

const vitePreset = (config?: UserConfigExport) =>
    mergeConfig(
        defineConfig({
            server: {
                host: 'localhost'
            },

            plugins: [
                react({ jsxImportSource: '@emotion/react' }),
                viteTsConfigPaths({
                    root: '../../'
                })
            ],

            test: {
                environment: 'node',
                passWithNoTests: true,
                globals: true,
                cache: {
                    dir: '../../node_modules/.vitest'
                },
                coverage: {
                    enabled: true
                }
            }
        }),
        defineConfig(config || {})
    )

export const viteJsDomPreset = ({ port }: { port: number }) =>
    vitePreset({
        server: { port },
        test: { environment: 'jsdom' }
    })

export const viteNodePreset = vitePreset
