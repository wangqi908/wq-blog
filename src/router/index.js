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
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '../views/post')
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
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test')
  }
]

const router = new VueRouter({
  routes
})

export default router
