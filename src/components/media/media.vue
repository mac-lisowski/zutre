<template>
      <!--  -->
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

<script>
/**
 * ZMedia
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
export default {
  name: 'Media',
  props: {
    type: {
      type: String,
      default: () => 'image'
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    caption: {
      type: String
    },
    captionPosition: {
      type: String,
      default: () => 'center'
    },
    responsive: {
      type: Boolean,
      default: () => false
    },
    cover: {
      type: Boolean,
      default: () => false
    },
    contain: {
      type: Boolean,
      default: () => false
    },
    video: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    isType (type) {
      return this.type === type
    },
    isVideo () {
      return this.video === true
    },
    hasCaption () {
      return typeof this.caption !== 'undefined'
    },
    hasCover () {
      return this.cover === true
    },
    hasSrc () {
      return typeof this.src !== 'undefined'
    },
    hasContain () {
      return this.contain === true
    },
    figcaption () {
      return this.caption
    },
    videoClass () {
      let css = {}

      if (this.responsive === true) {
        css['video-responsive'] = true
      }

      return css;
    },
    mediaClass () {
      let css = {}

      if (this.responsive === true) {
        css['img-responsive'] = true
      }

      if (this.cover === true) {
        css['img-fit-cover'] = true
      }

      if (this.contain === true) {
        css['img-fit-contain'] = true
      }

      return css
    },
    captionClass () {
      let css = {
        'figure-caption': true
      }

      switch(this.captionPosition) {
        case 'left':
          css['text-left'] = true
          break
        case 'right':
          css['text-right'] = true
          break
        default: 
          css['text-center'] = true
      }
      return css
    }
  }
}
</script>
