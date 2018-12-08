<script lang="ts">
/**
 * HeroBody
 *
 * Spectre: https://picturepan2.github.io/spectre/layout/hero.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div class="hero-body">
      <slot></slot>
    </div>
  `,
})
export default class HeroBody extends Vue {}
</script>
