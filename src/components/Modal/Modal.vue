<template>
    <div v-if="isActive" :class="modalClass">
      <div @click="cancel('overlay')" class="modal-overlay" v-if="hasOverlay" />

      <div class="modal-container" :style="modalStyle">
        <div class="modal-header">
          <button class="btn btn-clear float-right" aria-label="Close" v-if="canClose && hasCloseType('btn')" @click="cancel('btn')" />
          <div class="modal-title h5" v-if="title" v-text="title" />
        </div>

        <div class="modal-body" v-if="content" v-html="content" />
        <div class="modal-body" v-else><slot /></div>

        <div class="modal-footer" v-if="hasFooter">
          <slot name="footer" />
        </div>
      </div>

    </div>
</template>
<script lang="ts">
/**
 * Modal
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} title
 * @prop {String} content
 * @prop {Boolean} open
 * @prop {String} size
 * @prop {String|Number} width
 * @prop {Boolean} overlay default: true
 * @prop {Boolean|Array} canClose default: true
 * @prop {Function} onClose fired on close
 */
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop(Boolean) private open?: boolean;
  @Prop(String) private title?: string;
  @Prop(String) private content?: string;
  @Prop(String) private size?: string;
  @Prop([ Number, String ]) private width?: number | string;
  @Prop({ type: Boolean, default: true }) private overlay?: boolean;
  @Prop({ type: [ Boolean, Array ], default: true }) private canClose?: boolean | [string];
  @Prop({ type: Function, default: () => { return; } }) private onClose?: (...args: any) => any;

  private isActive: boolean | false = this.open || false;

  @Watch('open')
  private checkOpenChanged(value: boolean): void {
    this.isActive = value;
  }

  private created(): void {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
    }
  }

  // close emits events about closing modal
  private close(): void {
    this.$emit('close');
    this.$emit('update:open', false);

    this.isActive = false;
  }

  // cancel method -  called on close, calling onClose callback
  private cancel(type: string): void {
    if (!this.hasCloseType(type)) {
      return;
    }

    this.onClose.apply(null, [arguments]);
    this.close();
  }

  // on keyPress callback
  private keyPress(key: any): void {
    if (this.isActive && key.keyCode === 27) {
      this.cancel('esc');
    }
  }

  // check if has given close type option available
  private hasCloseType(type: string): boolean {
    return (this.closeOptions.indexOf(type) < 0) ? false : true;
  }

  // compute if has footer
  get hasFooter(): boolean {
    return !!this.$slots.footer;
  }

  // compute if has overlay
  get hasOverlay(): boolean {
    return this.overlay === true;
  }

  // compute available close options
  get closeOptions(): any {
    return typeof this.canClose === 'boolean'
      ? this.canClose
          ? ['esc', 'btn', 'overlay'] : []
      : this.canClose;
  }

  // compute if has default slot
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute modal css style
  get modalStyle(): CSSStyle {
    const style: CSSStyle = {};

    if (typeof this.width !== 'undefined') {
      style.maxWidth = 'none';
      style.width = this.width + 'px';
    }

    return style;
  }

  // compute modal css class
  get modalClass(): CSSClass {
    const css: CSSClass = {
      modal: true,
      active: true,
    };

    switch (this.size) {
      case 'sm':
        css['modal-sm'] = true;
        break;
      case 'lg':
        css['modal-lg'] = true;
        break;
    }

    return css;
  }
}
</script>
