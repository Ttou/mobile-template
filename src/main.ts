import 'virtual:svg-icons-register'
// tsx 下必须全局引入样式
import 'vant/lib/index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App'
import router from './router'
import { errorHandler } from './utils'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.config.errorHandler = errorHandler

app.mount('#app')
