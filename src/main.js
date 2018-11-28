
import Vue from 'vue'
import Docs from './Docs.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Docs)
}).$mount('#app')