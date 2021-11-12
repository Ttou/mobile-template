import 'virtual:svg-icons-register'
import 'vant/lib/index.css'

import Vant from 'vant'
import { createApp } from 'vue'

import App from './App'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(store)

app.mount('#app')
