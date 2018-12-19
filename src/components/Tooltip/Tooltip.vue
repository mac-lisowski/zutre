<script>
export default {
  functional:true,
  name: 'Tooltip',
  props: {
    content: { type: String, default: () => '' },
    position: { type: String, default: () => '' },
  },
  // mounted() {
  //   let el = this.$slots.default[0].elm;

  //   el.classList.add('tooltip');
  //   el.setAttribute('data-tooltip', this.content);
  // },
  created() {
    console.log("X")
  },
  render(create, context) {
    if (typeof context.children[0].elm !== 'undefined') {
      let el = context.children[0].elm;

      el.classList.add('tooltip');
      el.setAttribute('data-tooltip', this.content);
    }

    console.log(context.props)

    return context.children;
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    css() {
      let css = { tooltip: true };
      
      switch(this.position) {
        case 'top':
          css['tooltip-top'] = true;
          break;
        case 'bottom':
          css['tooltip-bottom'] = true;
          break;
        case 'left':
          css['tooltip-left'] = true;
          break;
        case 'right':
          css['tooltip-right'] = true;
          break;
      }

      return css;
    },
  },
};
</script>
