<template>
  <div class="empty-icon">
    <template v-if="hasDefaultSlot">
      <i class="material-icons"><slot></slot></i>
    </template>
    <template v-else-if="!hasDefaultSlot">
      <i class="material-icons">{{ iconName }}</i>
    </template>
  </div>
</template>

<script>
/**
 * EmptyIcon
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'EmptyIcon',
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
