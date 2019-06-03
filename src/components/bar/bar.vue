<template>
  <div class="bar" :class="barClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>

    <template v-if="!hasDefaultSlot && barItems.length > 0">
      <z-bar-item
        v-for="(idx, item) in barItems" 
        v-bind:key="idx" 
        :min="item.min" 
        :max="item.max" 
        :value="item.value"
        :tooltip="(typeof item.tooltip === 'string') ? item.tooltip : null"
        :content="(typeof item.content === 'string') ? item.content : null"
      />
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
    },
    slider: {
      type: Boolean,
      default: () => false,
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
            css['bar-sm'] = true;
            break;
          case 'lg':
            css['bar-lg'] = true;
            break;
        }
      }

      if (this.slider === true) {
        css['bar-slider'] = true; 
      }

      return css;
    }
  }
}
</script>
