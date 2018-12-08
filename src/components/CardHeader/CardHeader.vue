<script lang="ts">
/**
 * CardHeader
 *
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div class="card-header">
      <slot></slot>
    </div>
  `,
})
export default class CardHeader extends Vue {}
</script>
