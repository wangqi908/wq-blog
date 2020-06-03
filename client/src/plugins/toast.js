// toast.js
var Toast = {}
Toast.install = function(Vue) {
  Vue.prototype.$toast = options => {
    let defaultOptions = {
      type: '', // String
      duration: 1000, // Number
      msg: ''
    }
    options = Object.assign(defaultOptions, options)

    let { msg } = options
    // let { type, duration, msg } = options

    let ToastTpl = Vue.extend({
      // 1、创建构造器，定义好提示信息的模板
      template: `
      <div class="vue-toast-mask">
        <div class="vue-toast-msg"> ${msg} </div>
      </div>
      `
    })
    let tpl = new ToastTpl().$mount().$el // 2、创建实例，挂载到文档以后的地方
    let app = document.getElementById('app')
    app.appendChild(tpl) // 3、把创建的实例添加到body中
    setTimeout(() => {
      // 4、延迟2.5秒后移除该提示
      app.removeChild(tpl)
    }, 2500)
  }
}
module.exports = Toast
