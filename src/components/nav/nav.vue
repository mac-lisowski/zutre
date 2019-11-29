<template>
  <ul :class="navClass">
    <slot v-if="hasSlot" />
    <z-nav-item
      v-for="(item, idx) in items"
      v-bind:key="idx"
      :name="item.name"
      :href="item.href"
      :link="item.link"
      :badge="item.badge"
      :active="item.active"
      :items="item.items"
      :icon="item.icon"
    /> 
  </ul>
</template>

<script>
/**
 * ZNav
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Nav',
  props: {
    items: Array,
  },
  methods: {
    hasItems() {
      return typeof this.items !== 'undefined' && this.items.length > 0;
    },
    hasSlot(name = 'default') {
      return !!this.$slots[name];
    },
  },
  computed: {
    navClass() {
      let css = { nav: true };

      return css;
    }
  }
}
</script>
