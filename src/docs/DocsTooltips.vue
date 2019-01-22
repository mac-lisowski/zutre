<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Tooltips', link: { name: 'docsTooltips' }}]" />
      <h4>Tooltips</h4>

      <p>Tooltip component is a wrapper which is going to apply tooltip to first child element.</p>

      <p>
        Components: <code>&lt;z-tooltip&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>
      
      <z-columns>
        <z-column :size="6" :sizeLG="12">
          <z-tooltip content="Bottom tooltip" position="bottom">
            <z-button>Bottom tooltip</z-button>
          </z-tooltip>

          <br><br>

          <z-tooltip content="Top tooltip" position="top">
            <z-label type="primary">Primary label with top tooltip</z-label>
          </z-tooltip>

          <br><br>

          <z-tooltip content="Right tooltip" position="right">
            <z-link href="">Link with right tooltip</z-link>
          </z-tooltip>

          <br><br>

          <z-tooltip content="Left tooltip" position="left">
            <z-avatar size="md" data="ML" />
          </z-tooltip>

        </z-column>
        <z-column :size="6" :sizeLG="12">
<z-code lang="Vue">
&lt;z-tooltip content="Bottom tooltip" position="bottom"&gt;
  &lt;z-button&gt;Bottom tooltip&lt;/z-button&gt;
&lt;/z-tooltip&gt;

&lt;z-tooltip content="Top tooltip" position="top"&gt;
  &lt;z-label type="primary"&gt;Top tooltip&lt;/z-label&gt;
&lt;/z-tooltip&gt;

&lt;z-tooltip content="Right tooltip" position="right"&gt;
  &lt;z-link href=""&gt;Link - Right tooltip&lt;/z-link&gt;
&lt;/z-tooltip&gt;

&lt;z-tooltip content="Left tooltip" position="left"&gt;
  &lt;z-avatar size="md" data="ML" /&gt;
&lt;/z-tooltip&gt;

</z-code>
        </z-column>
      </z-columns>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Tooltip <code>&lt;z-tooltip /&gt;</code></h5>
      <z-table scrollable shrink>
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
              tooltip content string
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>position</code></z-td>
            <z-td>
              set tooltip position
            </z-td>
            <z-td>String</z-td>
            <z-td><code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code></z-td>
            <z-td><code>top</code></z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsTooltips',
}
</script>
