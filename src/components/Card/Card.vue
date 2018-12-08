<script>
/**
 * Card
 *
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div class="card">
      <slot></slot>
    </div>
  `,
})
export default class Card extends Vue {}
</script>
