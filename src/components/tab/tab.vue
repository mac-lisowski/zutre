<template>
  <div>
    <ul class="tab" :class="{'tab-block': block}" v-if="hasItems">
      <li 
        v-bind:key="idx"
        v-for="(item, idx) in items" 
        class="tab-item"
        :class="{ active: activeTab === idx }"
      >
        <z-link :badge="item.badge" :name="item.name" v-on:click="() => itemOnClick(item, idx)" />
      </li>
      <li v-if="hasActionSlot" class="tab-item tab-action">
          <slot name="action"/>
      </li>
    </ul>
    
    <template v-if="!hasTargetContainer">
      <z-tab-controller :items="items" :active="activeTab" :height="height" />
    </template>
  </div>
</template>
<script>
/**
 * Tab
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'Tab',
  props: {
    block: Boolean,
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
    containerId: String
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  created() {
    this.activeTab = this.active;
  },
  mounted() {
    this.mountToTargetContainer();
  },
  watch: {
    active(val) {
      this.activeTab = val;
    },
  },
  methods: {
    // eslint-disable-next-line
    itemOnClick(item, idx) {
      this.setActive(idx);
    },
    setActive(idx) {
      this.$emit('update:active', idx);
      this.activeTab = idx;
    },
    // mountToTargetContainer - if containerId exist, mount z-tab-controller there
    mountToTargetContainer() {
      if (this.hasTargetContainer) {
        let containerEl = document.getElementById(this.containerId);

        if (!containerEl) {
          throw '[zutre:z-tab] containerId: '+ this.containerId + ' - HTMLElement with such ID does not exist';
        } else {
          this.$zutre.newTabController(this).$mount(containerEl);
        }
      }
    },
  },
  computed: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0
    },
    hasActionSlot() {
      return !!this.$slots.action;
    },
    hasTargetContainer() {
      return !!this.containerId;
    },
  }
}
</script>
