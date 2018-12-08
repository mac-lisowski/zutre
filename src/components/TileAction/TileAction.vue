<script lang="ts">
/**
 * TileAction
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div class="tile-action">
    <slot></slot>
  </div>
  `,
})
export default class TileAction extends Vue {}
</script>
