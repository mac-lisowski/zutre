import Vue from 'vue'
import './../scss/main.scss'

import Breadcrumbs from './Breadcrumbs'

const Components = {
  Breadcrumbs
}

Object.keys(Components).forEach(name => {
  Vue.component(Components[name].name, Components[name])
})

export default Components