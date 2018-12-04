<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Nav', link: { name: 'docsNav' }}]" />
      <h4>Nav</h4>

      <p>
        Components: <code>&lt;z-nav&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>
      
      <z-columns>
        <z-column :sizeLG="12">
          
          <z-nav>
            <z-nav-item>
              <z-link href="">Element 1</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 2</z-link>
            </z-nav-item>
            <z-nav-item active>
              <z-link href="">Element 3</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 4</z-link>
            </z-nav-item>
          </z-nav>

        </z-column>
        <z-column :sizeLG="12">

<z-code lang="Vue">
import { ZNav, ZNavItem, ZLink } from 'zutre'

&lt;z-nav&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 1&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item active&gt;
    &lt;z-link href=""&gt;Element 2&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
&lt;/z-nav&gt;
</z-code>

        </z-column>
      </z-columns>

      <z-divider />

<z-columns>
        <z-column :sizeLG="12">
          
          <z-nav>
            <z-nav-item>
              <z-link href="">Element 1</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 2</z-link>
            </z-nav-item>
            <z-nav-item active>
              <z-link href="">Element 3</z-link>

              <z-nav>
                <z-nav-item>
                  <z-link href="">Link 1</z-link>
                </z-nav-item>
                <z-nav-item>
                  <z-link href="">Link 2</z-link>
                </z-nav-item>
              </z-nav>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 4</z-link>
            </z-nav-item>
          </z-nav>

        </z-column>
        <z-column :sizeLG="12">

<z-code lang="Vue">
import { ZNav, ZNavItem, ZLink } from 'zutre'

&lt;z-nav&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 1&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 2&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item active&gt;
    &lt;z-link href=""&gt;Element 3&lt;/z-link&gt;

    &lt;z-nav&gt;
      &lt;z-nav-item&gt;
        &lt;z-link href=""&gt;Link 1&lt;/z-link&gt;
      &lt;/z-nav-item&gt;
      &lt;z-nav-item&gt;
        &lt;z-link href=""&gt;Link 2&lt;/z-link&gt;
      &lt;/z-nav-item&gt;
    &lt;/z-nav&gt;
    
  &lt;/z-nav-item&gt;
&lt;/z-nav&gt;
</z-code>

        </z-column>
      </z-columns>
      
      <z-divider content="API" />
      <h4>API</h4>

      <h5>Nav <code>&lt;z-nav-item&gt;</code></h5>
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
            <z-td><code>active</code></z-td>
            <z-td>
              set <code>true</code> to apply active style for item
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import { ZContainer, ZNav, ZNavItem, ZLink, ZBreadcrumbs, ZCode, ZDivider, ZColumns, ZColumn, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZNav, ZNavItem, ZLink, ZCode, ZDivider, ZColumns, ZColumn, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
  }
}
</script>
