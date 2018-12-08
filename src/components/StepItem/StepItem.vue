<script lang="ts">
/**
 * StepItem
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} active
 * @prop {String} name
 * @prop {Strig} tooltip
 * @prop {Function} onClick
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <li class="step-item" :class="itemClass">
      <a @click="itemOnClick" :class="itemLinkClass" :data-tooltip="itemTooltip">{{ name }}</a>
    </li>
  `,
})
export default class StepItem extends Vue {
  @Prop(Boolean) private active?: boolean;
  @Prop({ type: String, default: ''}) private name?: string;
  @Prop(String) private tooltip?: string;
  @Prop(Function) private onClick?: (...args: any) => any;

  // call on click callback
  public itemOnClick(): void {
    if (typeof this.onClick === 'function') {
      this.onClick({ name: this.name, tooltip: this.tooltip, active: this.active });
    }
  }

  // compute step name
  get itemName(): string {
    return this.name;
  }

  // compute tooltip
  get itemTooltip(): string | false {
    return (typeof this.tooltip !== 'undefined' && this.tooltip.length > 0) ? this.tooltip : false;
  }

  // compute step item css class
  get itemClass(): CSSClass {
    const css: CSSClass = { active: this.active === true };

    return css;
  }

  // compute item link css class
  get itemLinkClass(): CSSClass {
    const css: CSSClass = {
      tooltip: this.itemTooltip !== false,
    };

    return css;
  }
}
</script>
