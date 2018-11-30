<template>
  <div :class="titleClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ titleContent }}
    </template>
  </div>
</template>

<script>
/**
 * ZCardTitle
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Number} size Available sizes: 1 to 6
 * @prop {String} content title body content
 */
export default {
  name: 'ZCardTitle',
  props: {
    size: {
      type: Number
    },
    content: {
      type: String
    }
  },
  computed: {
    titleClass: function() {
      let cssClass = 'card-title'

      if (this.size > 0 && this.size <= 6) {
        cssClass += ' h' + this.size
      }

      return cssClass
    },
    titleContent: function() {
      return (typeof this.content !== 'undefined') ? this.content : ''
    },
    hasDefaultSlot () {
      return !!this.$slots.default
    }
  }
}
</script>
