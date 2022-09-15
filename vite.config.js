import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteVConsole } from 'vite-plugin-vconsole'

import { browserslist } from './package.json'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/mobile-template/',
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
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
      components({
        dts: false,
        resolvers: [VantResolver()]
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: '移动端模板'
          }
        },
        minify: true
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve('src/icons')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: true
      }),
      viteVConsole({
        entry: resolve('src/main.ts'),
        enabled: true,
        localEnabled: true
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
        prodEnabled: true,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'
          setupProdMockServer()
        `
      })
    ],
    build: {
      brotliSize: false
    },
    server: {
      host: true,
      port: 8080
    }
  }
})
