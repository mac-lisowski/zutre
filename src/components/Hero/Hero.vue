<script lang="ts">
/**
 * Hero
 *
 * Spectre: https://picturepan2.github.io/spectre/layout/hero.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} type
 * @prop {String} size
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
 template: `
   <div :class="heroClass">
     <slot></slot>
   </div>
 `,
})
export default class Hero extends Vue {
  @Prop(String) private type?: string;
  @Prop(String) private size?: string;

  // compute hero css class
  get heroClass(): CSSClass {
    const css: CSSClass = { hero: true };

    switch (this.size) {
      case 'sm':
        css['hero-sm'] = true;
        break;
      case 'lg':
        css['hero-lg'] = true;
        break;
    }

    switch (this.type) {
      case 'primary':
        css['bg-primary'] = true;
        break;
      case 'secondary':
        css['bg-secondary'] = true;
        break;
      case 'dark':
        css['bg-dark'] = true;
        break;
      case 'gray':
        css['bg-gray'] = true;
        break;
      case 'success':
        css['bg-success'] = true;
        break;
      case 'warning':
        css['bg-warning'] = true;
        break;
      case 'error':
        css['bg-error'] = true;
        break;
    }

    return css;
  }
}
</script>
