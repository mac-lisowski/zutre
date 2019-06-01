<template>
  <div class="bar" :class="barClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>

    <template v-if="!hasDefaultSlot && barItems.length > 0">
      <!-- <z-breadcrumbs-item 
        v-bind:key="item.name" 
        v-for="item in barItems" 
        :name="item.name" 
        :link="item.link" 
        :href="item.href"
        :icon="item.icon"
      /> -->
      x
    </template>
  </div>
</template>
  <script>
/**
 * ZBar
 *
 * Spectre: https://picturepan2.github.io/spectre/components/bars.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size sm/lg or empty for normal size
 * @prop {Array} items each item is an JSON object with: 
 */
export default {
  name: 'Bar',
  props: {
    size: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    barItems () {
      return this.items;
    },
    barClass() {
      let css = {};

      if (this.size !== '') {
        switch (this.size) {
          case 'sm':
            css['bar-sm'] = true
            break
          case 'lg':
            css['bar-lg'] = true
            break
        }
      }

      return css;
    }
  }
}
</script>
