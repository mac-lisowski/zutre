<template>
  <li class="step-item" :class="itemClass">
    <a @click="itemOnClick" :class="itemLinkClass" :data-tooltip="itemTooltip">{{ name }}</a>
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
 * @prop {Function} onClick 
 */
export default {
  name: 'StepItem',
  props: {
    active: Boolean,
    name: {
      type: String,
      default: ''
    },
    tooltip: String,
    onClick: Function,
  },
  methods: {
    itemOnClick() {
      if (typeof this.onClick === 'function') {
        this.onClick({ name: this.name, tooltip: this.tooltip, active: this.active })
      }
    }
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
