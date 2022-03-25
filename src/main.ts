import 'virtual:svg-icons-register'

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
