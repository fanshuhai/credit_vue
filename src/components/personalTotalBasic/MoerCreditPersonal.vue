<template>
    <div class="moerCredit_person">
      <el-container style="background:#f3f3f3;">
           <el-container class='main_mo'>
               <el-header>
                   <div class="header_contain">
                      <div class="header_title contain-center">
                        <p>个人征信查询</p>
                      </div>
                      <div class="header_input">
                        <el-row :gutter="30" type="flex" justify="center">
                          <el-form :model='ruleForm' :rules='rules' :inline="true"  ref='ruleForm' style="width:100%;">
                            <el-col :span="7">
                                <el-form-item label="姓                                      名："  prop="name">
                                    <el-input placeholder="请输入内容" v-model="ruleForm.name" clearable>
                                    	
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="身份证号：" prop='cardId'>
                                  <el-input class="cardId_style" placeholder="请输入内容" v-model="ruleForm.cardId" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="手机号码："  prop='phone'>
                                 <el-input placeholder="请输入内容" v-model="ruleForm.phone" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                              <div class=""  >
                                <el-button @click="QueryResult('ruleForm')" >查询</el-button>
                              </div>
                            </el-col>
                          </el-form>
                        </el-row>
                      </div>
                   </div>
               </el-header>
               <el-main>
                   <div class="main_contain_title">摩尔征信数据产品</div>
                   <div class="main_contain">
                     <el-row >
                      <el-col :span="4">
                        <div class="grid-content">
                          <ul>
                            <li>身份验证</li>
                            <li>身份证核查</li>
                            <li>手机号核查</li>
                            <li>肖像核查</li>
                            <li>OCR服务</li>
                          </ul>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">
                            <ul>
                              <li>个人信用反欺诈</li>
                              <li>司法信息</li>
                              <li>多头借贷</li>
                              <li>手机号检测</li>
                              <li>身份证号检测</li>
                            </ul>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">
                            <ul>
                              <li>个人账户核查</li>
                              <li>银联账单验证</li>
                              <li>银联消费画像</li>
                            </ul>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">
                            <ul>
                              <li>资产信息</li>
                              <li>个人工商投资</li>
                              <li>车辆信息</li>
                              <li>房产信息</li>
                            </ul>
                        </div>
                      </el-col>
                      <el-col :span="5">
                         <div class="grid-content ">
                            <ul>
                              <li>授权数据</li>
                              <li>网购消费</li>
                              <li>运营商</li>
                              <li>社保</li>
                              <li>公积金</li>
                              <li>学历</li>
                              <li>车险</li>
                            </ul>
                         </div>
                      </el-col>
                     </el-row>
                   </div>
               </el-main>
              <!--  <el-footer>
                    <div class="footer_contain">
                     <div class="footer_title contain-center">
                       <p>第三方数据合作查询</p>
                     </div>
                     <div class="footer_bottom">
                       <el-row >
                        <el-col :span="5"><div @click="huifa" class="grid-content footer_thirdP1"></div></el-col>
                        <el-col :span="5"><div @click="tongdun" class="grid-content footer_thirdP2"></div></el-col>
                        <el-col :span="5"><div @click="moxieinfo" class="grid-content footer_thirdP3"></div></el-col>
                        <el-col :span="5"><a href="http://c.acedata.com.cn/login" target="_blank"><div  class="grid-content footer_thirdP4"></div></a></el-col>
                        <el-col :span="4"><a href="http://apidata.m.cn/" target="_blank"><div  class="grid-content footer_thirdP5"></div></a></el-col>
                       </el-row>
                     </div>
                   </div>
               </el-footer> -->
           </el-container>
        </el-container> 
    </div>
</template>

