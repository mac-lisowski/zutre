<template>
    <z-container>
      <z-breadcrumbs :items="[
        { name: 'Home', link: { name: 'home' }}, 
        { name: 'Elements' }, 
        { name: 'Forms', link: { name: 'docsForms' }}
      ]" />
      <h4>Forms</h4>

      <p>
        Components: <code>&lt;z-input /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>
      
      <z-input v-model="input1Value" label="Family name" maxlength="10" counter />

      <z-input type="textarea" v-model="input2Value" label="Message" maxlength="100" counter />

      <z-code lang="Vue">
&lt;z-input v-model="inputValue" label="Family name" maxlength="10" counter /&gt;

&lt;z-input type="textarea" v-model="textareaValue" label="Message" maxlength="100" counter /&gt;
      </z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Input <code>&lt;z-input /&gt;</code></h5>
      <z-table>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>lang</code></z-td>
            <z-td>
              name of language eg. <code>HTML</code>, <code>Vue</code>, <code>javascript</code>, <code>bash</code> etc.
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  data() {
    return {
      input1Value: '',
      input2Value: '',
    }
  },
  methods: {
    btnClick() {
      console.log(this.input1Value);
    },
  },
}
</script>
