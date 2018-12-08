<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Utilities' }, { name: 'Divider', link: { name: 'docsDivider' }}]" />
      <h4>Divider</h4>

      <p>The Divider is used for separating elements.</p>

      <p>
        Components: <code>&lt;z-divider /&gt;</code>
      </p>

      <z-divider  />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, dui eu hendrerit interdum, erat ante hendrerit purus, sit amet dictum felis ex eu tortor. Sed vitae sapien turpis. Maecenas sagittis massa quis lectus vehicula convallis non eu sapien. Mauris sollicitudin nec magna nec consectetur. Morbi hendrerit vitae lacus nec vulputate.</p>

      <z-code lang="Vue">
import { ZDivider } from 'zutre'

&lt;z-divider /&gt;</z-code>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, dui eu hendrerit interdum, erat ante hendrerit purus, sit amet dictum felis ex eu tortor. Sed vitae sapien turpis. Maecenas sagittis massa quis lectus vehicula convallis non eu sapien. Mauris sollicitudin nec magna nec consectetur. Morbi hendrerit vitae lacus nec vulputate.</p>

      <z-divider content="OR" />

      <z-code lang="Vue">
import { ZDivider } from 'zutre'

&lt;z-divider content="OR" /&gt;</z-code>

      <z-columns>
        <z-column>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, dui eu hendrerit interdum, erat ante hendrerit purus, sit amet dictum felis ex eu tortor. Sed vitae sapien turpis. Maecenas sagittis massa quis lectus vehicula convallis non eu sapien. Mauris sollicitudin nec magna nec consectetur. Morbi hendrerit vitae lacus nec vulputate.</p>
        </z-column>
        <z-divider content="OR" :vert="true" />
        <z-column>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, dui eu hendrerit interdum, erat ante hendrerit purus, sit amet dictum felis ex eu tortor. Sed vitae sapien turpis. Maecenas sagittis massa quis lectus vehicula convallis non eu sapien. Mauris sollicitudin nec magna nec consectetur. Morbi hendrerit vitae lacus nec vulputate.</p>
        </z-column>

        <z-column :size="12">
          <z-code lang="Vue">
import { ZColumn, ZDivider } from 'zutre'

&lt;z-column&gt;
  &lt;!-- content --&gt;
&lt;/z-column &gt;

&lt;z-divider content="OR" :vert="true" /&gt;

&lt;z-column&gt;
  &lt;!-- content --&gt;
&lt;/z-column &gt;
</z-code>
        </z-column>

      </z-columns>
      
      <z-divider content="API" />
      <h4>API</h4>

      <h5>Divider <code>&lt;z-divider /&gt;</code></h5>
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
            <z-td><code>content</code></z-td>
            <z-td>centered text on divider</z-td>
            <z-td>String</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
    
</template>
<script>
import {
  ZContainer, ZColumns, ZColumn, ZBreadcrumbs, ZCode, ZDivider, ZTable,
  ZThead, ZTbody, ZTh, ZTr, ZTd,
} from './../components';

export default {
  name: 'DocsDivider',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZColumns, ZColumn, ZTable,
    ZThead, ZTbody, ZTh, ZTr, ZTd,
  },
};
</script>
