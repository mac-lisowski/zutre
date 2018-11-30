<template>
  <z-container>
    <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Breadcrumbs', link: { name: 'docsBreadcrumbs' }}]" />

    <h5>Breadcrumbs</h5>
    <z-columns>
      <z-column>
        <z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" />

        <z-code lang="Vue">
import { ZBreadcrumbs } from 'zutre'

&lt;z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" /&gt;
</z-code>

        <z-breadcrumbs>
          <z-breadcrumbs-item name="Dashboard" href="/" />
          <z-breadcrumbs-item name="Settings" href="/settings" />
        </z-breadcrumbs>

<z-code lang="Vue">
import { ZBreadcrumbs } from 'zutre'

&lt;z-breadcrumbs&gt;
  &lt;z-breadcrumbs-item na me="Dashboard" href="/" /&gt;
  &lt;z-breadcrumbs-item name="Settings" href="/settings" /&gt;
&lt;/z-breadcrumbs&gt;</z-code>

      </z-column>
    </z-columns>
    
      <z-divider content="OR" />
      <br>

    <z-columns>
      <z-column>
        <p>If you are using <a href="https://router.vuejs.org/" target="_blank"><strong>vue-router</strong></a> 
        instead of <code>href</code> parameter you could use <code>link</code> and pass object as if you would be 
        passing it to <code>&lt;router-link :to="" /&gt;</code></p>

        <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'About', link: { name: 'about' }}]" />

        <z-code lang="Vue">
import { ZBreadcrumbs } from 'zutre'

&lt;z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'About', link: { name: 'about' }}]" /&gt;</z-code>
<z-code lang="Vue">
import { ZBreadcrumbs, ZBreadcrumbsItem } from 'zutre'

&lt;z-breadcrumbs&gt;
  &lt;z-breadcrumbs-item name="Dashboard" href="/" /&gt;
  &lt;z-breadcrumbs-item name="Settings" href="/settings" /&gt;
&lt;z-breadcrumbs&gt;</z-code>

      </z-column>
    </z-columns>
  </z-container>
</template>
<script>
import { ZCode, ZBreadcrumbs, ZBreadcrumbsItem } from './../components'
import { ZContainer, ZColumns, ZColumn, ZDivider } from './../components'

export default {
  name: 'DocsAbout',
  components: {
    ZCode, 
    ZBreadcrumbs, ZBreadcrumbsItem,
    ZContainer, ZColumns, ZColumn, ZDivider
  }
}
</script>

<style lang="scss" scoped>
</style>
