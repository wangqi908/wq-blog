// import Vue from "vue";
import Vuex from 'vuex'
import menu from './modules/menu'
import post from './modules/post'
// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowRightDom: false,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWMyMmYzODM4ZDc0NzNhMjAzZDI0MGYiLCJ1c2VybmFtZSI6IndxMTIzIiwiaWF0IjoxNTkwOTc2NDMzLCJleHAiOjE1OTEwMTI0MzN9.8kTBINyjg0Eg0gxuu7RhQZ3uuQQ3Nv6BCPCrlYtNLlU'
  },
  mutations: {
    setShowRightDom(state, payload) {
      state.isShowRightDom = payload
    }
  },
  actions: {},
  modules: { menu, post }
})
