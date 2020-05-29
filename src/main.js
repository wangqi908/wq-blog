import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import { components } from '@/components'
import { Button, Input, Select, Option, Form, FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(components)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
