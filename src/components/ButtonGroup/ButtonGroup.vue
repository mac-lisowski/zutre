<template>
  <div :class="groupClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZButtonGroup  
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} block
 */
export default {
  name: 'ZButtonGroup',
  props: {
    block: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    groupClass: function() {
      let cssClass = 'btn-group'

      if (this.block === true) {
        cssClass += ' btn-group-block'
      }

      return cssClass
    }
  }
}
</script>
