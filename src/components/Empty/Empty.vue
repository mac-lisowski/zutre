<script>
/**
 * Empty
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<div class="empty"><slot></slot></div>',
})
export default class Empty extends Vue {}
</script>
