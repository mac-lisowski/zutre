<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Menu', link: { name: 'docsMenu' }}]" />
      <h4>Menu</h4>

      <p>Menus are vertical list of links or buttons for actions and navigation.</p>

      <p>
        Components:
        <code>&lt;z-menu&gt;</code>,<code>&lt;z-menu-divider /&gt;</code>, <code>&lt;z-menu-item&gt;</code>
      </p>

      <z-divider />

      <z-menu>
        <div class="tile tile-centered">
          <div class="tile-icon"><img class="avatar" src="./avatar.png" alt="Avatar"></div>
          <div class="tile-content">Steve Rogers</div>
        </div>

        <z-menu-divider />

        <z-menu-item href="#" name="Profile" />
        <z-menu-item href="#" name="Settings" />
        <z-menu-item href="#" name="Logout" />
      </z-menu>

      <z-code lang="Vue">
&lt;z-menu&gt;
  &lt;tile :center="true"&gt;
    &lt;z-tile-icon&gt;
      &lt;z-avatar src="../avatar.png" alt="Avatar" /&gt;
    &lt;/z-tile-icon&gt;
    &lt;z-tile-content&gt;Steve Rogers&lt;/z-tile-content&gt;
  &lt;/tile&gt;

  &lt;z-menu-divider /&gt;

  &lt;z-menu-item href="#" name="Profile" /&gt;
  &lt;z-menu-item href="#" name="Settings" /&gt;
  &lt;z-menu-item href="#" name="Logout" /&gt;
&lt;/z-menu&gt;
      </z-code>

      <z-divider content="OR" />

      <z-menu>
        <z-menu-divider content="LINKS" />

        <z-menu-item href="#" name="Home" />
        <z-menu-item href="#" name="About us" />
        <z-menu-item href="#" name="Contact" />
      </z-menu>

      <z-code lang="Vue">
&lt;z-menu&gt;
  &lt;z-menu-divider content="LINKS" /&gt;

  &lt;z-menu-item href="#" name="Home" /&gt;
  &lt;z-menu-item href="#" name="About us" /&gt;
  &lt;z-menu-item href="#" name="Contact" /&gt;
&lt;/z-menu&gt;
      </z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>MenuDivider <code>&lt;z-menu-divider /&gt;</code></h5>
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
            <z-td>centered text on divider</z-td>
            <z-td>String</z-td>
            <z-td>--</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      <br>

      <h5>MenuItem <code>&lt;z-menu-item /&gt;</code></h5>
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
export default {
  name: 'DocsMenu',
}
</script>

<style lang="scss" scoped>
</style>
