<template>
  <li class="breadcrumb-item">
    <router-link v-if="hasLink" :to=itemLink>
      <z-icon v-if="hasIcon" :name="icon" /> 
      <template v-if="hasDefaultSlot">
        <span><slot></slot></span>
      </template>
      <template v-if="!hasDefaultSlot"><span>{{ itemName }}</span></template>
    </router-link>

    <a v-if="!hasLink" :href="itemHref">
      <z-icon v-if="hasIcon" :name="icon" /> 
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-if="!hasDefaultSlot"><span>{{ itemName }}</span></template>
    </a>
    
  </li>
</template>
<script>
/**
 * ZBreadcrumbsItem
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/breadcrumbs.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} name
 * @prop {JSON} link
 * @prop {String} href 
 * @prop {String} icon 
 */
export default {
  name: 'BreadcrumbsItem',
  props: {
    name: {
      type: String,
      default: () => null
    },
    link: {
      type: Object,
      default: () => null
    },
    href: {
      type: String,
      default: () => null
    },
    icon: String,
  },
  computed: {
    itemName() {
      return this.name;
    },
    itemLink() {
      return this.link;
    },
    itemHref() {
      return this.href;
    },
    hasName() {
      return typeof this.name !== 'undefined' && this.name !== null;
    },
    hasLink() {
      return typeof this.link !== 'undefined' && this.link !== null;
    },
    hasHref() {
      return typeof this.href !== 'undefined' && this.href !== null;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    hasIcon() {
      return !!this.icon;
    },
  }
}
</script>
