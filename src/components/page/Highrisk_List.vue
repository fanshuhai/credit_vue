<template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="pojectcheck" label="检查项目" width="180">
      </el-table-column>
      <el-table-column prop="risklevel" label="风险等级" width="180">
      </el-table-column>
      <el-table-column prop="note" label="备注">
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return { 
              tableData: [{
                pojectcheck: '手机号命中虚假号码库',
                risklevel: '高',
                note: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
              }, {
                pojectcheck: '手机号命中虚假',
                risklevel: '中',
                note: '上海市普陀区金沙江路 1517 弄'
              }, {
                pojectcheck: '2016-05-01',
                risklevel: '王小虎',
                note: '上海市普陀区金沙江路 1519 弄'
              }, {
                pojectcheck: '2016-05-03',
                risklevel: '王小虎',
                note: '上海市普陀区金沙江路 1516 弄'
              }]
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        computed: {

        },

    }

</script>

<style scoped>

</style>
