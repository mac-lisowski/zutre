<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Empty states', link: { name: 'docsEmptyStates' }}]" />
      <h4>Empty states</h4>

      <p>Empty states/blank slates are commonly used as placeholders for first time use, empty data and error screens.</p>

      <p>
        Components:<br>
        <code>&lt;z-tile&gt;</code>, <code>&lt;z-tile-action&gt;</code>, <code>&lt;z-tile-content&gt;</code>, <code>&lt;z-tile-icon&gt;</code>, <code>&lt;z-tile-title&gt;</code>, <code>&lt;z-tile-subtitle&gt;</code>
      </p>

      <z-divider />

      <z-columns>
        <z-column>

          <z-empty>
            <z-empty-icon name="email" />
            <z-empty-title>You have no new messages</z-empty-title>
            <z-empty-subtitle>Click the button to start a conversation</z-empty-subtitle>
            <z-empty-action>
              <z-button type="primary">Send a message</z-button> &nbsp;
              <z-button>Cancel</z-button>
            </z-empty-action>
          </z-empty>

        </z-column>
        <z-column>

          <z-empty>
            <z-empty-icon name="alarm_on" />
            <z-empty-title>Meeting at 5.00 PM</z-empty-title>
            <z-empty-subtitle>Maecenas massa augue, condimentum non</z-empty-subtitle>
            <z-empty-action>
              <z-button type="primary">View details</z-button> &nbsp;
            </z-empty-action>
          </z-empty>

        </z-column>
      </z-columns>
      <z-columns>
        <z-column>

          <z-empty>
            <z-empty-icon name="done_outline" />
            <z-empty-title>Task completed!</z-empty-title>
            <z-empty-subtitle>Maecenas massa augue, condimentum non</z-empty-subtitle>
            <z-empty-action>
              <z-button>Create new</z-button> &nbsp; <z-button type="link">See all</z-button>
            </z-empty-action>
          </z-empty>

        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-empty&gt;
  &lt;z-empty-icon name="done_outline" /&gt;
  &lt;z-empty-title&gt;Task completed!&lt;/z-empty-title&gt;
  &lt;z-empty-subtitle&gt;Maecenas massa augue, condimentum non&lt;/z-empty-subtitle&gt;
  &lt;z-empty-action&gt;
    &lt;z-button&gt;Create new&lt;/z-button&gt; &nbsp; &lt;z-button type="link"&gt;See all&lt;/z-button&gt;
  &lt;/z-empty-action&gt;
&lt;/z-empty&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Empty <code>&lt;z-empty-icon /&gt;</code></h5>
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
            <z-td><code>name</code></z-td>
            <z-td>
              name of icon - supported are <a href="https://material.io/tools/icons" target="_blank">material icons</a> from google
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
  name: 'DocsEmptyStates',
}
</script>
