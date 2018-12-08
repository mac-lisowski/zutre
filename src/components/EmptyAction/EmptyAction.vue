<script>
/**
 * EmptyAction
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<div class="empty-action"><slot></slot></div>',
})
export default class EmptyAction extends Vue {}
</script>
