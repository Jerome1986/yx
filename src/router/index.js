import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/home',
      children: [
        { path: '/home', component: () => import('@/views/home/Home.vue') },
        { path: '/case', component: () => import('@/views/case/Case.vue') },
        {
          path: '/about',
          component: () => import('@/views/aboutUs/AboutUs.vue')
        },
        {
          path: '/contract',
          component: () => import('@/views/contractUs/ContractUs.vue')
        }
      ]
    },
    { path: '/login', component: () => import('@/views/login/Login.vue') }
  ]
})

// 路由守卫 未登录时 拦截到登录页
router.beforeEach(() => {})

export default router
