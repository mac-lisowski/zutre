<template>
  <z-container>
    <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Breadcrumbs', link: { name: 'docsBreadcrumbs' }}]" />

    <h4>Breadcrumbs</h4>

    <p>
      Components: 
      <code>&lt;z-breadcrumbs&gt;</code>,<code>&lt;z-breadcrumbs-item&gt;</code>
    </p>

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

    <z-divider content="API" />
    <h4>API</h4>

    <h5>Breadcrumbs <code>&lt;z-breadcrumbs /&gt;</code></h5>
    <z-table>
      <z-thead>
        <z-th>Name</z-th>
        <z-th>Description</z-th>
        <z-th>Type</z-th>
        <z-th>Values</z-th>
        <z-th>Default</z-th>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td><code>items</code></z-td>
          <z-td>
            array of objects with information about items eg: <br>
            <small><code>
[
  { name: 'Home', link: { name: 'home' }}, 
  { name: 'About', href: '/about' }
]
</code></small><br>
<br>
          <small><code>href</code> - url</small><br>
          <small><code>link</code> - use instead of <code>href</code> if you want to generate <code>router-link</code> component from vue-router</small>
          </z-td>
          <z-td>Array[Object]</z-td>
          <z-td>---</z-td>
          <z-td>---</z-td>
        </z-tr>
      </z-tbody>
    </z-table>

    <br>

      <h5>BreadcrumbsItem <code>&lt;z-breadcrumbs-item /&gt;</code></h5>
      <z-table>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>name</code></z-td>
            <z-td>link name</z-td>
            <z-td>String</z-td>
            <z-td>required</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>href</code></z-td>
            <z-td>link url</z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>link</code></z-td>
            <z-td>use instead of <code>href</code> if you want to generate <code>router-link</code> component from <strong>vue-router</strong></z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      

  </z-container>
</template>
<script>
import { ZCode, ZBreadcrumbs, ZBreadcrumbsItem } from './../components'
import { ZContainer, ZColumns, ZColumn, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsAbout',
  components: {
    ZCode, 
    ZBreadcrumbs, ZBreadcrumbsItem,
    ZContainer, ZColumns, ZColumn, ZDivider,
    ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
    
  }
}
</script>

<style lang="scss" scoped>
</style>
