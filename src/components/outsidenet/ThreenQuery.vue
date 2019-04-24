<template>
    <div class="queryResult">
      <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="5">
                <div class="grid-content query_orgn">
                    <span>选择查询机构：</span>
                    <el-select v-model="elementvalue" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                </div>
              </el-col>
              <el-form :model='ruleForm' :rules='rules' ref='ruleForm' style="width:100%;">
                    <el-col :span="4">
                      <div class="grid-content query_name">
                        <span>姓名：</span>
                        <el-form-item  prop='name'>
                          <el-input  placeholder="请输入内容" v-model="ruleForm.name" clearable></el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content query_cardid">
                        <span>身份证号：</span>
                        <el-form-item  prop='cardId'>
                           <el-input placeholder="请输入身份证号码" v-model="ruleForm.cardId" clearable></el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content query_phone">
                        <span>手机号码：</span>
                        <el-form-item  prop='phone'>
                          <el-input placeholder="请输入手机号码" v-model="ruleForm.phone" clearable></el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <div class="grid-content">
                        <el-button @click="querySelect('ruleForm')" type="success">查询</el-button>
                      </div>
                    </el-col>
              </el-form>
            </el-row>
          </el-header>
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
    </div>
</template>

<script>
    import bus from '../common/bus';
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
              // user_basic:'姓名：'+newmsgData.basicInfo.name+',年龄：'+newmsgData.basicInfo.age+',手机号码：'+newmsgData.basicInfo.phone,
              // renzhi_now:newmsgData.industry.gscontent.renzhi_now[0].position+','+newmsgData.industry.gscontent.renzhi_now[1].position+','+newmsgData.industry.gscontent.renzhi_now[0].entname,
              // netcreit:netBlacklist,
              // touzi_now:'',
              // lawDetail:newmsgData.judicial.fxcontent.zhixing[0].court,
              // shixinB:shixinBlack,
              // hightrisk:hightrisklist,
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
                  label: '同盾'
                },
                 {
                  value: '选项4',
                  label: '魔蝎'
                }, 
                {
                  value: '选项5',
                  label: '全部'
                }
              ],
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },          
          querySelect(formName){  
            this.$refs[formName].validate((valid)=>{
              if(valid){
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
<<<<<<< HEAD
                    this.$axios.get(this.HOST+'/api/v2/search',{
=======
                    this.$axios.get(this.HOST+'/api/v1/search',{
>>>>>>> 4aaa06e46aa2269a4bb9f52ef6de200d5f2c11f7
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
                        localStorage.setItem("msgData",msgData);
                        this.$router.push('/queryResult');
                      } 
                    })
                    .catch(error=>{
                      // //alert('暂无服务');
                        console.log(error.response);
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
                          if(this.$route.path=='/huifaQuery'){
                            //刷新当前页面
                            window.location.reload();
                          }else{
                            this.$router.push('/huifaQuery');
                          }
                      } 
                    })
                    .catch(error=>{
                      //alert('暂无服务');
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
                          if(this.$route.path=='/tongdunQuery'){
                            //刷新当前页面
                            window.location.reload();
                          }else{
                            this.$router.push('/tongdunQuery');
                          }
                      } 
                    })
                    .catch(error=>{
                      //alert('暂无服务');
                        console.log(error.response);
                    })
                }else if(this.elementvalue=="选项4"){
                    this.$router.push('/moxieQuery');
                    if(this.$route.path=='/moxieQuery'){
                      //刷新当前页面
                      window.location.reload();
                    }else{
                      this.$router.push('/moxieQuery');
                    }
                }else if( this.elementvalue=="选项5"){
                    this.$axios.defaults.withCredentials=true;
<<<<<<< HEAD
                    this.$axios.get(this.HOST+'/api/v2/multiple/search',{
=======
                    this.$axios.get(this.HOST+'/api/v1/multiple/search',{
>>>>>>> 4aaa06e46aa2269a4bb9f52ef6de200d5f2c11f7
                      params:{
                          account_name:ruleName,
                          id_number:ruleCardId,
                          account_mobile:rulePhone,
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
                        localStorage.setItem("msgData",msgData);
                        this.$router.push('/queryResult');
                      } 
                    })
                    .catch(error=>{
                      //alert('暂无服务');
                        console.log(error.response);
                    })
                }
               
              }
            });

          }
        },
        computed: {

        },
        mounted(){
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
  table{
    border: 1px solid #ccc;
    border-collapse: collapse;
    table-layout: fixed;
    width: 85%;
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
  .el-button{
      background:#3c88f6;
      height: 30px;
      width: 100px;
      border-radius:4px; 
      color: #fff;
      font-weight: bold;
      font-size: 12px;
  }
  .query_orgn .el-select{
      width: 140px;
  }
  .query_name .el-form-item{
      width: 150px ; 
      display: inline-block;
  }
  .query_cardid .el-form-item,.query_phone .el-form-item{
      width: 240px;
      display: inline-block;
  }
  @media screen and (max-width: 1500px){
      .query_orgn .el-select{
          width: 110px;
      }
      .query_name .el-form-item{
          width: 120px ; 
          display: inline-block;
      }
      .query_cardid .el-form-item,.query_phone .el-form-item{
          width: 170px;
          display: inline-block;
      }
      .el-button{
        position: relative;
        right: 30px;
      }
      .el-container{
        width: 85%;
      }
  }

  @media screen and (max-width: 1400px){
     .el-container{
        font-size: 13px;
     }
     .queryResult{
        min-width: 1342px;
     }

  }
</style>
