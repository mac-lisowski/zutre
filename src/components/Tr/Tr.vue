<template>
  <tr :class="trClass"><slot></slot></tr>
</template>

<script>
/**
 * ZTr
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} active
 */
export default {
  name: 'ZTr',
  props: {
    active: {
      type: Boolean
    }
  },
  computed: {
    trClass: function() {
      let css = {}

      if (this.active === true) {
        css.active = true
      }

      return css
    }
  }
}
</script>
