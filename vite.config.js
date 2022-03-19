import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteVConsole } from 'vite-plugin-vconsole'

import { browserslist } from './package.json'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      enableObjectSlots: false
    }),
    legacy({
      targets: browserslist
    }),
    compression(),
    createHtmlPlugin({
      inject: {
        data: {
          title: '移动端模板'
        }
      },
      minify: true
    }),
    createStyleImportPlugin({
      resolves: [VantResolve()]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve('src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    viteVConsole({
      entry: resolve('src/main.ts'),
      enabled: true,
      localEnabled: true
    })
  ],
  build: {
    brotliSize: false
  },
  server: {
    host: true,
    port: 8080
  }
})
