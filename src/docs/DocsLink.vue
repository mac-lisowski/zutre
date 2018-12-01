<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Utilities' }, { name: 'Link', link: { name: 'docsLink' }}]" />
      <h4>Link</h4>

      <p>
        The Link is used for generating <code>&lt;a href=""&gt;&lt;/a&gt;</code> tags or <code>&lt;router-link :to=""&gt;&lt;/router-link&gt;</code>.
      </p>
      <p>
        Components: <code>&lt;z-link /&gt;</code>
      </p>


      <z-divider />

      Go to: <z-link href="/">Home</z-link>, <z-link href="/about" name="About" />

      <z-code lang="Vue">import { ZLink } from 'zutre'

&lt;z-link href="/about" name="About /&gt;
</z-code>

      <z-divider content="OR" />

      Go to: <z-link :link="{ name: 'home' }">Home</z-link>, <z-link :link="{ name: 'about' }" name="About" />
      <z-code lang="Vue">import { ZLink } from 'zutre'

&lt;z-link :link="{ name: 'about ' }" name="About /&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Link <code>&lt;z-link&gt;&lt;/z-link /&gt;</code></h5>
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
            <z-td>menu item name (link name)</z-td>
            <z-td>String</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>href</code></z-td>
            <z-td>href link, use if you are not using vue-router</z-td>
            <z-td>String</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>link</code></z-td>
            <z-td>object, as you would be passing one to vue-router <br>component <code>&lt;router-link :to="{}"/&gt;</code></z-td>
            <z-td>Object</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>exact</code></z-td>
            <z-td>have effect when used with <code>link</code> and <code>activeClass</code>, match exact route</z-td>
            <z-td>Boolean</z-td>
            <z-td>false</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>activeClass</code></z-td>
            <z-td>name of css class for active menu item, have effect when used with <code>link</code> or <code>active</code></z-td>
            <z-td>String</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>active</code></z-td>
            <z-td>applies css class from <code>activeClass</code></z-td>
            <z-td>Boolean</z-td>
            <z-td>false</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZLink, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsDivider',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZLink, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
  }
}
</script>
