<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Menu', link: { name: 'docsMenu' }}]" />
      <h5>Menu</h5>

      <p>Menus are vertical list of links or buttons for actions and navigation.</p>

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
import { ZMenu, ZMenuItem, ZMenuDivider, ZAvatar, ZTile, ZTileContent, ZTileIcon } from 'zutre'

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
import { ZMenu, ZMenuItem, ZMenuDivider } from 'zutre'

&lt;z-menu&gt;
  &lt;z-menu-divider content="LINKS" /&gt;

  &lt;z-menu-item href="#" name="Home" /&gt;
  &lt;z-menu-item href="#" name="About us" /&gt;
  &lt;z-menu-item href="#" name="Contact" /&gt;
&lt;/z-menu&gt;
      </z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZMenuDivider, ZMenu, ZMenuItem } from './../components'

export default {
  name: 'DocsMenu',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZDivider, ZMenu, ZMenuItem, ZMenuDivider
  }
}
</script>

<style lang="scss" scoped>
</style>
