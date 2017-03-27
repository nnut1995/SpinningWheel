<template>
  <el-table :data="tableData" border :default-sort = "{prop: 'name', order: 'ascending'}" style="width: 100%">
    <el-table-column prop="name" label="Name" width="180"></el-table-column>
    <el-table-column prop="description" label="Description"></el-table-column>
  </el-table>
</template>


<script>
  export default {
    data () {
      return {
        tableData: [{
          name: 'A',
          description: 'EIEI'
        }, {
          name: 'Nat',
          description: 'No. 189, Grove St, Los Angeles'
        }, {
          name: 'B',
          description: 'No. 189, Grove St, Los Angeles'
        }, {
          name: 'C',
          description: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      }
    }
  }
</script>

<style lang="css">
</style>
