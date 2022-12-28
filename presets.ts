import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig, UserConfig } from 'vite'

type config = {
    port: number
}

const vitePreset = ({
    port,
    environment,
    plugins
}: {
    environment: NonNullable<NonNullable<UserConfig['test']>['environment']>
    plugins: NonNullable<UserConfig['plugins']>
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
            }),
            ...plugins
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
    vitePreset({ port, environment: 'jsdom', plugins: react() })

export const viteNodePreset = ({ port }: config) =>
    vitePreset({ port, environment: 'node', plugins: [] })
