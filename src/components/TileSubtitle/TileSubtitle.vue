<script lang="ts">
/**
 * TileSubtitle
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <p class="tile-subtitle">
      <slot></slot>
    </p>
  `,
})
export default class TileSubtitle extends Vue {}
</script>
