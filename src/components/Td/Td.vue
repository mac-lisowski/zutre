<script lang="ts">
/**
 * Td
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} active
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `<td :class="tdClass"><slot></slot></td>`,
})
export default class Td extends Vue {
  @Prop(Boolean) private active?: boolean;

  // compute td css class
  get tdClass(): CSSClass {
    const css: CSSClass = { active: false };

    if (this.active === true) {
      css.active = true;
    }

    return css;
  }
}
</script>
