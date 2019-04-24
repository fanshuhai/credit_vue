<template>
  <div>
    <div class="huifaQuery">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack2">魔蝎科技（第三方数据查询）</span>>>魔蝎科技查询结果
      </div>
      <div class="qrcode_position">
        <canvas id="qrcode"></canvas>
        <div>手机扫一扫，登录授权查询</div>
      </div>
      <div class="huifaQuery_header">魔蝎数据认证</div>

      <div class="detail_list">
          <div class="detail_list_title">资产信息验证</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
             <!--  <div class="case_detail">
                <div class="netsliver case_detail_left ">网银</div>
                <div class="case_detail_right email">邮箱账单</div>
              </div> -->
              <div class="case_detail">
                <div class="case_detail_left fund">公积金
                    <div v-if="reportStatus_1===1" @click="goFund"  class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_1===2" class="noRepotr_details">用户暂未授权</div>
                </div>
                <div class="case_detail_right societysecurity">社保
                    <div v-if="reportStatus_2===1" @click="goSecurity" class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_2===2" class="noRepotr_details">用户暂未授权</div>
                </div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left carinsurance">车险
                    <div v-if="reportStatus_3===1" @click="goCarinsurance" class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_3===2" class="noRepotr_details">用户暂未授权</div>
                </div>
                <!-- <div class="case_detail_right lifeinsurance">寿险</div> -->
              </div>
             
            </div>
          </div> 
      </div>
      
      <div class="detail_list">
          <div class="detail_list_title">消费信息验证</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <!-- <div class="case_detail_left zhifubao">支付宝</div> -->
                <div class="case_detail_right taobao">淘宝
                    <div v-if="reportStatus_4===1" @click="goTaobao" class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_4===2" class="noRepotr_details">用户暂未授权</div>
                </div>
              </div>

             <!--  <div class="case_detail">
                <div class="case_detail_left jindong">京东</div>
                <div ></div>
              </div> -->
             
            </div>
          </div> 
      </div>
      
      <div class="detail_list">
          <div class="detail_list_title">社交信息验证</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left operator">运营商
                    <div v-if="reportStatus_5===1" @click="goCarrier" class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_5===2" class="noRepotr_details">用户暂未授权</div>
                </div>
                <!-- <div class="case_detail_right qq">QQ</div> -->
              </div>
              <!-- <div class="case_detail">
                <div class="case_detail_left maimai">脉脉</div>
                <div></div>
              </div> -->
             
            </div>
          </div> 
      </div>
      
      <div class="detail_list">
          <div class="detail_list_title">身份信息验证</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left xuexin">学信
                    <div v-if="reportStatus_6===1" @click="goChsi" class="repotr_details">报告详情</div>
                    <div v-if="reportStatus_6===2" class="noRepotr_details">用户暂未授权</div>
                </div>
                <div></div>
              </div>
             
            </div>
          </div> 
      </div>
      
     <!--  <div class="detail_list">
          <div class="detail_list_title">法院查询</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left dishonestpeople">法院失信人</div>
                <div class="case_detail_right executionpeople">法院被执行人</div>
              </div>
             
            </div>
          </div> 
      </div> -->
      
      <!-- <div class="detail_list">
          <div class="detail_list_title">个人征信</div>
          <div style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left tax">个人所得税</div>
                <div></div>
              </div>
             
            </div>
          </div> 
      </div> -->
    
    </div>
  </div>   
</template>

