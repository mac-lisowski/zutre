<template>
  <li class="divider" v-bind:data-content="content"></li>
</template>

<script>
/**
 * ZMenu
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/menu.html#menus
 */
export default {
  name: 'ZMenuDivider',
  props: {
    content: {
      type: String,
    }
  }
}
</script>
