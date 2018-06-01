<template>
    <div class="queryResult">
      <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content">
                    <span>选择查询机构：</span>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <span>姓名：</span>
                  <el-input style="width:150px" placeholder="请输入内容" v-model="input1" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>身份证号：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input2" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>手机号码：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input3" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content">
                  <el-button @click='' type="success">查询</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <div class="personal_msg">
              <div class="personal_msg_header title_style">个人信息</div>
              <div class="table_msg table_left">
                <table>
                  <tr>
                    <td>基本信息</td>
                    <td @click="basic_info">{{user_basic}}</td>
                  </tr>
                  <tr>
                    <td>学历</td>
                    <td @click="xueli_info">{{xueli}}</td>
                  </tr>
                  <tr>
                    <td>任职</td>
                    <td>{{renzhi_now}}</td>
                  </tr>
                </table>
              </div>
              <div class="table_msg table_right">
                <table>
                  <tr>
                    <td>资格证书</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>偿付能力</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>投资</td>
                    <td>{{touzi_now}}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="personal_msg xindai_msg" style="height:160px">
              <div class="personal_msg_header title_style">信贷信息</div>
              <div class="table_msg table_left">
                <table>
                  <tr>
                    <td>银行信贷</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>担保</td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div class="table_msg table_right">
                <table>
                  <tr>
                    <td>信用卡</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div> 
            <div class="personal_msg sifa_msg" style="height:130px">
              <div class="personal_msg_header title_style">司法信息</div>
              <div class="table_msg table_left">
                <table>
                  <tr>
                    <td>法律案件详情</td>
                    <td @click="lawCasedetail">{{lawDetail}}</td>
                  </tr>
                </table>
              </div>
            </div> 

            <div class="personal_msg fanqizha_msg" style="height:160px">
              <div class="personal_msg_header title_style">反欺诈信息</div>
              <div class="table_msg table_left">
                <table>
                  <tr>
                    <td>失信黑名单</td>
                    <td @click="breach_B">{{shixinB}}</td>
                  </tr>
                  <tr>
                    <td>高风险</td>
                    <td @click="hight_risk">{{hightrisk}}</td>
                  </tr>
                </table>
              </div>
              <div class="table_msg table_right">
                <table>
                  <tr>
                    <td>网贷黑名单</td>
                    <td @click="net_creit">{{netcreit}}</td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="personal_msg gonggong_msg" style="height:250px">
              <div class="personal_msg_header title_style">公共信息</div>
              <div class="table_msg table_left">
                <table>
                  <tr>
                    <td>网购消费</td>
                    <td @click="netMoney">{{taobao}}</td>
                  </tr>
                  <tr>
                    <td>社保</td>
                    <td>{{socialsecurity}}</td>
                  </tr>
                  <tr>
                    <td>寿险</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>水电</td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div class="table_msg table_right">
                <table>
                  <tr>
                    <td>运营商（电信）</td>
                    <td @click="operators">{{operator}}</td>
                  </tr>
                  <tr>
                    <td>公积金</td>
                    <td @click="gongjijindetail">{{gongjijin}}</td>
                  </tr>
                  <tr>
                    <td>车险</td>
                    <td>{{insurance}}</td>
                  </tr>
                  <tr>
                    <td>燃气</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div> 
          </el-main>
      </el-container>
    </div>
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
   // console.log(newmsgData);
    if(newmsgData.judicial.fxcontent.shixing===''||newmsgData.judicial.fxcontent.shixing===null||newmsgData.judicial.fxcontent.shixing==='{}'){
        var shixinBlack='未命中';
    }else{
        var shixinBlack='命中';
    }
    if(newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items.length>0){
      var netBlacklist='命中';
      var hightrisklist='命中';
    }else{
      var netBlacklist='未命中';
      var hightrisklist='未命中';
    }
    const yunyingshang={};
    for(let i=0;i<newmsgData.mx_carrier.report.length;i++){
      if(newmsgData.mx_carrier.report[i].key=="source_name_zh" ){
        yunyingshang.source_name_zh=newmsgData.mx_carrier.report[i].value;
      }
      if(newmsgData.mx_carrier.report[i].key=="data_gain_time" ){
        yunyingshang.data_gain_time=newmsgData.mx_carrier.report[i].value;
      }
      if(newmsgData.mx_carrier.report[i].key=="update_time" ){
        yunyingshang.update_time=newmsgData.mx_carrier.report[i].value;
      }
    }
    for(let i=0;i<newmsgData.mx_carrier.user_basic.length;i++){
      if(newmsgData.mx_carrier.user_basic[i].key=="name" ){
        yunyingshang.name=newmsgData.mx_carrier.user_basic[i].value;
      }
      if(newmsgData.mx_carrier.user_basic[i].key=="id_card" ){
        yunyingshang.id_card=newmsgData.mx_carrier.user_basic[i].value;
      }
      if(newmsgData.mx_carrier.user_basic[i].key=="gender" ){
        yunyingshang.gender=newmsgData.mx_carrier.user_basic[i].value;
      }
      if(newmsgData.mx_carrier.user_basic[i].key=="age" ){
        yunyingshang.age=newmsgData.mx_carrier.user_basic[i].value;
      }
      if(newmsgData.mx_carrier.user_basic[i].key=="constellation" ){
        yunyingshang.constellation=newmsgData.mx_carrier.user_basic[i].value;
      }
      if(newmsgData.mx_carrier.user_basic[i].key=="native_place" ){
        yunyingshang.native_place=newmsgData.mx_carrier.user_basic[i].value;
      }
    }
    for(let i=0;i<newmsgData.mx_carrier.cell_phone.length;i++){
      if(newmsgData.mx_carrier.cell_phone[i].key=="reg_time" ){
        yunyingshang.reg_time=newmsgData.mx_carrier.cell_phone[i].value;
      }
      if(newmsgData.mx_carrier.cell_phone[i].key=="in_time" ){
        yunyingshang.in_time=newmsgData.mx_carrier.cell_phone[i].value;
      }
      if(newmsgData.mx_carrier.cell_phone[i].key=="package_name" ){
        yunyingshang.package_name=newmsgData.mx_carrier.cell_phone[i].value;
      }
      if(newmsgData.mx_carrier.cell_phone[i].key=="bill_certification_day" ){
        yunyingshang.bill_certification_day=newmsgData.mx_carrier.cell_phone[i].value;
      }
      if(newmsgData.mx_carrier.cell_phone[i].key=="phone_attribution" ){
        yunyingshang.phone_attribution=newmsgData.mx_carrier.cell_phone[i].value;
      }
      if(newmsgData.mx_carrier.cell_phone[i].key=="available_balance" ){
        yunyingshang.available_balance=newmsgData.mx_carrier.cell_phone[i].value;
      }
    }
    console.log(yunyingshang)
    export default {
        data() {
            return { 
              input1:'',
              input2:'',
              input3:'',
              user_basic:'姓名：'+newmsgData.basicInfo.name+',年龄：'+newmsgData.basicInfo.age+',手机号码：'+newmsgData.basicInfo.phone,

              xueli:newmsgData.mx_chsi[0].studentInfo_list[0].level+','+newmsgData.mx_chsi[0].studentInfo_list[0].school_name+','+newmsgData.mx_chsi[0].studentInfo_list[0].specialty,

              renzhi_now:newmsgData.industry.gscontent.renzhi_now[0].position+','+newmsgData.industry.gscontent.renzhi_now[1].position+','+newmsgData.industry.gscontent.renzhi_now[0].entname,

              netcreit:netBlacklist,
              touzi_now:'',
              lawDetail:newmsgData.judicial.fxcontent.zhixing[0].court,
              shixinB:shixinBlack,
              hightrisk:hightrisklist,
              gongjijin:newmsgData.mx_fund[0].user_basic_info.description+','+newmsgData.mx_fund[0].user_basic_info.corporation_name+','+newmsgData.mx_fund[0].user_basic_info.compay_type,
              operator:yunyingshang.source_name_zh+','+yunyingshang.data_gain_time+','+yunyingshang.update_time,
              socialsecurity:newmsgData.mx_security[0].basic_info.user_basic_info.real_name+','+newmsgData.mx_security[0].basic_info.user_basic_info.household_registration+','+newmsgData.mx_security[0].basic_info.user_basic_info.social_security_no,
              taobao:newmsgData.mx_taobao[0].basic_info.user_and_account_basic_info.taobao_name+','+newmsgData.mx_taobao[0].basic_info.user_and_account_basic_info.taobao_email+','+newmsgData.mx_taobao[0].basic_info.user_and_account_basic_info.taobao_vip_count,

              insurance:newmsgData.mx_insurance[0].insurance_one[0].insurancePolicyBaseInfo.plate_num+','+newmsgData.mx_insurance[0].insurance_one[0].insurancePolicyBaseInfo.insurance_name+','+newmsgData.mx_insurance[0].insurance_one[0].insurancePolicyBaseInfo.brand_model,
              options: [
                {
                  value: '选项1',
                  label: '摩尔征信'
                },
                 {
                  value: '选项2',
                  label: '汇法网'
                }, {
                  value: '选项3',
                  label: '魔蝎'
                }, {
                  value: '选项4',
                  label: '同盾'
                }, {
                  value: '选项5',
                  label: '鹏元'
                },
                 {
                  value: '选项6',
                  label: '国政通'
                }, 
                {
                  value: '选项7',
                  label: '商汤'
                }, {
                  value: '选项8',
                  label: '全部'
                }
              ],
              value:'',
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
          basic_info(){
            this.$router.push({path:'/perInfoBasic'});
          },
          xueli_info(){
            this.$router.push({path:'/xueli'});    
          },
          hight_risk(){
            this.$router.push({path:'/highrisk_list'});
          },
          net_creit(){
            this.$router.push({path:'/netcredit_Blacklist'});
          },
          breach_B(){
            this.$router.push({path:'/breach_Blacklist'});
          },
          lawCasedetail(){
            this.$router.push('/lawCasedetail')
          },
          gongjijindetail(){
            this.$router.push('/gongjijin')
          },
          netMoney(){
            this.$router.push('/onlineshopping')
          },
          operators(){
            this.$router.push('/yunyingshang')
          }
        },
        computed: {

        },
        monted:{

        }

    }

</script>

<style scoped>
  table{
    border: 1px solid #ccc;
    border-collapse: collapse;
    table-layout: fixed;
    width: 80%;
  }
  tr,td{
    border: 1px solid #ccc;
    padding: 10px;
    width: 180px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  table tr td:nth-child(2){
    color: blue;
    cursor: pointer;
  }
  .contain-center{
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .queryResult{
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
    margin-bottom: 20px;
  } 
  .el-header .el-row{

    padding: 15px 0;
  } 
  .el-select{
  }
  .el-main{
    padding: 0;
    box-sizing:border-box;
  } 
  .personal_msg{
    width: 100%;
    height: 210px;
    background: #fff;
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
