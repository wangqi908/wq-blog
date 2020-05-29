// import Vue from "vue";
import VueRouter from 'vue-router'

// Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '@c/layout'),
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import(/* webpackChunkName: "article" */ '../views/article')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '../views/edit')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