<script>
    // import vSidebar from '../common/Sidebar_moerCredit.vue';
    import {validataName} from '../common/http.js';
    import {validataCardId} from '../common/http.js';
    import {validataPhone} from '../common/http.js';
    import bus from '../common/bus'
    export default {
        data() {

//        let validataCardId=(rule,value,callback)=>{
//          let regId=/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/;
//          let cardIdValue=$.trim(value);
//          if(value===''){
//            callback(new Error('请输入身份证号码'))
//          }else if(regId.test(cardIdValue)===false){
//            callback(new Error('身份证号码不正确'));
//          }else{
//            callback();
//          }
//        };
//
//        let validataPhone=(rule,value,callback)=>{
//          let regPhone=/^1[0-9]{10}$/;
//          let phoneValue=$.trim(value);
//          if(value===''){
//            callback(new Error('请输入手机号码'))
//          }else if(regPhone.test(phoneValue)===false){
//            callback(new Error('手机号码不正确'))
//          }else{
//            callback();
//          }
//        };
          return { 
            totalMessage:'',
            radio:'1',
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
            collapse: false,
            isActive:true,
            isActive2:false,
          }
        },
        components:{
            //vHead, vSidebar, vTags
        },
        methods:{
          // huifa() {
          //     this.$router.push('/huifa');
          // },
          // tongdun() {
          //     this.$router.push('/tongdun');
          // },
          // moxieinfo(){
          //     this.$router.push('/moxie');
          // },
          QueryResult(formName){  
            this.$refs[formName].validate((valid)=>{
              let ruleName=$.trim(this.ruleForm.name);
              let ruleCardId=$.trim(this.ruleForm.cardId);
              let rulePhone=$.trim(this.ruleForm.phone);
              if(valid){
                this.$axios.defaults.withCredentials=true;
                this.$axios.get(this.HOST3+'/api/v3/search',{
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
                    let msgData=res.data;
                    localStorage.clear();
                    let inquireMessage={};
                    inquireMessage.name=this.ruleForm.name;
                    inquireMessage.cardId=this.ruleForm.cardId;
                    inquireMessage.phone=this.ruleForm.phone;
                    inquireMessage=JSON.stringify(inquireMessage);
                    localStorage.setItem("InquireMsg",inquireMessage);
                    msgData=JSON.stringify(msgData);
                    localStorage.setItem("InstitutionalChoice",'选项1');
//                  localStorage.setItem("msgData",msgData);

                    //保存查询个人信息
                    localStorage.setItem('name',this.ruleForm.name);
                    localStorage.setItem('cardId',this.ruleForm.cardId);
                    localStorage.setItem('phone',this.ruleForm.phone);

                    // this.$router.replace('/queryResult');
                    // 
                    this.totalMessage=res.data;
                    this.totalMessage.queryWay='local';
                    localStorage.setItem("msgData",JSON.stringify(this.totalMessage));
                    // 兄弟组件传信息
                    bus.$emit('cMessage',this.totalMessage)

                    this.$router.push('/queryResult');

                  } 
                })
                .catch(error=>{
                  // alert('暂无服务');
                    console.log(error.response);
                })
              }
            });
            
            
          },
          personal(){
              this. isActive=true;
              this. isActive2=false;
          },
          company(){
              // this. isActive=false;
              // this. isActive2=true;
              // this.$router.push('moerCreditCompany'); 
          }
        },
        computed: {

        },
        mounted(){
        	console.log(sessionStorage.getItem('inputData'));
        }

    }

</script>

