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
 * @prop {Boolean} scrollable dafult: false
 */
export default {
  name: 'Table',
  props: {
    stripped: Boolean,
    hover: Boolean,
    shrink: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    if (this.scrollable === true) {
      let parentEl = this.$el.parentNode;
      let wrapper = document.createElement('div');
      wrapper.classList.add('table--scrollable--container');

      parentEl.replaceChild(wrapper, this.$el);
      wrapper.appendChild(this.$el);
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
