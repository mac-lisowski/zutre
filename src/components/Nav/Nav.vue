<template>
  <ul :class="navClass"><slot></slot></ul>
</template>

<script>
/**
 * Nav
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Nav',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    navClass: function() {
      let css = {
        nav: true
      }

      return css
    }
  }
}
</script>
