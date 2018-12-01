<template>
  <button :class="btnClass" :disabled="isDisabled">
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
 */
export default {
  name: 'ZButton',
  props: {
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
    }
  },
  computed: {
    isDisabled: function() {
      return this.disabled
    },
    btnClass: function() {
      let cssClass = 'btn'

      if (this.size !== '') {
        switch (this.size) {
          case 'sm':
            cssClass += ' btn-sm'
            break
          case 'lg':
            cssClass += ' btn-lg'
            break
        }
      }

      if (this.type !== '') {
        switch (this.type) {
          case 'primary':
            cssClass += ' btn-primary'
            break
          case 'link':
            cssClass += ' btn-link'
            break
          case 'success':
            cssClass += ' btn-success'
            break
          case 'error':
            cssClass += ' btn-error'
            break
        }
      }

      if (this.clear === true) {
        cssClass += ' btn-clear'
      }

      if (this.active === true) {
        cssClass += ' active'
      }

      if (this.action === true) {
        cssClass += ' btn-action'
      }

      if (this.circle === true) {
        cssClass += ' s-circle'
      }

      if (this.loading === true) {
        cssClass += ' loading'
      }

      if (this.right === true) {
        cssClass += ' float-right'
      }

      return cssClass
    }
  }
}
</script>
