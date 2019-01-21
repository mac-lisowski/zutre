<template>
  <span :class="chipClass" @click="$emit('click')"><slot /></span>
</template>

<script>
/**
 * ZChip
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Chip',
  computed: {
    chipClass: function() {
      let css = {
        chip: true,
      }

      return css
    }
  }
}
</script>
