<template>
  <div style="box-sizing:border-box;">
    <div v-if="cstatus===1">
      <div class="header_info">{{h_info}}条失信信息</div>
      <div v-for="(case_info,index) in case_infos" class="case_info">
            <div class="case_info_header">失信信息{{index+1}}条</div>
            <div class="case_detail">
              <div class="case_detail_left">案号：</div>
              <div class="case_detail_right">{{case_info.casenum}}</div>
            </div>
            <div class="case_detail">
              <div class="case_detail_left">执行法院：</div>
              <div class="case_detail_right">{{case_info.court}}</div>
            </div>
            <div class="case_detail">
              <div class="case_detail_left">省份：</div>
              <div class="case_detail_right">{{case_info.sx_sf}}</div>
            </div>
            <div class="case_detail">
              <div class="case_detail_left">生效法律文书确定的义务：</div>
              <div class="case_detail_right">{{case_info.sx_jt}}</div>
            </div>

            <div class="case_detail">
              <div class="case_detail_left">被执行人的履行情况：</div>
              <div class="case_detail_right">{{case_info.content}}</div>
            </div>

            <div class="case_detail">
              <div class="case_detail_left">发布时间：</div>
              <div class="case_detail_right">{{case_info.sx_fb}}</div>
            </div>

            <div class="case_detail">
              <div class="case_detail_left">具体情形：</div>
              <div class="case_detail_right">{{case_info.sx_jt}}</div>
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
             h_info:'',
             case_infos:'',
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
            // const shixin_items_t=newmsgData.judicial.fxcontent.shixin;
            
            const shixin_items_t={};
            if(typeof(newmsgData.judicial)==='undefined'){
              this.cstatus=2;
            }else{
              if(newmsgData.judicial.message=='成功获取相关风险数据！'){
                  shixin_items_t.length=newmsgData.judicial.fxcontent.shixin.length;
                  shixin_items_t.content=newmsgData.judicial.fxcontent.shixin;

                  this.h_info=shixin_items_t.length;
                  this.case_infos=shixin_items_t.content;
                  this.cstatus=1;
              }else{
                this.cstatus=2;
              }
            }
            console.log(shixin_items_t)
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
      -webkit-box-sizing:border-box;
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
      padding-left: 10px;
    }
    .case_detail_left{
      width: 20%;
      height: auto;
    }
    .case_detail_right{
      width: 75%;
      height: auto;
    }
  .datanull{
    height: 160px;
    line-height: 160px;
    font-size: 20px;
    text-align: center;
  }
</style>
