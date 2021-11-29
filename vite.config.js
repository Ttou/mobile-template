import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import svgIcons from 'vite-plugin-svg-icons'

import { browserslist } from './package.json'

export default defineConfig({
  cacheDir: resolve('.vite'),
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      enableObjectSlots: false
    }),
    vanillaExtractPlugin(),
    legacy({
      targets: browserslist
    }),
    compression(),
    svgIcons({
      iconDirs: [resolve(__dirname, 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    injectHtml({
      injectData: {
        title: '移动端模板',
        injectScript: '<script src="./inject.js"></script>'
      }
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
