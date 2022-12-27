import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import nxPreset from '@nrwl/jest/preset'

export const vitePreset = {
    server: {
        port: 4200,
        host: 'localhost'
    },

    plugins: [
        react(),
        viteTsConfigPaths({
            root: '../../'
        })
    ],

    test: {
        globals: true,
        cache: {
            dir: '../../node_modules/.vitest'
        },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    }
}

nxPreset.transform['^.+\\.(ts|js|html)$'] = 'babel-jest'
export const jestNodePreset = {
    ...nxPreset,
    testEnvironment: 'node'
}
