<template>
  <pre class="code" :data-lang="whatLang"><code><slot></slot></code></pre>
</template>

<script>
/**
 * Code
 * 
 * Spectre: https://picturepan2.github.io/spectre/elements/code.html
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} lang
 */
export default {
  name: 'Code',
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
