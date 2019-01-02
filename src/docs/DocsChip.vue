<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Chips', link: { name: 'docsChip' }}]" />
      <h4>Chips</h4>

      <p>Chips are complex entities in small blocks.</p>

      <p>
        Components: <code>&lt;z-chip&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-columns>
        <z-column>
          <z-chip>Romance</z-chip> <z-chip>Action</z-chip> <z-chip>Fantasy <z-button clear/></z-chip>
          <z-chip @click="chipClick('love')" class="clickable">Love</z-chip>
        </z-column>
      </z-columns>
      <br>
      <z-columns>
        <z-column>
          <z-chip><z-avatar data="ML" size="sm" presence="online" />Maciej Lisowski</z-chip> <z-chip><z-avatar presence="offline" :src="require('./avatar.png')" size="sm" />Brian Doe</z-chip> <z-chip><z-avatar size="sm" :src="require('./avatar2.png')" /> Steve Rogers <z-button clear/></z-chip>
        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-chip&gt;Romance&lt;/z-chip&gt;
&lt;z-chip&gt;Action&lt;/z-chip&gt;
&lt;z-chip&gt;Fantasy &lt;z-button clear/&gt;&lt;/z-chip&gt;

&lt;z-chip data="ML" size="sm" presence="online" &gt;Maciej Lisowski&lt;/z-chip&gt;
&lt;z-chip presence="offline" :src="require('./avatar.png')" size="sm"&gt;Brian Doe&lt;/z-chip&gt;
&lt;z-chip size="sm" :src="require('./avatar2.png')"&gt;Steve Rogers &lt;z-button clear/&gt;&lt;/z-chip&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Chip <code>&lt;z-chip&gt;</code></h5>
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
            <z-td><code>name</code></z-td>
            <z-td>
              name of icon - supported are <a href="https://material.io/tools/icons/" target="_blank">material icons</a> from google
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td colspan="5"><strong>Events</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emited on click
            </z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsHero',
  methods: {
    chipClick(val) {
      console.log(val);
    }
  },
}
</script>
