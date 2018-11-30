<template>
  <div class="docs-container">
    
    <header class="navbar bg-primary text-secondary">
      <section class="navbar-section">
        <small>Status: <strong>In Development</strong></small>
      </section>
      <section class="navbar-center"></section>
      <section class="navbar-section">
        <router-link :to="{ name: 'home'}" class="btn btn-link text-secondary">Home</router-link> &nbsp;|&nbsp; 
        <router-link :to="{ name: 'about'}" class="btn btn-link text-secondary">About</router-link> &nbsp;|&nbsp; 

        <a href="https://twitter.com/maclisowski" class="btn btn-link text-secondary">Twitter</a> &nbsp;|&nbsp; 
        <a href="https://github.com/maclisowski/zutre" class="btn btn-link text-secondary">GitHub</a>
      </section>
    </header>
      
    <z-hero type="primary" :size="size">
      <z-hero-body>
        
        <h1 class="logo">Zutre</h1>
        <h2 class="logo-subtitle">Lightweight UI components for <a href="https://vuejs.org" class="text-secondary" target="_blank"><strong>Vue.js</strong></a> based on <a href="https://picturepan2.github.io/spectre/" class="text-secondary" target="_blank"><strong>Spectre CSS Framework</strong></a></h2>

      </z-hero-body>
    </z-hero>

    <header class="docs-navbar navbar text-secondary"></header>

    <z-container>
      <z-columns>
        <z-column :size="3">

          <z-menu>
            <z-menu-divider content="MENU" />
            
            <z-menu-item :link="{ name: 'home' }" name="Home" activeClass="active" exact/>
            <z-menu-item :link="{ name: 'installation' }" activeClass="active">Installation</z-menu-item>

            <z-menu-divider content="ELEMENTS" />
            <z-menu-item :link="{ name: 'docsButtons' }" name="Buttons" activeClass="active" />
            <z-menu-item :link="{ name: 'docsLabel' }" name="Labels" activeClass="active" />
            <z-menu-item :link="{ name: 'docsCode' }" name="Code" activeClass="active" />

            <z-menu-divider content="LAYOUT" />

            <z-menu-item :link="{ name: 'docsFlexbox' }" name="Flexbox grid" activeClass="active" />
            <z-menu-item :link="{ name: 'docsHero' }" name="Hero" activeClass="active" />

            <z-menu-divider content="COMPONENTS" />
            <z-menu-item :link="{ name: 'docsBreadcrumbs' }" name="Breadcrumbs" activeClass="active" />
            <z-menu-item :link="{ name: 'docsCard' }" name="Card" activeClass="active" />
            <z-menu-item :link="{ name: 'docsMenu' }" name="Menu" activeClass="active" />

            <z-menu-divider content="UTILITIES" />

            <z-menu-item :link="{ name: 'docsDivider' }" name="Divider" activeClass="active" />
            <z-menu-item :link="{ name: 'docsLink' }" name="Link" activeClass="active" />
          </z-menu>

        </z-column>
        <z-column :size="9">
          <router-view />
        </z-column>
      </z-columns>
    </z-container>
  </div>
</template>
<script>
import { ZContainer, ZColumns, ZColumn, ZHero, ZHeroBody, ZMenu, ZMenuItem, ZMenuDivider } from './components'

export default {
  name: 'Demo',
  data () {
    return {
      size: ''
    }
  },
  components: {
    ZContainer, ZHero, ZHeroBody, ZColumns, ZColumn, ZMenu, ZMenuItem, ZMenuDivider
  },
  created () {
    this.size = (this.$router.currentRoute.name == 'home') ? 'lg' : 'sm'
  },
  watch: {
    $route (){
        this.size = (this.$router.currentRoute.name == 'home') ? 'lg' : 'sm'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');

$font-logo: 'Kaushan Script', 'Tmes New Roman', Times, serif;
$primary: #498EFF;
body {
  margin-bottom: 100px;
}
.logo {
  color: #fff;
  font-family: $font-logo;
  font-size: 5rem;
  margin: 20px 0;
  text-align: center;
  display: block;
}

.logo-subtitle {
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
  display: block;
}

.docs-container {
  > .container {
    max-width: 1199px;
  }
}

.navbar.docs-navbar {
  padding: 10px;
  color: #fff;
  background: $primary;
  margin: 0 0 10px;

  a {
    color: #fff;
  }
}
</style>
