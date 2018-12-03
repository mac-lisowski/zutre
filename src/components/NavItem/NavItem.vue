<template>
  <li :class="itemClass"><slot></slot></li>
</template>

<script>
/**
 * ZNavItem
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'ZNavItem',
  props: {
    active: {
      type: Boolean
    }
  },
  computed: {
    itemClass: function() {
      let css = {
        'nav-item': true,
        active: (this.active === true) ? true : false
      }

      return css
    }
  }
}
</script>
