<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Nav', link: { name: 'docsNav' }}]" />
      <h4>Nav</h4>

      <p>
        Components: <code>&lt;z-nav&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-columns>
        <z-column :sizeLG="12">

          <z-nav :items="[
            { name: 'Page 1', href: '/page-1' },
            { name: 'Page 2', href: '/page-2' },
            { name: 'Page 3', href: '/page-3', active: true, items: [
              { name: 'Subpage 1', link: { name: 'router-link-routeName' } },
              { name: 'Subpage 2', link: { name: 'routeName' }, active: true },
              { name: 'Subpage 3', link: { name: 'routeName' } },
              { name: 'Subpage 4', link: { name: 'routeName' } },
              { name: 'Subpage 5', link: { name: 'routeName' } },
              { name: 'Subpage 6', link: { name: 'routeName' } },
            ] },
            { name: 'Page 4', href: '/page-4' },
          ]" />

        </z-column>
        <z-column :sizeLG="12">

<z-code lang="Vue">
&lt;z-nav :items="navItems" /&gt;

...
  data() {
    return {
      navItems: [
        { name: 'Page 1', href: '/page-1' },
        { name: 'Page 2', href: '/page-2' },
        { name: 'Page 3', href: '/page-3', active: true, items: [
          { name: 'Subpage 1', link: { name: 'router-link-routeName' } },
          { name: 'Subpage 2', link: { name: 'routeName' }, active: true },
          { name: 'Subpage 3', link: { name: 'routeName' } },
          { name: 'Subpage 4', link: { name: 'routeName' } },
          { name: 'Subpage 5', link: { name: 'routeName' } },
          { name: 'Subpage 6', link: { name: 'routeName' } },
        ] },
        { name: 'Page 4', href: '/page-4' },
      ],
    };
  },
...
</z-code>

        </z-column>
      </z-columns>

      <z-divider />

      <br>

      <z-columns>
        <z-column :sizeLG="12">

          <z-nav>
            <z-nav-item>
              <z-link href="">Element 1</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 2</z-link>
            </z-nav-item>
            <z-nav-item active>
              <z-link href="">Element 3</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 4</z-link>
            </z-nav-item>
          </z-nav>

        </z-column>
        <z-column :sizeLG="12">

<z-code lang="Vue">
&lt;z-nav&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 1&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item active&gt;
    &lt;z-link href=""&gt;Element 2&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
&lt;/z-nav&gt;
</z-code>

        </z-column>
      </z-columns>

      <z-divider />

<z-columns>
        <z-column :sizeLG="12">

          <z-nav>
            <z-nav-item>
              <z-link href="">Element 1</z-link>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 2</z-link>
            </z-nav-item>
            <z-nav-item active>
              <z-link href="">Element 3</z-link>

              <z-nav>
                <z-nav-item>
                  <z-link href="">Link 1</z-link>
                </z-nav-item>
                <z-nav-item>
                  <z-link href="">Link 2</z-link>
                </z-nav-item>
              </z-nav>
            </z-nav-item>
            <z-nav-item>
              <z-link href="">Element 4</z-link>
            </z-nav-item>
          </z-nav>

        </z-column>
        <z-column :sizeLG="12">

<z-code lang="Vue">
&lt;z-nav&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 1&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item&gt;
    &lt;z-link href=""&gt;Element 2&lt;/z-link&gt;
  &lt;/z-nav-item&gt;
  &lt;z-nav-item active&gt;
    &lt;z-link href=""&gt;Element 3&lt;/z-link&gt;

    &lt;z-nav&gt;
      &lt;z-nav-item&gt;
        &lt;z-link href=""&gt;Link 1&lt;/z-link&gt;
      &lt;/z-nav-item&gt;
      &lt;z-nav-item&gt;
        &lt;z-link href=""&gt;Link 2&lt;/z-link&gt;
      &lt;/z-nav-item&gt;
    &lt;/z-nav&gt;

  &lt;/z-nav-item&gt;
&lt;/z-nav&gt;
</z-code>

        </z-column>
      </z-columns>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Nav <code>&lt;z-nav-item&gt;</code></h5>
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
            <z-td><code>active</code></z-td>
            <z-td>
              set <code>true</code> to apply active style for item
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsHero',
}
</script>
