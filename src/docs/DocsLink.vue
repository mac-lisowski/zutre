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

      <z-code lang="Vue">
&lt;z-link href="/about" name="About /&gt;
</z-code>

      <z-divider content="OR" />

      Go to: <z-link :link="{ name: 'home' }">Home</z-link>, <z-link :link="{ name: 'about' }" name="About" />, <z-link href="#" name="Messages" badge="10" />
      <z-code lang="Vue">
&lt;z-link href="#" name="Messages" badge="10" /&gt;
</z-code>

      <z-divider content="EVENT ON CLiCK" />
      <z-link @click="alertLink ">Click Me</z-link>

      <z-code lang="Vue">
&lt;z-link @click="alertLink"&gt;Click Me&lt;/z-link&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Link <code>&lt;z-link&gt;&lt;/z-link /&gt;</code></h5>
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
            <z-td><code>name</code></z-td>
            <z-td>menu item name (link name)</z-td>
            <z-td><code>String</code></z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>href</code></z-td>
            <z-td>href link, use if you are not using vue-router</z-td>
            <z-td><code>String</code></z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>link</code></z-td>
            <z-td>object, as you would be passing one to vue-router <br>component <code>&lt;router-link :to="{}"/&gt;</code></z-td>
            <z-td><code>Object</code></z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>exact</code></z-td>
            <z-td>have effect when used with <code>link</code> and <code>activeClass</code>, match exact route</z-td>
            <z-td><code>Boolean</code></z-td>
            <z-td><code>false</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>activeClass</code></z-td>
            <z-td>name of css class for active menu item, have effect when used with <code>link</code> or <code>active</code></z-td>
            <z-td><code>String</code></z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>active</code></z-td>
            <z-td>applies css class from <code>activeClass</code></z-td>
            <z-td><code>Boolean</code></z-td>
            <z-td><code>false</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>badge</code></z-td>
            <z-td>
              badge text
            </z-td>
            <z-td><code>String</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5"><strong>EVENTS</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emmited when link is clicked
            </z-td>
            <z-td><code>Event</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsDivider',
  methods: {
    alertLink() {
      alert("link clicked");
    }
  },
}
</script>
