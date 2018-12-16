<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Tile', link: { name: 'docsTile' }}]" />
      <h4>Tile</h4>

      <p>Tiles are repeatable or embeddable information blocks.</p>

      <p>
        Components:<br>
        <code>&lt;z-tile&gt;</code>, <code>&lt;z-tile-action&gt;</code>, <code>&lt;z-tile-content&gt;</code>, <code>&lt;z-tile-icon&gt;</code>, <code>&lt;z-tile-title&gt;</code>, <code>&lt;z-tile-subtitle&gt;</code>
      </p>

      <z-divider />

      <z-columns>
        <z-column>

          <z-tile>
            <z-tile-icon>
              <figure class="avatar avatar-lg"><img src="./avatar.png" alt="Avatar"></figure>
            </z-tile-icon>
            <z-tile-content>
              <z-tile-title>Pokemons</z-tile-title>
              <z-tile-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</z-tile-subtitle>
            </z-tile-content>
            <z-tile-action>
              <z-button type="primary">Buy</z-button>&nbsp;
              <z-button>Help</z-button>
            </z-tile-action>
          </z-tile>

        </z-column>
        <z-column>

          <z-tile>
            <z-tile-icon>
              <figure class="avatar avatar-lg"><img src="./avatar.png" alt="Avatar"></figure>
            </z-tile-icon>
            <z-tile-content>
              <z-tile-title>Pokemons</z-tile-title>
              <z-tile-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</z-tile-subtitle>

              <z-button type="primary" size="sm">Buy</z-button>&nbsp;
              <z-button size="sm">Help</z-button>

            </z-tile-content>
          </z-tile>

        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-tile&gt;
  &lt;z-tile-icon&gt;
    &lt;z-avatar src="./avatar.png" alt="Avatar" /&gt;
  &lt;/z-tile-icon&gt;
  &lt;z-tile-content&gt;
    &lt;z-tile-title&gt;Pokemons&lt;/z-tile-title&gt;
    &lt;z-tile-subtitle&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/z-tile-subtitle&gt;
  &lt;/z-tile-content&gt;
  &lt;z-tile-action&gt;
    &lt;z-button type="primary"&gt;Buy&lt;/z-button&gt;
    &lt;z-button&gt;Help&lt;/z-button&gt;
  &lt;/z-tile-action&gt;
&lt;/z-tile&gt;

...

&lt;z-tile&gt;
  &lt;z-tile-icon&gt;
    &lt;z-avatar src="./avatar.png" alt="Avatar" /&gt;
  &lt;/z-tile-icon&gt;
  &lt;z-tile-content&gt;
    &lt;z-tile-title&gt;Pokemons&lt;/z-tile-title&gt;
    &lt;z-tile-subtitle&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/z-tile-subtitle&gt;

    &lt;z-button type="primary" size="sm"&gt;Buy&lt;/z-button&gt;
    &lt;z-button size="sm"&gt;Help&lt;/z-button&gt;

  &lt;/z-tile-content&gt;
&lt;/z-tile&gt;

</z-code>
      <br>
      <z-divider />
      <br>
      <h4>Compact tiles</h4>

      <p>There is compact version of Tiles component, which is often used as contact and file info blocks.</p>

      <p>Set <code>centered</code> property of <code>z-tile</code> component to center elements vertically.</p>

      <z-columns>
        <z-column :size="6">
          <z-tile centered>
            <z-tile-icon>
              <figure class="avatar avatar-lg"><img src="./avatar.png" alt="Avatar"></figure>
            </z-tile-icon>
            <z-tile-content>
              <z-tile-title>Pokemons</z-tile-title>
              <z-tile-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</z-tile-subtitle>
            </z-tile-content>
            <z-tile-action>
              <z-button type="primary">Buy</z-button>&nbsp;
            </z-tile-action>
          </z-tile>
        </z-column>

        <z-column :size="6">
          <z-tile centered>
            <z-tile-icon>
              <figure class="avatar avatar-lg"><i class="material-icons">email</i></figure>
            </z-tile-icon>
            <z-tile-content>
              <z-tile-title>Pokemons</z-tile-title>
              <z-tile-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</z-tile-subtitle>
            </z-tile-content>
            <z-tile-action>
              <z-button>Open</z-button>&nbsp;
            </z-tile-action>
          </z-tile>
        </z-column>

      </z-columns>
<z-code lang="Vue">
&lt;z-tile centered&gt;
  &lt;z-tile-icon&gt;
    &lt;z-avatar src="./avatar.png" alt="Avatar" /&gt;
  &lt;/z-tile-icon&gt;
  &lt;z-tile-content&gt;
    &lt;z-tile-title&gt;Pokemons&lt;/z-tile-title&gt;
    &lt;z-tile-subtitle&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/z-tile-subtitle&gt;
  &lt;/z-tile-content&gt;
  &lt;z-tile-action&gt;
    &lt;z-button type="primary"&gt;Buy&lt;/z-button&gt;
    &lt;z-button&gt;Help&lt;/z-button&gt;
  &lt;/z-tile-action&gt;
&lt;/z-tile&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Tile <code>&lt;z-tile /&gt;</code></h5>
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
            <z-td><code>centered</code></z-td>
            <z-td>
              set <code>true</code> to center elements vertically
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsTile',
  methods: {
    onCloseAlert() {
      alert('close event triggered')
    },
    openToastTop () {
      this.$_zutre.toast({
        position: 'top',
        type: 'success',
        title: 'Custom success toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 4000,
      })
    },
    openToastTopLeft () {
      this.$_zutre.toast({
        position: 'top left',
        type: 'warning',
        title: 'Custom warning toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 3000,
      })
    },
    openToastTopRight () {
      this.$_zutre.toast({
        position: 'top right',
        type: 'warning',
        title: 'Custom warning toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 2000
      })
    },
    openToastBottom () {
      this.$_zutre.toast({
        position: 'bottom',
        type: 'error',
        title: 'Custom error toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 4000
      })
    },
    openToastBottomLeft () {
      this.$_zutre.toast({
        position: 'bottom left',
        type: 'primary',
        title: 'Custom primary persistent toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true
      })
    },
    openToastBottomRight () {
      this.$_zutre.toast({
        position: 'bottom right',
        title: 'Custom bottom right toast',
        content: 'Seems like everything is fine. Vue is cool!',
        duration: 2000
      })
    }
  }
}
</script>
