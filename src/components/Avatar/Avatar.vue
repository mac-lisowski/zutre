<template>
  <figure :class="avatarClass" v-bind:data-initial="data" v-bind:data-badge="badge">
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
 * @prop {String} data
 * @prop {String} src  
 * @prop {String} size values: xl, lg, sm, xs
 * @prop {String} presence values: online, busy, away, offline
 * @prop {String} presenceSrc
 * @prop {String} badge
 */
export default {
  name: 'ZAvatar',
  props: {
    data: {
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
    },
    badge: {
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
      let css = { 
        'avatar-presence': true
      }

      switch(this.presence) {
        case 'online':
          css.online = true
          break
        case 'busy':
          css.busy = true
          break
        case 'away':
          css.away = true
          break
      }

      return css
    },
    avatarClass () {
      let css = {
        avatar: true
      }

      switch(this.size) {
        case 'xl': 
          css['avatar-xl'] = true
          break
        case 'lg': 
          css['avatar-lg'] = true
          break
        case 'sm': 
          css['avatar-sm'] = true
          break
        case 'xs': 
          css['avatar-xs'] = true
          break
      }

      if (typeof this.badge !== 'undefined') {
        css.badge = true
      }

      return css
    }
  }
}
</script>
