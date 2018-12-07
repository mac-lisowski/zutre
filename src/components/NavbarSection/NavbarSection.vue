<template>
  <div :class="sectionClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * NavbarSection
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} center
 */
export default {
  name: 'NavbarSection',
  props: {
    center: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    sectionClass () {
      let css = {
        'navbar-section': true
      }

      if (this.center === true) {
        css['navbar-section'] = false
        css['navbar-center'] = true
      }

      return css
    }
  }
}
</script>
