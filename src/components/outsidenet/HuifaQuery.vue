<template>
  <div>
    <div class="huifaQuery">
      <div class="huifaQuery_header">查询结果</div>
      <div class="detail_list">
          <div class="detail_list_title">个人工商名单</div>
          <div class="laolai_detail">
              <div>任职信息</div>
              <div>数据来源：汇法网</div>
          </div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_info_header">任职信息1</div>
              <div class="case_detail">
                <div class="case_detail_left">注册号：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">法定代表人标志：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">职务:</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">企业名称：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">首席代表标志：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">登记机关：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">任职企业工商信息：</div>
                <div class="case_detail_right"></div>
              </div>
            </div>
          </div> 
      </div>




      <div class="detail_list">
          <div class="detail_list_title">个人司法信息</div>
          <div class="laolai_detail">
              <div>执行公开信息</div>
              <div>数据来源：汇法网</div>
          </div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_info_header">任职信息1</div>
              <div class="case_detail">
                <div class="case_detail_left">注册号：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">法定代表人标志：</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">职务:</div>
                <div class="case_detail_right"></div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">企业名称：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">首席代表标志：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">登记机关：</div>
                <div class="case_detail_right"></div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">任职企业工商信息：</div>
                <div class="case_detail_right"></div>
              </div>
            </div>
          </div> 
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
             tableData1:[{
              num:'1',
              num1:'1',
              num2:'1',
              num3:'1',
              num4:'1',
              num5:'1',
             },{
              num:'2',
              num1:'2',
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
    .header_info{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 20px;
      box-sizing: border-box; 
      -webkit-box-sizing:border-box;
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
