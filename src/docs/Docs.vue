<template>
  <div class="docs-container">

    <header class="navbar bg-primary text-secondary">
      <section class="navbar-section">
        <small>Status: <strong>In Development</strong></small>
      </section>
      <section class="navbar-center"></section>
      <section class="navbar-section">
        <router-link :to="{ name: 'home'}" class="btn btn-link text-secondary">Home</router-link> &nbsp;|&nbsp;

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

    <z-container size="xl">
      <z-columns>
        <z-column :sizeLG="12" :size="3">

          <z-menu>
            <z-menu-divider content="MENU" />

            <z-menu-item :link="{ name: 'home' }" name="Home" activeClass="active" exact/>

            <z-menu-divider content="ELEMENTS" />
            <z-menu-item :link="{ name: 'docsTable' }" name="Tables" activeClass="active" />
            <z-menu-item :link="{ name: 'docsButtons' }" name="Buttons" activeClass="active" />
            <z-menu-item :link="{ name: 'docsIcons' }" name="Icons" activeClass="active" />
            <z-menu-item :link="{ name: 'docsLabel' }" name="Labels" activeClass="active" />
            <z-menu-item :link="{ name: 'docsCode' }" name="Code" activeClass="active" />
            <z-menu-item :link="{ name: 'docsMedia' }" name="Media" activeClass="active" />

            <z-menu-divider content="LAYOUT" />

            <z-menu-item :link="{ name: 'docsFlexbox' }" name="Flexbox grid" activeClass="active" />
            <z-menu-item :link="{ name: 'docsFlexboxResponsive' }" name="Responsive" activeClass="active" />
            <z-menu-item :link="{ name: 'docsHero' }" name="Hero" activeClass="active" />
            <z-menu-item :link="{ name: 'docsNavbar' }" name="Navbar" activeClass="active" />

            <z-menu-divider content="COMPONENTS" />
            <z-menu-item :link="{ name: 'docsAvatars' }" name="Avatars" activeClass="active" />
            <z-menu-item :link="{ name: 'docsBadges' }" name="Badges" activeClass="active" />
            <z-menu-item :link="{ name: 'docsBreadcrumbs' }" name="Breadcrumbs" activeClass="active" />
            <z-menu-item :link="{ name: 'docsCard' }" name="Cards" activeClass="active" />
            <z-menu-item :link="{ name: 'docsChip' }" name="Chips" activeClass="active" />
            <z-menu-item :link="{ name: 'docsEmptyStates' }" name="Empty states" activeClass="active" />
            <z-menu-item :link="{ name: 'docsMenu' }" name="Menu" activeClass="active" />
            <z-menu-item :link="{ name: 'docsModal' }" name="Modals" activeClass="active" />
            <z-menu-item :link="{ name: 'docsNav' }" name="Nav" activeClass="active" />
            <z-menu-item :link="{ name: 'docsStep' }" name="Steps" activeClass="active" />
            <z-menu-item :link="{ name: 'docsTile' }" name="Tile" activeClass="active" />
            <z-menu-item :link="{ name: 'docsToast' }" name="Toast" activeClass="active" />

            <z-menu-divider content="UTILITIES" />

            <z-menu-item :link="{ name: 'docsDivider' }" name="Divider" activeClass="active" />
            <z-menu-item :link="{ name: 'docsLink' }" name="Link" activeClass="active" />
          </z-menu>

        </z-column>
        <z-column :sizeLG="12" :size="9">
          <router-view />
        </z-column>
      </z-columns>
    </z-container>
    <footer class="bg-gray">
      <z-container size="xl">
        <z-columns>
          <z-column :sizeLG="12" :size="6">
            Made by <a href="http://twitter.com/maclisowski">Maciej Lisowski</a>. <strong>Zutre</strong>&nbsp;<a href="https://github.com/maclisowski/zutre">source code</a> is licensed under <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>.
          </z-column>
          <z-column :sizeLG="12" :size="6">

          </z-column>
        </z-columns>
      </z-container>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Docs',
  data () {
    return {
      size: ''
    }
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

footer {
  margin-top: 50px;

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
  // > .container {
  //   max-width: 1199px;
  // }

  .column {
    padding: 0.4rem;
  }

  .docs-block {
    border-radius: .1rem;
    padding: .4rem;
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
