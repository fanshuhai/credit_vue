<template>
    <div class="moerCredit">
      <el-container class="moerCredit_main" style="background:#f3f3f3;">
          <!-- <el-aside style="background:#fff;"> -->
                <v-sidebar></v-sidebar>
          <!-- </el-aside> -->
          <el-main class='main_mo' >
               <router-view></router-view>
          </el-main>
      </el-container> 
    </div>
</template>

<script>
    import vSidebar from '../common/Sidebar_moerCredit.vue';
    export default {
        data() {
          // let validataName=(rule,value,callback)=>{
          //   if(value===''){
          //     callback(new Error('请输入姓名'));
          //   }else{
          //     callback();
          //   }
          // };

          // let validataCardId=(rule,value,callback)=>{
          //   let regId=/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/;
          //   let cardIdValue=$.trim(value);
          //   if(value===''){
          //     callback(new Error('请输入身份证号码'))
          //   }else if(regId.test(cardIdValue)===false){
          //     callback(new Error('身份证号码不正确'));
          //   }else{
          //     callback();
          //   }
          // };

          // let validataPhone=(rule,value,callback)=>{
          //   let regPhone=/^1[0-9]{10}$/;
          //   let phoneValue=$.trim(value);
          //   if(value===''){
          //     callback(new Error('请输入手机号码'))
          //   }else if(regPhone.test(phoneValue)===false){
          //     callback(new Error('手机号码不正确'))
          //   }else{
          //     callback();
          //   }
          // };
          return { 
            
          }
        },
        components:{
            //vHead, vSidebar, vTags
            vSidebar
        },
        methods:{
        
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
      font-family: "Source Han Sans CN-Regular";
    }
    .moerCredit{
        min-height: 92.5vh;
        width: 100%;
        padding:0;
        margin: 0;
        background: #fff;
        box-sizing: border-box;
        /*overflow-y: scroll;*/
    }
    .moerCredit_main{
      min-height: 92.5vh;
    }
    .el-aside{
      box-sizing: border-box;
      width: 206px !important;
      border-right: 1px solid #E6E6E6;
      position: absolute;
      top: 0px;
      left: 0;
      height: 100%;
    }
    .el-main{
        overflow:inherit; 

    }
    .main_mo{
      margin-left: 210px;
      background: #fff;
      box-sizing: border-box;
      padding:0;
      height:92.5vh;
      overflow-y:auto; 
    }
</style>
