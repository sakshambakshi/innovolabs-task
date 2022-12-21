<template>
  <div>
    <div>
      <label for="filter-table">Search Anything</label>
      <input
        type="text"
        id="filter-table"
        @change="setSearchStr"
        @input="setSearchStr"
      />
    </div>
    <div>
      <label for="list-per-page">List Per Page</label>
      <select @input="updatePageLimit" v-model="pageLimitSize" id="list-per-page">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
    </div>
    <table>
      <tr>
        <slot name="table-head"></slot>
      </tr>
      <template v-if="usersForThisPage.length > 0">
          <template v-for="user in usersForThisPage" :key="user.id">
            <slot name="table-row" v-bind="{ user }"></slot>
          </template>

      </template>
      <template v-else>
        <div>
            <h4>No User Available</h4>

        </div>
      </template>
    </table>
    <template v-if="totalPages > 1">
      <template v-for="i in totalPages" :key="i">
        <button style="margin: 10px ;" v-on="{ click: () => pageChange(i) }">{{ i }}</button>
      </template>
    </template>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { debounce } from "lodash";
export default {
  name: "TableComponent",
  props: {},
  setup($props) {
    const $store = useStore();
    console.log($props, computed, $store);
    const usersArr = ref([]);
    // eslint-disable-next-line no-debugger
    // debugger;
    const pageLimitSize = ref($store.state.paginationLimit);
    onMounted(async () => {
      await $store.dispatch("usersFetch");
      //  console.log()
    });
    const totalPages = computed(() => Math.round($store.getters.totalPages));
    const usersForThisPage = computed(() => $store.getters.currentPageUsers);
    window.usersForThisPage = usersForThisPage;
    // eslint-disable-next-line no-unused-vars
    const pageChange = function (newPage) {
      // eslint-disable-next-line no-debugger
      debugger;
      newPage = parseInt(newPage);
      !isNaN(newPage) ? $store.commit("updateCurrentPage", newPage) : null;
    };
    const setSearchStr = debounce(function (event) {
      console.log(event.target.value);
      $store.commit("updateSearchText", event.target.value);
      $store.commit("updateCurrentPage", 1);
    }, 500);
    const updatePageLimit = function(evt){
      // eslint-disable-next-line no-debugger
      debugger;
      $store.commit( 'updateCurrentPage' , 1)
      $store.commit( 'updatePaginationLimit' , parseInt(evt.target.value))
    }
    return { usersArr, pageChange, totalPages, usersForThisPage, setSearchStr , pageLimitSize , updatePageLimit};
  },
};
</script>
