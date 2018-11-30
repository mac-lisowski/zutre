<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Flexbox grid', link: { name: 'docsFlexbox' }}]" />
      <h5>Flexbox grid</h5>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs } from './../components'

export default {
  name: 'DocsFlexbox',
  components: {
    ZContainer, ZBreadcrumbs
  }
}
</script>

<style lang="scss" scoped>
</style>
