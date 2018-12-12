<template>
  <ul :class="navClass"><slot></slot></ul>
</template>

<script>
/**
 * ZNav
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Nav',
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
