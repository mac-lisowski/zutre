<script lang="ts">
/**
 * Code
 *
 * Spectre: https://picturepan2.github.io/spectre/elements/code.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} lang
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <pre class="code" :data-lang="whatLang">
      <code><slot></slot></code>
    </pre>
  `,
})
export default class Code extends Vue {
  @Prop(String) private lang?: string;

  // compute lang
  get whatLang(): string {
    return this.lang;
  }
}
</script>
