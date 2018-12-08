<script lang="ts">
/**
 * MenuDivider
 *
 * Spectre: https://picturepan2.github.io/spectre/components/menu.html#menus
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} content
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: '<li class="divider" v-bind:data-content="content"></li>',
})
export default class MenuDivider extends Vue {
  @Prop(String) private content?: string;
}
</script>
