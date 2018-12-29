<template>
  <li class="divider" v-bind:data-content="content"></li>
</template>

<script>
/**
 * ZMenuDivider
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/menu.html#menus
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} content
 */
export default {
  name: 'MenuDivider',
  props: {
    content: {
      type: String,
    }
  }
}
</script>
