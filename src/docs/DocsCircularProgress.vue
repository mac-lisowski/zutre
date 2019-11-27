<template>
  <z-container>
    <h4>About</h4>

    <p>
      Components:
      <code>&lt;z-circular-progress/&gt;</code>,
    </p>

    <z-divider content="EXAMPLE" />

    <z-circular-progress :value="16.88"></z-circular-progress>

    <z-circular-progress strokeColor="#FF00AA" value="16.88">
      <template v-slot:footer>
        <b>More Color</b>
      </template>
    </z-circular-progress>

    <z-circular-progress :radius="50" :strokeWidth="10" value="86.12">
      <template v-slot:footer>
        <b>Bolder & Bigger One</b>
      </template>
    </z-circular-progress>

    <z-circular-progress
      :transitionDuration="5000"
      :radius="50"
      :strokeWidth="10"
      value="86.12"
    >
      <template v-slot:footer>
        <b>Slow One</b>
      </template>
    </z-circular-progress>

    <z-circular-progress
      :transitionDuration="5000"
      :radius="55"
      :strokeWidth="10"
      value="86.12567"
    >
      <template v-slot:footer>
        <b>More Precise</b>
      </template>
    </z-circular-progress>

    <z-circular-progress :transitionDuration="5000" :radius="55" :strokeWidth="10" value="86.12567">
      <div class="content">hello</div>
      <template v-slot:footer>
        <b>More Precise</b>
      </template>
    </z-circular-progress>

    <br />

    <z-code lang="Vue">
      &lt;z-circular-progress strokeColor="#FF00AA" value="16.88"&gt;
        &lt;template v-slot:footer&gt;
          &lt;b&gt;More Color&lt;/b&gt;
        &lt;/template&gt;
      &lt;/z-circular-progress&gt;
    </z-code>

  </z-container>
</template>

<script>
export default {
  name: "DocsProgressCircular"
}
</script>