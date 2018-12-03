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
 */
export default {
  name: 'ZTable',
  props: {
    stripped: {
      type: Boolean
    },
    hover: {
      type: Boolean
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

      return css
    }
  }
}
</script>
