import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig, UserConfig } from 'vite'

type config = {
    port: number
}

const vitePreset = ({
    port,
    environment
}: {
    environment: NonNullable<NonNullable<UserConfig['test']>['environment']>
} & config) =>
    defineConfig({
        server: {
            port,
            host: 'localhost'
        },

        plugins: [
            react(),
            viteTsConfigPaths({
                root: '../../'
            })
        ],

        test: {
            passWithNoTests: true,
            globals: true,
            cache: {
                dir: '../../node_modules/.vitest'
            },
            environment,
            coverage: {
                enabled: true
            }
        }
    })

export const viteReactPreset = ({ port }: config) =>
    vitePreset({ port, environment: 'jsdom' })

export const viteNodePreset = ({ port }: config) =>
    vitePreset({ port, environment: 'node' })
