<script lang="ts">
/**
 * ToastBody
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<div><slot></slot></div>',
})
export default class ToastBody extends Vue {}
</script>
