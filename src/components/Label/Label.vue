<template>
  <span :class="labelClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ labelContent }}
    </template>
  </span>
</template>

<script>
/**
 * ZLabel
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/labels.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} rounded
 * @prop {String} type Values: primary, secondary, success, warning, error
 */
export default {
  name: 'ZLabel',
  props: {
    rounded: {
      type: Boolean
    },
    type: {
      type: String
    },
    content: {
      type: String
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    labelContent: function() {
      return (typeof this.content !== 'undefined') ? this.content : ''
    },
    labelClass: function() {
      let cssClass = 'label'

      switch(this.type) {
        case 'primary':
          cssClass += ' label-primary'
          break
        case 'secondary':
          cssClass += ' label-secondary'
          break
        case 'success':
          cssClass += ' label-success'
          break
        case 'warning':
          cssClass += ' label-warning'
          break
        case 'error':
          cssClass += ' label-error'
          break
      }

      if (this.rounded === true) {
        cssClass += ' label-rounded'
      }

      return cssClass
    }
  }
}
</script>
