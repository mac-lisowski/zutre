<template>
  <figure :class="avatarClass" v-bind:data-initial="dataInitial">
    <!-- <slot></slot> -->
    <template v-if="hasSrc">
      <img :src="srcPath">
    </template>

    <template v-if="hasPresenceSrc">
      <img :src="presenceSrcPath" class="avatar-icon">
    </template>
    <template v-else-if="hasPresence">
      <i :class="presenceClass"></i>
    </template>
    
  </figure>
</template>

<script>
/**
 * ZAvatar
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} dataInitial
 * @prop {String} src  
 * @prop {String} size values: xl, lg, sm, xs
 * @prop {String} presence values: online, busy, away, offline
 * @prop {String} presenceSrc
 */
export default {
  name: 'ZAvatar',
  props: {
    dataInitial: {
      type: String,
      default: () => ''
    },
    src: {
      type: String
    },
    size: {
      type: String
    },
    presence: {
      type: String
    },
    presenceSrc: {
      type: String
    }
  },
  computed: {
    hasPresence () {
      return (typeof this.presence !== 'undefined') ? true : false
    },
    hasPresenceSrc () {
      return (typeof this.presenceSrc !== 'undefined') ? true : false
    },
    hasSrc () {
      return (typeof this.src !== 'undefined') ? true : false
    },
    presenceSrcPath () {
      return this.presenceSrc
    },
    srcPath () {
      return this.src
    },
    presenceClass () {
      let css = 'avatar-presence'

      switch(this.presence) {
        case 'online':
          css += ' online'
          break
        case 'busy':
          css += ' busy'
          break
        case 'away':
          css += ' away'
          break
      }

      return css
    },
    avatarClass () {
      let css = 'avatar'

      switch(this.size) {
        case 'xl': 
          css += ' avatar-xl'
          break
        case 'lg': 
          css += ' avatar-lg'
          break
        case 'sm': 
          css += ' avatar-sm'
          break
        case 'xs': 
          css += ' avatar-xs'
          break
      }

      return css
    }
  }
}
</script>
