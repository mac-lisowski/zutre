<template>
  <ul class="breadcrumb">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>

    <template v-if="!hasDefaultSlot && breadcrumbsItems.length > 0">
      <z-breadcrumbs-item v-bind:key="item.name" v-for="item in breadcrumbsItems" :name="item.name" :link="item.link" :href="item.href" />
    </template>

  </ul>
</template>

<script>
/**
 * Breadcrumbs
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/breadcrumbs.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Array} items each item is an JSON object with: name, link/href. <router-link :to="item.link" /> instaed of <a :href="item.href" />
 */
import ZBreadcrumbsItem from '@/components/BreadcrumbsItem';

export default {
  name: 'Breadcrumbs',
  components: {
    ZBreadcrumbsItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    breadcrumbsItems () {
      return this.items;
    },
    hasDefaultSlot () {
      return !!this.$slots.default
    }
  }
}
</script>
