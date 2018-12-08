<template>
  <div :class="videoClass" v-if="!hasSrc && isVideo && hasDefaultSlot">
    <slot></slot>
  </div>
  <video :class="videoClass" v-bind:src="src" v-else-if="hasSrc && isVideo && hasDefaultSlot"><slot></slot></video>
  <img v-bind:src="src" :class="mediaClass" v-bind:alt="alt" v-else-if="!hasCaption && !hasCover && !hasContain">
  <figure class="figure" v-else>
    <img v-bind:src="src" :class="mediaClass" v-bind:alt="alt">
    <figcaption :class="captionClass" v-if="hasCaption">{{ figcaption }}</figcaption>
  </figure>
</template>
<script lang="ts">
/**
 * Media
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} src
 * @prop {String} alt
 * @prop {String} caption
 * @prop {String} captionPosition default: center, values: center, left, right
 * @prop {Boolean} responsive
 * @prop {Boolean} cover
 * @prop {Boolean} contain
 * @prop {Boolean} video
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Media extends Vue {
  @Prop({ default: 'image' }) private type?: string;
  @Prop(String) private src?: string;
  @Prop(String) private alt?: string;
  @Prop(String) private caption?: string;
  @Prop({ default: 'center' }) private captionPosition?: string;
  @Prop(Boolean) private responsive?: boolean;
  @Prop(Boolean) private cover?: boolean;
  @Prop(Boolean) private contain?: boolean;
  @Prop(Boolean) private video?: boolean;


  private isType(type: string): boolean {
    return this.type === type;
  }

  // compute css class for media
  get mediaClass(): CSSClass {
    const css: CSSClass = {};

    if (this.responsive === true) {
      css['img-responsive'] = true;
    }

    if (this.cover === true) {
      css['img-fit-cover'] = true;
    }

    if (this.contain === true) {
      css['img-fit-contain'] = true;
    }

    return css;
  }

  // computes if has default <slot>
  get hasDefaultSlot(): boolean {
    return !!this.$slots.default;
  }

  // compute if has video
  get isVideo(): boolean {
    return this.video === true;
  }

  // compute if has caption
  get hasCaption(): boolean {
    return typeof this.caption !== 'undefined';
  }

  // compute if has cover
  get hasCover(): boolean {
    return this.cover === true;
  }

  // compute if has src
  get hasSrc(): boolean {
    return typeof this.src !== 'undefined';
  }

   // compute if has contain
  get hasContain(): boolean {
    return this.contain === true;
  }

  // compute caption
  get figcaption(): string {
    return this.caption;
  }

  // compute video css class
  get videoClass(): CSSClass {
    const css: CSSClass = {};

    if (this.responsive === true) {
      css['video-responsive'] = true;
    }

    return css;
  }

  // compute css class for caption
  get captionClass(): CSSClass {
    const css: CSSClass = {
      'figure-caption': true,
    };

    switch (this.captionPosition) {
      case 'left':
        css['text-left'] = true;
        break;
      case 'right':
        css['text-right'] = true;
        break;
      default:
        css['text-center'] = true;
    }
    return css;
  }
}
</script>
