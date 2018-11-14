<template>
    <div class="huifa">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>>汇法网（第三方数据查询）
      </div>
      <div class="huifa_main changePassword">
          <div style="width:60%;">
            <el-form :model='ruleForm' :rules='rules' ref='ruleForm'>
                <div style="margin-bottom:10px;text-align:center;">
                   <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                    <el-form-item style="width:70%;display:inline-block;"  prop='name'>
                      <el-input placeholder="请输入内容" v-model="ruleForm.name" clearable></el-input>
                    </el-form-item>
                </div>
                 <div style="margin-bottom:10px;text-align:center">   
                    <span>身份证号：</span>
                    <el-form-item  style="width:70%;display:inline-block"    prop='cardId'>
                      <el-input placeholder="请输入内容" v-model="ruleForm.cardId" clearable></el-input>
                    </el-form-item>
              </div>  
              <div style="margin-bottom:30px;text-align:center">
                    <span>手机号码：</span>
                    <el-form-item style="width:70%;display:inline-block"    prop='phone'>
                       <el-input style='height:40px' placeholder="请输入内容" v-model="ruleForm.phone" clearable></el-input>
                    </el-form-item>
              </div>
              <div class="wrapper_button">
                <el-button @click="TQueryResult('ruleForm')">查询</el-button>
              </div>
            </el-form>
          </div>
        
      </div>
    </div>
</template>

<script>
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
              if(value===''){
                callback(new Error('请输入身份证号码'))
              }else if(regId.test(value)===false){
                callback(new Error('身份证号码不正确'));
              }else{
                callback();
              }
            };

            let validataPhone=(rule,value,callback)=>{
              let regPhone=/^1[0-9]{10}$/;
              if(value===''){
                callback(new Error('请输入手机号码'))
              }else if(regPhone.test(value)===false){
                callback(new Error('手机号码不正确'))
              }else{
                callback();
              }
            };
            return { 
              ruleForm:{
                name:'',
                cardId:'',
                phone:''
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
              }
            }
        },
        methods:{
          goBack(){
            this.$router.push('/moerCredit');
          },
          TQueryResult(formName){  
            this.$refs[formName].validate((valid)=>{
              if(valid){
                this.$axios.defaults.withCredentials=true;
                this.$axios.get(this.HOST+'/api/v1/hfw/search',{
                  params:{
                    name:this.ruleForm.name,
                    cardId:this.ruleForm.cardId,
                    phone:this.ruleForm.phone,
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
                    let HfmsgData=JSON.stringify(res.data);
                    let inquireMessage={};
                    inquireMessage.name=this.ruleForm.name;
                    inquireMessage.cardId=this.ruleForm.cardId;
                    inquireMessage.phone=this.ruleForm.phone;
                    inquireMessage=JSON.stringify(inquireMessage);
                    localStorage.setItem("InquireMsg",inquireMessage);
                    localStorage.setItem("InstitutionalChoice",'选项2');
                    localStorage.setItem("newHfMsg",HfmsgData);
                    this.$router.push('/huifaQuery');
                  }
                })
                .catch(error=>{
                  alert('暂无服务');
                    console.log(error);
                })
              }
            });
            // this.$router.push('/huifaQuery')
          }
        },
        computed: {

        },
    }

</script>

<style scoped>
  .huifa{
    height: 92.5vh;
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
    padding:30px 0 0  0;
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
      border-radius:4px; 
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
