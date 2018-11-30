<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Menu', link: { name: 'docsMenu' }}]" />
      <h5>Menu</h5>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs } from './../components'

export default {
  name: 'DocsMenu',
  components: {
    ZContainer, ZBreadcrumbs
  }
}
</script>

<style lang="scss" scoped>
</style>
