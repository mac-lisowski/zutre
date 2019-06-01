<template>
  <li class="step-item" :class="itemClass">
    <a @click="$emit('click', { name: name, tooltip: tooltip, active: active })" :class="itemLinkClass" :data-tooltip="itemTooltip">{{ name }}</a>
  </li>
</template>

<script>
/**
 * StepItem
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} active
 * @prop {String} name
 * @prop {Strig} tooltip
 */
export default {
  name: 'StepItem',
  props: {
    active: Boolean,
    name: {
      type: String,
      default: ''
    },
    tooltip: String
  },
  computed: {
    itemName() {
      return this.name
    },
    itemClass() {
      return {
        'active': this.active === true
      }
    },
    itemLinkClass() {
      return {
        'tooltip': this.itemTooltip !== false
      }
    },
    itemTooltip() {
      return (typeof this.tooltip !== 'undefined' && this.tooltip.length > 0) ? this.tooltip : false
    }
  }
}
</script>
