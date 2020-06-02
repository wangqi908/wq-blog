import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import filters from '@/utils/filters'
import { components } from '@/components'

Vue.use(filters)
Vue.use(components)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
