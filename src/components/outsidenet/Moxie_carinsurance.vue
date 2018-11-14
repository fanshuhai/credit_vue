<template>
  <div class="huifa">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack1">魔蝎科技（第三方数据查询）</span>>><span @click="goBack2">魔蝎科技查询结果</span>>>车险报告
      </div>
      <div v-if="cstatus===1" class="box">
              <div>
                  <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                      车险报告
                  </h3>
                  <div style="text-align: right;font-size: 10px">
                      报告编号：{{car_basic.mapping_id}}
                  </div>
              </div>
              <div>
                  <h3 style="padding-left: 0px">
                      1.基本信息
                  </h3>
              </div>

              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">1.1 用户基本信息</h5>
                  <div class="tabbox">
                      <table>
                          <tr>
                              <td>保单号：</td>
                              <td>{{car_basic.policy_num}}</td>
                              <td>被保险人：</td>
                              <td>{{car_basic.insurant}}</td>
                          </tr>
                          <tr>
                              <td>投保人：</td>
                              <td>{{car_basic.applicant}}</td>
                              <td>身份证号：</td>
                              <td>{{car_basic.idcard_num}}</td>
                          </tr>
                          <tr>
                              <td>保险公司：</td>
                              <td>{{car_basic.insurance_company}}</td>
                              <td>险种名字：</td>
                              <td>{{car_basic.insurance_name}}</td>
                          </tr>
                          <tr>
                              <td>被保险车牌号：</td>
                              <td>{{car_basic.plate_num}}</td>
                              <td>保险生效起始时间：</td>
                              <td>{{car_basic.insurance_start_date}}</td>
                          </tr>
                          <tr>
                              <td>保险有效终止时间：</td>
                              <td>{{car_basic.insurance_end_date}}</td>
                              <td>汽车的厂牌和型号：</td>
                              <td>{{car_basic.brand_model}}</td>
                          </tr>
                          <tr>
                              <td>汽车发动机号：</td>
                              <td>{{car_basic.engineer_num}}</td>
                              <td>汽车车架号：</td>
                              <td>{{car_basic.vehicle_frame_num}}</td>
                          </tr>
                          <tr>
                              <td>核定载重质量：</td>
                              <td>{{car_basic.approved_load}}</td>
                              <td>核定座位：</td>
                              <td>{{car_basic.approved_passengers_capacity}}</td>
                          </tr>
                          <tr>
                              <td>车辆类型：</td>
                              <td>{{car_basic.vehicle_type}}</td>
                              <td>车辆使用性质：</td>
                              <td>{{car_basic.use_character}}</td>
                          </tr>
                          <tr>
                              <td>保单状态：</td>
                              <td>{{car_basic.insurance_status}}</td>
                              <td>保单总保额：</td>
                              <td>{{car_basic.insurance_amount}}</td>
                          </tr>
                          <tr>
                              <td>保单总保费：</td>
                              <td>{{car_basic.insurance_premium}}</td>
                              <td>已支付保费：</td>
                              <td>{{car_basic.paid_insurance_premium}}</td>
                          </tr>
                          <tr>
                              <td>欠缴保费金额：</td>
                              <td>{{car_basic.unPaid_insurance_premium}}</td>
                              <td>保费支付日期：</td>
                              <td>{{car_basic.payment_date}}</td>
                          </tr>

                          <tr>
                              <td>支付方式</td>
                              <td colspan="3">{{car_basic.mode_of_payment}}</td>
                          </tr>
                      </table>
                  </div>
              </div>

              <div>
                  <h3 style="padding-left: 0px">
                      2.承保险种
                  </h3>
              </div>

              <div v-for="(car_xianzhong,index) in car_xianzhongs" class="table" style="padding-left: 0px">
                  <h5 class="h5">2.{{index+1}}{{car_xianzhong.conditions}}</h5>
                  <div class="tabbox">
                      <table>
                          <tbody>

                          <tr>
                              <td>承保险种：</td>
                              <td>{{car_xianzhong.conditions}}</td>
                              <td>保单号：</td>
                              <td>{{car_xianzhong.policy_num}}</td>
                              <td>保险金额：</td>
                              <td>{{car_xianzhong.insurance_amount}}</td>
                              <td>保费金额：</td>
                              <td>{{car_xianzhong.insurance_premium}}</td>
                          </tr>
                          <tr>
                              <td>保险公司缩写：</td>
                              <td>{{car_xianzhong.insurance_company}}</td>
                              <td>实际支付金额：</td>
                              <td>{{car_xianzhong.premiums_paid}}</td>
                              <td>承保险种费率系数：</td>
                              <td>{{car_xianzhong.premium_coefficient}}</td>
                              <td>费率浮动原因：</td>
                              <td>{{car_xianzhong.premium_floating_reason}}</td>
                          </tr>

                          </tbody>
                      </table>
                  </div>
              </div>

              <div>
                  <h3 style="padding-left: 0px">
                      3.出险记录
                  </h3>
              </div>

              <div v-for="(car_jilu,index) in car_jilus" class="table" style="padding-left: 0px">
                  <h5 class="h5">3.{{index+1}}{{car_jilu.insurance_name}}</h5>
                  <div class="tabbox">
                      <table>
                          <tbody>
                              <tr>
                                  <td>保险公司缩写：</td>
                                  <td>{{car_jilu.insurance_company}}</td>
                                  <td>保险名字：</td>
                                  <td>{{car_jilu.insurance_name}}</td>
                                  <td>被保险人：</td>
                                  <td>{{car_jilu.insurant}}</td>
                                  <td>车牌号：</td>
                                  <td>{{car_jilu.plate_num}}</td>
                              </tr>
                              <tr>
                                  <td>厂牌型号：</td>
                                  <td>{{car_jilu.brand_model}}</td>
                                  <td>保险单号：</td>
                                  <td>{{car_jilu.policy_num}}</td>
                                  <td>出险时间：</td>
                                  <td>{{car_jilu.damage_time}}</td>
                                  <td>报案时间：</td>
                                  <td>{{car_jilu.report_time}}</td>
                              </tr>
                              <tr>
                                  <td>出险原因：</td>
                                  <td>{{car_jilu.cause_of_damage}}</td>
                                  <td>出险情况详细描述：</td>
                                  <td>{{car_jilu.damage_desc}}</td>
                                  <td>驾驶员姓名：</td>
                                  <td>{{car_jilu.driver_name}}</td>
                                  <td>出险地址：</td>
                                  <td>{{car_jilu.damage_address}}</td>
                              </tr>
                              <tr>
                                  <td>报案人：</td>
                                  <td>{{car_jilu.reportor_name}}</td>
                                  <td>联系人：</td>
                                  <td>{{car_jilu.linker_name}}</td>
                                  <td>结案进程：</td>
                                  <td>{{car_jilu.progress}}</td>
                                  <td>案件号：</td>
                                  <td>{{car_jilu.case_num}}</td>
                              </tr>

                          </tbody>
                      </table>
                  </div>
              </div>
      </div>

      <div v-if="cstatus===2" class="nomseg">
        <span>查询成功，暂无数据</span>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
           
            return {
              car_basic:'',
              car_xianzhongs:'',
              car_jilus:'',
              cstatus:'',
            }
        },
        methods:{
          goBack(){
            this.$router.push('/moerCredit');
          },
          goBack1(){
            this.$router.push('/moxie');
          },
          goBack2(){
            this.$router.push('/moxieQuery');
          },

        },
        computed: {

        },
        mounted(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get(this.HOST+'/api/v1/insurance',{
              params:{
                account_name:localStorage.getItem('name'),
                id_number:localStorage.getItem('cardId'),
                account_mobile:localStorage.getItem('phone'),
              },
            })
            .then(res=>{
              console.log(res.data);
              if(res.data==='登录超时'){
                    this.$message('登录超时，请重新登录');
                    this.$router.push('/login');
              }else if(res.data===''||res.data===null||res.data==='{}'){
                this.$message('暂无信息');
              }else{
                let msgData=res.data;
                if(msgData!=="undefined"){
                  const carinfo_basic=msgData[0].insurance_one[0].insurancePolicyBaseInfo;
                  const carinfo_xianzhongs=msgData[0].insurance_one[0].vehicleInsuranceDetailInfos;
                  const carinfo_jilu=msgData[0].insurance_one[0].insuranceDamageInfos; 

                  this.car_basic=carinfo_basic;
                  this.car_xianzhongs=carinfo_xianzhongs;
                  this.car_jilus=carinfo_jilu;
                  this.cstatus=1;
           
                }else{
                  this.cstatus=2;
                }
                

              } 
            })
            .catch(error=>{
              alert('暂无服务');
              console.log(error);
                console.log(error.response);
            })
        }
    }

