<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Label', link: { name: 'docsLabel' }}]" />
      <h4>Label</h4>

      <p>Labels are formatted text tags for highlighted, informative information.</p>

      <p>
        Components: <code>&lt;z-label /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-label>default label</z-label> 
      <z-label type="primary" content="primary label" /> 
      <z-label type="secondary" content="secondary label" /> 
      <z-label type="success" content="success label" /> 
      <z-label type="warning" content="warning label" /> 
      <z-label type="error" content="error label" /> 

<z-code lang="Vue">
import { ZLabel } from 'zutre'

&lt;z-label&gt;default label&lt;/z-label&gt; 
&lt;z-label type="primary" content="primary label" /&gt; 
&lt;z-label type="secondary" content="secondary label" /&gt; 
&lt;z-label type="success" content="success label" /&gt; 
&lt;z-label type="warning" content="warning label" /&gt; 
&lt;z-label type="error" content="error label" /&gt;
</z-code>

    <h5>Rounded labels</h5>

    <z-label rounded>default label</z-label> 
    <z-label type="primary" content="primary label" rounded /> 

<z-code lang="Vue">
import { ZLabel } from 'zutre'

&lt;z-label rounded&gt;default label&lt;/z-label&gt; 
&lt;z-label type="primary" content="primary label" rounded /&gt; 
</z-code>

    <z-divider content="API" />
      <h4>API</h4>

      <h5>Label <code>&lt;z-label /&gt;</code></h5>
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
            <z-td>
              label content body
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>type</code></z-td>
            <z-td>
              label color scheme
            </z-td>
            <z-td>String</z-td>
            <z-td><code>primary</code>, <code>secondary</code>, <code>success</code>, <code>warning</code>, <code>error</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>rounded</code></z-td>
            <z-td>
              set <code>true</code> for rounded label
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
import {
  ZContainer, ZBreadcrumbs, ZCode, ZLabel, ZDivider, ZTable, ZThead,
  ZTbody, ZTh, ZTr, ZTd,
} from './../components';

export default {
  name: 'DocsLabel',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZLabel, ZDivider, ZTable, ZThead,
    ZTbody, ZTh, ZTr, ZTd,
  },
};
</script>
