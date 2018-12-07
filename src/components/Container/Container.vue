<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Container
 * 
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size
 */
export default {
  name: 'Container',
  props: {
    size: String
  },
  computed: {
    containerClass () {
      let css = {
        container: true
      }

      switch(this.size) {
        case 'xs':
          css['grid-xs'] = true
          break
        case 'sm':
          css['grid-sm'] = true
          break
        case 'lg':
          css['grid-lg'] = true
          break
        case 'xl':
          css['grid-xl'] = true
          break
      }

      return css
    }
  }
}
</script>
