<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Tabs', link: { name: 'docsTabs' }}]" />
      <h4>Tabs</h4>

      <z-divider />

      <z-columns>
        <z-column :size="6" :sizeLG="12">

          <z-tab :items="items" :active.sync="activeTab" :height="200">
            <template slot="action">
              <z-button size="sm" @click="() => changeTab(2)">Change to Tab 3</z-button>
            </template>
          </z-tab>

        </z-column>
        <z-column :size="6" :sizeLG="12">
<z-code lang="Vue">
&lt;z-tab :items="items" :active.sync="activeTab" :height="200"&gt;
  &lt;template slot="action"&gt;
    &lt;z-button size="sm" @click="() => changeTab(2)"&gt;Change to Tab 3&lt;/z-button&gt;
  &lt;/template&gt;
&lt;/z-tab&gt;

...

items: [
  { name: 'Tab 1', content: 'Tab 1 <strong>content</strong>' },
  { name: 'Tab 2', content: 'Tab 2 content' },
  { name: 'Tab 3', content: TestComponent, badge: '10' },
  { name: 'Tab 4', content: 'Tab 4 content' },
]
</z-code>
        </z-column>
      </z-columns>

      <br/>

      <z-divider content="DISPLAY AS BLOCK" />

      <z-columns>
        <z-column :size="6" :sizeLG="12">
          <z-tab :items="items"  block/>
        </z-column>
        <z-column :size="6" :sizeLG="12">
<z-code lang="Vue">
&lt;z-tab :items="items" block /&gt;

...

items: [
  { name: 'Tab 1', content: 'Tab 1 <strong>content</strong>' },
  { name: 'Tab 2', content: 'Tab 2 content' },
  { name: 'Tab 3', content: TestComponent, badge: '10' },
  { name: 'Tab 4', content: 'Tab 4 content' },
]
</z-code>
        </z-column>
      </z-columns>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Tab <code>&lt;z-tab /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th width="100">Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>height</code></z-td>
            <z-td>
              height of tabs body container
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>block</code></z-td>
            <z-td>
              set <code>true</code> to display as block, full width of container
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>active</code></z-td>
            <z-td>
              index number of currently active tab, starts from zero
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>[0-9]</code></z-td>
            <z-td><code>0</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>items</code></z-td>
            <z-td>
              array of objects with tabs items, each object can have such parameters: 
<z-code>{
  name: String,
  badge: String,
  content: String | Vue Component
}</z-code>
            </z-td>
            <z-td>Array</z-td>
            <z-td><code>Array[Object]</code></z-td>
            <z-td><code>[]</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>containerId</code></z-td>
            <z-td>
              id of HTML element where tabs content will be mounted,<br>
              if not set - component is going to create such container <br>
              in current parent element
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
import TestComponent from './TestComponent';

export default {
  name: 'DocsTabs',
  data() {
    return {
      activeTab: 1,
      items: [
        { name: 'Tab 1', content: 'Tab 1 <strong>content</strong>' },
        { name: 'Tab 2', content: 'Tab 2 content' },
        { name: 'Tab 3', content: TestComponent, badge: '10' },
        { name: 'Tab 4', content: 'Tab 4 content' },
      ],
    };
  },
  methods: {
    changeTab(idx) {
      this.activeTab = idx;
    }
  },
}
</script>
