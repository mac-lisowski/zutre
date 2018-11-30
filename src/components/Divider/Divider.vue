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
  name: 'ZDivider',
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
      let cssClass = (this.vert === true) ? 'divider-vert' : 'divider'

      if (!this.vert && this.content) {
        cssClass += ' text-center'
      }

      return cssClass
    }
  }
}
</script>
