<template>
  <tfoot>
    <slot></slot>
  </tfoot>
</template>

<script>
/**
 * THead
 *
 * @author Dmitry Novikov <nerosketch@gmail.com>
 */
export default {
  name: 'Tfoot'
}
</script>

<style>
tfoot {
  background-color: #f1f1f1;
}
tfoot td {
  padding: 0.2rem 0.6rem !important;
}
</style>