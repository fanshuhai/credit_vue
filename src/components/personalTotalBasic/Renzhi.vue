<template>
  <div>
    <div class="header_info">任职信息</div>
    <div v-if="renzhis.legalPerson.length>=1" v-for="(renzhi,index) in renzhis.legalPerson" class="case_info">
          <div class="case_info_header">担任法定代表人信息{{index+1}}</div>
          <div class="case_detail">
            <div class="case_detail_left">职务：</div>
            <div class="case_detail_right">法定代表人</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业名称：</div>
            <div class="case_detail_right">{{renzhi.entName}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业类型：</div>
            <div class="case_detail_right">{{renzhi.entType}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业状态：</div>
            <div class="case_detail_right">{{renzhi.entStatus}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业注册号：</div>
            <div class="case_detail_right">{{renzhi.regNo}}</div>
          </div>
    </div>
    <div v-if="renzhis.manager.length>=1" v-for="(renzhi,index) in renzhis.manager" class="case_info">
          <div class="case_info_header">担任高管信息{{index+1}}</div>
          <div class="case_detail">
            <div class="case_detail_left">职务：</div>
            <div class="case_detail_right">{{renzhi.position}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业名称：</div>
            <div class="case_detail_right">{{renzhi.entName}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业类型：</div>
            <div class="case_detail_right">{{renzhi.entType}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业状态：</div>
            <div class="case_detail_right">{{renzhi.entStatus}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业注册号：</div>
            <div class="case_detail_right">{{renzhi.regNo}}</div>
          </div>
    </div>

    <div v-if="cstatus===2" class="nomseg">
      <span>查询成功，暂无数据</span>
    </div>

  </div>

 
</template>

<script>
    export default {
        data() {
            return { 
              renzhis:'',
              cstatus:'',
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        created(){
            
        },
        computed: {

        },
        mounted(){
          const msgData=localStorage.getItem('msgData');
          const newmsgData=JSON.parse(msgData);
          // const xueli=newmsgData.mx_touzi[0].education_list[0];
          // console.log(xueli);
          const renzhi={};
          if(typeof(newmsgData.investment)==='undefined'){
            this.cstatus=2;
          }else{
            if(newmsgData.investment.message=='获取数据成功'){
              renzhi.renzhiNow=newmsgData.investment.data.result;
              this.renzhis=renzhi.renzhiNow;
              if(renzhi.renzhiNow.legalPerson.length===0 && renzhi.renzhiNow.manager.length===0){
              	this.cstatus=2;
              }else{
              	this.cstatus=1;
              }
              
            }else{
              this.cstatus=2;
            }
          }
        }

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
      box-sizing: border-box;
    }
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      box-sizing: border-box;
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
      width: 13%;
      padding-left: 10px;
    }
    .case_detail_right{
      width: 85%;
      height: auto;
    }
</style>
