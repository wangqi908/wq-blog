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
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWMyMmYzODM4ZDc0NzNhMjAzZDI0MGYiLCJ1c2VybmFtZSI6IndxMTIzIiwiaWF0IjoxNTkwOTc2NDMzLCJleHAiOjE1OTEwMTI0MzN9.8kTBINyjg0Eg0gxuu7RhQZ3uuQQ3Nv6BCPCrlYtNLlU'
  },
  mutations: {
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
