<script lang="ts">
/**
 * TileTitle
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <p class="tile-title">
      <slot></slot>
    </p>
  `,
})
export default class TileTitle extends Vue {}
</script>
