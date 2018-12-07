<template>
  <div :class="columnClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Column
 * 
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Number} size
 * @prop {Number} sizeXS
 * @prop {Number} sizeSM
 * @prop {Number} sizeLG
 * @prop {Number} sizeXL
 * @prop {Boolean} mxAuto
 * @prop {Boolean} mlAuto
 * @prop {Boolean} mrAuto
 */
export default {
  name: 'Column',
  props: {
    size: {
      type: Number,
      default: () => 0
    },
    sizeXS: {
      type: Number,
      default: () => 0
    },
    sizeSM: {
      type: Number,
      default: () => 0
    },
    sizeLG: {
      type: Number,
      default: () => 0
    },
    sizeXL: {
      type: Number,
      default: () => 0
    },
    mxAuto: {
      type: Boolean,
      default: () => false
    },
    mlAuto: {
      type: Boolean,
      default: () => false
    },
    mrAuto: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    columnClass: function() {
      let css = {
        column: true
      }

      if (this.size > 0 && this.size <= 12) {
        css['col-'+ this.size] = true
      }

      if (this.sizeXS > 0 && this.sizeXS <= 12) {
        css['col-xs-'+ this.sizeXS] = true
      }

      if (this.sizeSM > 0 && this.sizeSM <= 12) {
        css['col-sm-'+ this.sizeSM] = true
      }

      if (this.sizeLG > 0 && this.sizeLG <= 12) {
        css['col-lg-'+ this.sizeLG] = true
      }

      if (this.sizeXL > 0 && this.sizeXL <= 12) {
        css['col-xl-'+ this.sizeXL] = true
      }

      if (this.mxAuto === true) {
        css['col-mx-auto'] = true
      }

      if (this.mlAuto === true) {
        css['col-ml-auto'] = true
      }

      if (this.mrAuto === true) {
        css['col-mr-auto'] = true
      }

      return css
    }
  }
}
</script>
