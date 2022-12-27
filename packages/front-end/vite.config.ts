import { defineConfig } from 'vite'
import { vitePreset } from '../../presets'

vitePreset.server.port = 4200

export default defineConfig(vitePreset)
