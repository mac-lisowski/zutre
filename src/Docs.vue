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
      
    <z-hero type="primary" size="sm">
      <z-hero-body>
        
        <h1 class="logo">Zutre</h1>
        <h2 class="logo-subtitle">Lightweight UI components for <a href="https://vuejs.org" class="text-secondary" target="_blank"><strong>Vue.js</strong></a> based on <a href="https://picturepan2.github.io/spectre/" class="text-secondary" target="_blank"><strong>Spectre CSS Framework</strong></a></h2>

      </z-hero-body>
    </z-hero>

    <header class="docs-navbar navbar text-secondary"></header>

    <z-container>
      <z-columns>
        <z-column size="3">
          <h6>Menu</h6>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'installation' }">Installation</router-link>
            </li>
          </ul>

          <h6>Layout</h6>
          <ul>
            <li>
              <router-link :to="{ name: 'docsFlexbox' }">Flexbox grid</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'docsHero' }">Hero</router-link>
            </li>
          </ul>

          <h6>Components</h6>
          <ul>
            <li>
              <router-link :to="{ name: 'docsButtons' }">Buttons</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'docsBreadcrumbs' }">Breadcrumbs</router-link>
            </li>
          </ul>

        </z-column>
        <z-column size="9">
          <router-view />
        </z-column>
      </z-columns>
    </z-container>
  </div>
</template>
<script>
import { ZContainer, ZColumns, ZColumn, ZHero, ZHeroBody } from './components'

export default {
  name: 'Demo',
  components: {
    ZContainer, ZHero, ZHeroBody, ZColumns, ZColumn
  }
}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Lobster|PT+Sans:400,700');


$font-logo: 'Lobster', 'Tmes New Roman', Times, serif;
$primary: #EF2390;

.logo {
  color: $primary;
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
