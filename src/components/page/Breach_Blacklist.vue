<template>
  <div>
    <div class="header_info">3条失信信息，涉及金额123123元</div>
    <div class="case_info">
      <div class="case_info_header">失信信息一</div>
      <div class="case_detail">
        <div class="case_detail_left">案号：</div>
        <div class="case_detail_right">北京市海淀人民法院</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">执行法院：</div>
        <div class="case_detail_right">2015年海民（商）初字第01572号</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">省份：</div>
        <div class="case_detail_right">2018456</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">生效法律文书确定的义务：</div>
        <div class="case_detail_right">3241京23412341</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">被执行人的履行情况：</div>
        <div class="case_detail_right">北京市海淀人民法院</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">发布时间：</div>
        <div class="case_detail_right">北京北京市海淀人民法院北京市海淀人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民北京市海淀人民法院北京市海淀人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法</div>
      </div>
    </div>
    <div class="case_info">
      <div class="case_info_header">失信信息二</div>
      <div class="case_detail">
        <div class="case_detail_left">案号：</div>
        <div class="case_detail_right">北京市海淀人民法院</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">执行法院：</div>
        <div class="case_detail_right">2015年海民（商）初字第01572号</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">省份：</div>
        <div class="case_detail_right">2018456</div>
      </div>
      <div class="case_detail">
        <div class="case_detail_left">生效法律文书确定的义务：</div>
        <div class="case_detail_right">3241京23412341</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">被执行人的履行情况：</div>
        <div class="case_detail_right">北京市海淀人民法院</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">发布时间：</div>
        <div class="case_detail_right">北京北京市海淀人民法院北京市海淀人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民北京市海淀人民法院北京市海淀人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法院北京市海淀人民人民法</div>
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
    .header_info{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 20px;
      margin-bottom: 10px; 
    }
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
    }
    .case_info_header{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 10px; 
      color: #999;
      font-size: 14px;
      font-weight: bold; 
    }
    .case_detail{
      height: auto;
      min-height: 36px;
      border-top: 1px solid #ddd;
    }
    .case_detail_left,.case_detail_right{
      height: auto;
      min-height: 36px;
      line-height: 36px;
      font-weight: bold;
      display: inline-block;
      vertical-align: top;
    }
    .case_detail_left{
      width: 20%;
      height: auto;
    }
    .case_detail_right{
      width: 70%;
      height: auto;
    }
</style>
