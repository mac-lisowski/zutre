<template>
  <div>
    <ul class="tab" :class="{'tab-block': block}" v-if="hasItems">
      <li 
        v-bind:key="idx"
        v-for="(item, idx) in items" 
        class="tab-item"
        :class="{ active: activeTab === idx }"
      >
        <z-link :badge="item.badge" :name="item.name" :onClick="() => itemOnClick(item,idx)" />
      </li>
      <li v-if="hasActionSlot" class="tab-item tab-action">
          <slot name="action"/>
      </li>
    </ul>
    
    <!-- <template v-if="hasComponent(item.content)">
    </template>
    <template v-else>
    </template> -->

    <!-- <component v-if="hasComponent(item.content)" :is="extractContent(item.content, 'component')" /> -->
    <div v-for="(item, idx) in items" v-bind:key="idx" :style="{display: (activeTab === idx) ? 'block' : 'none' }">
      <div v-html="item.content" v-if="!hasComponent(item.content, 'component')" />
      <component v-if="hasComponent(item.content)" :is="item.content" />
    </div>
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
    onClick: Function,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  created() {
    this.activeTab = this.active;
  },
  watch: {
    active(val) {
      this.activeTab = val;
    },
  },
  methods: {
    // eslint-disable-next-line
    itemOnClick(item, idx) {
      if (typeof this.onClick === 'function') {
        this.onClick.apply(null, arguments);
      }
      this.setActive(idx);
    },
    setActive(idx) {
      this.$emit('update:active', idx);
      this.activeTab = idx;
    },
    hasComponent(item) {
      return typeof item === 'object' || typeof item === 'function';
    },
  },
  computed: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0
    },
    hasActionSlot() {
      return !!this.$slots.action;
    }
  }
}
</script>
