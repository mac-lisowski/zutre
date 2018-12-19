<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Popovers', link: { name: 'docsPopovers' }}]" />
      <h4>Popovers</h4>

      <p>
        Components: <code>&lt;z-popover /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-popover content="Test content popover. Just raw text">
        <z-button>Button</z-button>
      </z-popover>
      &nbsp; 
      <z-popover :content="testPopover" position="right">
        <z-button>Right Popover</z-button>
      </z-popover>
      &nbsp; 
      <z-popover :content="testPopover" position="bottom">
        <z-button>Bottom Popover</z-button>
      </z-popover>
      &nbsp; 
      <z-popover :content="testPopover" position="left">
        <z-button>Left Popover</z-button>
      </z-popover>

<z-code lang="Vue">
&lt;z-popover content="Test content popover. Just raw text"&gt;
  &lt;z-button&gt;Button&lt;/z-button&gt;
&lt;/z-popover&gt;

&lt;z-popover :content="testPopover" position="right"&gt;
  &lt;z-button&gt;Button&lt;/z-button&gt;
&lt;/z-popover&gt;

...

// testPopover component template
&lt;z-card&gt;
  &lt;z-card-image src="/photo.jpg" /&gt;
  &lt;z-card-header&gt;
    &lt;z-card-title content="GitHub" :size="5" /&gt;
    &lt;z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" /&gt;
  &lt;/z-card-header&gt;
  &lt;z-card-body&gt;
    &lt;p&gt;Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.&lt;/p&gt;
  &lt;/z-card-body&gt;
  &lt;z-card-footer&gt;
    &lt;z-button type="primary"&gt;Button&lt;/z-button&gt;
  &lt;/z-card-footer&gt;
&lt;/z-card&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Popover <code>&lt;z-popover /&gt;</code></h5>
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
              popover content can be string which will be displayed as HTML or Vue component
            </z-td>
            <z-td>String, Object, Function</z-td>
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
import TestPopover from './TestPopover';

export default {
  name: 'DocsPopovers',
  computed: {
    testPopover() {
      return TestPopover;
    }
  }
}
</script>
