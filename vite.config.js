import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import styleImport from 'vite-plugin-style-import'
import svgIcons from 'vite-plugin-svg-icons'

import { browserslist } from './package.json'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'vue-types',
        replacement:
          process.env.NODE_ENV === 'development'
            ? 'vue-types'
            : 'vue-types/shim'
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
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => {
            return `vant/es/${name}/style/index`
          }
        }
      ]
    }),
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
