<template>
  <div>
    <h1>Zutre</h1>
    <h2>Lightweight UI components for Vue.js based on Spectre CSS Framework</h2>

    <strong>In Development</strong>

    <z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" />
    
    <z-breadcrumbs>
      <z-breadcrumbs-item name="Test" href="/test" />
      <!-- <z-breadcrumbs-item name="Test 2" :link="{ to: 's'}" /> -->
      <z-breadcrumbs-item name="Test 2" href="/all-good" />
      <z-breadcrumbs-item href="/custom">custom</z-breadcrumbs-item>
    </z-breadcrumbs>
    
    <z-card></z-card>
  </div>
</template>
<script>
import { ZBreadcrumbs, ZBreadcrumbsItem } from './components'
import { ZCard } from './components'

export default {
  name: 'Demo',
  components: {
    ZBreadcrumbs, ZBreadcrumbsItem,
    ZCard
  }
}
</script>
