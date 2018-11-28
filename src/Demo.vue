<template>
  <div>
  <z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" />
  
  <z-breadcrumbs>
    <z-breadcrumbs-item name="Test" href="/test" />
    <!-- <z-breadcrumbs-item name="Test 2" :link="{ to: 's'}" /> -->
    <z-breadcrumbs-item name="Test 2" href="/all-good" />
    <z-breadcrumbs-item href="/custom">custom</z-breadcrumbs-item>
  </z-breadcrumbs>

  </div>
</template>
<script>
import { ZBreadcrumbs, ZBreadcrumbsItem } from './components'
export default {
  name: 'Demo',
  components: {
    ZBreadcrumbs, ZBreadcrumbsItem
  }
}
</script>
