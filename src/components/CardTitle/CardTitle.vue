<template>
  <div :class="titleClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ titleContent }}
    </template>
  </div>
</template>
<script lang="ts">
/**
 * CardTitle
 *
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Number} size Available sizes: 1 to 6
 * @prop {String} content title body content
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: '<span class="chip"><slot></slot></span>',
})
export default class CardTitle extends Vue {
  @Prop(Number) private size?: number;
  @Prop(String) private content?: string;

  // compute title css class
  get titleClass(): CSSClass {
    const css: CSSClass = { 'card-title': true };

    if (this.size > 0 && this.size <= 6) {
      css['h' + this.size] = true;
    }

    return css;
  }

  // compute title content
  get titleContent(): string {
    return (typeof this.content !== 'undefined') ? this.content : '';
  }

  // compute if has defauot <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }
}
</script>
