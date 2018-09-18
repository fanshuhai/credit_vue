<template>
  <div>
    <div class="huifaQuery">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack2">同盾科技（第三方数据查询）</span>>>同盾网查询结果
      </div>
      <div class="huifaQuery_header">查询结果</div>
      <div class="detail_list">
          <div class="detail_list_title">归属地解析</div>
          <div v-if="status===1"  style="box-sizing:border-box;">
            <div v-for="" class="case_info">
              <div class="case_detail">
                <div class="case_detail_left">身份证所属地：</div>
                <div class="case_detail_right">{{address_detect.id_card_address}}</div>
              </div>

              <div class="case_detail">
                <div class="case_detail_left">手机所属地：</div>
                <div class="case_detail_right">{{address_detect.mobile_address}}</div>
              </div>
            </div>
          </div>
          <div class="nomseg" v-else-if="status===0">查询成功，暂无数据！</div> 
      </div>


      <div class="detail_list">
          <div class="detail_list_title">贷前风险情况</div>
          <table v-if="Zstatus===1">
            <tr>
              <th  width="200">检查项目</th>
              <th  width="150">分险等级</th>
              <th >备注</th>
            </tr>
            <tr v-for="risk_fraud in risk_frauds">
              <td>{{risk_fraud.risk_name}}</td>
              <td></td>
              <td>
                规则描述：{{risk_fraud.description}}</br>
                匹配字段：{{risk_fraud.hit_type_displayname}}</br>
                风险类型：{{risk_fraud.type}}</br>
              </td>
            </tr>
          </table>
          <div class="nomseg"  v-else-if="Zstatus===0">查询成功，暂无数据！</div>
      </div>
    
    </div>
  </div>   
</template>

<script>
    export default {

        data() {
            return { 
              //归属地解析
              status:1,
              address_detect:'',
              //贷前风险情况
              Zstatus:1,
              risk_frauds:'',
            }
        },
        methods:{
          goBack(){
            this.$router.push('/');
          },
          goBack2(){
            this.$router.push('/tongdun');
          },
          
        },
        computed: {

        },
        created(){
          
        },
        mounted(){
// status:1,
// address_detect:tdData.result_desc.INFOANALYSIS.address_detect,
// //贷前风险情况
// Zstatus:1,
// risk_frauds:risk_fraud,

            const newTdMsg=localStorage.getItem('newTdMsg');
            const tdData=JSON.parse(newTdMsg);
            console.log(tdData);
            const risk_items_t=tdData.result_desc.ANTIFRAUD.risk_items;
            // console.log(risk_items_t.length)
            let risk_items_d=[];
            
            for (let i=0;i<risk_items_t.length;i++){
              let obj_l={};
              if(typeof(risk_items_t[i].risk_detail)!=='undefined'){
                if(typeof(risk_items_t[i].risk_detail.description)!=='undefined' || typeof(risk_items_t[i].risk_detail.hit_type_displayname)!=='undefined' || typeof(risk_items_t[i].risk_detail.black_list_details)!=='undefined'){
                   obj_l.risk_name=risk_items_t[i].risk_name;
                  if(typeof(risk_items_t[i].risk_detail.description)==='undefined'){
                    obj_l.description='暂无信息';
                  }else{
                    obj_l.description=risk_items_t[i].risk_detail.description;
                  }
                  if(typeof(risk_items_t[i].risk_detail.hit_type_displayname)==='undefined'){
                    obj_l.hit_type_displayname='暂无信息';
                  }else{
                    obj_l.hit_type_displayname=risk_items_t[i].risk_detail.hit_type_displayname;
                  }
                  if(typeof(risk_items_t[i].risk_detail.black_list_details)==='undefined'){
                    obj_l.type='暂无信息';
                  }else{
                    obj_l.type=risk_items_t[i].risk_detail.black_list_details[0].fraudTypeDisplayName;
                  }
                }
              }
              risk_items_d.push(obj_l);
            }
            // console.log(risk_items_d);
            const risk_fraud=[]
            
            for(let i=0;i<risk_items_d.length;i++){
                // alert(Object.keys(risk_items_d[i]).length)
                if(Object.keys(risk_items_d[i]).length>0){
                  risk_fraud.push(risk_items_d[i])
                }
            }
            // console.log(risk_fraud);
            this.address_detect=tdData.result_desc.INFOANALYSIS.address_detect;
            this.risk_frauds=risk_fraud;
            if(Object.keys(this.address_detect).length>0){
               this.status=1;
            }else{
               this.status=0;
            }
            if(Object.keys(this.risk_frauds).length>0){
               this.Zstatus=1;
            }else{
               this.Zstatus=0;
            }
            
        }
    }

</script>

<style scoped>
    table{
      width: 100%;
      border: 1px solid #ccc;
      border-collapse:collapse;
    }
    th{
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      background: #e4e4e4;
    }
    td{
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      text-align: center;
      font-weight: bold;
    }
    tr,th,td{
      border: 1px solid #ccc;
    }
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
    .detail_list{
      margin-bottom: 20px;
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
