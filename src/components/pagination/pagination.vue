<template>
  <div>
    <ul class="pagination">
      <li v-if="showNavButtons" class="page-item" :class="{disabled: !hasPrev}">
        <z-link tabindex="-1" v-on:click="() => prevPage()">{{prevText}}</z-link>
      </li>
      
      <li 
        v-for="(page, idx) in pagesToShow"
        v-bind:key="idx"
        class="page-item"
        :class="{active: currentPage === page}"
      >
        <z-link v-on:click="() => pageClick(page)" v-if="page !== 'dots'">{{page}}</z-link>
        <span v-else>...</span>
      </li>

      <li v-if="showNavButtons" class="page-item" :class="{disabled: !hasNext}">
        <z-link tabindex="-1" v-on:click="() => nextPage()">{{nextText}}</z-link>
      </li>
    </ul>
  </div>
</template>
<script>
const props = {
  prevText: {
    type: String,
    default: () => 'Previous',
  },
  nextText: {
    type: String,
    default: () => 'Next',
  },
  items: Array,
  total: {
    type: Number,
    default: () => 0,
  },
  page: {
    type: Number,
    default: () => 1,
  },
  perPage: {
    type: Number,
    default: () => 20,
  },
  showNavButtons: {
    type: Boolean,
    default: () => true,
  },
  showAllPages: {
    type: Boolean,
    default: () => false,
  },
  onPageChange: Function,
};

const data = function() {
 return {
   currentPage: 1,
   maxPage: 0,
   showPerPage: 20,
   dataItems: undefined,
 };
};

export default {
  name: 'Pagination',
  props,
  data,
  created() {
    this.currentPage = this.page;
    this.totalResults = (typeof this.items !== 'undefined') ? this.items.length : this.total;
    this.showPerPage = this.perPage;

    if (typeof this.items !== 'undefined') {
      this.dataItems = this.items;
    }

    this.countMaxPage();

    if (typeof this.onPageChange === 'function') {
      this.onPageChange.apply(null, [this.currentPage, this.dataResults, this.maxPage]);
    }
  },
  methods: {
    pageClick(page) {
      this.currentPage = page;
      this.$emit('update:page', page);

      if (typeof this.onPageChange === 'function') {
        this.onPageChange.apply(null, [page, this.dataResults, this.maxPage]);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.pageClick(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.maxPage) {
        this.pageClick(this.currentPage + 1);
      }
    },
    countMaxPage() {
      this.maxPage = Math.ceil(this.totalResults / this.showPerPage);
    }
  },
  watch: {
    page(val) {
      if (val < 1) {
        val = 1;
      } else if (val > this.maxPage) {
        val = this.maxPage;
      }
      
      this.currentPage = val;

      if (typeof this.onPageChange === 'function') {
        this.onPageChange.apply(null, [this.currentPage, this.dataResults, this.maxPage]);
      }
    },
    total(val) {
      if (val < 0) {
        val = 0;
      }

      this.totalResults = val;

      this.countMaxPage();
      // if total number of items has changed, go to page 1
      this.pageClick(1);
    },
    perPage(val) {
      if (val < 1) {
        val = 20;
      }
      this.showPerPage = val;
      
      this.countMaxPage();
      this.pageClick(1);
    },
    items(val) {
      this.dataItems = val;

      this.totalResults = this.dataItems.length;
      this.$emit('update:total', this.totalResults);

      this.countMaxPage();
      this.pageClick(1);
    }
  },
  computed: {
    hasPrev() {
      return this.currentPage > 1;
    },
    hasNext() {
      return this.currentPage < this.maxPage;
    },
    dataResults() {
      if (typeof this.dataItems !== 'undefined' && this.dataItems.length > 0) {
        let start = (this.currentPage - 1) * this.showPerPage;
        let end = this.currentPage * this.showPerPage;

        return this.dataItems.slice(start, end);
      }

      return null;
    },
    pagesToShow() {
      let pages = [1];

      if (this.showAllPages === true || this.maxPage <= 7) {
        var i = 2;
        for (; i <= this.maxPage; i++) {
          pages.push(i);
        }
        return pages;
      }

      if (this.currentPage >= this.maxPage) {
        pages.push('dots');
        pages.push(this.currentPage - 2);
        pages.push(this.currentPage - 1);
      } else if (this.currentPage - 1 && this.currentPage - 1 > 1) {
        if (this.currentPage - 1 > 2) {
          pages.push('dots');
        }

        pages.push(this.currentPage - 1);
      }

      
      if (this.currentPage > 1) {
        pages.push(this.currentPage);
      }

      if (this.currentPage + 1 < this.maxPage) {
        pages.push(this.currentPage + 1);

        if (this.currentPage <= 1) {
          pages.push(this.currentPage + 2);
        }

        if (this.currentPage + 2 < this.maxPage) {
          pages.push('dots');
        }
      }

      if (this.currentPage < this.maxPage) {
        pages.push(this.maxPage);
      } 

      return pages;
    }
  },
};
</script>
