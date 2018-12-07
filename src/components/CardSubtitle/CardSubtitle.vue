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
 * CardSubtitle
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} color Values: primary, secondary, dark, gray, light, success, warning, error
 * @prop {String} content
 */
export default {
  name: 'CardSubtitle',
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
      let css = {
        'card-subtitle': true
      }

      switch(this.color) {
        case 'primary':
          css['text-primary'] = true
          break
        case 'secondary':
          css['text-secondary'] = true
          break
        case 'dark':
          css['text-dark'] = true
          break
        case 'gray':
          css['text-gray'] = true
          break
        case 'light':
          css['text-light'] = true
          break
        case 'success':
          css['text-success'] = true
          break
        case 'warning':
          css['text-warning'] = true
          break
        case 'error':
          css['text-error'] = true
          break
      }

      return css
    }
  }
}
</script>
