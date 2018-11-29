<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Installation', link: { name: 'installation' }}]" />

      <h5>Installation</h5>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs } from './../components'

export default {
  name: 'DocsInstallation',
  components: {
    ZContainer, ZBreadcrumbs
  }
}
</script>

<style lang="scss" scoped>
</style>
