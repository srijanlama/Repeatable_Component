<template>
  <div class="container-fluid">
    <RepeatableGroup />
    <DataTable />
  </div>
</template>

<script>
import RepeatableGroup from "./RepeatableGroup";
import DataTable from "./DataTable";
export default {
  name: "Wrapper",
  components: {
    RepeatableGroup,
    DataTable,
  },
};
</script>

<style lang="scss" >
</style>