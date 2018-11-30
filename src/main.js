
import Vue from 'vue'
import Router from 'vue-router'

import DocsAbout from './docs/DocsAbout.vue'
import DocsHome from './docs/DocsHome.vue'

import Docs from './Docs.vue'


Vue.config.productionTip = false

Vue.use(Router)
let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: DocsHome
    },
    {
      path: '/about',
      name: 'about',
      component: DocsAbout
    },
    {
      path: '/installation',
      name: 'installation',
      component: () => import('./docs/DocsInstallation.vue')
    },

    {
      path: '/elements/buttons',
      name: 'docsButtons',
      component: () => import('./docs/DocsButtons.vue')
    },
    {
      path: '/elements/label',
      name: 'docsLabel',
      component: () => import('./docs/DocsLabel.vue')
    },

    {
      path: '/layout/hero',
      name: 'docsHero',
      component: () => import('./docs/DocsHero.vue')
    },
    {
      path: '/layout/flexbox',
      name: 'docsFlexbox',
      component: () => import('./docs/DocsFlexbox.vue')
    },

    {
      path: '/components/breadcrumbs',
      name: 'docsBreadcrumbs',
      component: () => import('./docs/DocsBreadcrumbs.vue')
    },
    {
      path: '/components/card',
      name: 'docsCard',
      component: () => import('./docs/DocsCards.vue')
    },
    {
      path: '/components/menu',
      name: 'docsMenu',
      component: () => import('./docs/DocsMenu.vue')
    },

    {
      path: '/utilities/divider',
      name: 'docsDivider',
      component: () => import('./docs/DocsDivider.vue')
    },
    {
      path: '/utilities/link',
      name: 'docsLink',
      component: () => import('./docs/DocsLink.vue')
    }
  ]
})

new Vue({
  router,
  render: h => h(Docs)
}).$mount('#app')