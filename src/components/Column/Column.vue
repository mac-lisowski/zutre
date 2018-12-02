<template>
  <div :class="columnClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ZColumn
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
  name: 'ZColumn',
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
      let cssClass = 'column'

      if (this.size > 0 && this.size <= 12) {
        cssClass += ' col-'+ this.size
      }

      if (this.sizeXS > 0 && this.sizeXS <= 12) {
        cssClass += ' col-xs-'+ this.sizeXS
      }

      if (this.sizeSM > 0 && this.sizeSM <= 12) {
        cssClass += ' col-sm-'+ this.sizeSM
      }

      if (this.sizeLG > 0 && this.sizeLG <= 12) {
        cssClass += ' col-lg-'+ this.sizeLG
      }

      if (this.sizeXL > 0 && this.sizeXL <= 12) {
        cssClass += ' col-xl-'+ this.sizeXL
      }

      if (this.mxAuto === true) {
        cssClass += ' col-mx-auto'
      }

      if (this.mlAuto === true) {
        cssClass += ' col-ml-auto'
      }

      if (this.mrAuto === true) {
        cssClass += ' col-mr-auto'
      }

      return cssClass
    }
  }
}
</script>
