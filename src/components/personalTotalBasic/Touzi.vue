<template>
  <div>
    <div class="header_info">投资信息</div>
    <div v-if="cstatus===1" v-for="(touzi,index) in touzis" class="case_info">
          <div class="case_info_header">投资信息{{index+1}}</div>
          <div class="case_detail">
            <div class="case_detail_left">企业名称：</div>
            <div class="case_detail_right">{{touzi.entname}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">认缴出资额（万元）：</div>
            <div class="case_detail_right">{{touzi.subconam}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">出资方式：</div>
            <div class="case_detail_right">{{touzi.conform}}</div>
          </div>

          <div class="case_detail">
            <div class="case_detail_left">币种：</div>
            <div class="case_detail_right">{{touzi.currency}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">出资比例：</div>
            <div class="case_detail_right">{{touzi.conprop}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业（机构）类型：</div>
            <div class="case_detail_right">{{touzi.enttype}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注册资本（万元）：</div>
            <div class="case_detail_right">{{touzi.regcap}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注册资本币种：</div>
            <div class="case_detail_right">{{touzi.regcurrency}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">企业状态：</div>
            <div class="case_detail_right">{{touzi.entstatus}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">注销日期：</div>
            <div class="case_detail_right">{{touzi.canceldate}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">吊销日期：</div>
            <div class="case_detail_right">{{touzi.revokedate}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">成立日期：</div>
            <div class="case_detail_right">{{touzi.esdate}}</div>
          </div>

           <div class="case_detail">
            <div class="case_detail_left">登记机关：</div>
            <div class="case_detail_right">{{touzi.regorg}}</div>
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
          if(typeof(newmsgData.industry)==='undefined'){
            this.cstatus=2;
          }else{
            if(newmsgData.industry.message=='成功获取相关工商数据！'){
              touzi.touziNow=newmsgData.industry.gscontent.touzi_now;
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
