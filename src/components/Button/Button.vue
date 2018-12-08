<script lang="ts">
/**
 * Button
 *
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size Values: sm, lg
 * @prop {String} type
 * @prop {Boolean} active
 * @prop {Boolean} action
 * @prop {Boolean} circle
 * @prop {Boolean} loading
 * @prop {Boolean} disabled
 * @prop {Boolean} right
 * @prop {String} badge
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
 template: `
   <button :class="btnClass" :disabled="isDisabled" v-on:click="onClick" v-bind:data-badge="badge" >
     <slot />
   </button>
 `,
})
export default class Button extends Vue {
  @Prop(Boolean) private block?: boolean;
  @Prop(String) private size?: string;
  @Prop(String) private type?: string;
  @Prop(Boolean) private active?: boolean;
  @Prop(Boolean) private action?: boolean;
  @Prop(Boolean) private circle?: boolean;
  @Prop(Boolean) private loading?: boolean;
  @Prop(Boolean) private disabled?: boolean;
  @Prop(Boolean) private right?: boolean;
  @Prop(Boolean) private clear?: boolean;
  @Prop(String) private badge?: string;
  @Prop({ type: Function, default: () => { return; } }) private click?: (...args: any) => any;

  // on click event method call
  public onClick(...args: any): any {
    if (typeof this.click === 'function') {
      return this.click(...args);
    }
    return;
  }

  get isDisabled(): boolean {
    return this.disabled;
  }

  get btnClass(): CSSClass {
    const css: CSSClass = { btn: true };

    if (this.size !== '') {
      switch (this.size) {
        case 'sm':
          css['btn-sm'] = true;
          break;
        case 'lg':
          css['btn-lg'] = true;
          break;
      }
    }

    if (this.type !== '') {
      switch (this.type) {
        case 'primary':
          css['btn-primary'] = true;
          break;
        case 'link':
          css['btn-link'] = true;
          break;
        case 'success':
          css['btn-success'] = true;
          break;
        case 'error':
          css['btn-error'] = true;
          break;
      }
    }

    if (typeof this.badge !== 'undefined') {
      css.badge = true;
    }

    if (this.clear === true) {
      css['btn-clear'] = true;
    }

    if (this.active === true) {
      css.active = true;
    }

    if (this.action === true) {
      css['btn-action'] = true;
    }

    if (this.circle === true) {
      css['s-circle'] = true;
    }

    if (this.loading === true) {
      css.loading = true;
    }

    if (this.right === true) {
      css['float-right'] = true;
    }

    return css;
  }
}
</script>
