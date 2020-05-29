import { postPageReq } from '@api'
export default {
  namespaced: true,
  state: {
    postPage: {}
  },
  mutations: {
    setPostPage(state, payload) {
      state.postPage = payload
    }
  },
  actions: {
    getPostListAction({ commit, payload }) {
      return new Promise(resolve => {
        postPageReq(payload).then(res => {
          if (res.data.code === 200) {
            let resData = res.data.data
            commit('setPostPage', resData)
            resolve(resData)
          }
        })
      })
    }
  }
}
