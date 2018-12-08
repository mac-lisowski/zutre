<script lang="ts">
/**
 * Table
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <table :class="tableClass">
      <slot></slot>
    </table>
  `,
})
export default class Table extends Vue {
  @Prop(Boolean) private stripped?: boolean;
  @Prop(Boolean) private hover?: boolean;

  // compute table css class
  get tableClass(): CSSClass {
    const css: CSSClass = { table: true };

    if (this.stripped) {
      css['table-striped'] = true;
    }

    if (this.hover) {
      css['table-hover'] = true;
    }

    return css;
  }
}
</script>
