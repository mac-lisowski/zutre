<script>
/**
 * EmptyTitle
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<p class="empty-title h5"><slot></slot></p>',
})
export default class EmptyTitle extends Vue {}
</script>
