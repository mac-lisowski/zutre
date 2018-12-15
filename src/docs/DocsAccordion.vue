<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Accordions', link: { name: 'docsAccordion' }}]" />
      <h4>Accordions</h4>

      <p>
        Components: <code>&lt;z-accordion /&gt;</code>
      </p>

      <z-divider />

      <z-container>
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
          <z-nav :items="[
            { name: 'Page 1', href: ''},
            { name: 'Page 2', href: ''},
            { name: 'Page 3', href: ''},
            { name: 'Page 4', href: ''},
            { name: 'Page 5', href: ''},
            { name: 'Page 6', href: ''},
          ]" />
        </z-accordion>
        <z-accordion title="Element 3">
          <z-nav :items="[
            { name: 'Page 1', href: ''},
            { name: 'Page 2', href: ''},
            { name: 'Page 3', href: ''},
            { name: 'Page 4', href: ''},
            { name: 'Page 5', href: ''},
            { name: 'Page 6', href: ''},
          ]" />
        </z-accordion>
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
