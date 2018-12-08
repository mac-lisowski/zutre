<template>
  <div class="step">
    <slot v-if="hasSlot('default')" />
    <li
      v-else-if="hasItems"
      v-for="(item, idx) in items"
      v-bind:key="idx"
      class="step-item"
      :class="itemClass(item)">

      <a
        @click="itemOnClick(item)"
        :class="itemLinkClass(item)"
        :data-tooltip="itemTooltip(item.tooltip)">
          {{ item.name }}
      </a>

    </li>
  </div>
</template>
<script lang="ts">
/**
 * Step
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Array} items eg: [{ name: 'Step 1', tooltip: 'Hi in first step!'}]
 * @prop {Function} onClick
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Step extends Vue {
  @Prop(Array) private items?: [StepItems];
  @Prop(Function) private onClick?: (...args: any) => any;

  // check if given template slot exist
  private hasSlot(name: string): any {
    return !!this.$slots[name];
  }

  // get item tooltip
  private itemTooltip(tooltip: string | undefined): string | false {
    return (typeof tooltip !== 'undefined' && tooltip.length > 0) ? tooltip : false;
  }

  // get item css class
  private itemClass(item: any): CSSClass {
    const css: CSSClass = {
      active: typeof item.active !== 'undefined' && item.active === true,
    };

    return css;
  }

  // get link item css class
  private itemLinkClass(item: any): CSSClass {
    const css: CSSClass = {
      tooltip: this.itemTooltip(item.tooltip) !== false,
    };

    return css;
  }

  // call on click callback
  private itemOnClick(item: any[]): void {
    this.onClick.apply(null, item);
  }

  // compute items
  get hasItems(): boolean {
    return typeof this.items === 'object' && this.items.length > 0;
  }
}
</script>
