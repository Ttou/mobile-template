import { createRouter, createWebHashHistory } from 'vue-router'
import { Route } from './constants'

export { Route }

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
      path: Route.index,
      component: () => import('@/views/index'),
      meta: { index: 1 }
    },
    {
      path: Route.category,
      component: () => import('@/views/category'),
      meta: { index: 1 }
    },
    {
      path: Route.shop,
      component: () => import('@/views/shop'),
      meta: { index: 1 }
    },
    {
      path: Route.cart,
      component: () => import('@/views/cart'),
      meta: { index: 1 }
    },
    {
      path: Route.my,
      component: () => import('@/views/my'),
      meta: { index: 1 }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { path: Route.index }
    }
  ]
})
