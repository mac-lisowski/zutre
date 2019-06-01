<template>
  <figure 
    :class="avatarClass" 
    v-bind:data-initial="data" v-bind:data-badge="badge">

    <a class="avatar--onclick-overlay" @click="$emit('click')" />
     

    <template v-if="hasSrc">
      <img :src="srcPath">
    </template>
    
    <div class="avatar--presence-container">
      <template v-if="hasPresenceSrc">
        <img :src="presenceSrcPath" class="avatar-icon">
      </template>
      <template v-else-if="hasPresence">
        <i :class="presenceClass" :style="{ cursor: (hasMenu) ? 'pointer' :'initial' }">
          <template v-if="hasMenu">
            <z-menu>
              <z-menu-item v-for="(item, idx) in menuItems" v-bind:key="idx" :name="item.name" :href="item.href" :link="item.link" v-on:click="item.onClick" />
            </z-menu>
          </template>
        </i>
      </template>
      
    </div>

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
 * @prop {Boolean} block
 * @prop {Array} menu
 */
export default {
  name: 'Avatar',
  props: {
    data: {
      type: String,
      default: () => ''
    },
    src: String,
    size: String,
    presence: String,
    presenceSrc: String,
    badge: String,
    block: Boolean,
    menu: Array
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
    hasMenu() {
      return (typeof this.menu !== 'undefined') ? true : false
    },
    menuItems() {
      return this.menu;
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

      return css;
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

      if (this.block === true) {
        css['avatar--block'] = true;
      }
      
      return css
    }
  }
}
</script>
