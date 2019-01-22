
<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Pagination', link: { name: 'docsPagination' }}]" />
      <h4>Pagination</h4>

      <p></p>

      <p>
        Components: <code>&lt;z-pagination /&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      Total results: <input type="number" v-model="totalResults" /> <br>
      Per page: <input type="number" v-model="perPage"/>

      <z-pagination :page.sync="currentPage" :total="parseInt(totalResults)" :perPage="parseInt(perPage)" :onPageChange="onPageChange" />
      <z-code lang="Vue">
&lt;z-pagination 
  :page.sync="currentPage" 
  :total="parseInt(totalResults)" 
  :perPage="parseInt(perPage)" 
  :onPageChange="onPageChange" 
/>
/&gt;
</z-code>

      <br><br>
      <z-pagination :page.sync="currentPage" v-bind:total="parseInt(totalResults)" :perPage="parseInt(perPage)" showAllPages :showNavButtons="false" />
      <z-code lang="Vue">
&lt;z-pagination 
  :page.sync="currentPage" 
  v-bind:total="parseInt(totalResults)" 
  :perPage="parseInt(perPage)" 
  :showNavButtons="false" 
  showAllPages
/&gt;
</z-code>
<br><br>
      <z-pagination :page.sync="currentPage" :items="items" :perPage="parseInt(perPage)" :onPageChange="onPageChangeWithResults" />
      <z-code>
{{displayResults}}
      </z-code>

      <z-code lang="Vue">
&lt;z-pagination 
  :page.sync="currentPage" 
  :items="items" 
  :perPage="parseInt(perPage)" 
  :onPageChange="onPageChangeWithResults" 
/&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Pagination <code>&lt;z-pagination /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>prevText</code></z-td>
            <z-td>
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td><code>Previous</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>nextText</code></z-td>
            <z-td>
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td><code>Next</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>items</code></z-td>
            <z-td>
              if set, no need to pass <code>total</code>, it will be computed <br>
              inside component, if items are passed then <code>onPageChange</code><br>
              callback as a second parameter will receive array of items which<br>
              should be displayed on current page
            </z-td>
            <z-td>Array</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>total</code></z-td>
            <z-td>
            </z-td>
            <z-td>Number</z-td>
            <z-td>---</z-td>
            <z-td><code>0</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>page</code></z-td>
            <z-td>
            </z-td>
            <z-td>Number</z-td>
            <z-td>---</z-td>
            <z-td><code>1</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>perPage</code></z-td>
            <z-td>
            </z-td>
            <z-td>Number</z-td>
            <z-td>---</z-td>
            <z-td><code>20</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>showNavButtons</code></z-td>
            <z-td>
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>true</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>showAllPages</code></z-td>
            <z-td>
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>onPageChange</code></z-td>
            <z-td>
            </z-td>
            <z-td>Function</z-td>
            <z-td><code>callback(page, results)</code></z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsPagination',
  data() {
    return {
      perPage: 9,
      totalResults: 140,
      currentPage: 3,
      items: [],
      displayResults: null,
    };
  },
  created() {
    this.generateItems();
  },
  methods: {
    // eslint-disable-next-line
    onPageChange(page, res) {
      console.info('page changed: ' + page);
    },
    onPageChangeWithResults(page, res) {
      this.displayResults = res;
    },
    generateItems() {
      let newItems = [];
      let i = 1;

      for(; i <= this.totalResults; i++) {
        newItems.push(i);
      }

      this.items = newItems;
    }
  },
  watch: {
    totalResults(val) {
      this.generateItems(val);
    }
  }

}
</script>
