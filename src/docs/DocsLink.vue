<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Utilities' }, { name: 'Link', link: { name: 'docsLink' }}]" />
      <h5>Link</h5>

      The Link is used for generating <mark>&lt;a href=""&gt;&lt;/a&gt;</mark> tags or <mark>&lt;router-link :to=""&gt;&lt;/router-link&gt;</mark>.

      <z-divider />

      Go to: <z-link href="/">Home</z-link>, <z-link href="/about" name="About" />

      <z-code lang="Vue">import { ZLink } from 'zutre'

&lt;z-link href="/about" name="About /&gt;
</z-code>

      <z-divider content="OR" />

      Go to: <z-link :link="{ name: 'home' }">Home</z-link>, <z-link :link="{ name: 'about' }" name="About" />
      <z-code lang="Vue">import { ZLink } from 'zutre'

&lt;z-link :link="{ name: 'about ' }" name="About /&gt;
</z-code>


    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZLink } from './../components'

export default {
  name: 'DocsDivider',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZLink
  }
}
</script>

<style lang="scss" scoped>
</style>
