
import Vue from 'vue'
import Router from 'vue-router'

import DocsAbout from './docs/DocsAbout.vue'
import DocsHome from './docs/DocsHome.vue'

import Docs from './Docs.vue'


Vue.config.productionTip = false

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/zutre',
      name: 'home',
      component: DocsHome
    },
    {
      path: '/zutre/about',
      name: 'about',
      component: DocsAbout
    },
    {
      path: '/zutre/installation',
      name: 'installation',
      component: () => import('./docs/DocsInstallation.vue')
    },

    {
      path: '/zutre/layout/hero',
      name: 'docsHero',
      component: () => import('./docs/DocsHero.vue')
    },

    {
      path: '/zutre/components/buttons',
      name: 'docsButtons',
      component: () => import('./docs/DocsButtons.vue')
    },
    {
      path: '/zutre/components/breadcrumbs',
      name: 'docsBreadcrumbs',
      component: () => import('./docs/DocsBreadcrumbs.vue')
    },
  ]
})

new Vue({
  router,
  render: h => h(Docs)
}).$mount('#app')