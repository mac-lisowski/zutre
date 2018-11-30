<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Hero', link: { name: 'docsHero' }}]" />
      <h5>Hero</h5>

      <z-hero type="gray">
        <z-hero-body>
          <h1>Hero title</h1>
          <p>This is a hero example</p>
        </z-hero-body>
      </z-hero>
      <br>
<z-code lang="Vue">
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
&lt;z-hero type="primary" size="lg" &gt;
  &lt;z-hero-body&gt;
    &lt;h1&gt;Hero title&lt;/h1&gt;
    &lt;p&gt;This is a hero example&lt;/p&gt;
  &lt;/z-hero-body&gt;
&lt;/z-hero&gt;
</z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZHero, ZHeroBody, ZDivider } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZHero, ZHeroBody, ZDivider
  }
}
</script>

<style lang="scss" scoped>
</style>
