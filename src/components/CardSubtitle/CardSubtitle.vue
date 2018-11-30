<template>
  <div :class="subtitleClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ subtitleContent }}
    </template>
  </div>
</template>

<script>
/**
 * ZCardSubtitle
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} color Values: primary, secondary, dark, gray, light, success, warning, error
 * @prop {String} content
 */
export default {
  name: 'ZCardSubtitle',
  props: {
    color: {
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
    subtitleContent: function() {
      return (typeof this.content !== 'undefined') ? this.content : ''
    },
    subtitleClass: function() {
      let cssClass = 'card-subtitle'

      switch(this.color) {
        case 'primary':
          cssClass += ' text-primary'
          break
        case 'secondary':
          cssClass += ' text-secondary'
          break
        case 'dark':
          cssClass += ' text-dark'
          break
        case 'gray':
          cssClass += ' text-gray'
          break
        case 'light':
          cssClass += ' text-light'
          break
        case 'success':
          cssClass += ' text-success'
          break
        case 'warning':
          cssClass += ' text-warning'
          break
        case 'error':
          cssClass += ' text-error'
          break
      }

      return cssClass
    }
  }
}
</script>
