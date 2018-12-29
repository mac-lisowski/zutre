<template>
  <div :class="dividerClass" v-bind:data-content="content"></div>
</template>

<script>
/**
 * ZDivider
 * 
 * Spectre: https://picturepan2.github.io/spectre/utilities/divider.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} content
 * @prop {Boolean} vert
 */
export default {
  name: 'Divider',
  props: {
    content: {
      type: String,
    },
    vert: {
      type: Boolean
    }
  },
  computed: {
    dividerClass: function() {
      let css = {
        divider: true
      }

      if (this.vert === true) {
        css['divider-vert'] = true
        css.divider = false
      }

      if (!this.vert && this.content) {
        css['text-center'] = true
      }

      return css
    }
  }
}
</script>
