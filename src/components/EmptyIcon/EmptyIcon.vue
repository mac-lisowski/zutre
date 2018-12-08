<template>
  <div class="empty-icon">
    <template v-if="hasDefaultSlot">
      <i class="material-icons"><slot></slot></i>
    </template>
    <template v-else-if="!hasDefaultSlot">
      <i class="material-icons">{{ iconName }}</i>
    </template>
  </div>
</template>
<script lang="ts">
/**
 * EmptyIcon
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EmptyIcon extends Vue {
  @Prop(String) private name?: string;

  // compute if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute icon name
  get iconName(): string {
    return this.name;
  }
}
</script>
