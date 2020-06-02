import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import { components } from '@/components'
import filters from '@/utils/filters'

store.commit('setPropList', [])
store.dispatch('getPropListAction', {})

Vue.use(components)
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')