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
<script lang="ts">
/**
 * Breadcrumbs
 *
 * Spectre: https://picturepan2.github.io/spectre/components/breadcrumbs.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Array} items each item is an JSON object with: name, link/href.
 * <router-link :to="item.link" /> instaed of <a :href="item.href" />
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import ZBreadcrumbsItem from '@/components/BreadcrumbsItem';

@Component({
  components: { ZBreadcrumbsItem },
})
export default class Breadcrumbs extends Vue {
  @Prop(Array) private items?: [BreadCrumbItem];

  // compute items
  get breadcrumbsItems(): [BreadCrumbItem] {
    return this.items;
  }

  // compute if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }
}
</script>
