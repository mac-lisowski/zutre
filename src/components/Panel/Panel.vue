<template>
  <div class="panel" :style="panelStyle">
    <div v-if="hasSlot('header')"  class="panel-header">
      <slot name="header" />
    </div>
    <div v-if="hasSlot('nav')" class="panel-nav">
      <slot name="nav" />
    </div>

    <div v-if="hasSlot('default')" class="panel-body">
      <slot />
    </div>

    <div v-if="hasSlot('footer')" class="panel-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
const props = {
  height: String,
};

export default {
  name: 'Panel',
  props,
  methods: {
    hasSlot(name) {
      return !!this.$slots[name];
    }
  },
  computed: {
    panelStyle() {
      let css = { height: 'auto' };

      if (typeof this.height !== 'undefined') {
        css.height = this.height;
      }

      return css;
    }
  }
};
</script>
