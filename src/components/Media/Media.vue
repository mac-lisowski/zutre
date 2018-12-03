<template>
      <img v-bind:src="src" :class="mediaClass" v-bind:alt="alt" v-if="!hasCaption && !hasCover && !hasContain">
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
 */
export default {
  name: 'ZMedia',
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
    }
  },
  computed: {
    isType (type) {
      return this.type === type
    },
    hasCaption () {
      return typeof this.caption !== 'undefined'
    },
    hasCover () {
      return this.cover === true
    },
    hasContain () {
      return this.contain === true
    },
    figcaption () {
      return this.caption
    },
    mediaClass () {
      let css = ''

      if (this.responsive === true) {
        css += ' img-responsive'
      }

      if (this.cover === true) {
        css += ' img-fit-cover  '
      }

      if (this.contain === true) {
        css += ' img-fit-contain'
      }

      return css
    },
    captionClass () {
      let css = 'figure-caption'

      switch(this.captionPosition) {
        case 'left':
          css += ' text-left'
          break
        case 'right':
          css += ' text-right'
          break
        default: 
          css += ' text-center'
      }
      return css
    }
  }
}
</script>
