export { default as Head } from './head'
export { default as Foot } from './foot'
export { default as Person } from './person'
export { default as Recent } from './recent'
export { default as PostList } from './postList'
export const WangEdit = () => import(/* webpackChunkName: "WangEdit" */ './WangEdit')
export const MarkdownEditor = () => import(/* webpackChunkName: "MarkdownEditor" */ './MarkdownEditor')

import Card from './Card'

export const components = Vue => {
  Vue.component('Card', Card)
}
