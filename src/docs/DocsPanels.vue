
<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Panels', link: { name: 'docsPanels' }}]" />
      <h4>Panels</h4>

      <p></p>

      <p>
        Components: <code>&lt;z-panel /&gt;</code>
      </p>

      <z-divider content="EXAMPLES" />
      <br>

      <z-columns>
        <z-column :size="6" :sizeLG="12">

          <z-panel height="500px">
            <template slot="header">
              <strong>Contacts</strong>
            </template>
            <template slot="footer">
              <z-button name="Save" class="btn-block">Save</z-button>
            </template>

            <z-tile>
              <z-tile-icon>
                <z-avatar data="JW" />
              </z-tile-icon>
              <z-tile-content>
                <z-tile-title>Jhon Walker</z-tile-title>
                <z-tile-subtitle>Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.</z-tile-subtitle>
              </z-tile-content>
                <z-tile-action>
                  <z-button type="primary" class="btn-action" center><z-icon name="edit"/></z-button>
                </z-tile-action>
            </z-tile>

            <z-tile>
              <z-tile-icon>
                <z-avatar data="TJ" />
              </z-tile-icon>
              <z-tile-content>
                <z-tile-title>Tommy Jerry</z-tile-title>
                <z-tile-subtitle>Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.</z-tile-subtitle>
              </z-tile-content>
                <z-tile-action>
                  <z-button type="primary" class="btn-action" center><z-icon name="edit"/></z-button>
                </z-tile-action>
            </z-tile>

            <z-tile>
              <z-tile-icon>
                <z-avatar data="KC" />
              </z-tile-icon>
              <z-tile-content>
                <z-tile-title>Kim Cane</z-tile-title>
                <z-tile-subtitle>Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.</z-tile-subtitle>
              </z-tile-content>
                <z-tile-action>
                  <z-button type="primary" class="btn-action" center><z-icon name="edit"/></z-button>
                </z-tile-action>
            </z-tile>

            <z-tile>
              <z-tile-icon>
                <z-avatar data="LB" />
              </z-tile-icon>
              <z-tile-content>
                <z-tile-title>Lim Bim</z-tile-title>
                <z-tile-subtitle>Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.</z-tile-subtitle>
              </z-tile-content>
                <z-tile-action>
                  <z-button type="primary" class="btn-action" center><z-icon name="edit"/></z-button>
                </z-tile-action>
            </z-tile>

            <z-tile>
              <z-tile-icon>
                <z-avatar data="SW" />
              </z-tile-icon>
              <z-tile-content>
                <z-tile-title>Sky Walker</z-tile-title>
                <z-tile-subtitle>Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.</z-tile-subtitle>
              </z-tile-content>
                <z-tile-action>
                  <z-button type="primary" class="btn-action" center><z-icon name="edit"/></z-button>
                </z-tile-action>
            </z-tile>

          </z-panel>

        </z-column>

        <z-column :size="6" :sizeLG="12">
          <z-code lang="Vue">
&lt;z-panel height="500px"&gt;
  &lt;template slot="header"&gt;
    &lt;strong&gt;Contacts&lt;/strong&gt;
  &lt;/template&gt;
  &lt;template slot="footer"&gt;
    &lt;z-button name="Save" class="btn-block"&gt;Save&lt;/z-button&gt;
  &lt;/template>

  &lt;z-tile&gt;
    &lt;z-tile-icon&gt;
      &lt;z-avatar data="JW" /&gt;
    &lt;/z-tile-icon&gt;
    &lt;z-tile-content&gt;
      &lt;z-tile-title&gt;Jhon Walker&lt;/z-tile-title&gt;
      &lt;z-tile-subtitle&gt;Suspendisse rutrum dui fringilla, viverra justo at, sodales mi. Nullam non egestas mauris.&lt;/z-tile-subtitle&gt;
    &lt;/z-tile-content&gt;
      &lt;z-tile-action&gt;
        &lt;z-button type="primary" class="btn-action" center&gt;&lt;z-icon name="edit"/&gt;&lt;/z-button&gt;
      &lt;/z-tile-action&gt;
  &lt;/z-tile&gt;
&lt;/z-panel&gt;
</z-code>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="6" :sizeLG="12">

          <z-panel height="500px">
            <template slot="header">
                <z-avatar data="SR" size="xl" presence="online" block />
                <div class="text-center">
                  <h4 style="margin-top:15px;">Steve Rogers</h4>
                  <span>The Captain</span>
                </div>
            </template>

            <template slot="footer">
              <z-button class="btn-block">Go Back</z-button>
            </template>

            <template slot="nav">
              <z-tab :items="[
                { name: 'Messages', content: '<ul><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li><li>List of messages</li></ul>', badge: '10' },
                { name: 'Profile', content: 'User profile' },
                { name: 'Help', content: 'Help content' },
              ]" containerId="panelContent" block/>
            </template>

            <div id="panelContent"></div>
          </z-panel>

        </z-column>

        <z-column :size="6" :sizeLG="12">
          <z-code lang="Vue">
&lt;z-panel height="500px"&gt;
  &lt;template slot="header"&gt;
      &lt;z-avatar data="SR" size="xl" presence="online" block /&gt;
      &lt;div class="text-center"&gt;
        &lt;h4 style="margin-top:15px;">Steve Rogers&lt;/h4&gt;
        &lt;span&gt;The Captain&lt;/span&gt;
      &lt;/div&gt;
  &lt;/template&gt;

  &lt;template slot="footer">
    &lt;z-button class="btn-block">Go Back&lt;/z-button&gt;
  &lt;/template&gt;

  &lt;template slot="nav"&gt;
    &lt;z-tab :items="[
      { name: 'Messages', content: '<ul><li>List of messages</li></ul>', badge: '10' },
      { name: 'Profile', content: 'User profile' },
      { name: 'Help', content: 'Help content' },
    ]" containerId="panelContent" block/&gt;
  &lt;/template&gt;

  &lt;div id="panelContent"&gt;&lt;/div&gt;
&lt;/z-panel&gt;
</z-code>
        </z-column>
      </z-columns>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Panel <code>&lt;z-panel /&gt;</code></h5>
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
            <z-td><code>height</code></z-td>
            <z-td>
              height of panel component
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
  name: 'DocsPagination',
  data() {
    return {
      perPage: 9,
      totalResults: 140,
      currentPage: 3,
      items: [],
      displayResults: null,
    };
  },
  created() {
    this.generateItems();
  },
  methods: {
    // eslint-disable-next-line
    onPageChange(page, res) {
      console.info('page changed: ' + page);
    },
    onPageChangeWithResults(page, res) {
      this.displayResults = res;
    },
    generateItems() {
      let newItems = [];
      let i = 1;

      for(; i <= this.totalResults; i++) {
        newItems.push(i);
      }

      this.items = newItems;
    }
  },
  watch: {
    totalResults(val) {
      this.generateItems(val);
    }
  }

}
</script>
