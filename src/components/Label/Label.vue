<template>
  <span :class="labelClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ labelContent }}
    </template>
  </span>
</template>
<script lang="ts">
/**
 * Label
 *
 * Spectre: https://picturepan2.github.io/spectre/elements/labels.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} rounded
 * @prop {String} type Values: primary, secondary, success, warning, error
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Label extends Vue {
  @Prop(Boolean) private rounded?: boolean;
  @Prop(String) private type?: string;
  @Prop(String) private content?: string;

  // compute if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute label content
  get labelContent(): string {
    return (typeof this.content !== 'undefined') ? this.content : '';
  }

  // compute label css class
  get labelClass(): CSSClass {
    const css: CSSClass = { label: true };

    switch (this.type) {
      case 'primary':
        css['label-primary'] = true;
        break;
      case 'secondary':
        css['label-secondary'] = true;
        break;
      case 'success':
        css['label-success'] = true;
        break;
      case 'warning':
        css['label-warning'] = true;
        break;
      case 'error':
        css['label-error'] = true;
        break;
    }

    if (this.rounded === true) {
      css['label-rounded'] = true;
    }

    return css;
  }
}
</script>
