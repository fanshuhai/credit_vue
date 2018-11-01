<template>
  <div>
    <div class="header_info">任职信息</div>
    <div v-if="cstatus===1" v-for="(renzhi,index) in renzhis" class="case_info">
          <div class="case_info_header">任职信息{{index+1}}</div>
          <div class="case_detail">
            <div class="case_detail_left">职务：</div>
            <div class="case_detail_right">{{renzhi.position}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">企业名称：</div>
            <div class="case_detail_right">{{renzhi.entname}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">首席代表标志：</div>
            <div class="case_detail_right">{{renzhi.chiofthedelsign}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">法定代表人标志：</div>
            <div class="case_detail_right">{{renzhi.lerepsign}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">登记机关：</div>
            <div class="case_detail_right">{{renzhi.regorg}}</div>
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
          if(typeof(newmsgData.industry)==='undefined'){
            this.cstatus=2;
          }else{
            if(newmsgData.industry.message=='成功获取相关工商数据！'){
              renzhi.renzhiNow=newmsgData.industry.gscontent.renzhi_now;
              this.renzhis=renzhi.renzhiNow;
              this.cstatus=1;
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
