<template>
  <figure :class="avatarClass" v-bind:data-initial="data" v-bind:data-badge="badge">
    <!-- <slot></slot> -->
    <template v-if="hasSrc">
      <img :src="srcPath">
    </template>

    <template v-if="hasPresenceSrc">
      <img :src="presenceSrcPath" class="avatar-icon">
    </template>
    <template v-else-if="hasPresence">
      <i :class="presenceClass"></i>
    </template>

  </figure>
</template>
<script lang="ts">
/**
 * Avatar
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} data
 * @prop {String} src
 * @prop {String} size values: xl, lg, sm, xs
 * @prop {String} presence values: online, busy, away, offline
 * @prop {String} presenceSrc
 * @prop {String} badge
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
  @Prop(String) private data?: string;
  @Prop(String) private src?: string;
  @Prop(String) private size?: string;
  @Prop(String) private presence?: string;
  @Prop(String) private presenceSrc?: string;
  @Prop(String) private badge?: string;

  // computes if has presence
  get hasPresence(): boolean {
    return (typeof this.presence !== 'undefined') ? true : false;
  }

  // computes if has presence src
  get hasPresenceSrc(): boolean {
    return (typeof this.presenceSrc !== 'undefined') ? true : false;
  }

  // computes if has src
  get hasSrc(): boolean {
    return (typeof this.src !== 'undefined') ? true : false;
  }

  // computes if has src path
  get presenceSrcPath(): string {
    return this.presenceSrc;
  }

  // computes src path
  get srcPath(): string {
    return this.src;
  }

  // computes presence css class
  get presenceClass(): CSSClass {
    const css: CSSClass = { 'avatar-presence': true };

    switch (this.presence) {
      case 'online':
        css.online = true;
        break;
      case 'busy':
        css.busy = true;
        break;
      case 'away':
        css.away = true;
        break;
    }

    return css;
  }

  // computes avatar css class
  get avatarClass(): CSSClass {
    const css: CSSClass = { avatar: true };

    switch (this.size) {
      case 'xl':
        css['avatar-xl'] = true;
        break;
      case 'lg':
        css['avatar-lg'] = true;
        break;
      case 'sm':
        css['avatar-sm'] = true;
        break;
      case 'xs':
        css['avatar-xs'] = true;
        break;
    }

    if (typeof this.badge !== 'undefined') {
      css.badge = true;
    }

    return css;
  }
}
</script>
