<template>
  <div class="card-image" v-if="hasSrc">
    <img v-bind:src="src" class="img-responsive">
  </div>
</template>

<script>
/**
 * ZCardImage
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} src path to image
 */
export default {
  name: 'Card',
  props: {
    src: {
      type: String
    }
  },
  computed: {
    hasSrc: function () {
      return (typeof this.src !== 'undefined') ? true : false
    }
  }
}
</script>
