import { defineConfig } from 'vite'
import { vitePreset } from '../../preset'

vitePreset.server.port = 4200

export default defineConfig(vitePreset)
