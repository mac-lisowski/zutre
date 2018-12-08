<script lang="ts">
/**
 * TileContent
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div class="tile-content">
    <slot></slot>
  </div>
  `,
})
export default class TileContent extends Vue {}
</script>
