<script lang="ts">
/**
 * Container
 *
 * Spectre: https://picturepan2.github.io/spectre/layout/grid.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div :class="containerClass">
      <slot></slot>
    </div>
  `,
})
export default class Container extends Vue {
  @Prop(String) private size?: string;

  // compute container css class
  get containerClass(): CSSClass {
    const css: CSSClass = { container: true };

    switch (this.size) {
      case 'xs':
        css['grid-xs'] = true;
        break;
      case 'sm':
        css['grid-sm'] = true;
        break;
      case 'lg':
        css['grid-lg'] = true;
        break;
      case 'xl':
        css['grid-xl'] = true;
        break;
    }

    return css;
  }
}
</script>
