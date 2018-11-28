<template>
  <pre class="code" :data-lang="whatLang"><code><slot></slot></code></pre>
</template>

<script>
/**
 * ZCode
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/code.html
 */
export default {
  name: 'ZCode',
  props: {
    lang: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    whatLang: function() {
      return this.lang
    }
  }
}
</script>
