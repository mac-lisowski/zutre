<template>
  <li :class="itemClass">
    <slot v-if="hasSlot" />
    <z-link v-else-if="!hasItems()" :name="name" :href="href" :link="link" :active="showItems" :icon="icon" :exact="exact" :class="{badge:badge}" :data-badge="badgeDis" />
    <label :class="{ 'menu-item': true, active: showItems }" v-else-if="hasItems()" v-on:click="toggleItems()">
      <z-icon v-if="hasIcon" :name="icon" /> {{name}}
    </label>

    <z-nav v-if="hasItems()" :items="items" :class="{'nav--open': showItems, 'nav--closed': !showItems}" />
  </li>
</template>

<script>
/**
 * ZNavItem
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
export default {
  name: 'NavItem',
  props: {
    active: Boolean,
    name: String,
    href: String,
    link: Object,
    items: Array,
    exact: Boolean,
    icon: String,
    badge: [String,Number,Function],
  },
  data() {
    return {
      showItems: false,
    };
  },
  created() {
    if (this.active !== this.showItems) {
      this.showItems = this.active;
    }
  },
  watch: {
    active(value) {
      this.showItems = value;
    }
  },
  methods: {
    hasItems() {
      return typeof this.items === 'object' && this.items.length > 0;
    },
    toggleItems() {
      this.showItems = !this.showItems;
      this.$emit('update:active', !this.showItems);
    },
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
    hasIcon() {
      return (typeof this.icon !== 'undefined') ? true : false;
    },
    itemClass: function() {
      let css = {
        'nav-item': true,
        active: (this.showItems === true) ? true : false
      }

      return css
    },
    badgeDis(){
      if(typeof this.badge === 'function')
        return this.badge();
      else return this.badge;
    }
  }
}
</script>
