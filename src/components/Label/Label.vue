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
 * Label
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/labels.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} rounded
 * @prop {String} type Values: primary, secondary, success, warning, error
 */
export default {
  name: 'Label',
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
      let css = {
        label: true
      }

      switch(this.type) {
        case 'primary':
          css['label-primary'] = true
          break
        case 'secondary':
          css['label-secondary'] = true
          break
        case 'success':
          css['label-success'] = true
          break
        case 'warning':
          css['label-warning'] = true
          break
        case 'error':
          css['label-error'] = true
          break
      }

      if (this.rounded === true) {
        css['label-rounded'] = true
      }

      return css
    }
  }
}
</script>
