<template>
  <z-container>
    <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'About', link: { name: 'about' }}]" />
    <h4>About</h4>


    <z-columns>
      <z-column>
        Hi!
      </z-column>
      <z-column>
        <z-button type="primary">Submit</z-button>
      </z-column>
    </z-columns>
  </z-container>
</template>
<script>
export default {
  name: 'DocsAbout',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster');

$font-logo: 'Lobster', 'Tmes New Roman';
.logo {
  color: #EF2390;
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
</style>
