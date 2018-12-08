<template>
  <div class="card-image" v-if="hasSrc">
    <img v-bind:src="src" class="img-responsive">
  </div>
</template>
<script lang="ts">
/**
 * CardImage
 *
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} src path to image
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop(String) private src?: string;

  // computes if has src
  get hasSrc(): boolean {
    return (typeof this.src !== 'undefined') ? true : false;
  }
}
</script>
