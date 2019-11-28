<template>
    <div v-if="isActive" :class="modalClass">
      <div @click="cancel('overlay')" class="modal-overlay" v-if="hasOverlay" />

      <div class="modal-container" :style="modalStyle">
        <div class="modal-stripped-content" v-if='stripped'>
          <slot v-if='stripped' />
        </div>
        <template v-else>
          <div class="modal-header">
            <button class="btn btn-clear float-right" aria-label="Close" v-if="canClose && hasCloseType('btn')" @click="cancel('btn')" />
            <div class="modal-title h5" v-if="title" v-text="title" />
          </div>
          
          <div class="modal-body" v-if="content" v-html="content" />
          <div class="modal-body" v-else><slot v-if='!stripped'/></div>

          <div class="modal-footer" v-if="hasFooter">
            <slot name="footer" />
          </div>
        </template>
      </div>
    </div>
</template>

<script>
/**
 * ZModal
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} title
 * @prop {String} content
 * @prop {Boolean} open
 * @prop {String} size
 * @prop {String|Number} width
 * @prop {Boolean} overlay default: true
 * @prop {Boolean|Array} canClose default: true
 * @prop {Function} onClose fired on close 
 * @prop {Boolean} stripped show modal header body and footer if false
 */
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String,
    open: Boolean,
    size: {
      type: String,
      default: () => ''
    },
    width: [String, Number],
    overlay: {
      type: Boolean,
      default: () => true
    },
    canClose: {
      type: [Boolean, Array],
      default: () => true
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    stripped: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: this.open || false,
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.$emit('update:open', false)
      
      this.isActive = false
    },
    cancel (type) {
      if (!this.hasCloseType(type)) return

      this.onClose.apply(null, arguments)
      this.close()
    },
    keyPress (key) {
      if (this.isActive && key.keyCode === 27) this.cancel('esc')
    },
    hasCloseType(type) {
      return (this.closeOptions.indexOf(type) < 0) ? false : true
    }
  },
  watch: {
    open (value) {
      this.isActive = value
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    hasFooter () { 
      return !!this.$slots.footer 
    },
    hasOverlay () {
      return  this.overlay === true
    },
    hasCloseBtn: () => this.closeBtn === true,
    closeOptions () {
      return typeof this.canClose === 'boolean'
        ? this.canClose
            ? ['esc', 'btn', 'overlay'] : []
        : this.canClose
    },
    modalStyle () {
      let style = {}

      if (typeof this.width !== 'undefined') {
        style = {
          maxWidth: 'none',
          width: this.width + 'px'
        }
      }
      if(this.stripped){
        style.background = 'transparent';
        style['box-shadow'] = 'none';
      }

      return style
    },
    modalClass () {
      let css = {
        modal: true,
        active: true
      }

      switch (this.size) {
        case 'sm':
          css['modal-sm'] = true
          break
        case 'lg':
          css['modal-lg'] = true
          break
      }
      return css
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress)
    }
  },
}
</script>

<style>
.modal-stripped-content{
  align-self: center;
  background-color: white;
}
</style>
