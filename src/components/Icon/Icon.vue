<template>
  <i class="material-icons">
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-else-if="!hasDefaultSlot">
      {{ iconName }}
    </template>
  </i>
</template>
<script lang="ts">
/**
 * Icon
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} name
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop(String) private name?: string;

  // compute if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute name
  get iconName(): string {
    return this.name;
  }
}
</script>
