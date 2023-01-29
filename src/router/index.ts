import { createRouter, createWebHashHistory } from 'vue-router'

import constRoutes from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  },
  routes: constRoutes
})

export default router
