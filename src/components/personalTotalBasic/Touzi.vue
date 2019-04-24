<template>
  <div>
    <div class="header_info">投资信息</div>
    <div v-if="cstatus===1" v-for="(touzi,index) in touzis" class="case_info">
          <div class="case_info_header">投资信息{{index+1}}</div>
          <div class="case_detail">
            <div class="case_detail_left">企业名称：</div>
            <div class="case_detail_right">{{touzi.entName}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">认缴出资额（万元）：</div>
            <div class="case_detail_right">{{touzi.contriAmount}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">出资方式：</div>
            <div class="case_detail_right">{{touzi.contriForm}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">认缴出资币种：</div>
            <div class="case_detail_right">{{touzi.currency}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">出资比例：</div>
            <div class="case_detail_right">{{touzi.contriRatio}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业（机构）类型：</div>
            <div class="case_detail_right">{{touzi.entType}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注册资本（万元）：</div>
            <div class="case_detail_right">{{touzi.regCap}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注册资本币种：</div>
            <div class="case_detail_right">{{touzi.regCapCur}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业状态：</div>
            <div class="case_detail_right">{{touzi.entStatus}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注册号：</div>
            <div class="case_detail_right">{{touzi.regNo}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">统一社会信用代码：</div>
            <div class="case_detail_right">{{touzi.creditCode}}</div>
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
              touzis:'',
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
          const touzi={};
          if(typeof(newmsgData.investment)==='undefined'){
            this.cstatus=2;
          }else{
            if(newmsgData.investment.message=='获取数据成功'){
              touzi.touziNow=newmsgData.investment.data.result.shareholder;
              this.touzis=touzi.touziNow;
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
      width: 15%;
      padding-left: 10px;
    }
    .case_detail_right{
      width: 82%;
      height: auto;
    }
</style>
