<template>
  <div>
    <div v-if="cstatus===1">
        <div class="header_info">共{{law_t}}条法律案件信息</div>
        <div v-for="(law_info,index) in law_infos" class="case_info">
          <div class="case_info_header">法律案件详情</div>
          <div class="case_detail">
            <div class="case_detail_left">执行法院：</div>
            <div class="case_detail_right">{{law_info.court}}</div>
          </div>
          <div class="case_detail">
            <div class="case_detail_left">执行文号：</div>
            <div class="case_detail_right">{{law_info.casenum}}</div>
          </div>
          <div class="case_detail">
            <div class="case_detail_left">立案时间：</div>
            <div class="case_detail_right">{{law_info.sslong}}</div>
          </div>
          <div class="case_detail">
            <div class="case_detail_left">案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
            <div class="case_detail_right"></div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">执行单位：</div>
            <div class="case_detail_right">{{law_info.typetname}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">省&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份：</div>
            <div class="case_detail_right"></div>
          </div>

          <div class="case_detail"  style="height:auto;">
            <div class="case_detail_left">法律义务：</div>
            <div class="case_detail_right" style="height:auto;"></div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">履行情况：</div>
            <div class="case_detail_right">{{law_info.content}}</div>
          </div>
          <div class="case_detail">
            <div class="case_detail_left">执行情形：</div>
            <div class="case_detail_right">{{law_info.state}}</div>
          </div>
          <div class="case_detail">
            <div class="case_detail_left">公示时间：</div>
            <div class="case_detail_right"></div>
          </div>
        </div>
    </div>

    <div v-if="cstatus===2" class="datanull">
      <span>查询成功，暂无数据</span>
    </div>
  </div>   
</template>

<script>
    export default {
        data() {
            return { 
              law_t:'',
              law_infos:'',
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
            // const zhixing_items_t=newmsgData.judicial.fxcontent.zhixing;
            // console.log(zhixing_items_t);
            const zhixing_items_t={};
            if(typeof(newmsgData.judicial)==='undefined'){
              this.cstatus=2;
            }else{
              if(newmsgData.judicial.message=='成功获取相关风险数据！'){
                  zhixing_items_t.length=newmsgData.judicial.fxcontent.zhixing.length;
                  zhixing_items_t.content=newmsgData.judicial.fxcontent.zhixing;
                  this.law_t=zhixing_items_t.length;
                  this.law_infos=zhixing_items_t.content;
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
      padding-left: 10px;
    }
    .case_detail_right{
      width: 90%;
      height: auto;
    }
  .datanull{
    height: 160px;
    line-height: 160px;
    font-size: 20px;
    text-align: center;
  }
</style>
