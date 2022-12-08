import { createRouter, createWebHashHistory } from 'vue-router'

import { ROUTE } from './constants'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      ...ROUTE.INDEX,
      component: () => import('@/views/index'),
      meta: {}
    },
    {
      ...ROUTE.CATEGORY,
      component: () => import('@/views/category'),
      meta: {}
    },
    {
      ...ROUTE.SHOP,
      component: () => import('@/views/shop'),
      meta: {}
    },
    {
      ...ROUTE.CART,
      component: () => import('@/views/cart'),
      meta: {}
    },
    {
      ...ROUTE.MY,
      component: () => import('@/views/my'),
      meta: {}
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { path: ROUTE.INDEX.path }
    }
  ]
})

export { ROUTE }

export default router
