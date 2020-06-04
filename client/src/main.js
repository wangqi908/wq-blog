import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import { components } from '@/components'
import filters from '@/filters'
import Toast from './plugins/toast/index.js'
import Loading from './plugins/loading/index.js'
import Meta from 'vue-meta'
store.commit('setPropList', [])
store.dispatch('getPropListAction', {})

Vue.use(components)
Vue.use(filters)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Meta)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