</script>

<style scoped>
  .huifa{
    min-height: 92.5vh;
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
    background: #fff;
    box-sizing: border-box;
  }
  .huifa_header{
    width: 70%;
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
  .huifa_main{
    width: 40%;
    height: 400px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button{
      background:#3c88f6;
      height: 45px;
      width: 330px;
      border-radius:10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 40px;
      padding-left: 40px;
  }
  .wrapper_button{
    text-align:right;
    padding-right:20px;
  }

  
   h1, h2, h3, h4, h5, h6, table, tr, td {
      padding: 0;
      padding-left: 10px;
      margin: 0;
      box-sizing: border-box;
      font-size: 14px;
      white-space: nowrap;
      margin: 0 auto;
  }

  .box {
      width: 70%;
      margin: 0 auto;
      padding-bottom: 20px;
  }

  .table {
      margin: 0 auto 30px;
  }

  .tabbox {
      padding: 0;
      width: 100%;
      overflow-x: scroll;
  }

  table {
      width: 100%;
      border: 1px solid #ccc;
      border-collapse: collapse;
      margin: 0 auto;
  }

  .center {
      text-align: center;
  }

  .left {
      padding-left: 10px;
      text-align: left;
  }

  th {
      text-align: center;
      height: 30px;
      border-right: 1px solid #ccc;
  }

  .th {

      background: rgb(70, 140, 180);
  }

  table td {
      white-space: normal;
  }

  td {
      height: 30px;
      border: 1px solid #ccc;
  }

  tr:nth-child(even) {
      background: rgb(235, 235, 235)
  }

  .sort {
      height: 30px;
      line-height: 30px;
      width: 100%;
      margin: 0 auto;
      font-size: 12px;
      color: rgb(119, 119, 119);
      text-align: left;
      font-weight: 100;
      padding: 0;
  }

  h3 {
      font-size: 18px;
      font-weight: 700;
      width: 100%;
      /*margin: 30px auto;*/
  }

  .dropdown-menu {
      z-index: 10000;
  }

  .tips {
      position: fixed;
      left: 0px;
      top: -48px;
      width: 100%;
      font-size: 20px;
      color: white;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #00796B;

      transition: top 0.4s;
  }

  @media screen and (max-width: 1500px){

    .el-button{
        height: 45px;
        width: 240px;
        border-radius:4px; 
        font-size: 18px;
        letter-spacing: 40px;
        padding-left: 40px;
    }
    .wrapper_button{
      padding-right:10px;
    }
  }
</style>
