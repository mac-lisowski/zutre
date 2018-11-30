<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Label', link: { name: 'docsLabel' }}]" />
      <h5>Label</h5>

      <p>Labels are formatted text tags for highlighted, informative information.</p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-label>default label</z-label> 
      <z-label type="primary" content="primary label" /> 
      <z-label type="secondary" content="secondary label" /> 
      <z-label type="success" content="success label" /> 
      <z-label type="warning" content="warning label" /> 
      <z-label type="error" content="error label" /> 

<z-code lang="Vue">
import { ZLabel } from 'zutre'

&lt;z-label&gt;default label&lt;/z-label&gt; 
&lt;z-label type="primary" content="primary label" /&gt; 
&lt;z-label type="secondary" content="secondary label" /&gt; 
&lt;z-label type="success" content="success label" /&gt; 
&lt;z-label type="warning" content="warning label" /&gt; 
&lt;z-label type="error" content="error label" /&gt;
</z-code>

    <h5>Rounded labels</h5>

    <z-label rounded>default label</z-label> 
    <z-label type="primary" content="primary label" rounded /> 

<z-code lang="Vue">
import { ZLabel } from 'zutre'

&lt;z-label rounded&gt;default label&lt;/z-label&gt; 
&lt;z-label type="primary" content="primary label" rounded /&gt; 
</z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZBreadcrumbs, ZCode, ZLabel, ZDivider } from './../components'

export default {
  name: 'DocsHero',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZLabel, ZDivider
  }
}
</script>
