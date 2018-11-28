<template>
    <z-container>
      <h4>Components</h4>
      <ul>
        <li>
          <router-link :to="{ name: 'home'}">Buttons</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'docsBreadcrumbs'}">Breadcrumbs</router-link>
        </li>
      </ul>

      <h5>Buttons</h5>
      <z-columns>
        
        <z-column>
          <z-card></z-card>
        </z-column>
        <z-column>
          <z-columns>
            <z-column>
              <z-button>button</z-button> &nbsp;
              <z-button type="primary">primary</z-button> &nbsp;
              <z-button type="link">link</z-button> &nbsp;
              <z-button type="success">success</z-button> &nbsp;
              <z-button type="error">error</z-button>
            </z-column>
          </z-columns>

          <z-columns>
            <z-column>
              
              <z-button size="lg" type="primary">large</z-button> &nbsp;
              <z-button>normal</z-button> &nbsp;
              <z-button size="sm" type="success">small</z-button> &nbsp;
            </z-column>
          </z-columns>

          <z-columns>
            <z-column>
              
              <z-button :disabled="true">disabled</z-button> &nbsp;
              <z-button :loading="true" type="error">loading</z-button> &nbsp;
              <z-button :loading="true" :disabled="true">loading disabled</z-button> &nbsp;
              <z-button :loading="true" type="primary">small</z-button> &nbsp;
            </z-column>
          </z-columns>

          <z-columns>

            <z-column>
              <z-button-group>
                <z-button type="primary">button</z-button>
                <z-button type="primary" :active="true">button</z-button>
                <z-button type="primary">button</z-button>
              </z-button-group>
            </z-column>

            <z-column>
              <z-button-group :block="true">
                <z-button type="primary" size="sm">button</z-button>
                <z-button type="primary" size="sm" :active="true">button</z-button>
                <z-button type="primary" size="sm">button</z-button>
              </z-button-group>
            </z-column>
          </z-columns>

        </z-column>

      </z-columns>

      <z-columns :oneline="false" :gapless="false">
        
        <z-column :size=3 :mxAuto="false" :mlAuto="false" :mrAuto="false">
          <z-card></z-card>
        </z-column>

        <z-column :size=3>
          TEST
        </z-column>

        <z-column :size=3>
          <z-card></z-card>
        </z-column>
        <z-column :size=3>
          TEST
        </z-column>

      </z-columns>

    </z-container>
</template>
<script>
import { ZButton, ZButtonGroup } from './../components'
import { ZCard } from './../components'
import { ZContainer, ZColumns, ZColumn } from './../components'

export default {
  name: 'DocsHome',
  components: {
    ZButton, ZButtonGroup, 
    ZCard,
    ZContainer, ZColumns, ZColumn
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
