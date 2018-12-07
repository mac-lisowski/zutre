<template>
  <span :class="chipClass"><slot></slot></span>
</template>

<script>
/**
 * Chip
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Chip',
  computed: {
    chipClass: function() {
      let css = {
        chip: true
      }

      return css
    }
  }
}
</script>
