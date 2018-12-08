<script lang="ts">
/**
 * Menu
 *
 * Spectre: https://picturepan2.github.io/spectre/components/menu.html#menus
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
    <ul class="menu">
      <slot></slot>
    </ul>
  `,
})
export default class Menu extends Vue {}
</script>
