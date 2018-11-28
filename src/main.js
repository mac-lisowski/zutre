
import Vue from 'vue'
import Demo from './Demo.vue'
import Zutre from './components'

// export default Zutre
Vue.use(Zutre.Breadcrumbs)

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')