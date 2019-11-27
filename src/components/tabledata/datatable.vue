<template>
  <z-table stripped hover>
    <z-thead>
      <z-tr>
        <z-th v-for="(h, i) in header" :key='i'>
          <b class="sortbtn" @click='orderClick(h)' v-if="h.hasOwnProperty('sortable') && h.sortable">
            {{ h.text }} {{ h.dir ? "↑" : "↓" }}
          </b>
          <b v-else>{{ h.text }}</b>
        </z-th>
      </z-tr>
    </z-thead>
    <z-tbody>
      <z-tr v-for="(item, ii) in items" :key='ii'>
        <z-td v-for="(header, hi) in header" :key='hi'>
          <slot :name="`item.${header.value}`" v-bind:item='item'>
            <span class="ui-text-regular">{{ item[header.value] }}</span>
          </slot>
        </z-td>
      </z-tr>
    </z-tbody>
    <z-tfoot>
      <z-tr>
        <z-td :colspan='header.length + 1'>
          <slot name='header'>
            <span>Item per page: </span>
            <select v-model='currentRpp'>
              <option :value="p" v-for="(p, i) in rowsPerPage" :key='i'>{{ p }}</option>
            </select>
            <span>
              {{ startEl }}-{{ endEl }} of {{ allCount }}
              <z-button-group class="btn-group-inline">
                <z-button @click='prevPage'>&lt;</z-button>
                <z-button disabled>—</z-button>
                <z-button @click='nextPage'>&gt;</z-button>
              </z-button-group>
              pages {{ pageCount }}
            </span>
          </slot>
        </z-td>
      </z-tr>
    </z-tfoot>
  </z-table>
</template>

<script>
/**
 * Datatable
 *
 * @author Dmitry Novikov <nerosketch@gmail.com>
 * @prop {Array} header default: []
 * @prop {Array} items default: []
 * @prop {Number} allCount default: 0
 * @prop {Array} rowsPerPage dafult: [10, 20, 40, 80, 0]
 */
export default {
  name: "Datatable",
  props: {
    header: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    allCount: {
      type: Number,
      default: 0
    },
    rowsPerPage: {
      type: Array,
      default: () => [10, 20, 40, 80, 0]
    }
  },
  mounted() {
    for (let hdr of this.header) {
      this.$set(hdr, "dir", true); // Direction of sort, true - sort, false - invert
    }
  },
  data() {
    return {
      page: 1,
      startEl: 1,
      endEl: 0,
      orderings: [],
      currentRpp: localStorage.itemsPerPage || 10
    };
  },
  methods: {
    updateVars() {
      const se = this.page * this.currentRpp - this.currentRpp;
      if (se < 1) this.startEl = 1;
      else this.startEl = se + 1;
      if (this.allCount > this.currentRpp) {
        // calc
        const ee = this.startEl + this.currentRpp - 1;
        if (ee > this.allCount) this.endEl = this.allCount;
        else this.endEl = ee;
      } else {
        this.endEl = this.allCount;
      }
      this.$emit("update:options", {
        startElement: this.startEl,
        endElement: this.endEl,
        pageCount: this.pageCount,
        getOpts: {
          page: this.page,
          page_size: this.currentRpp
        }
      });
    },
    nextPage() {
      const pc = this.pageCount;
      if (pc > 1 && this.page < pc) this.page++;
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    orderClick(e) {
      e.dir = !(Object.prototype.hasOwnProperty.call(e, "dir") && e.dir);
      for (let hdr of this.header) {
        if (hdr.value !== e.value) hdr.dir = true;
      }
      this.$emit("update:options", {
        getOpts: {
          page: this.page,
          page_size: this.currentRpp,
          ordering: (e.dir ? "" : "-") + e.value
        }
      });
    }
  },
  watch: {
    page() {
      this.updateVars();
    },
    currentRpp(c) {
      this.page = 1;
      localStorage.itemsPerPage = c;
      this.updateVars();
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.allCount / this.currentRpp);
    }
  }
};
</script>

<style>
.table tbody > tr > td,
.table thead > tr > th {
  padding: 0 0.4rem;
}

.sortbtn {
  cursor: pointer;
}
</style>