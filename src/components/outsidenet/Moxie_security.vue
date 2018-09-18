<template>
  <div class="huifa">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack1">魔蝎科技（第三方数据查询）</span>>><span @click="goBack2">魔蝎科技查询结果</span>>>社保报告
      </div>
      <div v-if="cstatus===1" class="box">
              <div>
                  <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                      社保报告
                  </h3>
                  <div style="text-align: right;font-size: 10px">
                      报告编号：639672c0-8689-22e7-84c5-00163e1d50ad
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
                              <td>真实姓名：</td>
                              <td>{{basic_info.user_basic_info.real_name}}</td>
                              <td>性别：</td>
                              <td>{{basic_info.user_basic_info.sex}}</td>
                          </tr>
                          <tr>
                              <td>出生日期：</td>
                              <td>{{basic_info.user_basic_info.birth_day}}</td>
                              <td>民族：</td>
                              <td>{{basic_info.user_basic_info.nation}}</td>
                          </tr>
                          <tr>
                              <td>户籍性质：</td>
                              <td>{{basic_info.user_basic_info.household_registration}}</td>
                              <td>联系地址：</td>
                              <td>{{basic_info.user_basic_info.address}}</td>
                          </tr>
                          <tr>
                              <td>手机号码／电话：</td>
                              <td>{{basic_info.user_basic_info.phone}}</td>
                              <td>社保账号／编号：</td>
                              <td>{{basic_info.user_basic_info.social_security_no}}</td>
                          </tr>
                          <tr>
                              <td>人员状态：</td>
                              <td>{{basic_info.user_basic_info.personnel_status}}</td>
                              <td>参保单位：</td>
                              <td>{{basic_info.user_basic_info.insured_unit}}</td>
                          </tr>
                          <tr>
                              <td>累计缴纳金额（元）：</td>
                              <td>{{basic_info.user_basic_info.amount_sum}}</td>
                              <td>医保累计消费金额（元）：</td>
                              <td>{{basic_info.user_basic_info.money_sum}}</td>
                          </tr>
                          <tr>
                              <td>缴存状态：</td>
                              <td>{{basic_info.user_basic_info.pay_status}}</td>
                              <td>首次参保时间：</td>
                              <td>{{basic_info.user_basic_info.first_insured_date}}</td>
                          </tr>
                          <tr>
                              <td>缴存基数：</td>
                              <td>{{basic_info.user_basic_info.base_number}}</td>
                              
                          </tr>
                      </table>
                  </div>
              </div>


              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">1.2 用户基本信息校验</h5>
                  <div class="tabbox">
                      <table>
                          <tr>
                              <th style="width: 50%;">检查项</th>
                              <th>结果</th>
                          </tr>
                          <tr>
                              <td>身份证号码是否有效</td>
                              <td>{{basic_info.user_basic_info_check.card_decide}}</td>
                          </tr>

                      </table>
                  </div>
              </div>

              <div>
                  <h3 style="padding-left: 0px">
                      2.保险摘要
                  </h3>
              </div>

              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">2.1 保险摘要</h5>
                  <div class="tabbox">
                      <table>
                         <!--  <thead>
                          <th>魔蝎变量</th>
                          <th>医疗保险</th>
                          <th>养老保险</th>
                          <th>工伤保险</th>
                          <th>生育保险</th>
                          <th>失业保险</th>

                          </thead> -->
                          <tbody>

                          <tr>
                              <td>险种名称</td>
                              <td>{{society_details.insurance_name}}</td>
                              <td>缴存单位名称</td>
                              <td>{{society_details.corporation_name}}</td>
                          </tr>
                          <tr>
                              <td>累计缴纳金额(元)</td>
                              <td>{{society_details.amount_sum_2}}</td>
                              <td>累计缴纳月份</td>
                              <td>{{society_details.month_cnt}}</td>
                          </tr>
                          <tr>
                              <td>连续参保月数</td>
                              <td>{{society_details.month_cont}}</td>
                              <td>最近两年停缴月数</td>
                              <td>{{society_details.month_stop}}</td>
                          </tr>
                          <tr>
                              <td>最近两年停缴次数</td>
                              <td>{{society_details.stop_cnt}}</td>
                              <td>历史停缴月数</td>
                              <td>{{society_details.month_stop_all}}</td>
                          </tr>
                          <tr>
                              <td>历史停缴次数</td>
                              <td>{{society_details.stop_cnt_all}}</td>
                              <td>历史补缴次数</td>
                              <td>{{society_details.patch_cnt}}</td>
                          </tr>
                          <tr>
                              <td>6月社保缴纳不同单位数</td>
                              <td>{{society_details.corporation_name_cnt_6}}</td>
                              <td>12月社保缴纳不同单位数</td>
                              <td>{{society_details.corporation_name_cnt_12}}</td>
                          </tr>
                          <tr>
                              <td>24月社保缴纳不同单位数</td>
                              <td>{{society_details.corporation_name_cnt_24}}</td>
                          </tr>

                          </tbody>
                      </table>
                  </div>
              </div>

              <div>
                  <h3 style="padding-left: 0px">
                      3.医疗保险账单
                  </h3>
              </div>

              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">3.1 医疗保险缴存信息</h5>
                  <div class="tabbox">
                      <table>
                          <thead>
                              <th>魔蝎变量</th>
                              <th v-for="(val,key,index) in medical_insurance_pay.medical_insurance_type">{{key}}</th>
                          </thead>
                          <tbody>
                          <tr>
                              <td>保险名称</td>
                              
                              <td v-for="(val,key,index) in medical_insurance_pay.medical_insurance_type">{{val}}</td>
                              

                          </tr>
                          <tr>
                              <td>缴费基数（元）</td>
                              <td v-for="(val,key,index) in medical_insurance_pay.base_number">{{val}}</td>
                          </tr>
                          <tr>
                              <td>单位缴存金额（元）</td>
                              <td v-for="(val,key,index) in medical_insurance_pay.corporation_payment">{{val}}</td>
                          </tr>
                          <tr>
                              <td>个人缴费额（元）</td>
                              <td v-for="(val,key,index) in medical_insurance_pay.personal_payment">{{val}}</td>
                          </tr>
                          <tr>
                              <td>缴费状态标识</td>
                              <td v-for="(val,key,index) in medical_insurance_pay.status">{{val}}</td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              <h3 style="padding-left: 0px">
                  4.医疗保险消费明细
              </h3>
              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">4.1 医保消费摘要</h5>
                  <div class="tabbox">
                      <table>
                          <thead>
                          <tr>
                              <th>魔蝎变量</th>
                              <td v-for="(val,key,index) in medical_consumption_basic.month_money_sum">{{key}}</td>
                          </tr>
                          </thead>
                          <tr>
                              <td>消费金额（元）</td>
                              <td v-for="(val,key,index) in medical_consumption_basic.month_money_sum">{{val}}</td>
                          </tr>
                          <tr>
                              <td>消费次数</td>
                              <td v-for="(val,key,index) in medical_consumption_basic.medical_insurance_cnt">{{val}}</td>
                          </tr>
                          <tr>
                              <td>单笔最大消费（元）</td>
                              <td v-for="(val,key,index) in medical_consumption_basic.month_money_sum">{{val}}</td>
                          </tr>

                      </table>
                  </div>
              </div>

              <div class="table" style="padding-left: 0px">
                  <h5 class="h5">4.2 医保卡消费记录</h5>
                  <div class="tabbox">
                      <table>
                          <thead>
                          <tr>
                              <th>结算时间</th>
                              <th>结算金额（元）</th>
                              <th>医疗类别</th>
                              <th>医疗机构名称</th>
                          </tr>
                          </thead>
                          <tbody v-for="item in securities_report">
                              <tr>
                                  <td>{{item.settlemen_time}}</td>
                                  <td>{{item.money}}</td>
                                  <td>{{item.type}}</td>
                                  <td>{{item.organization_name}}</td>
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
              basic_info:'',
              society_details:'',
              medical_insurance_pay:'',
              medical_consumption_basic:'',
              securities_report:'',
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
            this.$axios.get('http://123.59.181.202:9990/api/v1/security',{
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
                  const basic_info=msgData[0].basic_info;
                  const insurance_summary=msgData[0].social_insurance_summary;
                  const insurance_bill=msgData[0].medical_insurance_bill;
                  const consumption_details=msgData[0].medical_consumption_details;

                  this.basic_info=basic_info,
                  this.society_details=insurance_summary.society_detail[0];
                  this.medical_insurance_pay=insurance_bill.medical_insurance_pay;
                  this.medical_consumption_basic=consumption_details.medical_consumption_basic;
                  this.securities_report=consumption_details.medical_consumption_record.securities_report;
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
