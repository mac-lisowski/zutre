<template>

    <a v-if="hasHref && !hasLink" :href="linkHref" :class="linkClass">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>
    </a>

    <router-link v-else-if="!hasHref && hasLink" :to="linkRouter" :class="linkClass" v-bind:active-class="activeClass" v-bind:exact="exact">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>
    </router-link>

</template>

<script>
/**
 * ZLink
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} href
 * @prop {Object} link
 * @prop {String} name
 * @prop {String} activeClass
 * @prop {Boolean} active
 * @prop {Boolean} exact
 */
export default {
  name: 'Link',
  props: {
    href: {
      type: String
    },
    link: {
      type: Object
    },
    name: {
      type: String
    },
    activeClass: {
      type: String,
      default: () => ''
    },
    active: {
      type: Boolean,
      default: () => false
    },
    exact: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    linkClass: function() {
      let css = {
        'menu-item': true
      }

      if (this.active === true && typeof this.activeClass === 'string') {
        css[this.activeClass] = true
      }
      return css
    },
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