<style scoped>
    i{
      color: red !important;
    }
    .moerCredit_person .el-message-box__btns{
      text-align: center !important;
      font-family: "Source Han Sans CN-Regular";
    }
    .moerCredit_person{
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
      color:#666;

    }
    .main_mo ul li:nth-child(1){
      font-size: 18px;
      margin-bottom: 12px;
    }
    .main_mo ul li:nth-child(1):before{
      content:'';
      position: absolute;
      width: 15px;
      height: 15px;
      top: 6px;
      left: 25%;
      background-image: url(../../assets/img/tb3.png); 
    }
    .name_style{
      padding-left: 70px;
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
        flex:2.5;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        margin: 0px 10px 10px 0;
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
    .header_title p:before{
        background-image: url(../../assets/img/tb1.png);
        left: 37.5%;
    }
    .header_title p:after{
        background-image: url(../../assets/img/tb2.png); 
        left: 58%;
    }
    .header_radio{
      height: 8%;
      border-bottom: 1px dashed #00D1B2;
    }
    .header_input{
      height: 40%;
      padding:20px 10%;
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
      color: #666;
    }
    .el-form-item__label{
    	background: red;
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
    .main_contain_title:after{
        background-image: url(../../assets/img/tb2.png); 
        left: 60%;
    }
    .main_contain_title:before{
        background-image: url(../../assets/img/tb1.png); 
        left: 46%;
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
      color:#666;
    }
    .footer_title p:before,.footer_title p:after{
        content:''; 
        width: 75px;
        height: 25px;
        line-height: 70px;
        background-size: 50px 15px; 
        background-repeat:no-repeat; 
        background-position: center; 
        display: inline-block;
        position: absolute;

    }
    .footer_title p:after{
        background-image: url(../../assets/img/tb2.png); 
        left: 60%;
    }
    .footer_title p:before{
        background-image: url(../../assets/img/tb1.png); 
        left: 47%;
    }
    .footer_bottom{
      height: 60%;
    }
    .footer_bottom .el-row{
      height: 100%;
      padding:0 0%;
    }
    .footer_bottom .el-row .el-col{
      height: 80%;
    }
    .footer_thirdP1{
      background-image: url(../../assets/img/huifa.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: center;
      border-right: 1px solid #30af90;
    }

    .footer_thirdP2{
      background-image: url(../../assets/img/tongdun.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: center;
      border-right: 1px solid #30af90;
    }

    .footer_thirdP3{
      background-image: url(../../assets/img/moxie.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: center;
      border-right: 1px solid #30af90;
    }
    .footer_thirdP4{
      background-image: url(../../assets/img/about_logo.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: center;
      border-right: 1px solid #30af90;
    }
    .footer_thirdP5{
      background-image: url(../../assets/img/logo1.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: center;
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
      width: 200px !important;
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
        font-family: 'Source Han Sans CN';
        margin-bottom: 40px;
    }
    .sidebar_main .personal{
        cursor: pointer;
    }
    .sidebar_main .personal:before{
        background-image: url(../../assets/img/homepage/personal.png);
    }
    .sidebar_main .company:before{
        background-image: url(../../assets/img/homepage/company.png);
    }
    .sidebar_main li:before{
        content:'';
        width: 50px;
        height: 50px;
        background-size: 25px 25px; 
        background-repeat:no-repeat; 
        background-position: center; 
        display: inline-block;
        position: absolute;
        left: 30px;
    }
    .active,.active2{
        border-right: 5px solid #30af90;
        background: #d2e3fd;
    }

    @media screen and (max-width: 1500px){
        .header_input{
          height: 40%;
          padding:20px 4%;
          margin-top: 20px;
          box-sizing:border-box;
        }
        .name_style{
          padding-left: 60px;
        }

        .main_contain .el-row {
          height: 100%;
          padding:0;
        &:last-child {
            margin-bottom: 0;
          }
        }
        .header_input .el-button {
            height: 36px;
            width: 140px;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            letter-spacing: 25px;
            padding-left: 42px;
        }
        .el-aside{
          box-sizing: border-box;
          width: 150px !important;
        }
        .sidebar_main {
            width: 150px;
        }
        .el-header{
            flex:1.6;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            margin: 10px 10px 20px 0;
            min-height: 279px;
        }
        /*.el-main{
          flex:1.3;
          min-height: 262px;
        }*/
        .el-footer{
          flex:0.8;
          min-height: 140px;
        }
        .main_mo ul{
          padding-left: 30%;
        }

        .moerCredit{
            height: 90.5vh;
            width: 99.6%;
        }
        .header_title{
          height:50%;
          font-size: 35px;
        }
        .header_title p:before{
            width: 76px;
            height: 48px;
            left: 34.5%;
        }
        .header_title p:after{
            width: 70px;
            height: 48px;
            line-height: 70px;
            background-size: 65px 20px; 
            left: 59%;
        }
        .main_contain_title{
            width: 80%;
            height: 15%;
            line-height: 270%;
        }
        .main_mo ul li:nth-child(1):before {
            left: 20%;
        }
        .main_contain {
            padding-top: 15px;
            box-sizing: border-box;
        }
        .main_contain_title:before,.main_contain_title:after{
            height: 57px;

        }
        .main_contain_title:after{
            left: 63%;
        }
        .main_contain_title:before{
            left: 45%;
        }
        .footer_title p:after{ 
            left: 61.3%;
        }
        .footer_title p:before{
            left: 44%;
        }
        .footer_bottom{
            padding-top: 15px;
            box-sizing:border-box;
        }

    }
    @media screen and (max-width: 1400px){
        .main_mo ul li:nth-child(1){
          font-size: 16px;
        }
        .main_mo ul li:nth-child(1):before{
          top0: 3px;
        }
        .header_input .el-input{
          width: 160px;
        }
        .cardId_style{
          width: 180px !important;
        }
        .name_style{
          padding-left: 75px;
        }
        .el-header{
            flex:1.3;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            margin: 10px 10px 10px 0;
            min-height: 200px;
        }
        .el-main{
          flex:1.3;
          min-height: 230px;
        }
        .el-footer{
          flex:0.8;
          min-height: 130px;
          margin:10px 10px 0 0;
        }

        .moerCredit{
            height: 88.5vh;
            min-height: 88.5vh;
            min-width: 1344px;
        }
        .header_title{
          height:50%;
          font-size: 30px;
        }
        .header_title p:before{
            left: 38%;
            height: 43px;
        }
        .header_title p:after{
            width: 65px;
            height: 43px;
        }
        .main_contain_title {
            line-height: 260%;
            font-size: 18px;
            position: relative;
        }
        .main_contain {
            padding-top: 10px;
            box-sizing: border-box;
        }
        .main_contain_title:before,.main_contain_title:after{
            height: 45px;

        }
        .main_contain_title:after{
            left: 56.3%;
        }
       .main_contain_title:before{
            left: 34.8%;
        } 
        .footer_title{ 
            font-size: 17px;
            position: relative;
        }
        .footer_title p:after{ 
            left: 56.9%;
            top:25%;
        }
        .footer_title p:before{
            left: 36%;
            top:25%;
        }


    }
</style>
