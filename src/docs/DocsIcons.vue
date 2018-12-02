<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Icons', link: { name: 'docsIcons' }}]" />
      <h4>Icons</h4>

      <p>Icons are single-element, <strong>Zutre</strong> is supporting <a href="https://material.io/tools/icons" target="_blank">material icons</a> from Google.</p>

      <p>
        Components: <code>&lt;z-icon /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>
      
      <z-columns>
        <z-column>
          <z-icon>g_translate</z-icon>
        </z-column>
        <z-column>
          <z-button type="primary"><z-icon>feedback</z-icon> Feedback</z-button>
        </z-column>
        <z-column>
          <z-button action right><z-icon name="favorite" /></z-button>
        </z-column>
      </z-columns>
      
<z-code lang="Vue">
import { ZIcon, ZButton } from 'zutre'

&lt;z-icon&gt;g_translate&lt;/z-icon&gt;
&lt;z-button type="primary"&gt;
  &lt;z-icon&gt;feedback&lt;/z-icon&gt; Feedback
&lt;/z-button&gt;
&lt;z-button action right&gt;
  &lt;z-icon name="favorite" /&gt;
&lt;/z-button&gt;
</z-code>
      
      <z-divider content="API" />
      <h4>API</h4>

      <h5>Icon <code>&lt;z-icon /&gt;</code></h5>
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
            <z-td>
              name of icon - supported are <a href="https://material.io/tools/icons/" target="_blank">material icons</a> from google
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import { ZContainer, ZIcon, ZButton, ZBreadcrumbs, ZCode, ZDivider, ZColumns, ZColumn, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZButton, ZIcon, ZCode, ZDivider, ZColumns, ZColumn, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
  }
}
</script>
