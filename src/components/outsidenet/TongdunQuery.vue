<template>
  <div>
    <div class="huifaQuery">
      <div class="huifaQuery_header">查询结果</div>
      <div class="detail_list">
          <div class="detail_list_title">归属地解析</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left">身份证所属地：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">IP所属地：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">WIFI所属地：:</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">基站所属地：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">银行卡所属地：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">手机所属地：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">身份证归属省份：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">身份证归属城市：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">手机归属省份：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">手机归属城市：</div>
                <div class="case_detail_right"></div>
              </div>
            </div>
          </div> 
      </div>


      <div class="detail_list">
          <div class="detail_list_title">贷前风险情况</div>
          <table>
            <tr>
              <th  width="150"></th>
              <th  width="150">检查项目</th>
              <th  width="150">分险等级</th>
              <th >备注</th>
            </tr>
            <tr >
              <td>个人基本信息核查</td>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>风险信息扫描</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td rowspan="3">多平台借贷申请检测</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr >
              <td>关联人信息扫描</td>
              <td colspan="3"></td>
            </tr>

            <tr >
              <td>多平台借贷负债检测</td>
              <td colspan="3"></td>
            </tr>

            <tr>
              <td>客户行为检测</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
      </div>
    
    </div>
  </div>   
</template>

<script>
    var msgData=localStorage.getItem('msgData');
    var newmsgData=eval('('+msgData+')');
    var risk_items_t=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
    console.log(risk_items_t.length)
    var risk_items_d=[];
    
   

    export default {

        data() {
            return { 
             tableData:[{
              num:'1',
              num1:'1',
              num2:'1',
              num3:'1',
              num4:'1',
              num5:'1',
             },{
              num:'2',
              num1:'1',
              num2:'1',
              num3:'1',
              num4:'1',
              num5:'1',
             }],
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
    table{
      width: 100%;
      border: 1px solid #ccc;
      border-collapse:collapse;
    }
    th{
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      background: #fceadc;
    }
    td{
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      text-align: center;
    }
    tr,th,td{
      border: 1px solid #ccc;
    }
    .huifaQuery{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      min-height: 83.5vh;
    }
    .huifaQuery_header{
      width: 100%;
      height:70px;
      background: #fff;
      line-height: 70px;
      padding-left: 10px; 
      color: #000;
      font-size: 20px;
      text-align: center;
      font-weight: bold; 
    }
    .laolai_detail div:nth-child(1){
      float: left;
    }
    .laolai_detail div:nth-child(2){
      float: right;
    }
    .detail_list{
      margin-bottom: 20px;
    }
    .detail_list_title{
      height: 36px;
      line-height: 36px;
      background: #f3943d;
      text-align: center;
      color: #fff;
    }
    .laolai_detail{
      height: 50px;
      line-height: 50px;
      background: #e4e4e4;
      text-align: center;
      color: #000;
      padding:0 20px;
      font-weight: bold;
    }
    .el-table-column{
      background: red;
    }
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      border: 1px solid #ddd;
    }
    .case_info_header{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 10px; 
      color: #999;
      font-size: 14px;
      font-weight: bold; 
    }
    .case_detail{
      height: auto;
      min-height: 36px;
      border-top: 1px solid #ddd;
    }
    .case_detail_left,.case_detail_right{
      height: auto;
      min-height: 36px;
      line-height: 36px;
      font-weight: bold;
      display: inline-block;
      vertical-align: top;
      padding-left: 10px;
    }
    .case_detail_left{
      width: 20%;
      height: auto;
    }
    .case_detail_right{
      width: 75%;
      height: auto;
    }
</style>
