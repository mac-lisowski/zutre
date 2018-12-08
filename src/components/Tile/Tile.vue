<script lang="ts">
/**
 * Tile
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} centered
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div :class="tileClass">
    <slot></slot>
  </div>
  `,
})
export default class Tile extends Vue {
  @Prop(Boolean) private centered?: boolean;

  // compute tile css class
  get tileClass(): CSSClass {
    const css: CSSClass = { tile: true };

    if (this.centered === true) {
      css['tile-centered'] = true;
    }
    return css;
  }
}
</script>
