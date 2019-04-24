<template>
    <div class="moerCredit">
      <el-container style="background:#f0f0f0;">
           <el-aside width='200px' style="background:#fff;">
                <ul class="sidebar_main"> 
                    <li class="personal" :class="{'active':isActive}" @click="pMessage">个人信息</li>
                    <li class="personal" :class="{'active2':isActive2}" @click="queryLog">查询记录</li>
                    <li class="personal" :class="{'active3':isActive3}" @click="changPassword">修改密码</li>
                </ul>
           </el-aside>
           <el-container class='main_mo' style="margin-left:20px;">
               <router-view></router-view>
           </el-container>
        </el-container> 
    </div>
</template>

<script>
    export default {
        data() {
          return { 
            
            collapse: false,
          }
        },
        methods:{
          
         
          pMessage(){
              this.$router.push('/pMessage');
              
          },
          queryLog(){
              this.$router.push('/queryLoy');
          },
          changPassword(){
              this.$router.push('/changePassword');
          }
        },
        computed: {
            isActive:function(){
              if(this.$route.path.replace('/','')=='pMessage'){
                return true;
              }else{
                return false;
              }
            },
            isActive2:function(){
              if(this.$route.path.replace('/','')=='queryLoy'){
                return true;
              }else{
                return false;
              }
            },
            isActive3:function(){
              if(this.$route.path.replace('/','')=='changePassword'){
                return true;
              }else{
                return false;
              }
            },
        },

    }

</script>

<style scoped>
    i{
      color: red !important;
    }
    .sidebar_main{
      position:fixed;
    }
    .moerCredit .el-message-box__btns{
      text-align: center !important;
      font-family: "Source Han Sans CN-Regular";
    }
    .moerCredit{
        height: 92.5vh;
        width: 100%;
        padding:0;
        margin: 0;
        background: #fff;
    }
    .main_mo ul{
      padding-left: 35%;
      position: relative;
    }
    .main_mo ul li{
      list-style: none;
      font-size: 12px;
      margin-bottom: 8px;
      cursor: pointer;

    }
    .main_mo ul li:nth-child(1){
      font-size: 18px;
      color: #000;
      margin-bottom: 12px;
      font-weight: bold;
    }
    
    .el-form-item{
      display: inline-block;
      /*width: 100%;*/
    }
    .contain-center{
      display: flex;
      display: -webkit-flex;
      align-items:center;
      justify-content:center;
    }
    .el-container{
        height: 100%;
         width: 100%;
    }
    .el-header{
        flex:1.5;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        margin: 10px 10px 20px 0;
    }
    .el-main{
        flex:1.5;
        margin: 0;
        padding: 0;
        background: #fff;
        margin: 0;
        padding:0;
        margin-right:10px;

    }
    .el-footer{
        flex:1;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        margin: 20px 10px 0 0;
        background: #fff;
    }
    .header_contain{
      width: 100%;
      height: 100%;
      background: #fff;
    }
    .header_title{
      height:50%;
      font-size: 45px;
      color: #30af90;
      position: relative;
    }
    .header_title p:before,.header_title p:after{
        content:'';
        width: 73px;
        height: 70px;
        line-height: 70px;
        background-size: 65px 20px; 
        background-repeat:no-repeat; 
        background-position: center; 
        display: inline-block;
        position: absolute;
    }
    
    .header_radio{
      height: 8%;
      border-bottom: 1px dashed #00D1B2;
    }
    .header_input{
      height: 40%;
      padding:20px;
      margin-top: 20px;
      box-sizing:border-box;
    }
    .header_input .el-input{
      border:1px solid #ccc ;
      color: #000;
    }
    .header_input span{
      letter-spacing: 2px;
    }
    .header_input .el-button{
      background:#30af90;
      height: 36px;
      text-align: center;
      width: 180px;
      border-radius:10px; 
      color: #fff;
      font-size: 16px;
      letter-spacing: 25px;
      padding-left: 50px;
    }
    .qiye_name,.qiye_num{
      width: 40%;
      margin:10px auto;
    }
    .main_contain_title{
      width: 75%;
      text-align: center;
      margin:0 auto;
      height: 20%;
      line-height: 350%;
      font-size: 22px;
    }
    .main_contain_title:before,.main_contain_title:after{
        content:''; 
        width: 84px;
        height: 78px;
        line-height: 70px;
        background-size: 50px 15px; 
        background-repeat:no-repeat; 
        background-position: center; 
        display: inline-block;
        position: absolute;

    }
   
    .main_contain{
      width: 90%;
      height: 80%;
      margin: 0 auto;
    }
    .main_contain_1{
      font-size: 18px;
      font-weight:bold;
      border-right: 1px solid #ccc; 
    
    }
    .main_contain_1 p{
      cursor: pointer;
    }
    .footer_contain{
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }
    .footer_title{
      height: 40%;
      font-size: 20px;
    }
    .footer_bottom{
      height: 60%;
    }
    .footer_bottom .el-row{
      height: 100%;
      padding:0 10%;
    }
    .footer_bottom .el-row .el-col{
      height: 80%;
    }
    
    .main_contain .el-row {
      height: 100%;
      padding:20px;
    &:last-child {
        margin-bottom: 0;
      }
    }
    .main_contain .el-col {
      height: 100%;
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
      height: 60%;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    .el-aside{
      box-sizing: border-box;
    }
    .sidebar_main{
        width: 200px;
        min-height: 50px;
        padding-left: 0;
        padding-top: 20px;
    }
    .sidebar_main li{
        min-height: 50px;
        line-height: 50px;
        color: #666;
        padding-left: 80px;
        font-family: 'SourceHanSansCN-Medium';
        margin-bottom: 40px;
        font-weight: 600;
    }
    .sidebar_main .personal{
        cursor: pointer;
    }
   
    
    .active,.active2,.active3{
        border-right: 5px solid #30af90;
        color: #30af90 !important;
        background: #d2e3fd;
    }
    @media screen and (max-width: 1500px){

        .moerCredit{
            height: 90.5vh;
        }
    }

    @media screen and (max-width: 1400px){

        .moerCredit{
            height: 89.5vh;
        }
    }
</style>
