<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Code', link: { name: 'docsCode' }}]" />
      <h4>Code</h4>

      <p>Code is used for styling inline and multiline code snippets.</p>

      <p>
        Components: <code>&lt;z-code /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>
      <z-code>code</z-code>
      
<z-code lang="Vue">
import { ZCode } from 'zutre'

&lt;z-code&gt;code&lt;/z-code&gt;
</z-code>
      
      <z-divider content="API" />
      <h4>API</h4>

      <h5>Hero <code>&lt;z-code /&gt;</code></h5>
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
            <z-td><code>lang</code></z-td>
            <z-td>
              name of language eg. <code>HTML</code>, <code>Vue</code>, <code>javascript</code>, <code>bash</code> etc.
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
import {
  ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZTable, ZThead, ZTbody,
  ZTh, ZTr, ZTd,
} from './../components';

export default {
  name: 'DocsCode',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZTable, ZThead,
    ZTbody, ZTh, ZTr, ZTd,
  },
};
</script>
