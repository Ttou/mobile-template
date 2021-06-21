import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTE } from './constants'

export { ROUTE }

export default createRouter({
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
      meta: { index: 1 }
    },
    {
      ...ROUTE.CATEGORY,
      component: () => import('@/views/category'),
      meta: { index: 1 }
    },
    {
      ...ROUTE.SHOP,
      component: () => import('@/views/shop'),
      meta: { index: 1 }
    },
    {
      ...ROUTE.CART,
      component: () => import('@/views/cart'),
      meta: { index: 1 }
    },
    {
      ...ROUTE.MY,
      component: () => import('@/views/my'),
      meta: { index: 1 }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { path: ROUTE.INDEX.path }
    }
  ]
})
