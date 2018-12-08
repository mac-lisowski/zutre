<script lang="ts">
/**
 * Nav
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<ul :class="navClass"><slot></slot></ul>',
})
export default class Nav extends Vue {

  get navClass(): CSSClass {
    const css: CSSClass = { nav: true };

    return css;
  }
}
</script>
