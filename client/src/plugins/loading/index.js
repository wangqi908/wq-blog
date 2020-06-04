// loading.js
import LoadingComponent from './LoadingComponent.vue'
export default {
  install(Vue) {
    const Loading = Vue.extend(LoadingComponent)
    let instance = new Loading({
      el: document.createElement('div')
    })

    let loading = {
      show() {
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.show = true
      },

      hide() {
        instance.show = false
      }
    }

    Vue.prototype.$loading = loading
  }
}
