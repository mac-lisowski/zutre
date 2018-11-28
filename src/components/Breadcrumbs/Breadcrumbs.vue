<template>
  <ul class="breadcrumb" v-if="breadcrumbsItems.length > 0">

    <li class="breadcrumb-item" v-bind:key="item.name" v-for="item in breadcrumbsItems">
      <router-link v-if="item.link" :to=item.link>{{ item.name }}</router-link>
      <a v-if="!item.link" :href="item.href">{{ item.name }}</a>
    </li>

  </ul>
</template>

<script>
/**
 * ZBreadcrumbs
 * 
 * Spectre: https://picturepan2.github.io/spectre/components/breadcrumbs.html
 * 
 * @param {Array} items each item is an JSON object with: name, link/href. <router-link :to="item.link" /> instaed of <a :href="item.href" />
 */
export default {
  name: 'ZBreadcrumbs',
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
