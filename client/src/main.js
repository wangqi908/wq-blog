import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import { components } from '@/components'
import filters from '@/utils/filters'
import Toast from './plugins/toast/index.js'
import Loading from './plugins/loading/index.js'
store.commit('setPropList', [])
store.dispatch('getPropListAction', {})

Vue.use(components)
Vue.use(filters)
Vue.use(Toast)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
