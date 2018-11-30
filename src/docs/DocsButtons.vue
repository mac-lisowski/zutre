<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Buttons', link: { name: 'docsButtons' }}]" />

      <h4>Buttons</h4>
      <p>Buttons include simple button styles for actions in different types and sizes.</p>

      <z-button>button</z-button> &nbsp;
      <z-button type="primary">primary</z-button> &nbsp;
      <z-button type="link">link</z-button>
<z-code lang="Vue">
import { ZButton } from 'zutre'

&lt;z-button&gt;button&lt;/z-button&gt;
&lt;z-button type="primary"&gt;primary&lt;/z-button&gt;
&lt;z-button type="link"&gt;link&lt;/z-button&gt;
</z-code>

      <z-divider />

      <z-columns>
        <z-column>
          <z-button type="success" size="lg">success</z-button> &nbsp;
          <z-button type="error">error</z-button> &nbsp;
          <z-button size="sm">default</z-button>
        </z-column>
        <z-column>
          <z-button-group block>
            <z-button >button</z-button>
            <z-button type="primary" :active="true">button</z-button>
            <z-button type="primary">button</z-button>
          </z-button-group>
        </z-column>
        <z-column>
          <z-button type="primary" right>right</z-button> 
        </z-column>
      </z-columns>

<z-code lang="Vue">
import { ZButton } from 'zutre'

&lt;z-button-group block&gt;
  &lt;z-button&gt;button&lt;/z-button&gt;
  &lt;z-button type="primary" :active="true"&gt;button&lt;/z-button&gt;
  &lt;z-button type="primary"&gt;button&lt;/z-button&gt;
&lt;/z-button-group&gt;

&lt;z-button type="primary" right&gt;right&lt;/z-button&gt;
</z-code>

    </z-container>
</template>
<script>
import { ZButton, ZButtonGroup } from './../components'
import { ZContainer, ZColumns, ZCode, ZColumn, ZBreadcrumbs, ZDivider } from './../components'

export default {
  name: 'DocsButtons',
  components: {
    ZButton, ZButtonGroup, 
    ZContainer, ZColumns, ZColumn, ZCode, ZBreadcrumbs, ZDivider
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster');

$font-logo: 'Lobster', 'Tmes New Roman';
.logo {
  color: #EF2390;
  font-family: $font-logo;
  font-size: 5rem;
  margin: 20px 0;
  text-align: center;
  display: block;
}

.logo-subtitle {
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
  display: block;
}

.docs-container {
  > .container {
    max-width: 966px;
  }
}
</style>
