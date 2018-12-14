<template>
  <div :class="drawerClass">
    <slot />
  </div>
</template>

<script>
/**
 * ZDrawer
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} open
 */
export default {
  name: 'Drawer',
  props: {
    open: {
      type: Boolean,
      default: () => true,
    },
    type: {
      type: String,
      default: () => 'dock', // dock , fixed
    },
    position: {
      type: String,
      default: () => 'left', // left, right
    },
    fullHeight: {
      type: Boolean,
      default: () => true,
    }
  },
  mounted() {
    this.$parent.$el.classList.add('drawer--container');

    if (this.open === true) {
      this.$parent.$el.classList.add('drawer--container--open--' + this.position);
    }
  },
  watch: {
    open(value) {
      if (this.open === true) {
        this.$parent.$el.classList.add('drawer--container--open--' + this.position);
      } else {
        this.$parent.$el.classList.remove('drawer--container--open--' + this.position );
      }
    },
  },
  computed: {
    drawerClass: function() {
      let css = { drawer: true };

      if (this.open === true) {
        css['drawer--open'] = true;
      }

      switch(this.type) {
        case 'dock':
          css['drawer--type--dock'] = true;
          break;
        case 'fixed':
          css['drawer--type--fixed'] = true;
          break;
        default:
          css['drawer--type--dock'] = true;
      }

      switch(this.position) {
        case 'left':
          css['drawer--position--left'] = true;
          break;
        case 'right':
          css['drawer--position--right'] = true;
          break;
        default:
          css['drawer--position--left'] = true;
      }

      if (this.fullHeight === true) {
        css['drawer--full--height'] = true;
      }

      return css
    }
  }
}
</script>
