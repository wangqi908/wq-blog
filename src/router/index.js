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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
