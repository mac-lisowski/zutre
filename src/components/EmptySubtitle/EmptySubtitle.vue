<script>
/**
 * EmptySubtitle
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
 template: '<p class="empty-subtitle"><slot></slot></p>',
})
export default class EmptySubtitle extends Vue {}
</script>
