<template>
  <div class="net_credit">
    <div class="net_personal">
      <div class="net_pInfo">
        <span>网贷失信人：</span><span>张三</span>
      </div>
      <div class="net_pInfo">
        <span>网贷失信人：</span><span>张三</span>
      </div>
      <div class="net_pInfo">
        <span>3条黑名单信息，涉及金额23421元</span>
      </div>
    </div>

    <div class="net_personal">
      <div class="net_pInfo">
        <span>网贷失信人：</span><span>张三</span>
      </div>
      <div class="net_pInfo">
        <span>网贷失信人：</span><span>张三</span>
      </div>
      <div class="net_pInfo">
        <span>3条黑名单信息，涉及金额23421元</span>
      </div>
    </div>

    <div class="net_personal_msg">
      <div class="net_pInfo_left">
        <div><span>未还金额：</span><span>412341234元</span></div>
        <div><span>借款时间：</span><span>2015-4-24</span></div>
      </div>
      <div class="net_pInfo_right">
        <div><span>逾期笔数：</span><span>张三</span></div>
        <div><span>平台：</span><span>拍拍贷</span></div>
      </div>
    </div>
  </div>   
</template>

<script>
    export default {
        data() {
            return { 
             
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        computed: {

        },

    }

</script>

<style scoped>
  .net_credit{
    width:100%;
    height:800px;
    background:#fff;
    padding:10px 20px;
    box-sizing:border-box;
  }
  .net_personal{
    height: auto;
    border-bottom: 1px solid #666;
    margin-bottom: 10px;
  }
  .net_pInfo{
    height: auto;
    min-height: 36px;
    line-height: 36px;
  }
  .net_personal_msg{
    height: 80px;
    border-bottom: 1px solid #666;
    display: flex;
    display: -webkit-flex;
    align-items:center;
  }
  .net_pInfo_left,.net_pInfo_right{
    float: left;
    margin-left: 30px;
  }
  .net_pInfo_left div,.net_pInfo_right div{
    margin-bottom: 10px;
  }
</style>
