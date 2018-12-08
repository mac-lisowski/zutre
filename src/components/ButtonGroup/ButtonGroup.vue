<script lang="ts">
/**
 * ButtonGroup
 *
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} block
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div :class="groupClass">
      <slot></slot>
    </div>
  `,
})
export default class ButtonGroup extends Vue {
  @Prop(Boolean) private block?: boolean;

  get groupClass(): CSSClass {
    const css: CSSClass = { 'btn-group': true };

    if (this.block === true) {
      css['btn-group-block'] = true;
    }

    return css;
  }
}
</script>
