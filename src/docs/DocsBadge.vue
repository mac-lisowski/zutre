<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Badges', link: { name: 'docsBadges' }}]" />
      <h4>Badge</h4>

      <p>Badges are often used as unread number indicators.</p>

      <p>
        Components:<br>
        <code>&lt;z-badge&gt;</code>, <code>&lt;z-button&gt;</code>, <code>&lt;z-avatar&gt;</code>
      </p>

      <z-divider />

      <z-columns>
        <z-column>
          <z-badge badge="">Notifications</z-badge>
        </z-column>
        <z-column>
          <z-badge badge="3">Notifications</z-badge>
        </z-column>
        <z-column>
          <z-badge badge="97">Notifications</z-badge>
        </z-column>
        <z-column>
          <z-badge badge="9999">Notifications</z-badge>
        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-badge badge="3"&gt;Notifications&lt;/z-badge&gt;
</z-code>
      <br>

      <z-divider content="BUTTON BADGES" />
      <h4>Button badges (<router-link :to="{ name: 'docsButtons' }">Buttons</router-link>)</h4>

      <z-columns>
        <z-column>
          <z-button badge="">Button</z-button>
        </z-column>
        <z-column>
           <z-button badge="3">Button</z-button>
        </z-column>
        <z-column>
           <z-button badge="97">Button</z-button>
        </z-column>
        <z-column>
           <z-button badge="9999">Button</z-button>
        </z-column>
      </z-columns>
<z-code lang="Vue">
&lt;z-button badge=""&gt;Button&lt;/z-button&gt;
&lt;z-button badge="97"&gt;Button&lt;/z-button&gt;
</z-code>

      <z-divider content="AVATAR BADGES" />
      <h4>Avatar badges (<router-link :to="{ name: 'docsAvatars' }">Avatars</router-link>)</h4>

      <z-columns>
        <z-column>
          <z-avatar size="lg" presence="offline" data="ML" badge="" />
        </z-column>
        <z-column>
           <z-avatar size="lg" presence="online" data="ML" badge="3" />
        </z-column>
        <z-column>
           <z-avatar size="lg" data="ML" badge="97" />
        </z-column>
        <z-column>
           <z-avatar size="lg" data="ML" badge="9999" />
        </z-column>
      </z-columns>
<z-code lang="Vue">
&lt;z-avatar size="lg" presence="offline" data="ML" badge="" /&gt;
&lt;z-avatar size="lg" data="ML" badge="9999"&gt;
</z-code>


      <z-divider content="API" />
      <h4>API</h4>

      <h5>Tile <code>&lt;z-badge /&gt;</code></h5>
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
            <z-td><code>badge</code></z-td>
            <z-td>
              set badge content
            </z-td>
            <z-td>String</z-td>
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
