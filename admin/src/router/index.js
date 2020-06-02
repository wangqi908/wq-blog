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
        component: () => import(/* webpackChunkName: "post" */ '../views/post'),
        meta: { requireAuth: true, title: '文章' }
      },
      {
        path: '/post/add',
        name: 'post-add',
        component: () => import(/* webpackChunkName: "post-add" */ '../views/post/add'),
        meta: { requireAuth: true, title: '文章添加', modules: 'post' }
      },
      {
        path: '/post/view/:id?',
        name: 'post-view',
        component: () => import(/* webpackChunkName: "post-view" */ '../views/post/view'),
        meta: { requireAuth: true, title: '文章详情', modules: 'post' }
      },
      {
        path: '/post/edit/:id?',
        name: 'post-edit',
        component: () => import(/* webpackChunkName: "post-edit" */ '../views/post/edit'),
        meta: { requireAuth: true, title: '文章修改', modules: 'post' }
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
