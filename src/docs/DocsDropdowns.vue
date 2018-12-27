<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Dropdowns', link: { name: 'docsDropdowns' }}]" />
      <h4>Dropdowns</h4>

      <z-button>
        sdfdsf
        <z-menu>
          <z-menu-item href="#" name="Online" />
          <z-menu-item href="#" name="Away" />
          <z-menu-item href="#" name="Busy" />
          <z-menu-item href="#" name="Invisible" />
        </z-menu>
      </z-button>

      <br><br>
      <z-divider />
      <br>

      <z-avatar size="xl" data="ML" presence="online" :menu="[
        { name: 'Online', onClick: () => change('online')},
        { name: 'Away', href: '#', onClick: () => alert('on click')},
        { name: 'Busy', href: '#', onClick: () => alert('on click')},
        { name: 'Invisible', href: '#', onClick: () => alert('on click')},
      ]" />

    </z-container>
</template>
<script>
export default {
  name: 'DocsDropdowns',
  methods: {
    change(val) {
      console.log(val);
    }
  },
}
</script>
