// import Vue from "vue";
import Vuex from 'vuex'

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
  modules: {}
})
