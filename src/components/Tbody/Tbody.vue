<script lang="ts">
/**
 * TBody
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <tbody>
      <slot></slot>
    </tbody>
  `,
})
export default class TBody extends Vue {}
</script>
