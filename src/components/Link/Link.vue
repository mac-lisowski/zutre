<template>

    <a v-if="hasHref && !hasLink" :href="linkHref">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>
    </a>

    <router-link v-else-if="!hasHref && hasLink" :to="linkRouter">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>
    </router-link>

</template>

<script>
/**
 * ZLink
 */
export default {
  name: 'ZLink',
  props: {
    href: {
      type: String
    },
    link: {
      type: Object
    },
    name: {
      type: String
    }
  },
  computed: {
    hasHref () {
      return (typeof this.href !== 'undefined') ? true : false
    },
    hasLink () {
      return (typeof this.link !== 'undefined') ? true : false
    },
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    linkName () {
      return this.name
    },
    linkHref () {
      return this.href
    },
    linkRouter () {
      return this.link
    }
  }
}
</script>
