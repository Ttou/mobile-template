import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import html from 'vite-plugin-html'
import svgIcons from 'vite-plugin-svg-icons'

import { browserslist } from './package.json'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src')
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
    svgIcons({
      iconDirs: [resolve('src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    html({
      inject: {
        data: {
          title: '移动端模板',
          injectScript: '<script src="./inject.js"></script>'
        }
      },
      minify: true
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
