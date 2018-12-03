<template>
  <span :class="chipClass"><slot></slot></span>
</template>

<script>
/**
 * ZChip
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'ZChip',
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
