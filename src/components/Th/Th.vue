<script lang="ts">
/**
 * Th
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<th><slot></slot></th>',
})
export default class Th extends Vue {}
</script>
