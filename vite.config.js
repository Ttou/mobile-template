import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import compression from 'vite-plugin-compression'
import styleImport from 'vite-plugin-style-import'
import svgIcons from 'vite-plugin-svg-icons'
import { injectHtml } from 'vite-plugin-html'
import { browserslist } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
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
  server: {
    port: 8080
  }
})
