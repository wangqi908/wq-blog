export { default as Captcha } from './Captcha'
export { default as Head } from './head'
export { default as Menu } from './menu'
export const MarkdownEditor = () => import(/* webpackChunkName: "MarkdownEditor" */ './MarkdownEditor')

import MyPagination from './MyPagination'
import DelDialog from './DelDialog'
import Upload from './Upload'

export const components = Vue => {
  Vue.component('MyPagination', MyPagination)
  Vue.component('DelDialog', DelDialog)
  Vue.component('Upload', Upload)
}
