export { default as Head } from './head'
export { default as Person } from './person'
export { default as Recent } from './recent'

import Card from './Card'

export const components = Vue => {
  Vue.component('Card', Card)
}
