<template>
  <div :class="toastClass">
    <z-button v-if="hasCloseBtn" clear right v-on:click.native="setShow(false)" />
    <z-toast-title v-if="hasTitle">{{ toastTitle }}</z-toast-title>
    <z-toast-body v-if="hasContent">{{ toastContent }}</z-toast-body>

    <slot v-if="hasDefaultSlot"></slot>
  </div>
</template>

<script>
import ZButton from './../Button'
import ZToastTitle from './../ToastTitle'
import ZToastBody from './../ToastBody'

/**
 * ZToast
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Boolean} show
 * @prop {Number} duration default: 0 = persistent
 * @prop {Boolean} closeBtn
 * @prop {String} position
 * @prop {String} type
 * @prop {String} title
 * @prop {String} content
 */
export default {
  name: 'Toast',
  components: {
    ZButton,
    ZToastTitle,
    ZToastBody
  },
  mounted: function() {
    this.$once('close', val => {
      if (val === true) {
        this.destroy()
      }
    })

    //   this.$root.$el.append(this.$el);
  },
  destroyed: function() {
    this.$el.parentNode.removeChild(this.$el)
  },
  created () {
    if (this.show === true) {
      this.$emit('open', true)

      this.setShow(true)
    } 
    
    if (this.duration > 0) {
      setTimeout(() => {
        this.destroy()
      }, this.duration)
    }
  },
  methods: {
    destroy () {
      this.$destroy()
    },
    setShow (show = false) {
      if (show === false) {
        this.$emit('close', true);
      }
      
      this.showToast = show
    }
  },
  data () {
    return {
      showToast: true
    }
  },
  props: {
    show: {
      type: Boolean,
      default: () => true
    },
    duration: {
      type: Number,
      default: () => 0
    },
    position: {
      type: String
    },
    closeBtn: {
      type: Boolean
    },
    type: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    }
  },
  watch: {
    show: function(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        this.destroy()
      }
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    hasCloseBtn () {
      return this.closeBtn
    },
    hasContent () {
      return (typeof this.content === 'string') ? true : false
    },
    toastTitle () {
      return this.title
    },
    toastContent () {
      return this.content
    },
    hasTitle () {
      return (typeof this.title === 'string') ? true : false
    },
    toastClass: function() {
      let css = 'toast'

      switch (this.type) {
        case 'primary':
          css += ' toast-primary'
          break
        case 'success':
          css += ' toast-success'
          break
        case 'warning':
          css += ' toast-warning'
          break
        case 'error':
          css += ' toast-error'
          break
      }

      switch(this.position) {
        case 'top': 
          css += ' toast-notify toast-top'
          break
        case 'top left': 
          css += ' toast-notify toast-top toast-left'
          break
        case 'top right': 
          css += ' toast-notify toast-top toast-right'
          break
        case 'bottom': 
          css += ' toast-notify toast-bottom'
          break
        case 'bottom right': 
          css += ' toast-notify toast-bottom toast-right'
          break
        case 'bottom left': 
          css += ' toast-notify toast-bottom toast-left'
          break
        
      }

      return css
    }
  }
}
</script>
