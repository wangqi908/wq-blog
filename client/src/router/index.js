import VueRouter from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test')
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
        meta: { title: '王琦的博客' }
      },
      {
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '../views/post'),
        meta: { title: '文章' }
      },
      {
        path: '/post/view/:id?',
        name: 'post-view',
        component: () => import(/* webpackChunkName: "post-view" */ '../views/post/view'),
        meta: { title: '详情' }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about'),
        meta: { title: '关于' }
      }
    ]
  },
  {
    title: 'notFound',
    path: '/404',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/error/notFound'),
    out: true,
    meta: { title: 'notFound' }
  },
  {
    path: '*',
    redirect: '/404',
    type: 'notFound'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '王琦的博客'
  next()
})

export default router
