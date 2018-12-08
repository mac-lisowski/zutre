<script lang="ts">
/**
 * TileIcon
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <div class="tile-icon">
      <slot></slot>
    </div>
  `,
})
export default class TileIcon extends Vue {}
</script>
