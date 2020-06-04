import ToastComponent from './ToastComponent.vue'
export default {
  install(Vue) {
    const Toast = Vue.extend(ToastComponent)
    let instance = new Toast({
      el: document.createElement('div')
    })

    let toast = options => {
      let defaultOptions = {
        type: '', // String
        duration: 3000, // Number
        msg: ''
      }

      options = Object.assign(defaultOptions, options)

      let { msg, duration } = options

      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
      instance.show = true
      instance.msg = msg
      setTimeout(() => {
        instance.show = false
      }, duration)
    }

    Vue.prototype.$toast = toast
  }
}
