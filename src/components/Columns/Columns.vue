<script lang="ts">
/**
 * Columns
 *
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} gapless
 * @prop {Boolean} oneline
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
 template: `
   <div :class="columnsClass">
     <slot></slot>
   </div>
 `,
})
export default class Columns extends Vue {
  @Prop(Boolean) private gapless?: boolean;
  @Prop(Boolean) private oneline?: boolean;

  // compute columns css class
  get columnsClass(): CSSClass {
    const css: CSSClass = { columns: true };

    if (this.gapless === true) {
      css['col-gapless'] = true;
    }

    if (this.oneline === true) {
      css['col-oneline'] = true;
    }

    return css;
  }
}
</script>
