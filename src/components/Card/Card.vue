<template>
  <div class="card">
  <div class="card-image">
    <!-- <img src="img/osx-el-capitan.jpg" class="img-responsive"> -->
  </div>
  <div class="card-header">
    <div class="card-title h5">...</div>
    <div class="card-subtitle text-gray">...</div>
  </div>
  <div class="card-body">
    ...
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">...</button>
  </div>
</div>
</template>

<script>
/**
 * ZCard
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/cards.html
 * 
 * @param {Array} items each item is an JSON object with: name, link/href. <router-link :to="item.link" /> instaed of <a :href="item.href" />
 */
// import ZBreadcrumbsItem from './../BreadcrumbsItem'

export default {
  name: 'ZCard',
  components: { 
    // ZBreadcrumbsItem
  },
  props: {
    // items: {
    //   type: Array,
    //   default: () => []
    // }
  },
  computed: {
    // breadcrumbsItems () {
    //   return this.items;
    // },
    // hasDefaultSlot () {
    //   return !!this.$slots.default
    // }
  }
}
</script>
