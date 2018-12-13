<template>
  <li :class="itemClass">
    <slot v-if="hasSlot" />
    <z-link v-else :name="name" :href="href" :link="link" :active="active" />

    <z-nav v-if="hasItems()" :items="items" />
  </li>
</template>

<script>
/**
 * ZNavItem
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'NavItem',
  props: {
    active: Boolean,
    name: String,
    href: String,
    link: Object,
    items: Array,
  },
  methods: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0;
    },
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
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
