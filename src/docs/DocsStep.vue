<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Steps', link: { name: 'docsStep' }}]" />
      <h4>Steps</h4>

      <p></p>

      <p>
        Components: <code>&lt;z-step /&gt;</code>, <code>&lt;z-step-item /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-step :items="[
        { name: 'Step 1', tooltip: 'Hi in first step!'},
        { name: 'Step 2', tooltip: 'Second step!', active: true},
        { name: 'Step 3'}
      ]" @click="stepOnClick" />

<z-code lang="Vue">
&lt;z-step :items="[
  { name: 'Step 1', tooltip: 'Hi in first step!'},
  { name: 'Step 2', tooltip: 'Second step!', active: true},
  { name: 'Step 3'}
]" @click="stepOnClick" /&gt;
</z-code>

      <z-divider content="OR" />
      <br>

      <z-step>
        <z-step-item name="Step 1" tooltip="Tooltip 1" />
        <z-step-item name="Step 2" tooltip="Tooltip 2" />
        <z-step-item name="Step 3" tooltip="Tooltip 3" @click="stepOnClick" active />
        <z-step-item name="Step 4" />
        <z-step-item name="Step 5" />
      </z-step>

      <z-code lang="Vue">
&lt;z-step&gt;
  &lt;z-step-item name="Step 1" tooltip="Tooltip 1" /&gt;
  &lt;z-step-item name="Step 2" tooltip="Tooltip 2" /&gt;
  &lt;z-step-item name="Step 3" tooltip="Tooltip 3" @click="stepOnClick" active /&gt;
  &lt;z-step-item name="Step 4" /&gt;
  &lt;z-step-item name="Step 5" /&gt;
&lt;/z-step&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Step <code>&lt;z-step /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>items</code></z-td>
            <z-td>
              array with steps items - each item is an JSON object, eg:<br>
              <small>
<z-code>
[
  { name: 'Step 1', tooltip: 'Hi in first step!'},
  { name: 'Step 2', tooltip: 'Second step!', active: true},
  { name: 'Step 3'}
]
</z-code>
              </small>
            </z-td>
            <z-td>Array</z-td>
            <z-td>---</z-td>
            <z-td><code>[]</code></z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5"><strong>EVENTS</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emmited when step is clicked
            </z-td>
            <z-td><code>Event</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr> 
        </z-tbody>
      </z-table>

      <br>

      <h5>StepItem <code>&lt;z-step-item /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>name</code></z-td>
            <z-td>
              step name
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>tooltip</code></z-td>
            <z-td>
              step tooltip - shown on hover
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>active</code></z-td>
            <z-td>
              set <code>true</code> to make step marked as currently active
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5"><strong>EVENTS</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emmited when step item is clicked
            </z-td>
            <z-td><code>Event</code></z-td>
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
    stepOnClick(item) {
      alert('callback function on click - check console')
      console.info(item)
    }
  }
}
</script>
