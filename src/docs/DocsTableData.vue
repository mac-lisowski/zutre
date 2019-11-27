<template>
  <z-container>
    <z-breadcrumbs
      :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Tables', link: { name: 'docsTableData' }}]"
    />
    <h4>Data tables</h4>

    <p>Data tables ...</p>

    <p>
      Components:
      <code>&lt;z-datatable/&gt;</code>,
    </p>
    <z-divider content="EXAMPLE" />

    <z-datatable :items="items" :header="tableHdr" :allCount="allCount" :options.sync="options">
      <template v-slot:item.actions="{item}">
        <z-button>👁</z-button>
      </template>
    </z-datatable>

    <br />

    <z-code lang="Vue">
&lt;template&gt;
  &lt;z-datatable :items="items" :header="tableHdr" :allCount="allCount" :options.sync="options"&gt;
    &lt;template v-slot:item.actions="{item}"&gt;
      &lt;z-button&gt;👁&lt;/z-button&gt;
    &lt;/template&gt;
  &lt;/z-datatable&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: "DocsDataTable",
  watch: {
    options: {
      handler(o) {
        // This is good place for fetch your own data with table data help.
      },
      deep: true
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          username: "username1",
          last_login: "27 November 14:37",
          full_name: "User full name"
        },
        {
          id: 2,
          username: "username2",
          last_login: "27 November 14:37",
          full_name: "Abrackham"
        },
        {
          id: 3,
          username: "username3",
          last_login: "27 November 14:37",
          full_name: "Abegail"
        },
        {
          id: 4,
          username: "username4",
          last_login: "27 November 14:37",
          full_name: "Acacia"
        },
        {
          id: 5,
          username: "username5",
          last_login: "27 November 14:37",
          full_name: "Codeline"
        },
        {
          id: 6,
          username: "username6",
          last_login: "27 November 14:37",
          full_name: "Adelina"
        },
        {
          id: 7,
          username: "username7",
          last_login: "27 November 14:37",
          full_name: "User full name3"
        },
        {
          id: 8,
          username: "username8",
          last_login: "27 November 14:37",
          full_name: "User full name4"
        },
        {
          id: 9,
          username: "username9",
          last_login: "27 November 14:37",
          full_name: "User full name5"
        },
        {
          id: 10,
          username: "username10",
          last_login: "27 November 14:37",
          full_name: "User full name6"
        }
      ],
      tableHdr: [
        { text: "#", value: "id" },
        { text: "Username", value: "username" },
        { text: "Last login", value: "last_login" },
        { text: "Full name", value: "full_name" },
        { text: "Actions", value: "actions" }
      ],
      allCount: 10,
      options: {}
    };
  }
};
&lt;/script&gt;
    </z-code>
  </z-container>
</template>

<script>
export default {
  name: "DocsDataTable",
  watch: {
    options: {
      handler(o) {
        // This is good place for fetch your own data with table data help.
      },
      deep: true
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          username: "username1",
          last_login: "27 November 14:37",
          full_name: "User full name"
        },
        {
          id: 2,
          username: "username2",
          last_login: "27 November 14:37",
          full_name: "Abrackham"
        },
        {
          id: 3,
          username: "username3",
          last_login: "27 November 14:37",
          full_name: "Abegail"
        },
        {
          id: 4,
          username: "username4",
          last_login: "27 November 14:37",
          full_name: "Acacia"
        },
        {
          id: 5,
          username: "username5",
          last_login: "27 November 14:37",
          full_name: "Codeline"
        },
        {
          id: 6,
          username: "username6",
          last_login: "27 November 14:37",
          full_name: "Adelina"
        },
        {
          id: 7,
          username: "username7",
          last_login: "27 November 14:37",
          full_name: "User full name3"
        },
        {
          id: 8,
          username: "username8",
          last_login: "27 November 14:37",
          full_name: "User full name4"
        },
        {
          id: 9,
          username: "username9",
          last_login: "27 November 14:37",
          full_name: "User full name5"
        },
        {
          id: 10,
          username: "username10",
          last_login: "27 November 14:37",
          full_name: "User full name6"
        }
      ],
      tableHdr: [
        { text: "#", value: "id" },
        { text: "Username", value: "username" },
        { text: "Last login", value: "last_login" },
        { text: "Full name", value: "full_name" },
        { text: "Actions", value: "actions" }
      ],
      allCount: 10,
      options: {}
    };
  }
};
</script>
