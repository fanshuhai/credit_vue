<template>
  <div>
    <div class="huifaQuery">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack2">汇法网（第三方数据查询）</span>>>汇法网查询结果
      </div>
      <div class="huifaQuery_header">查询结果</div>
      <div  class="detail_list">
          <div class="detail_list_title">个人工商名单</div>
          <div class="laolai_detail">
              <div>任职信息</div>
              <div>数据来源：汇法网</div>
          </div>
          <div v-if="status===1" style="box-sizing:border-box;">
            <div v-for="(inoffice,index) in inoffices" class="case_info">
              <div class="case_info_header">任职信息{{index+1}}</div>
              <div class="case_detail">
                <div class="case_detail_left">注册号：</div>
                <div class="case_detail_right">{{inoffice.regno}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">法定代表人标志：</div>
                <div class="case_detail_right">{{inoffice.lerepsign}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">职务:</div>
                <div class="case_detail_right">{{inoffice.position}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">企业名称：</div>
                <div class="case_detail_right">{{inoffice.entname}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">首席代表标志：</div>
                <div class="case_detail_right">{{inoffice.chiofthedelsign}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">登记机关：</div>
                <div class="case_detail_right">{{inoffice.regorg}}</div>
              </div>

              <!-- <div class="case_detail">
                <div class="case_detail_left">任职企业工商信息：</div>
                <div class="case_detail_right">{{inoffice.url}}</div>
              </div> -->
            </div>
          </div> 
          <div class="nomseg" v-else-if="status===0">查询成功，暂无数据！</div>
      </div>

      




      <div  class="detail_list">
          <div class="detail_list_title">个人司法信息</div>
          <div  class="laolai_detail">
              <div>执行公开信息</div>
              <div>数据来源：汇法网</div>
          </div>
          <div v-if="Zstatus===1" style="box-sizing:border-box;">
            <div v-for="(judicial,index) in judicials" class="case_info">
              <div class="case_info_header">执行公开信息{{index+1}}</div>
              <div class="case_detail">
                <div class="case_detail_left">标题：</div>
                <div class="case_detail_right">{{judicial.title}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">立案时间：</div>
                <div class="case_detail_right">{{judicial.sslong}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">被执行人姓名:</div>
                <div class="case_detail_right">{{judicial.name}}</div>
              </div>
              <div class="case_detail">
                <div class="case_detail_left">证件号码：</div>
                <div class="case_detail_right">{{judicial.id}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">执行案号：</div>
                <div class="case_detail_right">{{judicial.casenum}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">执行法院：</div>
                <div class="case_detail_right">{{judicial.court}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">执行标的：</div>
                <div class="case_detail_right">{{judicial.money}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">执行内容：</div>
                <div class="case_detail_right">{{judicial.content}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">执行状态：</div>
                <div class="case_detail_right">{{judicial.state}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">异议备注：</div>
                <div class="case_detail_right">{{judicial.remark}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">终本日期：</div>
                <div class="case_detail_right">{{judicial.zblong}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">未履行金额(元)：</div>
                <div class="case_detail_right">{{judicial.wlmoney}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">申请执行人：</div>
                <div class="case_detail_right">{{judicial.apply}}</div>
              </div>
            </div>
          </div> 
          <div class="nomseg" v-else-if="Zstatus===0">查询成功，暂无数据！</div>
      </div>
   
    </div>
  </div>   
</template>

<script>
import bus from '../common/bus';
    export default {

        data() {
            return { 
              status:1,
              Zstatus:1,
              inoffices:'',
              judicials:'',
            }
        },
        methods:{
          goBack(){
            this.$router.push('/');
          },
          goBack2(){
            this.$router.push('/huifa');
          },
          datachange(){
            let newHfMsg=localStorage.getItem('newHfMsg');
            let hfData=JSON.parse(newHfMsg);
            console.log(hfData);
            let renzhi_now=[];
            let zhixing=[];
            if(hfData.industry.message=="成功获取相关工商数据！"){
              renzhi_now=hfData.industry.gscontent.renzhi_now;
            }
            if(hfData.judicial.message=="成功获取相关风险数据！"){
              zhixing=hfData.judicial.fxcontent.zhixing;
            }
            this.inoffices=renzhi_now;
            this.judicials=zhixing;
            if(Object.keys(this.inoffices).length>0){
               this.status=1;
            }else{
               this.status=0;
            };
            if(Object.keys(this.judicials).length>0){
               this.Zstatus=1;
            }else{
               this.Zstatus=0;
            }

          }
          
        },
        computed: {

        },
        created(){

        },
        mounted(){
            this.datachange();
            // bus.$on('huifaChange',function(msg){
            //   alert(msg)
            //   if(msg=='success'){ 
            //     this.location.reload();
            //   }
            // })
            // let newHfMsg=localStorage.getItem('newHfMsg');
            // let hfData=JSON.parse(newHfMsg);
            // console.log(hfData);
            // let renzhi_now=[];
            // let zhixing=[];
            // if(hfData.industry.message=="成功获取相关工商数据！"){
            //   renzhi_now=hfData.industry.gscontent.renzhi_now;
            // }
            // if(hfData.judicial.message=="成功获取相关风险数据！"){
            //   zhixing=hfData.judicial.fxcontent.zhixing;
            // }
            // this.inoffices=renzhi_now;
            // this.judicials=zhixing;
            // if(Object.keys(this.inoffices).length>0){
            //    this.status=1;
            // }else{
            //    this.status=0;
            // };
            // if(Object.keys(this.judicials).length>0){
            //    this.Zstatus=1;
            // }else{
            //    this.Zstatus=0;
            // }

        }
    }

</script>

<style scoped>
    .huifaQuery{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      min-height: 83.5vh;
    }
    .huifaQuery_header{
      width: 100%;
      height:70px;
      background: #fff;
      line-height: 70px;
      padding-left: 10px; 
      color: #000;
      font-size: 20px;
      text-align: center;
      font-weight: bold; 
    }
    .laolai_detail div:nth-child(1){
      float: left;
    }
    .laolai_detail div:nth-child(2){
      float: right;
    }
    .detail_list_title{
      height: 36px;
      line-height: 36px;
      background: #6495ed;
      text-align: center;
      color: #000;
    }
    .laolai_detail{
      height: 50px;
      line-height: 50px;
      background: #e4e4e4;
      text-align: center;
      color: #000;
      padding:0 20px;
      font-weight: bold;
    }
    .el-table-column{
      background: red;
    }
    .header_info{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 20px;
      box-sizing: border-box; 
      -webkit-box-sizing:border-box;
    }
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      border: 1px solid #ddd;
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
    .huifa_header{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc; 
      margin: 0 auto;
    }
    .huifa_header span{
      cursor: pointer;
    }
    .huifa_header span:hover{
      color: rgb(22,155,213)
    }
</style>
