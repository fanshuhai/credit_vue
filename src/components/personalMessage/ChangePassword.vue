<template>
    <div class="huifa">
      <div class="huifa_main">
          <div style="width:60%;">
            <el-form :model='ruleForm' :rules='rules' ref='ruleForm' class="demo-ruleForm changePassword">
                <div style="margin-bottom:20px;text-align:center;">
                   <span class="pcontent" >原密码</span>
                    <el-form-item  style="width:70%;display:inline-block;"  prop='originalpass'>
                      <el-input placeholder="若包含字母，注意区分大小写" v-model="ruleForm.originalpass" ></el-input>
                    </el-form-item>
                </div>
                 <div style="margin-bottom:20px;text-align:center">   
                    <span class="pcontent"  >新密码</span>
                    <el-form-item  style="width:70%;display:inline-block"    prop='pass'>
                      <el-input type='password' placeholder="8-16位，至少含数字/字母/字符两种组合" v-model="ruleForm.pass" ></el-input>
                    </el-form-item>
              </div>  
              <div style="margin-bottom:30px;text-align:center">
                    <span class="pcontent"  >确认密码</span>
                    <el-form-item style="width:70%;display:inline-block"    prop='checkpass'>
                       <el-input type='password' style='height:40px' placeholder="8-16位，至少含数字/字母/字符两种组合" v-model="ruleForm.checkpass" ></el-input>
                    </el-form-item>
              </div>
              <div style="text-align:right">
                <el-button class="themeG_b" @click="submitForm('ruleForm')" >提交</el-button>
              </div>
            </el-form>
          </div>
        
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            let validataOpass=(rule,value,callback)=>{
              if(value===''){
                callback(new Error('密码不能为空'));
              }else{
                callback();
              }
            };

            let validataPass=(rule,value,callback)=>{
              let regPass=/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/;
              if(value===''){
                callback(new Error('密码不能为空'))
              }else if(regPass.test(value)===false){
                callback(new Error('密码8-16位，至少含数字/字母/字符两种组合'));
              }else{
                callback();
              }
            };

            let validataeCheckpass=(rule,value,callback)=>{
              if(value===''){
                callback(new Error('请再次输入密码'))
              }else if(value!==this.ruleForm.pass){
                callback(new Error('两次输入密码不一致'))
              }else{
                callback();
              }
            };
            return { 
              ruleForm:{
                originalpass:'',
                pass:'',
                checkpass:''
              },
              rules:{
                originalpass:[
                  {validator:validataOpass,trigger:'blur'}
                ],
                pass:[
                  {validator:validataPass,trigger:'blur'}
                ],
                checkpass:[
                  {validator:validataeCheckpass,trigger:'blur'}
                ]
              }
            }
        },
        methods:{
          submitForm(formName){
            this.$refs[formName].validate((valid)=>{
              if(valid){
                  this.$axios.defaults.withCredentials=true;
                  this.$axios.get(this.HOSTLogin+'/mgr/changePwd',{
                    params:{
                      oldPwd:this.ruleForm.originalpass,
                      newPwd:this.ruleForm.pass,
                      rePwd:this.ruleForm.checkpass,
                    }
                  })
                  .then(res=>{
                    console.log(res.data);
                    if(res.data.status=="104"){
                        this.$message({
                          message:res.data.message,
                          type:'success',
                        })
                    }
                    if(res.data.status=="410"){
                        this.$message({
                          message:res.data.message,
                          type:'error',
                        })
                    }
                  })
                  .catch(error=>{
                    alert('暂无服务');
                      console.log(error.response);
                  })
              }else{
                  return false;
              }
            })
          },
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
    height: auto;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button{
      height: 45px;
      width: 330px;
      border-radius:4px; 
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 40px;
      padding-left: 40px
  }
  .pcontent{
        padding-right:20px;
        text-align:right;
        width:100px;
        display: inline-block;
        color:#666;
        font-size: 18px;
  }
  @media screen and (max-width: 1500px){
    .huifa_main{
      width: 53%;
    }
  }
</style>
