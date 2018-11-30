<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Code', link: { name: 'docsCode' }}]" />
      <h5>Code</h5>

      <p>Code is used for styling inline and multiline code snippets.</p>

      <z-divider content="EXAMPLE" />
      <br>
      <z-code>code</z-code>
      
<z-code lang="Vue">
import { ZCode } from 'zutre'

&lt;z-code&gt;code&lt;/z-code&gt;
</z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZDivider } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider
  }
}
</script>
