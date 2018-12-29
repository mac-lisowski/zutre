<template>
  <!-- popover wrapper -->
  <div class="popover" :class="cssClass">
    <!-- default slot -->
    <slot />
    <!-- popover container -->
    <div class="popover-container">
      <!-- render as html if content is not a component -->
      <div 
        v-if="!hasComponent"
        v-html="content" 
      />
      <!-- render content as Vue component -->
      <component 
        v-if="hasComponent" 
        :is="content" 
      />
    </div>
  </div>
</template>

<script>
// Popover component
export default {
  name: 'Popover',
  props: {
    // content contains popover body - can be html, raw string, Vue component
    content: { type: [String, Object, Function], default: () => '' },
    // position can be: top, bottom, right, left
    position: { type: String, default: () => 'top' },
  },
  created() {
    // if there is no default slot then throw an error
    if (!this.hasDefaultSlot) {
      throw '[zutre:z-popover] there is no child element, popover must applied as a wrapper on element';
    }
  },
  computed: {
    // hasDefaultSlot checks if default slot is available
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    // hasComponent checks if this.content can be possibly a component
    hasComponent() {
      return typeof this.content === 'object' || typeof this.content === 'function';
    },
    // cssClass compuntes css classes which should be applied to popover wrapper
    cssClass() {
      let css = {};
      
      switch(this.position) {
        case 'top':
          css['popover-top'] = true;
          break;
        case 'bottom':
          css['popover-bottom'] = true;
          break;
        case 'left':
          css['popover-left'] = true;
          break;
        case 'right':
          css['popover-right'] = true;
          break;
      }

      return css;
    },
  },
};
</script>
