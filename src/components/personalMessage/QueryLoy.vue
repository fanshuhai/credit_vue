<template>
    <div class="wrapper">
       <el-container>
           <el-header>
               <div>可用余额：<span style="padding-left:10px;">{{balance1}}</span> 元</div>
               <div>累计充值：<span style="padding-left:10px;">{{amount1}}</span> 元</div>
               <div>累计消费：<span style="padding-left:10px;">{{cost1}}</span> 元</div>
           </el-header>
           <el-main>
               <div class="picktime">
                  <el-row :gutter="20" class="detail_detail" display="flex" align="middle" justify="center">
                    <el-col :span="7" >
                      <span>查询类目：</span>
                      <el-select v-model="queryClass" placeholder="查询">
                        <el-option v-for="(item,index) in queryClasses"
                         :label="item.value" :value="item.key" :key="index"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                       <span>开始时间：</span>
                       <el-date-picker
                            v-model="value1" type="date"
                            placeholder="选择日期"
                       ></el-date-picker>
                    </el-col>
                    <el-col :span="6">
                      <span>结束时间：</span>
                       <el-date-picker
                            v-model="value2" type="date"
                            placeholder="选择日期"
                       ></el-date-picker>
                    </el-col>
                    <el-col :span="4">
                      <el-button class="themeG_b" @click="recordQuery">查询</el-button>
                    </el-col>
                  </el-row>
               </div>
               <!--<div class="picktime picktime_center" >
                  <el-row :gutter="50">
                      <el-col :span="6" :offset="3">
                        <div  class="event_detail boxShadow">
                          <div class="event_message">充值金额</div>
                          <div class="event_message">
                           <span class="event_message_score">{{amount2}}</span>元
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div  class="event_detail boxShadow">
                          <div class="event_message">查询次数</div>
                          <div class="event_message">
                           <span class="event_message_score">{{count2}}</span>次
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div  class="event_detail boxShadow">
                          <div class="event_message">消费金额</div>
                          <div class="event_message">
                           <span class="event_message_score">{{cost2}}</span>元
                          </div>
                        </div>
                      </el-col>
                  </el-row>
               </div>-->
               <div class="queryLoyR selfTable">
                   <table cellspacing="0" cellpadding="0" >
                       <thead>
                           <tr>
                               <!-- <th>查询类型</th> -->
                               <th>查询时间</th>
                               <th>查询条件</th>
                               <th>查询类型</th>
                               <th>查询结果</th>
                               <th>查询费用(￥)</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr v-for='query in querys'>
                               <!-- <td>{{query.channelCode}}</td> -->
                               <td>{{query.queryDate}}</td>
                               <td>{{query.spare03}}</td>
                               <td>{{query.channelCode}}</td>
                               <td>{{query.thirdRes}}</td>
                               <td>{{query.cost}}</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
               <div v-if="cstatus===1" class="page_footer">
                   <el-pagination @size-change="handleSizeChange" 
                   @current-change="handleCurrentChange" prev :current-page.sync="currentPage1" :page-size="10" layout="total,prev,pager,next" :total="total">

                   </el-pagination>
               </div>

                <div v-if="cstatus===2" class="nomseg">
                    <span>查询成功，暂无数据</span>
                </div>
           </el-main>
       </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              querys:'',
              total:'0',
              value1:'',
              value2:'',
              currentPage1:1,
              cstatus:'',
              queryClass:'total',
              queryClasses:[],
              balance1:'0.00',
              amount1:'0.00',
              cost1:'0.00',
              count2:'0',
              amount2:'0.00',
              cost2:'0.00',
            }
        },
        components:{

        },
        methods:{
            //获取yyddmm日期
            getYYDDMM(value){
              let year=value.getFullYear();
              let month=value.getMonth()+1<10?"0"+(value.getMonth()+1):value.getMonth()+1;
              let day=value.getDate()<10?"0"+value.getDate():value.getDate();
              let datestr=year+'-'+month+'-'+day;
              return  datestr;
            },
            // 查询
            recordQuery(){
                // const params={};
                if(this.value1=='' || this.value1==null){
                  if(this.value2=='' || this.value2==null){
                      this.recordQuery2('','');
                      this.$axios.defaults.withCredentials=true;
                      this.$axios.get(this.HOST+'/api/v1/record',{
                        params:{
                          pageNum:this.currentPage1,
                          pageSize:10,
                          username:sessionStorage.getItem('ms_username'),
                          type:this.queryClass,
                        }
                      })
                      .then(res=>{
                        console.log(res.data);
                        if(res.data==='登录超时'){
                            this.$message('登录超时，请重新登录');
                            this.$router.push('/login');
                        }else if(res.data===''||res.data===null||res.data==='{}'){
                          this.$message('暂无信息');
                        }else{
                          if(res.data.total==0){
                              this.cstatus=2;
                              this.querys=res.data.list;
                              this.total=res.data.total;
                              // console.log(this.querys);
                          }else{
                            this.querys=res.data.list;
                            this.total=res.data.total;
                            // console.log(this.querys);
                            this.cstatus=1;
                          }
                        }
                        
                      })
                      .catch(error=>{
                        alert('暂无服务');
                          console.log(error.response);
                      })
                  }else{
                      return this.$message({
                              message: '日期选项不能为空',
                              type: 'warning'
                            });
                  }
                  
                }
                if(this.value1!='' && this.value1!=null){
                  if(this.value2!='' && this.value2!=null){
                    if(this.value2>=this.value1){
                      this.recordQuery2(this.value1,this.value2);
                      this.$axios.defaults.withCredentials=true;
                      this.$axios.get(this.HOST+'/api/v1/record',{
                        params:{
                            pageNum:this.currentPage1,
                            pageSize:10,
                            username:sessionStorage.getItem('ms_username'),
                            startDate:this.getYYDDMM(this.value1),
                            endDate:this.getYYDDMM(this.value2),
                            type:this.queryClass,
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
                          if(res.data.total==0){
                              this.cstatus=2;
                              this.querys=res.data.list;
                              this.total=res.data.total;
                              // console.log(this.querys);
                          }else{
                            this.querys=res.data.list;
                            this.total=res.data.total;
                            // console.log(this.querys);
                            this.cstatus=1;
                          }
                        }
                        
                      })
                      .catch(error=>{
                        alert('暂无服务');
                          console.log(error.response);
                      })
                    }else{
                      this.$message({
                              message: '开始日期不能大于结束日期！',
                              type: 'warning'
                            });
                    }
                  }else{
                      return this.$message({
                              message: '日期选项不能为空',
                              type: 'warning'
                            });
                  }
                }
            },
            handleSizeChange(val){
                consle.log(`每页${val}条`)
            },
            handleCurrentChange(val){
                this.currentPage1=val;
                this.recordQuery()
            },
            // 余额、充值、花费、查询次数联合查询
            recordQuery1(){
              const paramsValue={};
              paramsValue.userid=sessionStorage.getItem('id_p');
              paramsValue.type='total';
              this.$axios.defaults.withCredentials=true;
              this.$axios.get(this.HOST+'/api/v1/record/balanceAmountCostNum',{
                  params:paramsValue
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
                    this.balance1=res.data.balance.toFixed(2);
                    this.amount1=res.data.amount.toFixed(2);
                    this.cost1=res.data.cost.toFixed(2);
                  }
              })
            },
            recordQuery2(startDateValue,endDateValue){
              const paramsValue={};
              if(startDateValue=='' || startDateValue==null){
                paramsValue.userid=sessionStorage.getItem('id_p');
                paramsValue.type=this.queryClass;
              }else{
                paramsValue.userid=sessionStorage.getItem('id_p');
                paramsValue.type=this.queryClass;
                paramsValue.startDate=this.getYYDDMM(this.value1);
                paramsValue.endDate=this.getYYDDMM(this.value2);

              }
              this.$axios.defaults.withCredentials=true;
              this.$axios.get(this.HOST+'/api/v1/record/balanceAmountCostNum',{
                  params:paramsValue
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
                    this.count2=res.data.count;
                    this.amount2=res.data.amount.toFixed(2);
                    this.cost2=res.data.cost.toFixed(2);
                  }
              })
            },
            // 查询类目列表
            queryTypeList(){
              this.$axios.defaults.withCredentials=true;
              this.$axios.get(this.HOST+'/api/v1/record/queryTypeList',{
                  params:{
                      userid:sessionStorage.getItem('id_p'),
                  }
              })
              .then(res=>{
                    // console.log(res.data);
                    this.queryClass=res.data[0].key;
                    this.queryClasses=res.data;
                  
              })

            }
        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
            //
            this.queryTypeList();

            this.recordQuery()

            this.recordQuery1()
            
            
        },
        mounted(){
          
        }
    }
