<template>
    <div class="totalInfo">
      <el-container class="content_main">
          <el-aside class="sideMenu" width="205px">
              <el-menu class="sidebar-el-menu themeG_b" :default-active="onRoutes" 
                unique-opened router>
                  <template v-for="item in items">
                      <template v-if="item.subs">
                          <el-submenu class="themeG_b" :index="item.index" :key="item.index">
                              <template slot="title">
                                  <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                              </template>
                              <el-menu-item class="themeG_b" v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                                  {{ subItem.title }}
                              </el-menu-item>
                          </el-submenu>
                      </template>
                      <template v-else>
                          <el-menu-item class="themeG_b" :index="item.index" :key="item.index">
                              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                          </el-menu-item>
                      </template>
                  </template>
              </el-menu>
          </el-aside>
          <el-container class="main_right">
              <el-header>
                <el-row :gutter="15" type="flex" justify="center">
                	<el-form :model='ruleForm' :rules='rules' ref='ruleForm' :inline='true' style="width:100%;">
                      <el-col :span="6" class='queryOrg'>
                        <!--<div class="grid-content query_orgn">-->
                            <!--<span>选择查询机构</span>-->
                            <el-form-item label="选择查询机构">
	                            <el-select label="选择查询机构" v-model="elementvalue" placeholder="请选择">
	                              <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value">
	                              </el-option>
	                            </el-select>
                            </el-form-item>
                        <!--</div>-->
                      </el-col>
                      
                        <el-col :span="5" class='queryOrg'>
                          <!--<div class="grid-content query_name">-->
                            <el-form-item label="姓名" prop='name'>
                              <el-input placeholder="请输入姓名" v-model="ruleForm.name" clearable></el-input>
                            </el-form-item>
                          <!--</div>-->
                        </el-col>
                        <el-col :span="6" class="id-1366">
                          <!--<div class="grid-content query_cardid">-->
                            <el-form-item label="身份证号" prop='cardId'>
                              <el-input placeholder="请输入身份证号码" v-model="ruleForm.cardId" clearable></el-input>
                            </el-form-item>
                          <!--</div>-->
                        </el-col>
                        <el-col :span="5" class='queryOrg'>
                          <!--<div class="grid-content query_phone">-->
                            <el-form-item label="手机号码" prop='phone'>
                              <el-input placeholder="请输入手机号码" v-model="ruleForm.phone" clearable></el-input>
                            </el-form-item>
                          <!--</div>-->
                        </el-col>
                        <el-col :span="1">
                          <!--<div class="grid-content">-->
                            <el-button class="themeG_b" @click="querySelect('ruleForm')" type="success">查询</el-button>
                          <!--</div>-->
                        </el-col>
                      </el-form>
                </el-row>
              </el-header>
              <el-main>
                <!-- <keep-alive> -->
                  <router-view></router-view>
                <!-- </keep-alive> -->
              </el-main>
          </el-container>
      </el-container>
    </div>
</template>

