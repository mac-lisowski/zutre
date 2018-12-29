<template>
  <span><slot /></span>
</template>
<script>
export default {
  name: 'Tooltip',
  props: {
    content: { type: String, default: () => '' },
    position: { type: String, default: () => '' },
  },
  mounted() {
    if (this.hasDefaultSlot) {
      let el = this.$slots.default[0].elm;

      el.classList.add('tooltip');
      el.setAttribute('data-tooltip', this.content);

      if (this.tooltipPosition !== '') {
        el.classList.add(this.tooltipPosition);
      }

      this.$el.replaceWith(el);
    }
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    tooltipPosition() {
      let pos = '';
      
      switch(this.position) {
        case 'top':
          pos = 'tooltip-top';
          break;
        case 'bottom':
          pos = 'tooltip-bottom';
          break;
        case 'left':
          pos = 'tooltip-left';
          break;
        case 'right':
          pos = 'tooltip-right';
          break;
      }

      return pos;
    },
  },
};
</script>
