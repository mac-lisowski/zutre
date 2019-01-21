<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Buttons', link: { name: 'docsButtons' }}]" />

      <h4>Buttons</h4>
      <p>Buttons include simple button styles for actions in different types and sizes.</p>

      <p>Components: <code>&lt;z-button /&gt;</code>, <code>&lt;z-button-group /&gt;</code></p>

      <z-divider content="EXAMPLES" />
      <br>
      <z-button>button</z-button> &nbsp;
      <z-button color="primary">primary</z-button> &nbsp;
      <z-button color="link">link</z-button> &nbsp;
<z-code lang="Vue">
&lt;z-button&gt;button&lt;/z-button&gt;
&lt;z-button color="primary"&gt;primary&lt;/z-button&gt;
&lt;z-button color="link"&gt;link&lt;/z-button&gt;
</z-code>

      <z-divider content="OR" />

      <z-columns>
        <z-column>
          <z-button color="success" size="lg" @click="btnClicked">success</z-button> &nbsp;
          <z-button color="error">error</z-button> &nbsp;
          <z-button size="sm">default</z-button>
        </z-column>
        <z-column>
          <z-button-group block>
            <z-button >button</z-button>
            <z-button color="primary" :active="true">button</z-button>
            <z-button color="primary">button</z-button>
          </z-button-group>
        </z-column>
        <z-column>
          <z-button color="primary" right>right</z-button>
        </z-column>
      </z-columns>

      <z-divider content="OR" />

      <z-columns>
        <z-column>
          <z-button color="primary" circle>12</z-button> &nbsp;
          <z-button color="error" circle>error</z-button> &nbsp;
          <z-button size="sm" circle loading>10</z-button>
        </z-column>
        <z-column>
          <z-button-group block>
            <z-button disabled>button</z-button>
            <z-button color="primary" disabled>button</z-button>
            <z-button color="primary" disabled>button</z-button>
          </z-button-group>
        </z-column>
        <z-column>
          <z-button action>1</z-button>
          <z-button action>2</z-button>
          <z-button action>3</z-button>
        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-button-group block&gt;
  &lt;z-button color="primary" circle&gt;12&lt;/z-button&gt;
  &lt;z-button disabled&gt;button&lt;/z-button&gt;
  &lt;z-button action&gt;1&lt;/z-button&gt;
&lt;/z-button-group&gt;
</z-code>

      <z-divider content="BUTTON BADGES" />
      <h4>Button badges</h4>

      <z-button badge="click">Button badge</z-button>
      <br><br>
      <z-button color="error" badge="5">System alerts</z-button>
      <br><br>
      <z-button badge="">Button</z-button>

<z-code lang="Vue">
&lt;z-button badge="click"&gt;Button badge&lt;/z-button&gt;
&lt;z-button color="error" badge="5"&gt;System alerts&lt;/z-button&gt;
&lt;z-button badge=""&gt;Button&lt;/z-button&gt;
</z-code>

      <z-divider content="BUTTON DROPDOWNS" />

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

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Butotn <code>&lt;z-button /&gt;</code></h5>
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
            <z-td><code>color</code></z-td>
            <z-td>
              set button color scheme
            </z-td>
            <z-td>String</z-td>
            <z-td><code>primary</code>, <code>link</code>, <code>success</code>, <code>error</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              set size for button
            </z-td>
            <z-td>String</z-td>
            <z-td><code>sm</code>, <code>lg</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>active</code></z-td>
            <z-td>
              set <code>true</code> to apply active button style
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>action</code></z-td>
            <z-td>
              set <code>true</code> to apply active style, for a square button
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>circle</code></z-td>
            <z-td>
              set <code>true</code> to apply circle style, for a round button
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>loading</code></z-td>
            <z-td>
              set <code>true</code> to apply loading style, will show loading indicator
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>disabled</code></z-td>
            <z-td>
              set <code>true</code> to apply disabled class style for button and make it inactive
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>right</code></z-td>
            <z-td>
              set <code>true</code> to float right
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>clear</code></z-td>
            <z-td>
              set <code>true</code> to generate close button
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>badge</code></z-td>
            <z-td>
              button badge content
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          
          <z-tr>
            <z-td colspan="5"><strong>EVENTS</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emmited when button is clicked
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      <br>

      <h5>ButotnGroup <code>&lt;z-button-group /&gt;</code></h5>
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
            <z-td><code>block</code></z-td>
            <z-td>
              set <code>true</code> to use buttons as a full-width group
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
  name: 'DocsButtons',
  methods: {
    btnClicked() {
      console.log('Button Clicked');
    }
  },
}
</script>
