import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vite-plugin-svg-icons/register'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
