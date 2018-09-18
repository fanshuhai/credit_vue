<template>
  <div>
    <div v-if="cstatus===1" class="case_info">
      <div class="case_info_header">高风险名单</div>
      <div class="case_detail">
        <div class="case_detail_left">规则名称</div>
        <div class="case_detail_right" style="padding-left:2%">规则详情</div>
      </div>
      <div v-for="risk_item in risk_items"  class="case_detail">
        <div class="case_detail_left">{{risk_item.risk_name}}</div>
        <div class="case_detail_right">
          <div class="rule_descript">规则描述：{{risk_item.description}}</div>
          <ul>
            <li >匹配字段：{{risk_item.hit_type_displayname}}</li>
            <li>风险类型：{{risk_item.type}}</li>
          </ul> 
        </div>
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
             risk_items:'',
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
            const risk_items_d=[];
            if(typeof(newmsgData.tongdun)!=='undefined' && newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items.length>0){
                const risk_items_t=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
                console.log(risk_items_t.length)
                for (let i=0;i<risk_items_t.length;i++){
                  let obj_l={};
                  // obj_l.risk_name=risk_items_t[i].risk_name;
                  if(typeof(risk_items_t[i].risk_detail)==='undefined'){
                    // obj_l.description='暂无信息';
                    // obj_l.hit_type_displayname='暂无信息';
                    // obj_l.type='暂无信息';
                  }else{
                    
                    if(typeof(risk_items_t[i].risk_detail.description)==='undefined' && typeof(risk_items_t[i].risk_detail.hit_type_displayname)==='undefined' && typeof(risk_items_t[i].risk_detail.black_list_details)==='undefined' && typeof(risk_items_t[i].risk_name)==='undefined'){

                    }else{
                      if(typeof(risk_items_t[i].risk_name)!=='undefined'){
                        
                        if(typeof(risk_items_t[i].risk_detail.description)==='undefined' && typeof(risk_items_t[i].risk_detail.hit_type_displayname)==='undefined' && typeof(risk_items_t[i].risk_detail.black_list_details)==='undefined'){

                        }else{
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
                          risk_items_d.push(obj_l);
                        }
                      } 
                        
                    }
                  }
                  
                }
                if(risk_items_d.length==0){
                  this.cstatus=2;
                }else{
                  this.risk_items=risk_items_d;
                  this.cstatus=1;
                }
            }else{
              this.cstatus=2;
            }
        }
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
  .datanull{
    height: 160px;
    line-height: 160px;
    font-size: 20px;
    text-align: center;
  }
</style>
