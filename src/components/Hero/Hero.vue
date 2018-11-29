<template>
  <div :class="heroClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZHero
 * 
 * Spectre: https://picturepan2.github.io/spectre/layout/hero.html
 */
export default {
  name: 'ZHero',
  props: {
    type: {
      type: String,
      default: () => ''
    },
    size: {
      type: String,
      default: () => ''
    },
  },
  computed: {
    heroClass: function() {
      var cssClass = 'hero'

      switch(this.size) {
        case 'sm':
          cssClass += ' hero-sm'
          break
        case 'lg':
          cssClass += ' hero-lg'
          break
      }

      switch(this.type) {
        case 'primary':
          cssClass += ' bg-primary'
          break
        case 'secondary':
          cssClass += ' bg-secondary'
          break
        case 'dark':
          cssClass += ' bg-dark'
          break
        case 'gray':
          cssClass += ' bg-gray'
          break
        case 'success':
          cssClass += ' bg-success'
          break
        case 'warning':
          cssClass += ' bg-warning'
          break
        case 'error':
          cssClass += ' bg-error'
          break
      }

      return cssClass
    }
  }
}
</script>
