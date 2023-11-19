import './assets/icons'
import './assets/styles'

import { createApp } from 'vue'

import App from './App.vue'
import { useErrorHandler, useMock, useVant } from './hooks'
import router from './router'
import store from './store'
import { ajax } from './utils'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store)

  useErrorHandler(app)
  useVant(app)
  useMock(ajax)

  await router.isReady()

  app.mount('#app')
}
bootstrap()
