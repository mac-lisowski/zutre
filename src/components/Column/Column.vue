<script lang="ts">
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div :class="columnClass">
      <slot></slot>
    </div>
  `,
})
export default class Column extends Vue {
  @Prop(Number) private size?: number;
  @Prop(Number) private sizeXS?: number;
  @Prop(Number) private sizeSM?: number;
  @Prop(Number) private sizeLG?: number;
  @Prop(Number) private sizeXL?: number;
  @Prop(Boolean) private mxAuto?: boolean;
  @Prop(Boolean) private mlAuto?: boolean;
  @Prop(Boolean) private mrAuto?: boolean;

  // compute column css class
  get columnClass(): CSSClass {
    const css: CSSClass = { column: true };

    if (this.size > 0 && this.size <= 12) {
      css['col-' + this.size] = true;
    }

    if (this.sizeXS > 0 && this.sizeXS <= 12) {
      css['col-xs-' + this.sizeXS] = true;
    }

    if (this.sizeSM > 0 && this.sizeSM <= 12) {
      css['col-sm-' + this.sizeSM] = true;
    }

    if (this.sizeLG > 0 && this.sizeLG <= 12) {
      css['col-lg-' + this.sizeLG] = true;
    }

    if (this.sizeXL > 0 && this.sizeXL <= 12) {
      css['col-xl-' + this.sizeXL] = true;
    }

    if (this.mxAuto === true) {
      css['col-mx-auto'] = true;
    }

    if (this.mlAuto === true) {
      css['col-ml-auto'] = true;
    }

    if (this.mrAuto === true) {
      css['col-mr-auto'] = true;
    }

    return css;
  }
}
</script>
