<template>
    <div class="moerCredit">
       <el-container>
           <el-header>
               <div class="header_contain">
                <div class="header_title contain-center">
                  <p>征信查询111111</p>
                </div>
                <div class="header_radio">
                 <!--  <span @click="changeContain"><el-radio  v-model="radio" label="1">个人</el-radio></span> -->
                  <span><el-radio  v-model="radio" label="1">个人</el-radio></span>
                  <span style='margin-left:40px' ><el-radio  v-model="radio" disabled label="2">企业</el-radio></span> 
                </div>
                <div v-if="seen_personal" class="header_input">
                  <el-row :gutter="30">
                    <el-form :model='ruleForm' :rules='rules' ref='ruleForm'>
                      <el-col :span="6">
                        <div class="">
                          <span>姓&nbsp;&nbsp;&nbsp;名：</span>
                          <el-form-item  prop='name'>
                            <el-input placeholder="请输入内容" v-model="ruleForm.name" clearable></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <span>身份证号：</span>
                          <el-form-item  prop='cardId'>
                            <el-input placeholder="请输入内容" v-model="ruleForm.cardId" clearable></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <span>手机号码：</span>
                          <el-form-item  prop='phone'>
                           <el-input placeholder="请输入内容" v-model="ruleForm.phone" clearable></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div class="">
                          <el-button @click="QueryResult('ruleForm')" plain>查询</el-button>
                        </div>
                      </el-col>
                    </el-form>
                  </el-row>
                </div>
                <div v-if="seen_enterprise" class="header_input header_enterprise">
                  <div class="qiye_name">
                    <span>企业名称：</span>
                    <el-input placeholder="请输入内容" v-model="input4" clearable></el-input>
                    <span style='color:red'>*</span>
                  </div>  
                  <div class="qiye_num">
                    <span>纳税编号：</span>
                    <el-input placeholder="请输入内容" v-model="input5" clearable></el-input>
                  </div>
                  <div class="contain-center">
                    <el-button @click='QueryResult' plain>查询</el-button>
                  </div>
                </div>
               </div>
           </el-header>
           <el-main>
               <div class="main_contain">
                 <el-row >
                  <el-col :span="4">
                   <div class="grid-content contain-center main_contain_1">
                     <p>摩尔征信数据产品</p>
                   </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                      <ul>
                        <li>个人信息</li>
                        <li>基本信息</li>
                        <li>学历</li>
                        <li>资格证书</li>
                        <li>投资</li>
                        <li>任职</li>
                        <li>偿付能力</li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                        <ul>
                          <li>信贷信息</li>
                          <li>银行信贷</li>
                          <li>信用卡</li>
                          <li>担保</li>
                        </ul>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                        <ul>
                          <li>司法信息</li>
                          <li>法律案件详情</li>
                        </ul>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                        <ul>
                          <li>反欺诈信息</li>
                          <li>失信黑名单</li>
                          <li>网贷黑名单</li>
                          <li>高风险名单</li>
                        </ul>
                    </div>
                  </el-col>
                  <el-col :span="4">
                     <div class="grid-content ">
                        <ul>
                          <li>公共信息</li>
                          <li>网购数据</li>
                          <li>运营商数据</li>
                          <li>社保</li>
                          <li>公积金</li>
                          <li>寿险</li>
                          <li>车险</li>
                          <li>水电</li>
                          <li>燃气</li>
                        </ul>
                     </div>
                  </el-col>
                 </el-row>
               </div>
           </el-main>
           <el-footer>
                <div class="footer_contain">
                 <div class="footer_title contain-center">
                   <p>第三方数据合作查询</p>
                 </div>
                 <div class="footer_bottom">
                   <el-row :gutter="80">
                    <el-col :span="6"><div @click="huifa" class="grid-content footer_thirdP1"></div></el-col>
                    <el-col :span="6"><div @click="tongdun" class="grid-content footer_thirdP2"></div></el-col>
                    <el-col :span="6"><div @click="moxieinfo" class="grid-content footer_thirdP3"></div></el-col>
                   </el-row>
                 </div>
               </div>
           </el-footer>
       </el-container>
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
            radio:'1',
            seen_personal:true,
            seen_enterprise:false,
            ruleForm:{
              name:'龚来富',
              cardId:'330121196212241414',
              phone:'13333333333',
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
          changeContain() {
            if(this.radio==1){
                this.seen_personal=false;
                this.seen_enterprise=true
            }else{
              this.seen_personal=true;
              this.seen_enterprise=false
            }
          },
          huifa() {
              this.$router.push('/huifa');
          },
          tongdun() {
              this.$router.push('/tongdun');
          },
          moxieinfo(){
              this.$router.push('/moxie');
          },
          QueryResult(formName){  
            this.$refs[formName].validate((valid)=>{
              if(valid){
                this.$axios.get(this.HOST+'/api/v2/search',{
                  params:{
                    name:this.ruleForm.name,
                    cardId:this.ruleForm.cardId,
                    phone:this.ruleForm.phone,
                  }
                })
                .then(res=>{
                  console.log(res.data);
                  if(res.data===''||res.data===null||res.data==='{}'){
                    this.$message('暂无信息');
                  }else{
                    let msgData=res.data;
                    msgData=JSON.stringify(msgData);
                    localStorage.setItem("msgData",msgData);

                    this.$router.push('/queryResult');

                  }
                })
                .catch(error=>{
                  alert('暂无服务');
                    console.log(error);
                })
              }
            });
            
            
          },
        },
        computed: {

        },

    }

</script>

<style scoped>
    i{
      color: red !important;
    }
    .moerCredit .el-message-box__btns{
      text-align: center !important;
    }
    .moerCredit{
        height: 92.5vh;
        width: 100%;
        padding:0;
        margin: 0;
        background: #fff;
    }
    ul{
      padding-left: 35%;
    }
    ul li{
      list-style: none;
      font-size: 12px;
      margin-bottom: 8px;
      cursor: pointer;

    }
    ul li:nth-child(1){
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
        flex:2;
        margin: 0;
        padding: 0;
    }
    .el-main{
        flex:1.5;
        margin: 0;
        padding: 0;
        background: #f0feff;
        margin: 0;
        padding: 0

    }
    .el-footer{
        flex:1;
        margin: 0;
        padding: 0;
    }
    .header_contain{
      width: 75%;
      height: 100%;
      margin: 0 auto;
    }
    .header_title{
      height:50%;
      font-size: 40px;
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
      background:#00D1B2;
      height: 45px;
      width: 120px;
      border-radius:10px; 
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 4px;
      position: relative;
      bottom:8px;
      left: 20px;
    }
    .header_enterprise{
      padding: 0;
    }
    .header_enterprise .el-button{
      margin: 15px auto;
    }
    .qiye_name,.qiye_num{
      width: 40%;
      margin:10px auto;
    }
    .main_contain{
      width: 75%;
      height: 100%;
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
      width: 75%;
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
      padding-left: 21%;
    }
    .footer_bottom .el-row .el-col{
      height: 80%;
    }
    .footer_thirdP1{
      background-image: url(../../assets/img/huifa.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .footer_thirdP2{
      background-image: url(../../assets/img/tongdun.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .footer_thirdP3{
      background-image: url(../../assets/img/moxie.png);
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
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
      height: 100%;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>
