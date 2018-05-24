<template>
  <div>
    <div class="personal_detailed">
      <div class="personal_detailed_header title_style">个人信息</div>
      <div class="contain-center per_info" style="height:270px;">
        <table>
          <tr>
            <td>姓名</td>
            <td>张三</td>
            <td>公民身份证号码</td>
            <td>4201061198212081257</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>男</td>
            <td>出生日期</td>
            <td>1982年12月8日</td>
          </tr>
          <tr>
            <td>曾用名</td>
            <td>张三</td>
            <td>年龄</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>户籍所在地</td>
            <td>张三</td>
            <td>手机号1</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>原始发证地区</td>
            <td>张三</td>
            <td>手机号2</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>证件校验结果</td>
            <td colspan="3">张三</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="personal_detailed">
      <div class="personal_detailed_header title_style">配偶信息</div>
      <div class="contain-center peiou_info" style="height:270px;">
        <table>
          <tr>
            <td>姓名</td>
            <td>张三</td>
            <td>公民身份证号码</td>
            <td>4201061198212081257</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>男</td>
            <td>出生日期</td>
            <td>1982年12月8日</td>
          </tr>
          <tr>
            <td>曾用名</td>
            <td>张三</td>
            <td>年龄</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>户籍所在地</td>
            <td>张三</td>
            <td>手机号1</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>原始发证地区</td>
            <td>张三</td>
            <td>手机号2</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>证件校验结果</td>
            <td colspan="3">张三</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="personal_detailed live_info">
      <div class="personal_detailed_header title_style">居住信息</div>
      <div class="live_table">
        <table>
          <tr>
            <td>编号</td>
            <td>居住地址</td>
            <td>居住状况</td>
            <td>信息更新日期</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>男</td>
            <td>出生日期</td>
            <td>1982年12月8日</td>
          </tr>
          <tr>
            <td>曾用名</td>
            <td>张三</td>
            <td>年龄</td>
            <td>30岁</td>
          </tr>
          <tr>
            <td>户籍所在地</td>
            <td>张三</td>
            <td>手机号1</td>
            <td>30岁</td>
          </tr>
        </table>
      </div>
    </div>
  </div>   
</template>

<script>
    export default {
        data() {
            return { 
             
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
          basic_info(){
            this.$router.push('/totalInfo')
          }
        },
        computed: {

        },

    }

</script>

<style scoped>
  table{
    border: 1px solid #111;
    border-collapse: collapse;
    padding: 5px;
  }
  tr,td{
    border: 1px solid #111;
    padding: 10px;
    width: 270px;
    font-size: 14px;
  }
  .live_table table tr:nth-child(1) td,.per_info table tr td:nth-child(odd),.peiou_info table tr td:nth-child(odd){
    background: #ccc;
    font-weight: bold;
  }

  .contain-center{
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .totalInfo{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-container{
    height: auto;
    width: 75%;
    margin: 0 auto;
  }
  .el-header{
    background: #fff;
    margin-bottom: 10px;
  } 
  .el-header .el-row{
    padding: 15px 0;
  } 
  .el-select{
  }
  .el-main{
    padding: 0;
    margin-left: 20px;
    box-sizing:border-box;
  } 
  .personal_detailed{
    width: 100%;
    height: 310px;
    background: #fff;
    margin-bottom: 10px;
  }
  .live_info{
    height: auto;
  }
  .live_table{
     padding: 8px 0;
  }
  .live_table table{
    margin: 0 auto;
  } 
  .title_style{
    height: 40px;
    background: #ccc;
    padding:10px 20px;
    box-sizing:border-box;
  }
  .table_msg{
    width: 50%;
    float: left;
  }
  .table_left{
    padding: 1.5% 0 0 15%;
    box-sizing:border-box;
  }
  .table_right{
    padding: 1.5% 15% 0 0;
    box-sizing:border-box;
  } 
</style>
