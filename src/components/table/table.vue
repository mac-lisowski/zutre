<template>
  <table :class="tableClass">
    <slot></slot>
  </table>
</template>

<script>
/**
 * ZTable
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} stripped
 * @prop {Boolean} hover
 * @prop {Boolean} shrink default: false
 */
export default {
  name: 'Table',
  props: {
    stripped: Boolean,
    hover: Boolean,
    shrink: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    tableClass () {
      let css = {
        table: true
      }

      if (this.stripped) {
        css['table-striped'] = true
      }

      if (this.hover) {
        css['table-hover'] = true
      }

      if (this.shrink) {
        css['table--shrink'] = true;
      }

      return css
    }
  }
}
</script>
