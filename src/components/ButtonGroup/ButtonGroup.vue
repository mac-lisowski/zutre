<template>
  <div :class="groupClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ButtonGroup  
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} block
 */
export default {
  name: 'ButtonGroup',
  props: {
    block: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    groupClass: function() {
      let css = {
        'btn-group': true
      }

      if (this.block === true) {
        css['btn-group-block'] = true
      }

      return css
    }
  }
}
</script>
