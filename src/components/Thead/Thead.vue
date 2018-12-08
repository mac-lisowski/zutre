<script lang="ts">
/**
 * THead
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <thead>
    <slot></slot>
  </thead>
  `,
})
export default class THead extends Vue {}
</script>
