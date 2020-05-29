// import Vue from "vue";
import Vuex from 'vuex'
import menu from './modules/menu'
import post from './modules/post'
// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowRightDom: false
  },
  mutations: {
    setShowRightDom(state, payload) {
      state.isShowRightDom = payload
    }
  },
  actions: {},
  modules: { menu, post }
})
