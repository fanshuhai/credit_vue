<template>
  <div>
    <div class="case_info">
      <div class="case_info_header">高风险名单</div>
      <div v-for="risk_item in risk_items" class="case_detail">
        <div class="case_detail_left">{{risk_item.risk_name}}</div>
        <div class="case_detail_right">
          <div class="rule_descript">规则描述：</div>
          <ul>
            <li>2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号2015年海民（商）初字第01572号</li>
            <li>2015年海民（商）初字第01572号</li>
          </ul> 
        </div>
      </div>
     <!--  <div class="case_detail">
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
      </div> -->
    </div>
  </div>   
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
    const risk_items=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
    const risk_items_d=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items.risk_detail;
    console.log(newmsgData);
    export default {

        data() {
            return { 
             risk_items:risk_items,
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
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
    }
    ul{
      padding-left:4%; 
    }
    li{
      color:#ff523f;
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
      display: flex;
      display: -webkit-flex;
      align-items: center;
    }
    .case_detail_left,.case_detail_right{
      height: auto;
      min-height: 36px;
      line-height: 36px;
      font-weight: bold;
      display: inline-block;
    }
    .case_detail_left{
      width: 28%;
      height: auto; 
      text-align: center;
    }
    .case_detail_right{
      width: 70%;
      height: auto;
      border-left:1px solid #000;
    }
    .rule_descript{
      padding-left:4%;
    }
</style>
