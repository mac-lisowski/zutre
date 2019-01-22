<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Accordions', link: { name: 'docsAccordion' }}]" />
      <h4>Accordions</h4>

      <p>
        Components: <code>&lt;z-accordion /&gt;</code>
      </p>

      <z-divider />

      <z-container>
        <z-columns>
          <z-column :size="6">
            <z-accordion title="Element 1">
              <z-nav :items="[
                { name: 'Page 1', href: ''},
                { name: 'Page 2', href: ''},
                { name: 'Page 3', href: ''},
                { name: 'Page 4', href: ''},
                { name: 'Page 5', href: ''},
                { name: 'Page 6', href: ''},
              ]" />
            </z-accordion>
            <z-accordion title="Element 2">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </z-accordion>
            <z-accordion title="Element 3">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </z-accordion>
          </z-column>
          <z-column :size="6">
            <z-code>
&lt;z-accordion title="Element 1"&gt;
  &lt;z-nav :items="[
    { name: 'Page 1', href: ''},
    { name: 'Page 2', href: ''},
    { name: 'Page 3', href: ''},
    { name: 'Page 4', href: ''},
    { name: 'Page 5', href: ''},
    { name: 'Page 6', href: ''},
  ]" /&gt;
&lt;/z-accordion&gt;
            </z-code>
          </z-column>
        </z-columns>
      </z-container>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Accordion <code>&lt;z-accodrion&gt;</code></h5>
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
            <z-td><code>title</code></z-td>
            <z-td>
              Accordion title
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
export default {
  name: 'DocsDrawer',
  data() {
    return {
      drawerOpen: true,
      drawerOpen2: true,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    toggleDrawer2() {
      this.drawerOpen2 = !this.drawerOpen2;
    }
  },
}
</script>
