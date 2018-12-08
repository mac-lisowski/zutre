<script lang="ts">
/**
 * Chip
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<span class="chip"><slot></slot></span>',
})
export default class Chip extends Vue {}
</script>
