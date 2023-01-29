import type { RouteRecordRaw } from 'vue-router'

import { CONST_ROUTES } from '@/constants'

export default [
  {
    ...CONST_ROUTES.INDEX,
    component: () => import('@/views/index/index.vue'),
    meta: {}
  },
  {
    ...CONST_ROUTES.CATEGORY,
    component: () => import('@/views/category/index.vue'),
    meta: {}
  },
  {
    ...CONST_ROUTES.SHOP,
    component: () => import('@/views/shop/index.vue'),
    meta: {}
  },
  {
    ...CONST_ROUTES.CART,
    component: () => import('@/views/cart/index.vue'),
    meta: {}
  },
  {
    ...CONST_ROUTES.MY,
    component: () => import('@/views/my/index.vue'),
    meta: {}
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: CONST_ROUTES.INDEX.path }
  }
] as RouteRecordRaw[]
