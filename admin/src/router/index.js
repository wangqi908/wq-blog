import VueRouter from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login'),
    meta: { title: 'wq-blog' }
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '@c/layout'),
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home'),
        meta: { requireAuth: true, title: '首页' }
      },
      {
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "edit" */ '../views/post'),
        meta: { requireAuth: true, title: '文章' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '管理中心'
  if (to.meta.requireAuth) {
    let token = store.state.token
    if (token) {
      next()
    } else {
      next({ path: `/login?re=${decodeURIComponent(to.fullPath)}` })
    }
  } else {
    next()
  }
})

export default router
