<template>
  <i class="material-icons">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ iconName }}
    </template>
  </i>
</template>

<script>
/**
 * Icon
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} name
 */
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    iconName () {
      return this.name
    }
  }
}
</script>
