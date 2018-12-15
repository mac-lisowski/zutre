<template>
  <details class="accordion">
    <summary class="accordion-header">
      {{ title }}
    </summary>
    <div class="accordion-body">
      <slot />
    </div>
  </details>
</template>
<script>
export default {
  name: 'Accordion'
}
</script>
