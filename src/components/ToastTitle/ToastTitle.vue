<script lang="ts">
/**
 * ToastTitle
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<h6><slot></slot></h6>',
})
export default class ToastTitle extends Vue {}
</script>
