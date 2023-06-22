import { resolve } from 'node:path'

import postcssPxToViewport from '@ttou/postcss-px-to-viewport'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import imp from 'vite-plugin-imp'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'
import { viteVConsole } from 'vite-plugin-vconsole'

import { browserslist } from './package.json'
import { customHtml } from './vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    base: mode === 'development' ? '/' : `/${env.VITE_APP_NAME}/`,
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      },
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPxToViewport({
            viewportWidth: 375
          })
        ]
      }
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`
        }
      ]
    },
    plugins: [
      vue(),
      legacy({
        targets: browserslist
      }),
      compression(),
      eslint({
        lintInWorker: true
      }),
      stylelint({
        lintInWorker: true
      }),
      imp({
        libList: [
          {
            libName: 'vant',
            replaceOldImport: false,
            style: name => {
              switch (name) {
                case 'show-loading-toast':
                case 'show-success-toast':
                case 'show-fail-toast':
                case 'show-notify':
                case 'close-notify':
                case 'show-dialog':
                case 'show-confirm-dialog':
                  return false
                  break
                default:
                  break
              }

              return `vant/es/${name}/style/index`
            }
          }
        ]
      }),
      customHtml({
        injectVer: `<meta name="version-no" content="${new Date().getTime()}"/>`,
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`
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
    optimizeDeps: {
      include: ['lodash-unified'],
      exclude: ['vue-demi']
    },
    build: {
      cssTarget: ['chrome61'],
      chunkSizeWarningLimit: 1024,
      reportCompressedSize: false,
      rollupOptions: {
        plugins: [visualizer()],
        output: {
          manualChunks(id) {
            if (/[\\/]node_modules[\\/]/.test(id)) {
              return 'chunk-libs'
            }
          }
        }
      }
    },
    server: {
      host: true,
      open: true,
      port: 8080
    }
  }
})
