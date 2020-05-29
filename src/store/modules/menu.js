export default {
  namespaced: true,
  state: {
    menuList: [
      {
        id: 0,
        title: '首页',
        path: '/index'
      },
      {
        id: 1,
        title: '文章',
        path: '/post'
      },
      {
        id: 2,
        title: '写文章',
        path: '/edit'
      },
      {
        id: 3,
        title: '关于',
        path: '/about'
      }
    ]
  },
  mutations: {}
}
