<template>
    <div class="wrapper">
       <el-container>
           <el-header>
               <div>累计消费：<span style="padding-left:10px;">{{cost}}</span> 元</div>
               <div></div>
               <div></div>
           </el-header>
           <el-main>
               <div class="picktime">
                   <div class="block">
                       <span>开始时间：</span>
                       <el-date-picker
                            v-model="value1" type="date"
                            placeholder="选择日期"
                       ></el-date-picker>
                   </div>
                   <div class="block block-center">
                       <span>结束时间：</span>
                       <el-date-picker
                            v-model="value2" type="date"
                            placeholder="选择日期"
                       ></el-date-picker>
                   </div>
                   <div class="block block-left">
                       <el-button @click="recordQuery">查询</el-button>
                   </div>
               </div>
               <div class="queryLoyR">
                   <table cellspacing="0" cellpadding="0" >
                       <thead>
                           <tr>
                               <th>查询类型</th>
                               <th>查询条件</th>
                               <th>查询时间</th>
                               <th>查询费用</th>
                               <th>查询机构</th>
                               <th>查询结果</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr v-for='query in querys'>
                               <td>{{query.channel}}</td>
                               <td>{{query.customerName}}</td>
                               <td>{{query.queryDate}}</td>
                               <td>{{query.cost}}</td>
                               <td>{{query.channel}}</td>
                               <td>{{query.thirdRes}}</td>
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
              cost:'0.00',
              cstatus:'',
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
                const params={};
                // console.log(typeof(this.value1));
                // console.log('this.value1   '+this.value1);
                // console.log(typeof(this.value2));
                // console.log('this.value2   '+this.value2);
                if(this.value1=='' || this.value1==null){
                  if(this.value2=='' || this.value2==null){
                      
                      this.$axios.defaults.withCredentials=true;
                      this.$axios.get('http://123.59.181.202:9990/api/v1/record',{
                        params:{
                          pageNum:this.currentPage1,
                          pageSize:10,
                          username:sessionStorage.getItem('ms_username'),
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
                      return this.$message({
                              message: '日期选项不能为空',
                              type: 'warning'
                            });
                  }
                  
                }
                if(this.value1!='' && this.value1!=null){
                  if(this.value2!='' && this.value2!=null){
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get('http://123.59.181.202:9990/api/v1/record',{
                      params:{
                          pageNum:this.currentPage1,
                          pageSize:10,
                          username:sessionStorage.getItem('ms_username'),
                          startDate:this.getYYDDMM(this.value1),
                          endDate:this.getYYDDMM(this.value2),
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
            }
        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
            //

            
            
        },
        mounted(){
           // 消费查询
            this.$axios.defaults.withCredentials=true;
            this.$axios.get('http://123.59.181.202:9990/api/v1/accumulatedCost',{
                params:{
                    userid:sessionStorage.getItem('id_p'),
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
                    this.cost=res.data.toFixed(2);
                  }
                
            })
            // 记录查询
            this.$axios.defaults.withCredentials=true;
            this.$axios.get('http://123.59.181.202:9990/api/v1/record',{
              params:{
                pageNum:1,
                pageSize:10,
                username:sessionStorage.getItem('ms_username')
              }
            })
            .then(res=>{
                  if(res.data==='登录超时'){
                      this.$message('登录超时，请重新登录');
                      this.$router.push('/login');
                  }else if(res.data===''||res.data===null||res.data==='{}'){
                    this.$message('暂无信息');
                  }else{
                    if(res.data.total==0){
                        this.cstatus=2;

                        // this.querys=res.data.list;
                        // this.total=res.data.total;
                        // console.log(this.querys);
                    }else{
                      this.cstatus=1;

                        this.querys=res.data.list;
                        this.total=res.data.total;
                        console.log(this.querys);
                    }
                  }
            })
            .catch(error=>{
              alert('暂无服务');
                console.log(error.response);
            })
        }
    }
</script>
<style scoped>
    .page_footer{
      padding-bottom: 40px;
    }
    .wrapper{
        margin:10px 10px 0 0;
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
    .el-main{
        height: 80vh;
        background: #fff;
        box-sizing: border-box;
    }
    .picktime{
        width: 100%;
        height: 70px;
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
      background:#3c88f6;
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
    table{
        width: 100%;
        border: 1px solid #e6f0fe;
    }
    tr{
       border: 1px solid #e6f0fe; 
    }
    th{
        height: 40px;
        text-align: center;
        width: 16%;
        line-height: 40px;
        background: #e6f0fe;
        font-size: 16px;
    }
    td{
        min-height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
        border-top:1px solid #e6f0fe; 
    }
    .el-pagination{
        text-align: center;
    }
    @media screen and (max-width: 1500px){
      .block{
        padding-left: 11%;
      }
      .el-main{
        padding: 0 20px;
      }
    }

    @media screen and (max-width: 1400px){
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