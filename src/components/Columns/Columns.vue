<template>
  <div :class="columnsClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZColumns
 * 
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} gapless
 * @prop {Boolean} oneline
 */
export default {
  name: 'ZColumns',
  props: {
    gapless: {
      type: Boolean,
      default: () => false
    },
    oneline: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    columnsClass: function() {
      let css = {
        columns: true
      }

      if (this.gapless === true) {
        css['col-gapless'] = true
      }

      if (this.oneline === true) {
        css['col-oneline'] = true
      }

      return css
    }
  }
}
</script>
