<template>
  <li class="breadcrumb-item">
    <router-link v-if="hasLink" :to=itemLink>
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-if="!hasDefaultSlot">{{ itemName }}</template>
    </router-link>

    <a v-if="!hasLink" :href="itemHref">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-if="!hasDefaultSlot">{{ itemName }}</template>
    </a>

  </li>
</template>
<script lang="ts">
/**
 * BreadcrumbsItem
 *
 * Spectre: https://picturepan2.github.io/spectre/components/breadcrumbs.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} name
 * @prop {JSON} link
 * @prop {String} href
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BreadcrumbsItem extends Vue {
  @Prop(String) private name?: string;
  @Prop(Object) private link?: object;
  @Prop(String) private href?: string;

  // compute item name
  get itemName(): string {
    return this.name;
  }

  // compute item link
  get itemLink(): object {
    return this.link;
  }

  // compute item href
  get itemHref(): string {
    return this.href;
  }

  // computes if has name
  get hasName(): boolean {
    return typeof this.name !== 'undefined' && this.name !== null;
  }

  // computes if has link
  get hasLink(): boolean {
    return typeof this.link !== 'undefined' && this.link !== null;
  }

  // computes if has href
  get hasHref(): boolean {
    return typeof this.href !== 'undefined' && this.href !== null;
  }

  // computes if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }
}
</script>
