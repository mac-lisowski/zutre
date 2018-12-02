<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZContainer
 * 
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size
 */
export default {
  name: 'ZContainer',
  props: {
    size: String
  },
  computed: {
    containerClass () {
      let css = 'container'

      switch(this.size) {
        case 'xs':
          css += ' grid-xs'
          break
        case 'sm':
          css += ' grid-sm'
          break
        case 'lg':
          css += ' grid-lg'
          break
        case 'xl':
          css += ' grid-xl'
          break
      }

      return css
    }
  }
}
</script>
