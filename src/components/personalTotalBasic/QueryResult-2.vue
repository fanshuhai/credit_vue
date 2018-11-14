<template>
    <div class="queryResult">
      <el-container>
          <el-header>
              征信报告
          </el-header>
          <el-main>
              <!-- 基础信息 -->
              <div class="basic_info">
                  <table>
                    <tr>
                      <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                      <td>{{total_msg.name}}</td>
                      <td>查询时间</td>
                      <td>{{currentime}}</td>
                    </tr>
                    <tr>
                      <td>手机号码</td>
                      <td>{{total_msg.phone}}</td>
                      <td>查询机构</td>
                      <td>摩尔征信</td>
                    </tr>
                    <tr>
                      <td>身份证号</td>
                      <td>{{total_msg.cardId}}</td>
                      <td>报告编号</td>
                      <td>{{'MEZX'+(Math.random()*1000000000000).toFixed(0)}}</td>
                    </tr>
                  </table>
              </div>

              <!-- 基本信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>基本信息</div>
                
                <div class="basic_info personal_info">
                  <table>
                    <tr>
                      <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                      <td>{{total_msg.name}}</td>
                      <td>出生日期</td>
                      <td>{{total_msg.birthdate}}</td>
                    </tr>
                    <tr>
                      <td>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</td>
                      <td>{{total_msg.gender}}</td>
                      <td>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍</td>
                      <td>{{total_msg.province}}</td>
                    </tr>
                    <tr>
                      <td>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</td>
                      <td>{{total_msg.age}} 岁</td>
                      <td>手&nbsp;&nbsp;机&nbsp;&nbsp;号</td>
                      <td>{{total_msg.phone}}</td>
                    </tr>
                    <tr>
                      <td>身份证号</td>
                      <td>{{total_msg.cardId}}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- 风险评分 -->
              <!-- <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>风险评分</div>
                <div class="prostyle_main">
                  <div class="p_content">
                    <table>
                      <tr>
                        <td>信用评级</td>
                        <td>无</td>
                      </tr>
                      <tr>
                        <td>授信额度</td>
                        <td>无</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                  </div>
                </div>
                <div class="credite">
                  <el-progress type="circle" :show-text='false' :percentage=score :width="120"></el-progress>
                  <div class="circle_title">
                    <div>无</div>
                    <div>信用评分</div>
                  </div>
                </div>
              </div> -->

              <!-- 归属地解析 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>归属地解析</div>
                <div class="prostyle_main">
                  <div class="p_content guishudi">
                    <table>
                      <tr>
                        <td>身份证归属地</td>
                        <td>{{belongtos.id_card_address}}</td>
                      </tr>
                      <tr>
                        <td>手机归属地</td>
                        <td>{{belongtos.phone_attribution}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>


             <!-- 身份验证 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>身份验证</div>
                <div class="prostyle_main">
                  <div class="p_content guishudi">
                    <table>
                      <tr>
                        <td>姓名、身份证</td>
                        <td>{{sensetime_twofactor}}</td>
                      </tr>
                      <tr>
                        <td>姓名、身份证、手机号</td>
                        <td>{{acedata_userValidation}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              
              <!-- 黑名单（失信执行人） -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>黑名单（失信被执行人）</div>
                <div class="prostyle_main">
                  <div v-if="sstatus===1" v-for="(shixin,index) in shixins"  class=" blacklist">
                    <div class="msg_style">失信信息{{index+1}}</div>
                    <table>
                      <tr>
                        <td>执行法院</td>
                        <td>{{shixin.court}}</td>
                      </tr>
                      <tr>
                        <td>被执行人的履行情况</td>
                        <td>{{shixin.sx_lx}}</td>
                      </tr>
                      <tr>
                        <td>省份</td>
                        <td>{{shixin.sx_sf}}</td>
                      </tr>
                      <tr>
                        <td>被执行人行为具体情况</td>
                        <td>{{shixin.sx_jt}}</td>
                      </tr>
                      <tr>
                        <td>案号</td>
                        <td>{{shixin.casenum}}</td>
                      </tr>
                      <tr>
                        <td>发布时间</td>
                        <td>{{shixin.sx_fb}}</td>
                      </tr>
                      <tr>
                        <td>生效法律文书确定的义务</td>
                        <td>{{shixin.concent}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="sstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>。
                  </div>
                </div>
              </div>
              
              <!-- 法律案件信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>法律案件信息</div>
                <div class="prostyle_main">
                  <div v-if="zstatus===1"  v-for="(zhixing,index) in zhixings" class=" blacklist">
                    <div class="msg_style">案件信息{{index+1}}</div>
                    <table>
                      <tr>
                        <td>执行法院</td>
                        <td>{{zhixing.court}}</td>
                      </tr>
                      <tr>
                        <td>立案时间</td>
                        <td>{{zhixing.sslong}}</td>
                      </tr>
                      <tr>
                        <td>案号</td>
                        <td>{{zhixing.casenum}}</td>
                      </tr>
                      <tr>
                        <td>执行标的</td>
                        <td>{{zhixing.money}}（元）</td>
                      </tr>
                      <tr>
                        <td>执行状态</td>
                        <td>{{zhixing.state}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="zstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                  
                </div>
              </div>


              <!-- 多头借贷 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>多头借贷</div>
                <div class="prostyle_main">
                  <div v-if="hstatus===1"  class=" blacklist">
                    <table style="padding-left:2%;">
                      <tr>
                        <td style="width:250px;">3个月内申请人在多个平台申请借款:</td>
                        <td>总个数{{headersloans.association_partner_count}}个<span v-for="val in headersloans.association_partner_details">，{{val.count}} {{val.industryDisplayName}}</span></td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="hstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 风险反欺诈 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>风险反欺诈</div>
                <div class="prostyle_main">
                  <div v-if="rstatus===1"  class="authentication">
                    <table>
                      <tr>
                        <th>检查项</th>
                        <th>风险等级</th>
                        <th>备注</th>
                      </tr>
                      <tr v-for="risk_fraud in risk_frauds">
                        <td>{{risk_fraud.risk_name}}</td>
                        <td></td>
                        <td>
                          规则描述：{{risk_fraud.description}}</br>
                          匹配字段：{{risk_fraud.hit_type_displayname}}</br>
                          风险类型：{{risk_fraud.type}}</br>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="rstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 任职信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>任职信息</div>
                <div class="prostyle_main">
                  <div v-if="tstatus===1" class="authentication">
                    <table>
                      <tr>
                        <th>机构名称</th>
                        <th>首席代表标志</th>
                        <th>职务</th>
                        <th>注册机构</th>
                      </tr>
                      <tr v-for='renzhi_now in renzhi_nows'>
                        <td>{{renzhi_now.entname}}</td>
                        <td>{{renzhi_now.chiofthedelsign}}</td>
                        <td>{{renzhi_now.position}}</td>
                        <td>{{renzhi_now.regorg}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="tstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>


              <!-- 投资信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>投资信息</div>
                <div class="prostyle_main">
                  <div  v-if="tstatus===1"  class="authentication">
                    <table>
                      <tr>
                        <th>被投资机构名称</th>
                        <th>注册资本（万元）</th>
                        <th>认缴出资额（万元）</th>
                        <th>出资比例</th>
                        <th>币种</th>
                        <th>企业类型</th>
                        <th>企业状态</th>
                        <th>成立日期</th>
                        <th>注销日期</th>
                      </tr>
                      <tr v-for='touzi_now in touzi_nows'>
                        <td>{{touzi_now.entname}}</td>
                        <td>{{touzi_now.regcap}}</td>
                        <td>{{touzi_now.subconam}}</td>
                        <td>{{touzi_now.conprop}}</td>
                        <td>{{touzi_now.currency}}</td>
                        <td>{{touzi_now.enttype}}</td>
                        <td>{{touzi_now.entstatus}}</td>
                        <td>{{touzi_now.esdate}}</td>
                        <td>{{touzi_now.canceldate}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="tstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 辅助型授权数据 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>辅助型授权数据</div>
                <div class="prostyle_main">
                  <div class="authentication">
                    <table>
                      <tr>
                        <th>类型</th>
                        <th>状态</th>
                        <th>操作</th>
                      </tr>
                      <tr v-if="reportStatus_1===2">
                        <td>公积金</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_1===1" @click="goFund" class="authorization">
                        <td>公积金</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_2===2">
                        <td>社保</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_2===1" @click="goSecurity" class="authorization">
                        <td>社保</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_3===2">
                        <td>车险</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_3===1" @click="goCarinsurance" class="authorization">
                        <td>车险</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_4===2">
                        <td>淘宝</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_4===1" @click="goTaobao" class="authorization">
                        <td>淘宝</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_5===2">
                        <td>运营商</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_5===1" @click="goCarrier" class="authorization">
                        <td>运营商</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_6===2">
                        <td>学历</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_6===1" @click="goChsi" class="authorization">
                        <td>学历</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>

              <div class="prostyle_bottom">
                <div class="button_bottom">
                  <el-button ><a :href="urlReport" class="report_out">导出报告</a></el-button>
                </div>
                
              </div>
            


          </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                currentime:'',
                score:0,
                // 基础信息
                total_msg:'',
                // 归属地解析
                belongtos:'',
                // 任职信息 投资信息
                renzhi_nows:'',
                touzi_nows:'',
                tstatus:1,
                // 失信执行人
                shixins:'',
                sstatus:1,
                //法律案件详情
                zhixings:'',
                zstatus:1,
                //多头借贷
                headersloans:'',
                hstatus:1,
                //风险反欺诈
                risk_frauds:'',
                rstatus:1,

                reportStatus_1:'',
                reportStatus_2:'',
                reportStatus_3:'',
                reportStatus_4:'',
                reportStatus_5:'',
                reportStatus_6:'',
                // 导出报告
                urlReport:'',

                //身份验证
                sensetime_twofactor:'',
                acedata_userValidation:'',
            }
        },
        methods:{
          goFund(){
            this.$router.push('/gongjijin');
          },
          goSecurity(){
            this.$router.push('/societysecurity');
          },
          goCarinsurance(){
            this.$router.push('/carinsurance');
          },
          goTaobao(){
            this.$router.push('/onlineshopping');
          },
          goCarrier(){
            this.$router.push('/yunyingshang');
          },
          goChsi(){
            this.$router.push('/xueli');
          },
          // 导出报告
          reportOut(){
            this.urlReport="http://123.59.181.202:9990/api/v1/download?account_name="+localStorage.getItem('name')+"&id_number="+localStorage.getItem('cardId')+"&account_mobile="+localStorage.getItem('phone');
          },
          // 魔蝎报告接口
          moxieReport(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get('http://123.59.181.202:9990/api/v1/moxieReportNum',{
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
                console.log(res.data);
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

        },
        computed: {
          

        },
        watch:{
          
        },
        mounted(){
          // 导出报告
          this.reportOut();
           // 查询时间
          let datetime=new Date();
          let y=datetime.getFullYear();
          let m=datetime.getMonth()+1;
          m=m<10?('0'+m):m;
          let d=datetime.getDate();
          d=d<10?('0'+d):d;
          let currentime1=y+'年'+m+'月'+d+'日';
          // 获取当前时间
          // debugger;
          // console.log(typeof(this.currentime))
          // console.log(typeof(currentime1))
          this.currentime = currentime1;
            // alert(this.currentime)
          const msgData=localStorage.getItem('msgData');
          const newmsgData=JSON.parse(msgData);
          console.log(newmsgData)
          // 获取身份验证
          this.sensetime_twofactor=newmsgData.sensetime_twofactor;
          this.acedata_userValidation=newmsgData.acedata_userValidation;
          //console.log(newmsgData);
          //基础信息
          this.total_msg=newmsgData.basicInfo;
           // console.log(newmsgData.basicInfo)
           // console.log(this.total_msg.name)
          // 归属地数据
          const belongto={};
          if(typeof(newmsgData.tongdun)==='undefined'){
              belongto.id_card_address='查询成功，暂无数据。';
              belongto.phone_attribution='查询成功，暂无数据。';

          }else{
              belongto.id_card_address=newmsgData.tongdun.result_desc.INFOANALYSIS.address_detect.id_card_address;
              belongto.phone_attribution=newmsgData.tongdun.result_desc.INFOANALYSIS.address_detect.mobile_address;
          }
         // console.log(belongto);
          this.belongtos=belongto;
          //失信执行人  法律案件详情
          const shixinp={};
          if(typeof(newmsgData.judicial)==='undefined' || newmsgData.judicial.message=='请提供正确身份证！[异常输入]' || newmsgData.judicial.message=='此人无相关风险数据！'){
            shixinp.blacklist='';
            shixinp.zhixing='';
          }else{
            shixinp.blacklist=newmsgData.judicial.fxcontent.shixin;
            shixinp.zhixing=newmsgData.judicial.fxcontent.zhixing;
          }
          this.shixins=shixinp.blacklist;
          this.zhixings=shixinp.zhixing;
          // console.log(newmsgData)
          // console.log(Object.keys(this.shixins).length);
          if(Object.keys(this.shixins).length>0){
            this.sstatus=1;
          }else{
            this.sstatus=2;
          };
          // console.log(this.shixins);
          if(Object.keys(this.zhixings).length>0){
            this.zstatus=1;
          }else{
            this.zstatus=2;
          };
          //多头借贷
          const headersloan={};
          if(typeof(newmsgData.tongdun)==='undefined'){

          }else{
                let loan=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
                //console.log(loan)
                for(let i=0;i<loan.length;i++){
                    if(loan[i].risk_name.indexOf('3个月内申请人在多个平台申请借款')>'-1'){
                      headersloan.association_partner_count=loan[i].risk_detail.association_partner_count;
                      headersloan.association_partner_details=loan[i].risk_detail.association_partner_details;
                    }
                }
                // console.log(headersloan);
          }
          this.headersloans=headersloan;
          console.log(headersloan)
          if(Object.keys(this.headersloans).length>0){
            this.hstatus=1;
          }else{
            this.hstatus=2;
          }
          
          //风险反欺诈
          const risk_fraud=[];
          if(typeof(newmsgData.tongdun)==='undefined'){

          }else{
              const risk_items_t=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
              //console.log(risk_items_t.length)
              let risk_items_d=[];
              for (let i=0;i<risk_items_t.length;i++){
                let obj_l={};
                if(typeof(risk_items_t[i].risk_detail)!=='undefined'){
                  if(typeof(risk_items_t[i].risk_detail.description)!=='undefined' && typeof(risk_items_t[i].risk_detail.hit_type_displayname)!=='undefined' && typeof(risk_items_t[i].risk_detail.black_list_details)!=='undefined'){
                    obj_l.risk_name=risk_items_t[i].risk_name;
                    if(typeof(risk_items_t[i].risk_detail.description)==='undefined'){
                      obj_l.description='暂无信息';
                    }else{
                      obj_l.description=risk_items_t[i].risk_detail.description;
                    }
                    if(typeof(risk_items_t[i].risk_detail.hit_type_displayname)==='undefined'){
                      obj_l.hit_type_displayname='暂无信息';
                    }else{
                      obj_l.hit_type_displayname=risk_items_t[i].risk_detail.hit_type_displayname;
                    }
                    if(typeof(risk_items_t[i].risk_detail.black_list_details)==='undefined'){
                      obj_l.type='暂无信息';
                    }else{
                      obj_l.type=risk_items_t[i].risk_detail.black_list_details[0].fraudTypeDisplayName;
                    }
                    
                  }
                }
                risk_items_d.push(obj_l);
              }
              for(let i=0;i<risk_items_d.length;i++){
                  if(Object.keys(risk_items_d[i]).length>0){
                    risk_fraud.push(risk_items_d[i])
                  }
              }
              //console.log(risk_fraud);
          }
          this.risk_frauds=risk_fraud;
          if(Object.keys(this.risk_frauds).length>0){
            this.rstatus=1;
          }else{
            this.rstatus=2;
          }
          // 任职信息  投资信息
          const gscontent={};
          if(typeof(newmsgData.industry)==='undefined' || newmsgData.industry.message=='请提供正确身份证！[异常输入]' || newmsgData.industry.message=='此人无相关工商数据！'){
              gscontent.renzhi_now='';
              gscontent.touzi_now='';
          }else{
              gscontent.renzhi_now=newmsgData.industry.gscontent.renzhi_now;
              gscontent.touzi_now=newmsgData.industry.gscontent.touzi_now;
          }
          //console.log(gscontent.renzhi_now)
          this.renzhi_nows=gscontent.renzhi_now;
          this.touzi_nows=gscontent.touzi_now;
          if(Object.keys(this.renzhi_nows).length>0){
            this.tstatus=1;
          }else{
            this.tstatus=2;
          }
        },
        created(){
            //魔蝎报告接口
            this.moxieReport();
        },
    }

</script>

<style scoped>
  .queryResult{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  .el-container{
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
  .el-header{
    height: 100px;
    margin-bottom: 20px;
    text-align: center;
    padding-top:20px;
    font-size: 28px;
    color: #3c88f6;
    font-weight: 600;
    letter-spacing: 5px;

  }
  .el-main{
    padding: 0;
    box-sizing:border-box;
  } 
  .basic_info{
    width: 100%;
    min-height: 30px;
  }
  table{
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  tr,td,th{
    padding: 10px;
    font-size: 14px;
    /*overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;*/
    height: 30px;
    line-height: 30px;
    font-family: '微软雅黑';
    color:#666;
  }
  .basic_info table tr,.basic_info table td{
    height: 10px;
    line-height: 10px;
    padding:8px;
  }
  .basic_info table tr td:nth-child(odd){
    text-align: right;
    width: 180px;
    padding-right: 20px;
  }
  .prostyle{
    width: 100%;
    height: auto;
    padding:10px 20px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 20px;
    position: relative;
  }
  .prostyle_title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    border-bottom: 1px solid #ccc;
  }
  .prostyle_title .border_style{
    padding:0 0 0 25px;
    margin-right: 10px;
    border-right: 8px solid #3c88f6;
  }
  .prostyle_main{
    padding-top: 20px;
  }
  .credite{
    height: 55%;
    width: 300px;
    position: absolute;
    top:38%;
    left: 65%;

  }
  .circle_title{
    position: absolute;
    top: 28%;
    left: 7%;
    /*color: #20a0ff;*/
    color: #e5e9f2;
  }
  .circle_title div:nth-child(1){
    font-size: 28px;
    width: 80px;
    text-align: center;
  }
  .circle_title div:nth-child(2){
    font-size: 14px;
    width: 80px;
    text-align: center;
  }
  .p_content{
    width: 50%;
    height: auto;
    box-sizing: border-box;
    padding-left: 10%;

  }
  .p_content table{
    width: 60%;
  }

  .p_content table tr td,.personal_info table tr td{
    height:50px;
    line-height: 50px; 
    padding:0;
    font-size:16px;
    color:#666;
    font-family: '微软雅黑';
  }
  .p_content table tr td:nth-child(odd){
    width: 70px;
  }
  /*.p_content table tr td:nth-child(even){
    color:#f3b122;
  }*/
  .guishudi table{
    width: 80%;
  }
  .guishudi table tr td:nth-child(odd){
    width:200px;
  }
  .authentication{
    width: 100%;
  }
  .authentication table tr td {
    text-align: center;
  }
  /*.authentication table tr:nth-child(1) {
    background: #f0f0f0;
  }*/
  .blacklist{
    width: 100%;
    box-sizing: border-box;
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .blacklist table tr td:nth-child(odd){
    width:180px;
    text-align:right;
  }
  .el-button{
    background:#3c88f6;
    height: 45px;
    text-align: center;
    width: 200px;
    border-radius:4px; 
    color: #fff;
    font-size: 16px;
    
    
    margin:0 auto;
    position: relative;
  }
  .report_out{
    display: block;
    letter-spacing: 20px;
    color: #fff;
    height: 40px;
    width: 200px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top:2px;
    left: 0;
    padding-left: 10px;
  }
  .prostyle_bottom{
    width: 100%;
    height: 200px;
    padding-top: 50px;
    padding-left: 43%;
    box-sizing: border-box;
  }
  .button_bottom{
    width: 100%;
    margin:0 auto;
  }
  .msg_style{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f0f0f0;
    font-weight: bold;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .datanull{
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .authorization td:nth-child(3){
    color: #3c88f6;
    cursor: pointer;
  }
</style>
  