<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Tables', link: { name: 'docsTable' }}]" />
      <h4>Tables</h4>

      <p>Tables include default styles for tables and data sets.</p>

      <p>
        Components: <code>&lt;z-table/&gt;</code>, <code>&lt;z-thead/&gt;</code>, <code>&lt;z-tbody/&gt;</code>, 
        <code>&lt;z-tr/&gt;</code>, <code>&lt;z-th/&gt;</code>, <code>&lt;z-td/&gt;</code>,
      </p>
      <z-divider content="EXAMPLE" />

      <z-table stripped hover>
        <z-thead>
          <z-tr>
            <z-th>name</z-th>
            <z-th>genre</z-th>
            <z-th>release date</z-th>
          </z-tr>
        </z-thead>
        <z-tbody>
          <z-tr active>
            <z-td>The Shawshank Redemption</z-td>
            <z-td>Crime, Drama</z-td>
            <z-td>14 October 1994</z-td>
          </z-tr>
          <z-tr>
            <z-td>The Shawshank Redemption</z-td>
            <z-td>Crime, Drama</z-td>
            <z-td>14 October 1994</z-td>
          </z-tr>
          <z-tr>
            <z-td>The Shawshank Redemption</z-td>
            <z-td>Crime, Drama</z-td>
            <z-td>14 October 1994</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

      <br>

<z-code lang="Vue">
import { ZTable, ZThead, ZTbody, ZTh, Ztr, Ztd } from 'zutre'

&lt;z-table stripped hover&gt;
  &lt;z-thead&gt;
    &lt;z-tr&gt;
      &lt;z-th&gt;name&lt;/z-th&gt;
      &lt;z-th&gt;genre&lt;/z-th&gt;
      &lt;z-th&gt;release date&lt;/z-th&gt;
    &lt;/z-tr&gt;
  &lt;/z-thead&gt;
  &lt;z-tbody&gt;
    &lt;z-tr active&gt;
      &lt;z-td&gt;The Shawshank Redemption&lt;z-td&gt;
      &lt;z-td&gt;Crime, Drama&lt;/z-td&gt;
      &lt;z-td&gt;14 October 1994&lt;/z-td&gt;
    &lt;/z-tr&gt;
  &lt;/z-tbody&gt;
&lt;/z-table&gt;

</z-code>

    <z-divider content="API" />
    <h4>API</h4>

    <h5>Table <code>&lt;z-table&gt;&lt;/z-table&gt;</code></h5>
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
          <z-td><code>stripped</code></z-td>
          <z-td>applies zebra striped style</z-td>
          <z-td>Boolean</z-td>
          <z-td>--</z-td>
          <z-td><code>false</code></z-td>
        </z-tr>
        <z-tr>
          <z-td><code>hover</code></z-td>
          <z-td>applies hoverable table rows</z-td>
          <z-td>Boolean</z-td>
          <z-td>--</z-td>
          <z-td><code>false</code></z-td>
        </z-tr>
      </z-tbody>
    </z-table>

    <br>
    <h5>Tr <code>&lt;z-tr&gt;&lt;/z-tr&gt;</code></h5>
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
          <z-td>applies active row style</z-td>
          <z-td>Boolean</z-td>
          <z-td>--</z-td>
          <z-td><code>false</code></z-td>
        </z-tr>
      </z-tbody>
    </z-table>
    
    </z-container>
</template>
<script>
import { ZContainer, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd, ZBreadcrumbs, ZCode, ZDivider } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZTable, ZThead, ZTh, ZTr, ZTd, ZTbody, ZCode, ZDivider
  }
}
</script>
