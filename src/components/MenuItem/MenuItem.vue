<template>
  <li :class="itemClass">
    <z-link
      v-if="hasHref && !hasLink && !hasDefaultSlot"
      :href="linkHref"
      :name="linkName"
      v-bind:activeClass="activeClass"
    />

    <z-link
      v-else-if="hasHref && !hasLink && hasDefaultSlot"
      :href="linkHref"
      v-bind:activeClass="activeClass"
    >
      <slot></slot>
    </z-link>
    <z-link
      v-else-if="!hasHref && hasLink && !hasDefaultSlot"
      :link="linkRouter"
      :name="linkName"
      v-bind:activeClass="activeClass"
      v-bind:exact="exact"
    />
    <z-link
      v-else-if="!hasHref && hasLink && hasDefaultSlot"
      :link="linkRouter"
      v-bind:activeClass="activeClass"
      v-bind:exact="exact"
    >
      <slot></slot>
    </z-link>
  </li>
</template>
<script lang="ts">
/**
 * MenuItem
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
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import ZLink from './../Link';

@Component({
  components: { ZLink },
})
export default class MenuItem extends Vue {
  @Prop(String) private activeClass?: string;
  @Prop(Boolean) private active?: boolean;
  @Prop(Boolean) private exact?: boolean;
  @Prop(String) private href?: string;
  @Prop(Object) private link?: object;
  @Prop(String) private name?: string;

  // computes if has default template slot
  get hasDefaultSlot(): any {
    return !!this.$slots.default;
  }

  // computes if has name
  get hasName(): boolean {
    return (typeof this.name !== 'undefined') ? true : false;
  }

  // computes if has href
  get hasHref(): boolean {
    return (typeof this.href !== 'undefined') ? true : false;
  }

  // computes if has link
  get hasLink(): boolean {
    return (typeof this.link !== 'undefined') ? true : false;
  }

  // computes link name
  get linkName(): string {
    return this.name;
  }

  // computes link href
  get linkHref(): string {
    return this.href;
  }

  // computes link object for <router-link :to="">
  get linkRouter(): object {
    return this.link;
  }

  // computes menu item css class
  get itemClass(): CSSClass {
    const css: CSSClass = { 'menu-item': true };

    if (this.active === true && typeof this.activeClass === 'string') {
      css[this.activeClass] = true;
    }
    return css;
  }
}
</script>
