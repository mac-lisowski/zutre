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
      let cssClass = 'columns'

      if (this.gapless === true) {
        cssClass += ' col-gapless'
      }

      if (this.oneline === true) {
        cssClass += ' col-oneline'
      }

      return cssClass
    }
  }
}
</script>
