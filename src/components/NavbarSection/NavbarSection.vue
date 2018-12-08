<script lang="ts">
/**
 * NavbarSection
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} center
 */
 import { Component, Prop, Vue } from 'vue-property-decorator';

 @Component({
   template: `
     <div :class="sectionClass">
       <slot></slot>
     </div>
   `,
 })
 export default class NavbarSection extends Vue {
   @Prop(Boolean) private center?: boolean;

   // compute section css class
   get sectionClass(): CSSClass {
     const css: CSSClass = { 'navbar-section': true };

     if (this.center === true) {
       css['navbar-section'] = false;
       css['navbar-center'] = true;
     }

     return css;
   }
 }
</script>