<script>
    import QRCode from 'qrcode';
    export default {
        data() {
            return {
              reportStatus_1:'',
              reportStatus_2:'',
              reportStatus_3:'',
              reportStatus_4:'',
              reportStatus_5:'',
              reportStatus_6:'',

            }
        },
        methods:{
          goBack(){
            this.$router.push('/');
          },
          goBack2(){
            this.$router.push('/moxie');
          },
          goFund(){
            this.$router.push('/moxieFund');
          },
          goSecurity(){
            this.$router.push('/moxieSecurity');
          },
          goCarinsurance(){
            this.$router.push('/moxieCarinsurance');
          },
          goTaobao(){
            this.$router.push('/moxieTaobao');
          },
          goCarrier(){
            this.$router.push('/moxieCarrier');
          },
          goChsi(){
            this.$router.push('/moxieChsi');
          },
          // 二维码
          useqrcode(cardId,name,phone,admin){
            this.queryDetail='123.59.181.202:8888/moxie/build/index.html?apiKey=2ec828c5f54a4d36a181667de2c115eb&userId='+cardId+'|'+name+'|'+phone+'|'+admin;
            // this.queryDetail='http://www.baidu.com?apiKey=2ec828c5f54a4d36a181667de2c115eb&userId='+cardId+'|'+name+'|'+phone+'|'+admin;
            let qrcode=document.getElementById('qrcode');
            QRCode.toCanvas(qrcode,this.queryDetail,function(error){
                if(error){
                  console.log(error)
                }else{
                  console.log('success');
                }
            })
          },
        },
        mounted() {
            // let msgData=localStorage.getItem('msgData');
            let name=localStorage.getItem('name');
            let phone=localStorage.getItem('phone');
            let cardId=localStorage.getItem('cardId');
            let admin=sessionStorage.getItem('ms_username');
            // let newmsgData=eval('('+msgData+')');
            // let risk_items_t=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
            // let risk_items_d=[];
            //生产二维码
            this.useqrcode(cardId,name,phone,admin);
            
        },
        created(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get(this.HOST+'/api/v1/moxieReportNum',{
              params:{
                account_name:localStorage.getItem('name'),
                id_number:localStorage.getItem('cardId'),
                account_mobile:localStorage.getItem('phone'),
              }
            })
            .then(res=>{
              // console.log(res.data);
              if(res.data==='登录超时'){
                    this.$message('登录超时，请重新登录');
                    this.$router.push('/login');
              }else if(res.data===''||res.data===null||res.data==='{}'){
                this.$message('暂无信息');
              }else{
                // console.log(res.data);
                //公积金
                if(res.data.mx_fund==0){
                  this.reportStatus_1=2;
                }else{
                  this.reportStatus_1=1;
                }
                //车险
                if(res.data.mx_insurance==0){
                  this.reportStatus_2=2;
                }else{
                  this.reportStatus_2=1;
                }
                //社保
                if(res.data.mx_security==0){
                  this.reportStatus_3=2;
                }else{
                  this.reportStatus_3=1;
                }
                //淘宝
                if(res.data.mx_taobao==0){
                  this.reportStatus_4=2;
                }else{
                  this.reportStatus_4=1;
                }
                //运营商
                if(res.data.mx_carrier==0){
                  this.reportStatus_5=2;
                }else{
                  this.reportStatus_5=1;
                }
                //学信
                if(res.data.mx_chsi==0){
                  this.reportStatus_6=2;
                }else{
                  this.reportStatus_6=1;
                }
              }
            })
            .catch(error=>{
              alert('暂无服务');
              // console.log('22222'+error);
              //   console.log('111111'+error.response);
            })
        }
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
      position: relative;
    }
    .huifaQuery_header{
      width: 100%;
      height:150px;
      background: #58b5eb;
      line-height: 150px;
      padding-left: 10px; 
      color: #fff;
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
      border: 1px solid #ddd;
    }
    .detail_list_title{
      height: 36px;
      line-height: 36px;
      /*background: #f3943d;*/
      color: #000;
      padding-left: 20px;
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
      /*border: 1px solid #ddd;*/
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
      min-height: 50px;
      border-top: 1px solid #ddd;
      position: relative;
    }
    .case_detail_left,.case_detail_right{
      box-sizing: border-box;
      height: auto;
      min-height: 50px;
      line-height: 50px;
      font-weight: bold;
      display: inline-block;
      vertical-align: top;
      padding-left: 60px;
      position: relative;
      /*cursor: pointer;*/
    }
    /*.case_detail_left:hover,.case_detail_right:hover{
      background: #eee;
    }*/
    .case_detail_left{
      width: 48%;
      height: auto;
      border-right: 1px solid #ccc;
    }
    .case_detail_right{
      width: 48%;
      height: auto;
    }
    .repotr_details{
      position: absolute;
      right: 0;
      top: 0;
      width: 20%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #3c88f6;
      font-weight: 100;
      font-size: 14px;
      cursor: pointer;
    }
    .noRepotr_details{
      position: absolute;
      right: 0;
      top: 0;
      width: 20%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: 100;
      font-size: 14px;
    }
    .netsliver:before{
      background: url(../../assets/img/moxie/netsliver.png);
    }
    .email:before{
      background: url(../../assets/img/moxie/email.png);
    }
    .fund:before{
      background: url(../../assets/img/moxie/fund.png);
    }
    .societysecurity:before{
      background: url(../../assets/img/moxie/societysecurity.png);
    }
    .carinsurance:before{
      background: url(../../assets/img/moxie/carinsurance.png);
    }
    .lifeinsurance:before{
      background: url(../../assets/img/moxie/lifeinsurance.png);
    }
    .zhifubao:before{
      background: url(../../assets/img/moxie/zhifubao.png);
    }
    .taobao:before{
      background: url(../../assets/img/moxie/taobao.png);
    }
    .jindong:before{
      background: url(../../assets/img/moxie/jindong.png);
    }
    .operator:before{
      background: url(../../assets/img/moxie/operator.png);
    }
    .qq:before{
      background: url(../../assets/img/moxie/qq.png);
    }
    .maimai:before{
      background: url(../../assets/img/moxie/maimai.png);
    }
    .xuexin:before{
      background: url(../../assets/img/moxie/xuexin.png);
    }
    .dishonestpeople:before{
      background: url(../../assets/img/moxie/dishonestpeople.png);
    }
    .executionpeople:before{
      background: url(../../assets/img/moxie/executionpeople.png);
    }
    .tax:before{
      background: url(../../assets/img/moxie/tax.png);
    }
    .case_detail_left:before, .case_detail_right:before{
      content: '';
      width: 50px;
      height: 50px;
      background-size: 40px 40px; 
      background-repeat:no-repeat; 
      background-position: center; 
      display: inline-block;
      position: absolute;
      left: 0px;
    }
    .qrcode_position{
      position: absolute;
      right: 10px;
      width: 160px;
    }
    .qrcode_position div{
      font-size: 12px;
      height: 14px;
      line-height: 14px;
      font-family: '微软雅黑';
      text-align: center;
    }
    #qrcode{
      width: 120px !important;
      height: 120px !important;
      margin: 5px 20px 0;
    }
    .huifa_header{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc; 
      margin: 0 auto;
    }
    .huifa_header span{
      cursor: pointer;
    }
    .huifa_header span:hover{
      color: rgb(22,155,213)
    }
</style>
