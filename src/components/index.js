export { default as Head } from './head'
export { default as Foot } from './foot'
export { default as Person } from './person'
export { default as Recent } from './recent'
export { default as ArticleList } from './articleList'
export const WangEdit = () => import(/* webpackChunkName: "WangEdit" */ './WangEdit')

import Card from './Card'

export const components = Vue => {
  Vue.component('Card', Card)
}
