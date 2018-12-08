<template>
  <div :class="toastClass">
    <z-button v-if="hasCloseBtn" clear right v-on:click.native="setShow(false)" />
    <z-toast-title v-if="hasTitle">{{ toastTitle() }}</z-toast-title>
    <z-toast-body v-if="hasContent">{{ toastContent() }}</z-toast-body>

    <slot v-if="hasDefaultSlot"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import ZButton from './../Button';
import ZToastTitle from './../ToastTitle';
import ZToastBody from './../ToastBody';
/**
 * Toast
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} show
 * @prop {Number} duration default: 0 = persistent
 * @prop {Boolean} closeBtn
 * @prop {String} position
 * @prop {String} type
 * @prop {String} title
 * @prop {String} content
 */
@Component({
  components: { ZButton, ZToastTitle, ZToastBody },
})
export default class Toast extends Vue {
  @Prop({ type: Boolean, default: true }) private show?: boolean;
  @Prop({ type: Number, default: 0 }) private duration?: number;
  @Prop({ type: String, default: 'top' }) private position?: string;
  @Prop({ type: Boolean, default: false }) private closeBtn?: boolean;
  @Prop(String) private type?: string;
  @Prop(String) private title?: string;
  @Prop(String) private content?: string;

  private showToast = false;

  @Watch('show')
  private onShowChanged(newVal: boolean, oldVal: boolean) {
    if (newVal === false && oldVal === true) {
      this.destroy();
    }
  }

  private mounted() {
    this.$once('close', (val: boolean) => {
      if (val === true) {
        this.destroy();
      }
    });
  }

  private created() {
    if (this.show === true) {
      this.$emit('open', true);
      this.setShow(true);
    }

    if (this.duration > 0) {
      setTimeout(() => {
        this.destroy();
      }, this.duration);
    }
  }

  private destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  }

  private destroy() {
    this.$destroy();
  }

  private setShow(show = false) {
    if (show === false) {
      this.$emit('close', true);
    }

    this.showToast = show;
  }
  ////
  private toastTitle() {
    return this.title;
  }

  private toastContent() {
    return this.content;
  }

  get hasDefaultSlot(): any {
    /* tslint:disable:no-string-literal */
    return !!this.$slots['default'];
    /* tslint:enable:no-string-literal */
  }

  get hasCloseBtn(): boolean | undefined {
    return this.closeBtn;
  }

  // compute if has content
  get hasContent(): boolean {
    return (typeof this.content === 'string') ? true : false;
  }

  // compute if has title
  get hasTitle(): boolean {
    return (typeof this.title === 'string') ? true : false;
  }

  // compute css class
  get toastClass(): object {
    const css: CSSClass = {
      toast: true,
    };

    switch (this.type) {
      case 'primary':
        css['toast-primary'] = true;
        break;
      case 'success':
        css['toast-success'] = true;
        break;
      case 'warning':
        css['toast-warning'] = true;
        break;
      case 'error':
        css['toast-error'] = true;
        break;
    }

    switch (this.position) {
      case 'top':
        css['toast-notify'] = true;
        css['toast-top'] = true;
        break;
      case 'top left':
        css['toast-notify'] = true;
        css['toast-top'] = true;
        css['toast-left'] = true;
        break;
      case 'top right':
        css['toast-notify'] = true;
        css['toast-top'] = true;
        css['toast-right'] = true;
        break;
      case 'bottom':
        css['toast-notify'] = true;
        css['toast-bottom'] = true;
        break;
      case 'bottom right':
        css['toast-notify'] = true;
        css['toast-bottom'] = true;
        css['toast-right'] = true;
        break;
      case 'bottom left':
        css['toast-notify'] = true;
        css['toast-bottom'] = true;
        css['toast-left'] = true;
        break;
      default:
        css['toast-notify'] = true;
        css['toast-top'] = true;
    }

    return css;
  }
}
</script>
