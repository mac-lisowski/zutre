<template>
  <div v-if="hasItems">
    <div 
      v-for="(item, idx) in items" 
      v-bind:key="idx" 
      :style="{
        display: (activeTab === idx) ? 'block' : 'none',
        height: (tabHeight > 0) ? height + 'px' : 'auto',
        overflow: (tabHeight > 0) ? 'auto' : 'initial',
      }"
    >
      <div v-html="item.content" v-if="!hasComponent(item.content, 'component')" />
      <component v-if="hasComponent(item.content)" :is="item.content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabController',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: () => 0,
    },
    height: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      activeTab: 0,
      tabHeight: 0,
    };
  },
  watch: {
    active(val) {
      this.activeTab = val;
    },
  },
  beforeCreate() {
    this.$parent.$on('update:active', (val) => {
      this.activeTab = val;
    });

    this.$parent.$on('update:height', (val) => {
      this.tabHeight = val;
    });
  },
  destroyed: function() {
    if (typeof this.$el !== 'undefined' && this.$el.parentNode !== null) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  created() {
    this.activeTab = this.active;
    this.tabHeight = this.height;
  },
  methods: {
    hasComponent(item) {
      return typeof item === 'object' || typeof item === 'function';
    },
  },
  computed: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0
    },
  },
};
</script>