<script>
    import bus from '../common/bus'
    export default {
        data() {
            let validataName=(rule,value,callback)=>{
              if(value===''){
                callback(new Error('请输入姓名'));
              }else{
                callback();
              }
            };

            let validataCardId=(rule,value,callback)=>{
              let regId=/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/;
              let cardIdValue=$.trim(value);
              if(value===''){
                callback(new Error('请输入身份证号码'))
              }else if(regId.test(cardIdValue)===false){
                callback(new Error('身份证号码不正确'));
              }else{
                callback();
              }
            };

            let validataPhone=(rule,value,callback)=>{
              let regPhone=/^1[0-9]{10}$/;
              let phoneValue=$.trim(value);
              if(value===''){
                callback(new Error('请输入手机号码'))
              }else if(regPhone.test(phoneValue)===false){
                callback(new Error('手机号码不正确'))
              }else{
                callback();
              }
            };
            return { 
              ruleForm:{
                name:'',
                cardId:'',
                phone:'',
              },
              rules:{
                name:[
                  {validator:validataName,trigger:'blur'}
                ],
                cardId:[
                  {validator:validataCardId,trigger:'blur'}
                ],
                phone:[
                  {validator:validataPhone,trigger:'blur'}
                ]
              },
              elementvalue:'',
              options: [
                {
                  value: '选项1',
                  label: '摩尔征信'
                },
                //  {
                //   value: '选项2',
                //   label: '汇法网'
                // }, {
                //   value: '选项3',
                //   label: '同盾'
                // }, {
                //   value: '选项4',
                //   label: '魔蝎'
                // },
                 {
                  value: '选项5',
                  label: '全部'
                }
              ],
              items: [
                  {
                      icon: 'el-icon-homePage',
                      index: 'moerCreditPersonal',
                      title: '返回首页',
                  },

                  {
                      icon: 'el-icon-overView',
                      index: 'queryResult',
                      title: '征信报告'
                  },
                  {
                      icon: 'el-icon-personal',
                      index: '1',
                      title: '个人信息',
                      subs: [
                          {
                              index: 'perInfoBasic',
                              title: '基本信息'
                          },
                          {
                              index: 'xueli',
                              title: '学历'
                          },
                          // {
                          //     index: '',
                          //     title: '资格证书'
                          // },
                          {
                              index: 'touzi',
                              title: '投资'
                          },
                          {
                              index: 'renzhi',
                              title: '任职'
                          },
                          // {
                          //     index: '',
                          //     title: '偿付能力'
                          // }
                      ]
                  },
                  // {
                  //     icon: 'el-icon-tickets',
                  //     index: '2',
                  //     title: '信贷信息',
                  //     subs: [
                  //         {
                  //             index: '',
                  //             title: '银行信贷'
                  //         },
                  //         {
                  //             index: '',
                  //             title: '信用卡'
                  //         },
                  //         {
                  //             index: '',
                  //             title: '担保'
                  //         }
                  //     ]
                  // },
                  {
                      icon: 'el-icon-judicial',
                      index: '3',
                      title: '司法信息',
                      subs: [
                          {
                              index: 'lawCasedetail',
                              title: '法律案件详情'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-frand',
                      index: '4',
                      title: '风险反欺诈',
                      subs: [
                          {
                              index: 'breach_Blacklist',
                              title: '失信黑名单'
                          },
                          // {
                          //     index: 'netcredit_Blacklist',
                          //     title: '网贷黑名单'
                          // },
                          {
                              index: 'highrisk_list',
                              title: '高风险名单'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-publicMsg',
                      index: '5',
                      title: '授权数据',
                      subs: [
                          {
                              index: 'onlineshopping',
                              title: '网购消费'
                          },
                          {
                              index: 'yunyingshang',
                              title: '运营商'
                          },
                          {
                              index: 'societysecurity',
                              title: '社保'
                          },
                          {
                              index: 'gongjijin',
                              title: '公积金'
                          },
                          {
                              index: 'carinsurance',
                              title: '车险'
                          },
                          // {
                          //     index: '',
                          //     title: '寿险'
                          // },
                          // {
                          //     index: '',
                          //     title: '水电'
                          // }
                          
                      ]
                  }
              ],
              totalMessage:'',
              // activeIndex:'',

            }
        },
        methods:{
          goBack(){
            this.$router.go(-0);
          },
          // basic_info(){
          //   this.$router.push('/perInfoBasic')
          // },
          querySelect(formName){
            this.$refs[formName].validate((valid)=>{
              if(valid){
                // 页面加载效果
                const loading = this.$loading({
                  lock: true,
                  background: 'rgba(0, 0, 0, 0.5)'
                });

                let inquireMessage={};
                inquireMessage.name=this.ruleForm.name;
                inquireMessage.cardId=this.ruleForm.cardId;
                inquireMessage.phone=this.ruleForm.phone;
                inquireMessage=JSON.stringify(inquireMessage);
                localStorage.setItem("InquireMsg",inquireMessage);


                localStorage.setItem('name',this.ruleForm.name);
                localStorage.setItem('cardId',this.ruleForm.cardId);
                localStorage.setItem('phone',this.ruleForm.phone);

                
                let ruleName=$.trim(this.ruleForm.name);
                let ruleCardId=$.trim(this.ruleForm.cardId);
                let rulePhone=$.trim(this.ruleForm.phone);
                if(this.elementvalue=="选项1"){
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get(this.HOST+'/api/v3/search',{
                      params:{
                        name:ruleName,
                        cardId:ruleCardId,
                        phone:rulePhone,
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
                        msgData=JSON.stringify(msgData);
                        
                        
                        this.totalMessage=res.data;
                        this.totalMessage.queryWay='local';
                        localStorage.setItem("msgData",JSON.stringify(this.totalMessage));
                        // 传递给兄弟组件
                        bus.$emit('cMessage',this.totalMessage)
                        bus.$emit('moxieReport','1')
                        //结束加载
                        loading.close();
                        if(this.$router.path!='/queryResult'){
                          this.$router.push('/queryResult');
                        }
                        // if(this.$route.path=='/queryResult'){
                        //   // 刷新当前页面
                        //   window.location.reload();
                        // }else{
                        //   this.$router.push('/queryResult');
                        // }
                        
                      } 
                    })
                    .catch(error=>{
                        //结束加载
                        loading.close();
                        this.$message.error('网络异常');
                        console.log(error);
                    })
                }else if(this.elementvalue=="选项2"){
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get(this.HOST+'/api/v1/hfw/search',{
                      params:{
                        name:ruleName,
                        cardId:ruleCardId,
                        phone:rulePhone,
                      },
                    })
                    .then(res=>{
                      // console.log(res.data);
                      if(res.data==='登录超时'){
                            this.$message('登录超时，请重新登录');
                            this.$router.push('/login');
                      }else if(res.data===''||res.data===null||res.data==='{}'){
                        this.$message('暂无信息');
                      }else{
                          let HfmsgData=JSON.stringify(res.data);
                          localStorage.setItem("newHfMsg",HfmsgData);
                          //结束加载
                          loading.close();
                          this.$router.push('/huifaQuery');
                      } 
                    })
                    .catch(error=>{
                        //结束加载
                        loading.close();
                        this.$message.error('网络异常');
                        console.log(error.response);
                    })
                }else if(this.elementvalue=="选项3"){
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get(this.HOST+'/api/v1/tdsearch',{
                      params:{
                          account_name:ruleName,
                          id_number:ruleCardId,
                          account_mobile:rulePhone,
                      },
                    })
                    .then(res=>{
                      // console.log(res.data);
                      if(res.data==='登录超时'){
                          this.$message('登录超时，请重新登录');
                          this.$router.push('/login');
                      }else if(res.data===''||res.data===null||res.data==='{}'){
                        this.$message('暂无信息');
                      }else{
                          let tdmsgData=JSON.stringify(res.data);
                          localStorage.setItem("newTdMsg",tdmsgData);
                          //结束加载
                          loading.close();  
                          this.$router.push('/tongdunQuery');
                      } 
                    })
                    .catch(error=>{
                        //结束加载
                        loading.close();
                        this.$message.error('网络异常');
                        console.log(error.response);
                    })
                }else if(this.elementvalue=="选项4"){
                    //结束加载
                    loading.close();
                    this.$router.push('/moxieQuery'); 
                }else if( this.elementvalue=="选项5"){
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get(this.HOST3+'/api/v2/multiple/search',{
                      params:{
                          account_name:ruleName,
                          id_number:ruleCardId,
                          account_mobile:rulePhone,
                      },
                    })
                    .then(res=>{
                      // console.log(res.data);
                      if(res.data==='登录超时'){
                            this.$message('登录超时，请重新登录');
                            this.$router.push('/login');
                      }else if(res.data===''||res.data===null||res.data==='{}'){
                        this.$message('暂无信息');
                      }else{
                        let msgData=res.data;
                        msgData=JSON.stringify(msgData);
                        this.totalMessage=res.data;
                        this.totalMessage.queryWay='tPart';
                        // 传递给兄弟组件
                        bus.$emit('cMessage',this.totalMessage);
                        localStorage.setItem("msgData",JSON.stringify(this.totalMessage));
                        //结束加载
                        loading.close();
                        if(this.$router.path!='/queryResult'){
                          this.$router.push('/queryResult');
                        }
                        // if(this.$route.path=='/queryResult'){
                        //   // 刷新当前页面
                        //   window.location.reload();
                        // }else{
                        //   this.$router.push('/queryResult');
                        // }
                      } 
                    })
                    .catch(error=>{
                        //结束加载
                        loading.close();
                        this.$message.error('网络异常');
                        console.log(error.response);
                    })
                }
               
              }
            });

          },
          
        },
        computed: {
          onRoutes(){
              return this.$route.path.replace('/','');
          }
        },
        watch:{
          // elementvalue:function(val){
          //   localStorage.setItem("InstitutionalChoice",val);
          // }
        },
        mounted(){



              
          
              
          
        },
        created(){
          let InquireMessage=localStorage.getItem('InquireMsg');
          let InquireMsg=JSON.parse(InquireMessage);
          let iChoice=localStorage.getItem("InstitutionalChoice");
          this.ruleForm.name=InquireMsg.name;
          this.ruleForm.cardId=InquireMsg.cardId;
          this.ruleForm.phone=InquireMsg.phone;
          this.elementvalue=iChoice;
          
        }
    }

</script>

<style scoped>
  .totalInfo{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  /*.el-aside{
    position: relative;
    top:0px;
    position: fixed;
  }*/
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    text-align:center;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content_main{
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
  .el-header{
    background: #fff;
    margin-bottom: 10px;
    height: 70px !important;
  } 
  .el-header .el-row{
    padding: 15px 0;
  }
  .el-main{
    padding:0;
    padding-right: 10px;
    box-sizing:border-box;
  } 
  .personal_detailed{
    width: 100%;
    height: 310px;
    background: #fff;
    margin-bottom: 10px;
  }
  .sidebar{
      display: block;
      position: absolute;
      left: 0;
      top: 70px;
      bottom:0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
      width: 200px;
  }
  .sidebar-el-menu{
      position:fixed;
      height: 92.5vh;
      overflow-y:auto; 
  }
  .sidebar > ul {
      height:100%;
  }
  /*.query_orgn .el-select{
          width: 160px;
  }
  .query_name .el-form-item{
      width: 150px;
      display: inline-block;
  }
  .query_cardid .el-form-item,.query_phone .el-form-item{
      width: 240px;
      display: inline-block;
  }*/
  .el-button{
      height: 30px;
      width: 100px;
      border-radius:4px; 
      color: #fff;
      font-weight: bold;
      font-size: 12px;
  }
  /*.el-aside{
    float: left;
  }*/
 .main_right{
    /*float:right;
    width: 90%;*/
    /*overflow-y: scroll;*/
    height: 92.5vh;
  }
  .sideMenu{
    float:left;
  }
  @media screen and (min-width:1900px){
    .el-header .el-row {
        padding: 15px 50px;
    }
    .query_cardid span{
        padding-left: 30px;
    }
    .query_name span{
        padding-left: 10px;
    }
  }
  @media screen and (max-width:1500px){
      /*.query_orgn .el-select{
          width: 110px;
      }
      .query_name .el-form-item{
          width: 120px;
          display: inline-block;
      }
      .query_cardid .el-form-item{
          width: 180px;
          display: inline-block;
      }
      .query_cardid .span{
          padding-left: 20px;
      }
      .query_phone .el-form-item{
          width: 160px;
          display: inline-block;
      }
      .el-button{
        position: relative;
        right: 30px;
      }*/
  }
  @media screen and (max-width: 1400px){
     .el-container{
        font-size: 13px;
     }
     .totalInfo{
        min-width: 1342px;
     }
     .el-button{
     	width: 80px;
     }

  }
</style>
