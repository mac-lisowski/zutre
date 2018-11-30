<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Flexbox grid', link: { name: 'docsFlexbox' }}]" />
      <h5>Flexbox grid</h5>

      <p>Layout includes flexbox based responsive grid system with 12 columns.</p>

      <z-divider />

      <z-columns>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="12">
          <div class="bg-gray docs-block">col-12 (100%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="9">
          <div class="bg-gray docs-block">col-9 (75%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="6">
          <div class="bg-gray docs-block">col-6 (50%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="3">
          <div class="bg-gray docs-block">col-3 (25%)</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="12"&gt;col-12&lt;/z-column&gt;  
    &lt;z-column :size="9"&gt;col-9&lt;/z-column&gt;  
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;  
    &lt;z-column :size="3"&gt;col-3&lt;/z-column&gt;
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZCode, ZDivider, ZBreadcrumbs, ZColumns, ZColumn } from './../components'

export default {
  name: 'DocsFlexbox',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZColumns, ZColumn, ZDivider

  }
}
</script>

<style lang="scss" scoped>

</style>
