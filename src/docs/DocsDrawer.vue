<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Drawer', link: { name: 'docsDrawer' }}]" />
      <h4>Drawer</h4>

      <p>
        You can define <code>&lt;template slot="footer"&gt;</code> inside drawer if you 
        want to put any content into container which will stick to the bottom.
      </p>

      <p>
        Components: <code>&lt;z-drawer /&gt;</code>
      </p>

      <z-divider content="LEFT DRAWER" />

        <z-columns>
          <z-column :size="6">
            <z-container style="height: 300px; border: 1px solid #ebebeb;">
              <z-button :click="toggleDrawer">Toggle drawer</z-button>

              <z-drawer :open.sync="drawerOpen">
                DRAWER

                <template slot="footer">
                  bottom
                </template>
              </z-drawer>
            </z-container>
          </z-column>
          <z-column :size="6">
            <z-code>
&lt;z-button :click="toggleDrawer"&gt;Toggle drawer&lt;/z-button&gt;

&lt;z-drawer :open.sync="drawerOpen"&gt;
  DRAWER

  &lt;template slot="footer"&gt;
    bottom
  &lt;/template&gt;
&lt;/z-drawer&gt;
            </z-code>
          </z-column>
        </z-columns>
        

      <z-divider content="RIGHT DRAWER" />

      <z-columns>
        <z-column :size="6">
          <z-container style="height: 300px; border: 1px solid #ebebeb;">
            <z-button :click="toggleDrawer2">Toggle drawer</z-button>

            <z-drawer :open.sync="drawerOpen2" position="right">
              DRAWER
            </z-drawer>
          </z-container>
        </z-column>
        <z-column :size="6">
            <z-code>
&lt;z-button :click="toggleDrawer"&gt;Toggle drawer&lt;/z-button&gt;

&lt;z-drawer :open.sync="drawerOpen"&gt;
  DRAWER

  &lt;template slot="footer"&gt;
    bottom
  &lt;/template&gt;
&lt;/z-drawer&gt;
            </z-code>
          </z-column>
      </z-columns>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Drawer <code>&lt;z-drawer&gt;</code></h5>
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
            <z-td><code>open</code></z-td>
            <z-td>
              set <code>true</code> to open
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>type</code></z-td>
            <z-td>
              
            </z-td>
            <z-td>String</z-td>
            <z-td><code>dock</code>/<code>fixed</code></z-td>
            <z-td><code>dock</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>position</code></z-td>
            <z-td>
              
            </z-td>
            <z-td>String</z-td>
            <z-td><code>left</code>/<code>right</code></z-td>
            <z-td><code>left</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>fullHeight</code></z-td>
            <z-td>
              
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>true</code></z-td>
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
