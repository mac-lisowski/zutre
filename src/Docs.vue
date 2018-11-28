<template>
  <div class="docs-container">
    <z-container>
      <header class="navbar">
        <section class="navbar-section">
          <small>Status: <strong>In Development</strong></small>
        </section>
        <section class="navbar-center"></section>
        <section class="navbar-section">
          <a href="https://twitter.com/maclisowski" class="btn btn-link">Twitter</a>
          <a href="https://github.com/maclisowski/zutre" class="btn btn-link">GitHub</a>
        </section>
      </header>

      <h1 class="logo">Zutre</h1>
      <h2 class="logo-subtitle">Lightweight UI components for Vue.js based on <a href="https://picturepan2.github.io/spectre/" target="_blank">Spectre CSS Framework</a></h2>
      
      <header class="docs-navbar navbar">
        <section class="navbar-section"></section>
        <section class="navbar-center">
          <router-link :to="{ name: 'home'}">Home</router-link> &nbsp;|&nbsp; 
          <router-link :to="{ name: 'about'}">About</router-link>
        </section>
        <section class="navbar-section"></section>
      </header>
      <br>
    </z-container>

    <z-container>
      <router-view />
    </z-container>
  </div>
</template>
<script>
import { ZContainer } from './components'

export default {
  name: 'Demo',
  components: {
    ZContainer
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster');

$font-logo: 'Lobster', 'Tmes New Roman';
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
    max-width: 966px;
  }
}

.navbar.docs-navbar {
  padding: 10px;
  color: #fff;
  background: $primary;
  border-radius: 20px;
  margin: 10px 0;

  a {
    color: #fff;
  }
}
</style>
