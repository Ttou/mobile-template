import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import visualizer from 'rollup-plugin-visualizer'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'
import { viteVConsole } from 'vite-plugin-vconsole'

import { browserslist } from './package.json'

const versionNo = new Date().getTime()

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
        resolvers: [
          VantResolver({
            importStyle: false
          })
        ]
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: '移动端模板',
            injectVer: `<meta name="version-no" content="${versionNo}"/>`
          }
        },
        minify: true
      }),
      eslint(),
      stylelint(),
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
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      rollupOptions: {
        plugins: [visualizer()]
      }
    },
    server: {
      host: true,
      port: 8080
    }
  }
})
