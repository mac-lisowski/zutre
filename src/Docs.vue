<template>
  <div>
    <h1>Zutre</h1>
    <h2>Lightweight UI components for Vue.js based on Spectre CSS Framework</h2>

    <strong>In Development</strong>

    <z-container>
      <z-columns>
        <z-column>
          <z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" />

          <z-breadcrumbs>
            <z-breadcrumbs-item name="Test" href="/test" />
            <!-- <z-breadcrumbs-item name="Test 2" :link="{ to: 's'}" /> -->
            <z-breadcrumbs-item name="Test 2" href="/all-good" />
            <z-breadcrumbs-item href="/custom">custom</z-breadcrumbs-item>
          </z-breadcrumbs>
          
        </z-column>
      </z-columns>

      <z-columns>
        
        <z-column>
          <z-card></z-card>
        </z-column>
        <z-column>
          TEST
        </z-column>

      </z-columns>

      <z-columns :oneline="false" :gapless="false">
        
        <z-column :size=3 :mxAuto="false" :mlAuto="false" :mrAuto="false">
          <z-card></z-card>
        </z-column>

        <z-column :size=3>
          TEST
        </z-column>

        <z-column :size=3>
          <z-card></z-card>
        </z-column>
        <z-column :size=3>
          TEST
        </z-column>

      </z-columns>

    </z-container>
  </div>
</template>
<script>
import { ZBreadcrumbs, ZBreadcrumbsItem } from './components'
import { ZCard } from './components'
import { ZContainer, ZColumns, ZColumn } from './components'

export default {
  name: 'Demo',
  components: {
    ZBreadcrumbs, ZBreadcrumbsItem,
    ZCard,
    ZContainer, ZColumns, ZColumn
  }
}
</script>
