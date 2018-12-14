<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Drawer', link: { name: 'docsDrawer' }}]" />
      <h4>Drawer</h4>

      <p>
        Components: <code>&lt;z-drawer /&gt;</code>
      </p>

      <z-divider content="LEFT DRAWER" />

      <z-container style="height: 300px; border: 1px solid #ebebeb;">
        <z-button :click="toggleDrawer">Toggle drawer</z-button>

        <z-drawer :open.sync="drawerOpen">
          DRAWER

          <template slot="footer">
            bottom
          </template>
        </z-drawer>
      </z-container>

      <z-divider content="RIGHT DRAWER" />

      <z-container style="height: 300px; border: 1px solid #ebebeb;">
        <z-button :click="toggleDrawer2">Toggle drawer</z-button>

        <z-drawer :open.sync="drawerOpen2" position="right">
          DRAWER
        </z-drawer>
      </z-container>

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
