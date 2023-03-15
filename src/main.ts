import './assets/icons'
import './assets/styles'

import { createApp } from 'vue'

import App from './App'
import { useErrorHandler } from './hooks'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

useErrorHandler(app)

app.mount('#app')
