<template>
  <button :class="btnClass" :disabled="isDisabled" v-on:click="onClick" v-bind:data-badge="badge">
    <slot></slot>
  </button>
</template>

<script>
/**
 * ZButton  
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size Values: sm, lg
 * @prop {String} type
 * @prop {Boolean} active
 * @prop {Boolean} action
 * @prop {Boolean} circle
 * @prop {Boolean} loading
 * @prop {Boolean} disabled
 * @prop {Boolean} right
 * @prop {String} badge
 */
export default {
  name: 'ZButton',
  methods: {
    onClick (...args) {
      if (typeof this.click === 'function') {
        return this.click(...args)
      }
      return
    }
  },
  watch: {

  },
  props: {
    click: Function,
    size: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => ''
    },
    active: {
      type: Boolean,
      default: () => false
    },
    action: {
      type: Boolean,
      default: () => false
    },
    circle: {
      type: Boolean,
      default: () => false
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    right: {
      type: Boolean
    },
    clear: {
      type: Boolean
    },
    badge: {
      type: String
    }
  },
  computed: {
    isDisabled: function() {
      return this.disabled
    },
    btnClass: function() {
      let css = 'btn'

      if (this.size !== '') {
        switch (this.size) {
          case 'sm':
            css += ' btn-sm'
            break
          case 'lg':
            css += ' btn-lg'
            break
        }
      }

      if (this.type !== '') {
        switch (this.type) {
          case 'primary':
            css += ' btn-primary'
            break
          case 'link':
            css += ' btn-link'
            break
          case 'success':
            css += ' btn-success'
            break
          case 'error':
            css += ' btn-error'
            break
        }
      }

      if (typeof this.badge !== 'undefined') {
        css += ' badge'
      }

      if (this.clear === true) {
        css += ' btn-clear'
      }

      if (this.active === true) {
        css += ' active'
      }

      if (this.action === true) {
        css += ' btn-action'
      }

      if (this.circle === true) {
        css += ' s-circle'
      }

      if (this.loading === true) {
        css += ' loading'
      }

      if (this.right === true) {
        css += ' float-right'
      }

      return css
    }
  }
}
</script>
