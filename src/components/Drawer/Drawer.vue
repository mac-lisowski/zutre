<template>
  <div :class="drawerClass">
    <div class="drawer--body">
      <div class="drawer--body--content">
        <slot />
      </div>

      <div class="drawer--body--footer" v-if="hasFooter">
        <slot name="footer" />
      </div>
    </div>
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
    this.$el.parentNode.classList.add('drawer--container');

    if (this.open === true) {
      this.$el.parentNode.classList.add('drawer--container--open--' + this.position);
    }
  },
  watch: {
    open(value) {
      if (value === true) {
        this.$el.parentNode.classList.add('drawer--container--open--' + this.position);
      } else {
        this.$el.parentNode.classList.remove('drawer--container--open--' + this.position );
      }
    },
  },
  computed: {
    hasFooter() { 
      return !!this.$slots.footer;
    },
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