</script>
<style scoped>
    .page_footer{
      padding-bottom: 40px;
    }
    .wrapper{
        margin:0px 10px 0 0;
        height: auto;
    }
    .el-header{
        width: 100%;
        height: 120px !important;
        background: #fff;
        margin-bottom: 15px;
    }
    .el-header div{
        float: left;
        width: 33%;
        height: 100%;
        box-sizing: border-box;
        line-height: 120px;
        text-align: center;
        color: #666;
        font-weight: 600;
        font-size: 18px;
    }
    .picktime_center{
      margin-bottom: 20px;
    }
    .event_detail{
      height: auto;
      min-height: 30px;
      line-height: 30px;
    }
    .event_message{
      margin:0 auto;
      text-align: center;
    }
    .event_message_score{
      font-weight: bold;
      font-size: 25px;
      line-height: 60px;
      height: 60px;
    }
    .el-main{
        height: 80vh;
        background: #fff;
        box-sizing: border-box;
    }
    .picktime{
        width: 100%;
        min-height: 70px;
        line-height: 70px;
        font-family: SourceHanSansCN-Regular;
        color: #333;
    }
    .block{
        width: 33%;
        height: 100%;
        box-sizing: border-box;
        float: left;
        padding-left :16%;
        padding-top:20px;
    }
    .block-center{
        padding-left: 8%;
    }
    .block-left{
        padding-left: 0%;
    }
    .el-button{
      height: 36px;
      text-align: center;
      width: 120px;
      border-radius:4px; 
      color: #fff;
      font-size: 16px;
      letter-spacing: 20px;
      padding-left: 35px;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 160px;
    }
    .el-pagination{
        text-align: center;
    }
    .el-col{
    	text-align: center;
    }
    @media screen and (max-width: 1500px){
      .block{
        padding-left: 11%;
      }
      .el-main{
        padding: 0 20px;
        min-height: 630px;
      }
    }

    @media screen and (max-width: 1400px){
      .el-main{
        min-height: 530px;
      }
      .block {
          padding-left: 8%;
      }
      .el-header{
          height: 60px !important;
      }
      .el-header div{
          line-height: 60px;
      }
      td{
          min-height: 32px;
          line-height: 32px;
      }
    }
</style>