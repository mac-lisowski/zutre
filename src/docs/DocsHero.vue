<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Hero', link: { name: 'docsHero' }}]" />
      <h4>Hero</h4>

      <p>
        Components: 
        <code>&lt;z-hero&gt;</code>,<code>&lt;z-hero-body&gt;</code>
      </p>
      
      <z-hero type="gray">
        <z-hero-body>
          <h1>Hero title</h1>
          <p>This is a hero example</p>
        </z-hero-body>
      </z-hero>
      <br>
<z-code lang="Vue">
import { ZHero, ZHeroBody } from 'zutre'

&lt;z-hero type="gray" &gt;
  &lt;z-hero-body&gt;
    &lt;h1&gt;Hero title&lt;/h1&gt;
    &lt;p&gt;This is a hero example&lt;/p&gt;
  &lt;/z-hero-body&gt;
&lt;/z-hero&gt;
</z-code>
      
      <br>
      <z-divider content="OR" />
      <br>

      <z-hero type="dark" size="sm">
        <z-hero-body>
          <h1>Hero title</h1>
          <p>This is a hero example</p>
        </z-hero-body>
      </z-hero>
      <br>
<z-code lang="Vue">
import { ZHero, ZHeroBody } from 'zutre'

&lt;z-hero type="dark" size="sm" &gt;
  &lt;z-hero-body&gt;
    &lt;h1&gt;Hero title&lt;/h1&gt;
    &lt;p&gt;This is a hero example&lt;/p&gt;
  &lt;/z-hero-body&gt;
&lt;/z-hero&gt;
</z-code>

      <br>
      <z-divider content="OR" />
      <br>
      
      <z-hero type="primary" size="lg">
        <z-hero-body>
          <h1>Hero title</h1>
          <p>This is a hero example</p>
        </z-hero-body>
      </z-hero>
<z-code lang="Vue">
import { ZHero, ZHeroBody } from 'zutre'

&lt;z-hero type="primary" size="lg" &gt;
  &lt;z-hero-body&gt;
    &lt;h1&gt;Hero title&lt;/h1&gt;
    &lt;p&gt;This is a hero example&lt;/p&gt;
  &lt;/z-hero-body&gt;
&lt;/z-hero&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Hero <code>&lt;z-hero /&gt;</code></h5>
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
            <z-td><code>type</code></z-td>
            <z-td>
              hero type (color scheme)
            </z-td>
            <z-td>String</z-td>
            <z-td><code>primary</code>, <code>secondary</code>, <code>gray</code>, <code>dark</code>, <code>success</code>, <code>warning</code>, <code>error</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              hero size
            </z-td>
            <z-td>String</z-td>
            <z-td><code>sm</code>, <code>lg</code></z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZHero, ZHeroBody, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZHero, ZHeroBody, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
  }
}
</script>
