<template>
  <span :class="chipClass" @click="clicked"><slot /></span>
</template>

<script>
/**
 * ZChip
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Chip',
  methods: {
    clicked() {
      this.$emit('click');
    },
  },
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
