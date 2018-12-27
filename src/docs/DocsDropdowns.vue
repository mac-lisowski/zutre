<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Dropdowns', link: { name: 'docsDropdowns' }}]" />
      <h4>Dropdowns</h4>

      <z-button>
        Dropdown Button
        <z-menu>
          <z-menu-item href="" name="Page 1" />
          <z-menu-item href="" name="Page 2" />
          <z-menu-item href="" name="Page 3" />
          <z-menu-item href="" name="Page 4" />
        </z-menu>
      </z-button>
      <br>
      <z-code lang="Vue">
&lt;z-button&gt;
  Dropdown Button

  &lt;z-menu&gt;
    &lt;z-menu-item href="" name="Page 1" /&gt;
    &lt;z-menu-item href="" name="Page 2" /&gt;
    &lt;z-menu-item href="" name="Page 3" /&gt;
    &lt;z-menu-item href="" name="Page 4" /&gt;
  &lt;/z-menu&gt;
&lt;/z-button&gt;  
      </z-code>

      <br>
      <z-divider />
      <br>

      <z-avatar size="xl" data="ML" :presence="status" :onClick="avatarClick" :menu="[
        { name: 'online', onClick: () => change('online')},
        { name: 'away', onClick: () => change('away')},
        { name: 'busy', onClick: () => change('busy')},
        { name: 'invisible', onClick: () => change('invisible')},
      ]" />
      <br>

      <z-code lang="Vue">
&lt;z-avatar size="xl" data="ML" :presence="status" :onClick="avatarClick" :menu="[
  { name: 'online', onClick: () => change('online')},
  { name: 'away', onClick: () => change('away')},
  { name: 'busy', onClick: () => change('busy')},
  { name: 'invisible', onClick: () => change('invisible')},
]" /&gt;
      </z-code>

    </z-container>
</template>
<script>
export default {
  name: 'DocsDropdowns',
  data() {
    return {
      status: 'online',
    };
  },
  methods: {
    avatarClick() {
      console.log('avatar click');
    },
    change(val) {
      this.status = val;
    }
  },
}
</script>
