<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Toast', link: { name: 'docsToast' }}]" />
      <h4>Toast</h4>

      <p>
        Components:
        <code>&lt;z-toast&gt;</code>
      </p>

      <z-divider />

      <z-toast closeBtn>
        <h6>Toast title</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </z-toast>
      <br>

      <z-toast type="primary" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <br>

      <z-toast closeBtn v-on:close="onCloseAlert" type="success" title="Success toast" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      <br>
      <z-divider content="FLOATING TOASTS" />
      <br>

      <z-columns>
        <z-column>
          <z-button-group block>
            <z-button size="sm" :click="openToastTop">Open (top)</z-button>
            <z-button size="sm" :click="openToastTopLeft">Open (top left)</z-button>
            <z-button size="sm" :click="openToastTopRight">Open (top right)</z-button>
          </z-button-group>
        </z-column>
        <z-column>
          <z-button-group block>
            <z-button size="sm" :click="openToastBottom">Open (bottom)</z-button>
            <z-button size="sm" :click="openToastBottomLeft">Open (bottom left)</z-button>
            <z-button size="sm" :click="openToastBottomRight">Open (bottom right)</z-button>
          </z-button-group>
        </z-column>
      </z-columns>

<z-code lang="Vue">
...

export default {
  name: 'ComponentName',
  methods: {
    openToastTop () {
      this.$zutre.toast({
        position: 'top',
        type: 'success',
        title: 'Custom success toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 4000
      })
    },
    openToastBottomLeft () {
      this.$zutre.toast({
        position: 'bottom left',
        type: 'primary',
        title: 'Custom error toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true
      })
    }
  },
  ...
}

...
</z-code>


      <z-divider content="API" />
      <h4>API</h4>

      <h5>Toast <code>&lt;z-toast /&gt;</code></h5>
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
            <z-td><code>show</code></z-td>
            <z-td>
              set <code>false</code> to close
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>true</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>duration</code></z-td>
            <z-td>
              set duration in ms after which toast component will be destroyed, <code>0</code> - persistent toast
            </z-td>
            <z-td>Number</z-td>
            <z-td>---</z-td>
            <z-td>0</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>position</code></z-td>
            <z-td>
              By default will display inline if no <code>position</code> is provided
            </z-td>
            <z-td>String</z-td>
            <z-td><code>top</code>, <code>top left</code>, <code>top right</code>, <code>bottom</code>, <code>bottom left</code>, <code>bottom right</code></z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>closeBtn</code></z-td>
            <z-td>
              set <code>true</code> to display close button
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>type</code></z-td>
            <z-td>
              toast type (color scheme)
            </z-td>
            <z-td>String</z-td>
            <z-td><code>primary</code>, <code>success</code>, <code>warning</code>, <code>error</code></z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>title</code></z-td>
            <z-td>
              toast title
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>content</code></z-td>
            <z-td>
              toast content body
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-th>EVENTS</z-th>
          </z-tr>

          <z-tr>
            <z-td><code>close</code></z-td>
            <z-td>
              triggered when close button is pressed
            </z-td>
            <z-td>Boolean</z-td>
            <z-td>true</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>open</code></z-td>
            <z-td>
              triggered on open
            </z-td>
            <z-td>Boolean</z-td>
            <z-td>true</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsToast',
  methods: {
    onCloseAlert() {
      alert('close event triggered')
    },
    openToastTop () {
      this.$zutre.toast({
        position: 'top',
        type: 'success',
        title: 'Custom success toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 4000,
      })
    },
    openToastTopLeft () {
      this.$zutre.toast({
        position: 'top left',
        type: 'warning',
        title: 'Custom warning toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 3000,
      })
    },
    openToastTopRight () {
      this.$zutre.toast({
        position: 'top right',
        type: 'warning',
        title: 'Custom warning toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 2000
      })
    },
    openToastBottom () {
      this.$zutre.toast({
        position: 'bottom',
        type: 'error',
        title: 'Custom error toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 4000
      })
    },
    openToastBottomLeft () {
      this.$zutre.toast({
        position: 'bottom left',
        type: 'primary',
        title: 'Custom primary persistent toast',
        content: 'Seems like everything is fine. Vue is cool!',
        closeBtn: true,
        duration: 0,
      })
    },
    openToastBottomRight () {
      this.$zutre.toast({
        position: 'bottom right',
        title: 'Custom bottom right toast',
        content: 'Seems like everything is fine. Vue is cool!',
        duration: 2000
      })
    }
  }
}
</script>
