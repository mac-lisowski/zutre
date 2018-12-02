<template>
  <div :class="tileClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZTile
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} centered
 */
export default {
  name: 'Tile',
  props: {
    centered: {
      type: Boolean
    }
  },
  computed: {
    tileClass() {
      let css = 'tile'

      if (this.centered === true) {
        css += ' tile-centered'
      }
      return css
    }
  }
}
</script>
