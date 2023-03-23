import postcssPxToViewport from '@ttou/postcss-px-to-viewport'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import ejs from 'ejs'
import { resolve } from 'path'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv, PluginOption } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import imp from 'vite-plugin-imp'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'
import { viteVConsole } from 'vite-plugin-vconsole'

import { browserslist } from './package.json'

/**
 * index.html 处理插件
 * @param options 写法参照 ejs 文档
 * @see https://ejs.co/#docs
 */
function processIndexHtml(options: Record<string, any>): PluginOption {
  return {
    name: 'self:processHtml',
    enforce: 'pre',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return ejs.render(html, { ...options }, { root: __dirname })
      }
    }
  }
}

// @ts-ignore
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
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
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
      processIndexHtml({
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
