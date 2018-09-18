<template>
  <div>

    <div class="header_info">基本信息</div>
    <div v-if="cstatus===1"  class="case_info">
      <div class="case_info_header">个人基本信息</div>
      <div class="case_detail">
        <div class="case_detail_left">姓名：</div>
        <div class="case_detail_right">{{basicInfos.name}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">身份证号码：</div>
        <div class="case_detail_right">{{basicInfos.cardId}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">出生日期：</div>
        <div class="case_detail_right">{{basicInfos.birthdate}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">手机号码：</div>
        <div class="case_detail_right">{{basicInfos.phone}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">曾用名：</div>
        <div class="case_detail_right">暂无信息</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">性别：</div>
        <div class="case_detail_right">暂无信息</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">年龄：</div>
        <div class="case_detail_right">{{basicInfos.age}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">户籍所在地：</div>
        <div class="case_detail_right">暂无信息</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">原始发证地区：</div>
        <div class="case_detail_right">暂无信息</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">证件校验结果：</div>
        <div class="case_detail_right">暂无信息</div>
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
              basicInfos:'',
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
          if(typeof(newmsgData.basicInfo)==='undefined'){
            this.cstatus=2;
          }else{
            
            this.basicInfos=newmsgData.basicInfo;
            this.cstatus=1;
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
