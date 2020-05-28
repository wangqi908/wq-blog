// import Vue from "vue";
import Vuex from 'vuex'
import menu from './modules/menu'
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
  modules: {menu}
})
