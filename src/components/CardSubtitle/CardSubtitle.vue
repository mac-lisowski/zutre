<template>
  <div :class="subtitleClass">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ subtitleContent }}
    </template>
  </div>
</template>
<script lang="ts">
/**
 * CardSubtitle
 *
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} color Values: primary, secondary, dark, gray, light, success, warning, error
 * @prop {String} content
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardSubtitle extends Vue {
 @Prop(String) private color?: string;
 @Prop(String) private content?: string;

 // compute if has default <slot>
 get hasDefaultSlot(): boolean {
   return !!this.$slots.default;
 }

 // compute subtitlte
 get subtitleContent(): string {
   return (typeof this.content !== 'undefined') ? this.content : '';
 }

 // compute subtitlte css class
 get subtitleClass(): CSSClass {
   const css: CSSClass = { 'card-subtitle': true };

   switch (this.color) {
     case 'primary':
       css['text-primary'] = true;
       break;
     case 'secondary':
       css['text-secondary'] = true;
       break;
     case 'dark':
       css['text-dark'] = true;
       break;
     case 'gray':
       css['text-gray'] = true;
       break;
     case 'light':
       css['text-light'] = true;
       break;
     case 'success':
       css['text-success'] = true;
       break;
     case 'warning':
       css['text-warning'] = true;
       break;
     case 'error':
       css['text-error'] = true;
       break;
   }

   return css;
 }
}
</script>
