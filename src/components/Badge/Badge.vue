<template>
  <span class="badge" v-bind:data-badge="badge"><slot></slot></span>
</template>

<script>
/**
 * Badge
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Badge',
  props: {
    badge: {
      type: String
    }
  }
}
</script>
