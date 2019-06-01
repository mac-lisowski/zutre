<template>
  <div class="step">

    <slot v-if="hasSlot('default')" />
    <li v-else-if="hasItems" v-for="(item, idx) in items" v-bind:key="idx" class="step-item" :class="itemClass(item)">
      <a @click="$emit('click', item)" :class="itemLinkClass(item)" :data-tooltip="itemTooltip(item.tooltip)">{{ item.name }}</a>
    </li>

  </div>
</template>

<script>
/**
 * Step
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Array} items eg: [{ name: 'Step 1', tooltip: 'Hi in first step!'}]
 */
export default {
  name: 'Step',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hasSlot (name) {
      return !!this.$slots[name]
    },
    itemTooltip (tooltip) {
      return (typeof tooltip !== 'undefined' && tooltip.length > 0) ? tooltip : false
    },
    itemClass(item) {
      return {
        'active': typeof item.active !== 'undefined' && item.active === true
      }
    },
    itemLinkClass(item) {
      return {
        'tooltip': this.itemTooltip(item.tooltip) !== false
      }
    }
  },
  computed: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0
    }
  }
}
</script>
