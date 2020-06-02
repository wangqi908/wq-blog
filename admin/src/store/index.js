// import Vue from "vue";
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import menu from './modules/menu'
import post from './modules/post'
// Vue.use(Vuex);
import { propListReq } from '@api'

export default new Vuex.Store({
  state: {
    isShowRightDom: false,
    propList: [],
    token: ''
  },
  mutations: {
    // 设置token
    setToken(state, payload = '') {
      state.token = payload
    },
    setShowRightDom(state, payload) {
      state.isShowRightDom = payload
    },
    setPropList(state, payload) {
      state.propList = payload
    }
  },
  actions: {
    getPropListAction({ commit }, payload) {
      if (this.state.propList.length !== 0) return
      return new Promise(resolve => {
        propListReq(payload).then(res => {
          if (res.data.code === 200) {
            let resData = res.data.data
            commit('setPropList', resData)
            resolve(resData)
          }
        })
      })
    }
  },
  modules: { menu, post },
  plugins: [
    createPersistedState({
      reducer(val) {
        return {
          token: val.token,
          propList: val.propList
        }
      }
    })
  ]
})
