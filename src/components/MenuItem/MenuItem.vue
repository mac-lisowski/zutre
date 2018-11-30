<template>
  <li class="menu-item">
    <z-link v-if="hasHref && !hasLink && !hasDefaultSlot" :href="linkHref" :name="linkName" v-bind:activeClass="activeClass" />
    <z-link v-else-if="hasHref && !hasLink && hasDefaultSlot" :href="linkHref" v-bind:activeClass="activeClass">
      <slot></slot>
    </z-link>
    <z-link v-else-if="!hasHref && hasLink && !hasDefaultSlot" :link="linkRouter" :name="linkName" v-bind:activeClass="activeClass" v-bind:exact="exact" />
    <z-link v-else-if="!hasHref && hasLink && hasDefaultSlot" :link="linkRouter" v-bind:activeClass="activeClass" v-bind:exact="exact">
      <slot></slot>
    </z-link>

  </li>
</template>

<script>
/**
 * ZMenuItem
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/menu.html#menus
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} href
 * @prop {Object} link
 * @prop {String} name
 * @prop {String} activeClass
 * @prop {Boolean} active
 * @prop {Boolean} exact
 */
import ZLink from './../Link'

export default {
  name: 'ZMenuItem',
  components: {
    ZLink
  },
  props: {
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
    },
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
    hasName: function() {
      return (typeof this.name !== 'undefined') ? true : false
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
