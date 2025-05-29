import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: ['node_modules', 'dist', 'src/native/*'],
    coverage: {
      exclude: ['node_modules', 'dist', 'src/native/*', 'vitest.config.js', 'src/config/module-alias.ts'],
    }
  },
  include: ['tests/**/*.(test|spec).ts'],
  exclude: ['node_modules', 'dist'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@native': path.resolve(__dirname, 'src/native/index.js')
    },
  },
})