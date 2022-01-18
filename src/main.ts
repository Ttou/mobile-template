import 'virtual:svg-icons-register'
import 'vant/lib/index.css'

import { createPinia } from 'pinia'
import Vant from 'vant'
import { createApp } from 'vue'

import App from './App'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(Vant)
app.use(router)
app.use(pinia)

app.mount('#app')
