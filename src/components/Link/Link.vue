<template>
    <a v-if="hasHref && !hasLink" :href="linkHref" :class="linkClass">
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>
      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>
    </a>

    <router-link
      v-else-if="!hasHref && hasLink"
      :to="linkRouter"
      :class="linkClass"
      v-bind:active-class="activeClass"
      v-bind:exact="exact"
    >
      <template v-if="hasDefaultSlot">
        <slot></slot>
      </template>

      <template v-else-if="!hasDefaultSlot">{{ linkName }}</template>

    </router-link>
</template>
<script lang="ts">
/**
 * Link
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} href
 * @prop {Object} link
 * @prop {String} name
 * @prop {String} activeClass
 * @prop {Boolean} active
 * @prop {Boolean} exact
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Link extends Vue {
  @Prop(String) private href?: string;
  @Prop(Object) private link?: object;
  @Prop(String) private name?: string;
  @Prop(String) private activeClass?: string;
  @Prop(Boolean) private active?: boolean;
  @Prop(Boolean) private exact?: boolean;

  // compute if has href
  get hasHref(): boolean {
    return (typeof this.href !== 'undefined') ? true : false;
  }

  // compute if has link
  get hasLink(): boolean {
    return (typeof this.link !== 'undefined') ? true : false;
  }

  // compute if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute link name
  get linkName(): string {
    return this.name;
  }

  // compute link href
  get linkHref(): string {
    return this.href;
  }

  // compute link <router-link :to="">
  get linkRouter(): object {
    return this.link;
  }

  // compute link css class
  get linkClass(): CSSClass {
    const css: CSSClass = { 'menu-item': true };

    if (this.active === true && typeof this.activeClass === 'string') {
      css[this.activeClass] = true;
    }

    return css;
  }
}
</script>
