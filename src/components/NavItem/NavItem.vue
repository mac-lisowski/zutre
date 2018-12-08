<script lang="ts">
/**
 * NavItem
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
 import { Component, Prop, Vue } from 'vue-property-decorator';

 @Component({
   template: `<li :class="itemClass"><slot></slot></li>`,
 })
 export default class NavItem extends Vue {
   @Prop(Boolean) private active?: boolean;

   // compute item css class
   get itemClass(): CSSClass {
     const css: CSSClass = {
       'nav-item': true,
       'active': (this.active === true) ? true : false,
     };

     return css;
   }
 }
</script>
