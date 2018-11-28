<template>

  <z-breadcrumbs :items="[{ name: 'Home', href: '/'}]" />

</template>
<script>
import { ZBreadcrumbs } from './components'
export default {
  name: 'Demo',
  components: {
    ZBreadcrumbs
  }
}
</script>
