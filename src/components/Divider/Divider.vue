<script lang="ts">
/**
 * Divider
 *
 * Spectre: https://picturepan2.github.io/spectre/utilities/divider.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} content
 * @prop {Boolean} vert
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
 template: '<div :class="dividerClass" v-bind:data-content="content"></div>',
})
export default class Divider extends Vue {
  @Prop(Boolean) private vert?: boolean;
  @Prop(String) private content?: string;

  // get divider css class
  get dividerClass(): CSSClass {
    const css: CSSClass = { divider: true };

    if (this.vert === true) {
      css['divider-vert'] = true;
      css.divider = false;
    }

    if (!this.vert && this.content) {
      css['text-center'] = true;
    }

    return css;
  }
}
</script>
