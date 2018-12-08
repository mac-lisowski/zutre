<script lang="ts">
/**
 * Badge
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import ZBreadcrumbsItem from '@/components/BreadcrumbsItem';

@Component({
  template: '<span class="badge" v-bind:data-badge="badge"><slot></slot></span>',
})
export default class Badge extends Vue {
  @Prop(String) private badge?: string;
}
</script>
