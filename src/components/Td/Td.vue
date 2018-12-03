<template>
  <td :class="tdClass"><slot></slot></td>
</template>

<script>
/**
 * Td
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} active
 */
export default {
  name: 'Td',
  props: {
    active: {
      type: Boolean
    }
  },
  computed: {
    tdClass: function() {
      let css = {}

      if (this.active === true) {
        css.active = true
      }

      return css
    }
  }
}
</script>
