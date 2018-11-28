<template>
  <ul class="breadcrumbs">

    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'ZBreadcrumbs',
  component: {
    // breadcrumbItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    breadcrumbsItems () {
      return this.items;
    }
  }
}
</script>
