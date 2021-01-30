<template>
  <div>
    <h1>Vue Table Sample</h1>
    <div class="data-table">
      <vuetable
        ref="vuetable"
        api-url="https://jsonplaceholder.typicode.com/posts"
        :data="data"
        :fields="fields"
        data-path=""
        pagination-path=""
      ></vuetable>
    </div>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
export default {
  name: "DataTable",
  components: {
    Vuetable,
  },
  data() {
    return {
      fields: [
        {
          name: "id",
        },
        {
          name: "userId",
        },
        {
          name: "title",
        },
        {
          name: "body",
        },
      ],
      data: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>