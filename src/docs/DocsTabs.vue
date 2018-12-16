<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Tabs', link: { name: 'docsTabs' }}]" />
      <h4>Tabs</h4>

      <z-divider />

      <z-button :click="() => changeTab(2)">Change to Tab 3</z-button>
      <z-tab :items="items" :active.sync="activeTab">
        <template slot="action">
          <z-button size="sm" >Action Button</z-button>
        </template>
      </z-tab>

      <br/>
      
      <z-divider content="DISPLAY AS BLOCK" />

      <z-tab :items="items"  block/>

    </z-container>
</template>
<script>
import TestComponent from './TestComponent';

export default {
  name: 'DocsTabs',
  data() {
    return {
      activeTab: 1,
      items: [
        { name: 'Tab 1', content: 'Tab 1 <strong>content</strong>' },
        { name: 'Tab 2', content: 'Tab 2 content' },
        { name: 'Tab 3', content: TestComponent, badge: '10' },
        { name: 'Tab 4', content: 'Tab 4 content' },
      ],
    };
  },
  methods: {
    changeTab(idx) {
      this.activeTab = idx;
    }
  },
}
</script>
