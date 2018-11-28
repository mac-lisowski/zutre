<template>
  <div>
    <h1>Zutre</h1>
    <h2>Lightweight UI components for Vue.js based on Spectre CSS Framework</h2>

    <strong>In Development</strong>

    <z-container>
      <z-columns>
        <z-column>
          <z-breadcrumbs :items="[{ name: 'Dashboard', href: '/'}, { name: 'Settings', href: '/settings'}]" />

          <z-breadcrumbs>
            <z-breadcrumbs-item name="Test" href="/test" />
            <!-- <z-breadcrumbs-item name="Test 2" :link="{ to: 's'}" /> -->
            <z-breadcrumbs-item name="Test 2" href="/all-good" />
            <z-breadcrumbs-item href="/custom">custom</z-breadcrumbs-item>
          </z-breadcrumbs>
          
        </z-column>
      </z-columns>

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
  </div>
</template>
<script>
import { ZButton } from './components'
import { ZBreadcrumbs, ZBreadcrumbsItem } from './components'
import { ZCard } from './components'
import { ZContainer, ZColumns, ZColumn } from './components'

export default {
  name: 'Demo',
  components: {
    ZButton, 
    ZBreadcrumbs, ZBreadcrumbsItem,
    ZCard,
    ZContainer, ZColumns, ZColumn
  }
}
</script>
