<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: '<tr :class="trClass"><slot></slot></tr>',
})
export default class Tr extends Vue {
  // active dfines if row is marked as active, applies "active" css class
  @Prop(Boolean) private active?: boolean;

  // compute css class for <tr> tag
  get trClass(): CSSClass {
    const css: CSSClass = { active: false };
    if (this.active === true) {
      css.active = true;
    }

    return css;
  }
}
</script>
