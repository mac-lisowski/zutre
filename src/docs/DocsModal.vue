<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Modals', link: { name: 'docsModal' }}]" />
      <h4>Modals</h4>

      <p>
        Components: 
        <code>&lt;z-modal&gt;</code>
      </p>

      <z-divider content="DEFAULT MODAL EXAMPLE" />
      <br>
      <z-button :click="openModal1">Open modal</z-button>

      <z-modal :open.sync="open1Open" title="Example Modal Title">
        <p>Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.</p>

        <template slot="footer">
          <z-button :click="closeModal1" type="primary">OK</z-button> <z-button :click="closeModal1" type="link">Cancel</z-button>
        </template>
      </z-modal>
      
<z-code lang="Vue">
import { ZModal, ZButton } from 'zutre'

&lt;z-button :click="openDefaultModal"&gt;Open modal&lt;/z-button&gt;

&lt;z-modal :open.sync="openModal" title="Example Modal Title"&gt;
  &lt;p&gt;Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.&lt;/p&gt;

  &lt;template slot="footer"&gt;
    &lt;z-button :click="closeModal" type="primary"&gt;OK&lt;/z-button&gt; &lt;z-button :click="closeModal" type="link"&gt;Cancel&lt;/z-button&gt;
  &lt;/template&gt;
&lt;/z-modal&gt;
</z-code>

      <p>As you may noticed, to put any elements in modal footer you have to use <code>&lt;template slot="footer"&gt;</code>

      <z-divider content="SMALL MODAL EXAMPLE"/>
      <br>
      <z-button :click="openModal2">Open small modal</z-button>

      <z-modal :open.sync="open2Open" title="Example Modal Title" size="sm">
        <p>Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.</p>
      </z-modal>
      
<z-code lang="Vue">
import { ZModal } from 'zutre'

&lt;z-modal :open.sync="openModal" title="Example Modal Title" size="sm"&gt;
  &lt;p&gt;Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.&lt;/p&gt;
&lt;/z-modal&gt;
</z-code>

      <z-divider content="LARGE MODAL EXAMPLE"/>
      <br>
      <z-button :click="openModal3">Open large modal</z-button>

      <z-modal :open.sync="open3Open" title="Example Modal Title" size="lg" :canClose="false">
        <h2>Suspendisse potenti</h2>
        <p>Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.</p>
        
        <h2>Suspendisse potenti</h2>
        <p>Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.</p>

        <h2>Suspendisse potenti</h2>
        <p>Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.</p>

        <template slot="footer">
          <z-button :click="closeModal3">Close</z-button>
        </template>
      </z-modal>
      
<z-code lang="Vue">
import { ZModal } from 'zutre'

&lt;z-modal :open.sync="openModal" title="Example Modal Title" size="lg" :canClose="false"&gt;
  &lt;h2&gt;Suspendisse potenti&lt;/h2&gt;
  &lt;p&gt;Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.&lt;/p&gt;

  &lt;h2&gt;Suspendisse potenti&lt;/h2&gt;
  &lt;p&gt;Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.&lt;/p&gt;

  &lt;h2&gt;Suspendisse potenti&lt;/h2&gt;
  &lt;p&gt;Ut quis vehicula ante, scelerisque laoreet mi. Suspendisse potenti. Nulla nibh ex, lobortis eget justo consequat, ultrices aliquam orci. Ut tellus est, finibus in felis vitae, convallis egestas nisl. Pellentesque sit amet magna ac quam mollis vehicula. Vestibulum nec ornare neque. Suspendisse quis convallis dui.&lt;/p&gt;

&lt;/z-modal&gt;
</z-code>

      
      <z-divider content="API" />
      <h4>API</h4>

      <h5>Modal <code>&lt;z-modal&gt;</code></h5>
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
            <z-td><code>title</code></z-td>
            <z-td>
              set title for modal
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>content</code></z-td>
            <z-td>
              modal content - can be HTML
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>open</code></z-td>
            <z-td>
              set <code>true</code> to open modal
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              size of modal window
            </z-td>
            <z-td>String</z-td>
            <z-td><code>sm</code> / <code>lg</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>width</code></z-td>
            <z-td>
              manually set width for modal
            </z-td>
            <z-td>String|Number</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>overlay</code></z-td>
            <z-td>
              set <code>false</code> to disable modal background overlay
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>true</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>canClose</code></z-td>
            <z-td>
              set <code>false</code> to disable all default closing actions
            </z-td>
            <z-td>Boolean|Array</z-td>
            <z-td><code>true</code>/<code>['esc', 'btn', 'overlay']</code></z-td>
            <z-td><code>true</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>onClose</code></z-td>
            <z-td>
              callback function to call after user fired close action
            </z-td>
            <z-td>Function</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import {
  ZContainer, ZModal, ZButton, ZBreadcrumbs, ZCode, ZDivider, ZTable, ZThead,
  ZTbody, ZTh, ZTr, ZTd,
} from './../components';

export default {
  name: 'DocsModal',
  components: {
    ZContainer, ZBreadcrumbs, ZModal, ZButton, ZCode, ZDivider,  ZTable,
    ZThead, ZTbody, ZTh, ZTr, ZTd,
  },
  data() {
    return {
      open1: false,
      open2: false,
      open3: false,
    };
  },
  methods: {
    openModal1() {
      this.open1 = true;
    },
    openModal2() {
      this.open2 = true;
    },
    openModal3() {
      this.open3 = true;
    },
    closeModal1() {
      this.open1 = false;
    },
    closeModal2() {
      this.open2 = false;
    },
    closeModal3() {
      this.open3 = false;
    },
  },
  computed: {
    open1Open: {
      get() {
        return this.open1 === true;
      },
      set(val) {
        this.open1 = val;
      },
    },
    open2Open: {
      get() {
        return this.open2 === true;
      },
      set(val) {
        this.open2 = val;
      },
    },
    open3Open: {
      get() {
        return this.open3 === true;
      },
      set(val) {
        this.open3 = val;
      },
    },
  },
};
</script>
