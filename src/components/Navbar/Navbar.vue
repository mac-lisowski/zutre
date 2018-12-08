<script lang="ts">
/**
 * Navbar
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <header class="navbar">
      <slot></slot>
    </header>
  `,
})
export default class Navbar extends Vue {}
</script>
