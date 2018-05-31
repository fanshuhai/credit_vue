<template>
    <div class="queryResult">
      <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content">
                    <span>选择查询机构：</span>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <span>姓名：</span>
                  <el-input style="width:150px" placeholder="请输入内容" v-model="input1" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>身份证号：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input2" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>手机号码：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input3" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content">
                  <el-button @click='' type="success">查询</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
    </div>
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
    console.log(newmsgData);
    if(newmsgData.judicial.fxcontent.shixing===''||newmsgData.judicial.fxcontent.shixing===null||newmsgData.judicial.fxcontent.shixing==='{}'){
        var shixinBlack='未命中';
    }else{
        var shixinBlack='命中';
    }
    if(newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items.length>0){
      //alert(newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items.length)
      // var dataBlacklist=newmsgData.tongdun.result_desc.ANTIFRAUD.risk_items;
      // for(var i=0;i<dataBlacklist.length;i++){
      //   // alert(dataBlacklist[i].risk_detail.type);
      //   if(dataBlacklist[i].risk_detail.type=='discredit_count'){
      //     var netBlacklist='命中';
      //     alert(11111)
      //   }else{
      //     // var netBlacklist='未命中';
      //     alert(2222)
      //   }
      // }
      var netBlacklist='命中';
      var hightrisklist='命中';
    }else{
      var netBlacklist='未命中';
      var hightrisklist='未命中';
    }
    export default {
        data() {
            return { 
              input1:'',
              input2:'',
              input3:'',
              user_basic:'姓名：'+newmsgData.basicInfo.name+',年龄：'+newmsgData.basicInfo.age+',手机号码：'+newmsgData.basicInfo.phone,
              renzhi_now:newmsgData.industry.gscontent.renzhi_now[0].position+','+newmsgData.industry.gscontent.renzhi_now[1].position+','+newmsgData.industry.gscontent.renzhi_now[0].entname,
              netcreit:netBlacklist,
              touzi_now:'',
              lawDetail:newmsgData.judicial.fxcontent.zhixing[0].court,
              shixinB:shixinBlack,
              hightrisk:hightrisklist,
              options: [
                {
                  value: '选项1',
                  label: '摩尔征信'
                },
                 {
                  value: '选项2',
                  label: '汇法网'
                }, {
                  value: '选项3',
                  label: '魔蝎'
                }, {
                  value: '选项4',
                  label: '同盾'
                }, {
                  value: '选项5',
                  label: '鹏元'
                }, {
                  value: '选项6',
                  label: '国政通'
                }, {
                  value: '选项7',
                  label: '商汤'
                }, {
                  value: '选项8',
                  label: '全部'
                }
              ],
              value:'',
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
          QueryResult(){  
            // this.$refs[formName].validate((valid)=>{
            //   if(valid){
            //     this.$axios.get('http://10.1.2.113:9990/api/v1/search',{
            //       params:{
            //         name:this.ruleForm.name,
            //         cardId:this.ruleForm.cardId,
            //         phone:this.ruleForm.phone,
            //       }
            //     })
            //     .then(res=>{
            //       console.log(res.data);
            //       if(res.data===''||res.data===null||res.data==='{}'){
            //         this.$message('暂无信息');
            //       }else{
            //         let msgData=res.data;
            //         msgData=JSON.stringify(msgData);
            //         localStorage.setItem("msgData",msgData);

            //         this.$router.push('/queryResult');

            //       }
            //     })
            //     .catch(error=>{
            //       alert('暂无服务');
            //         console.log(error);
            //     })
            //   }
            // });
            this.$router.push('/threenQuery')
          },
        },
        computed: {

        },
        monted:{

        }

    }

</script>

<style scoped>
  table{
    border: 1px solid #ccc;
    border-collapse: collapse;
    table-layout: fixed;
    width: 80%;
  }
  tr,td{
    border: 1px solid #ccc;
    padding: 10px;
    width: 180px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  table tr td:nth-child(2){
    color: blue;
    cursor: pointer;
  }
  .contain-center{
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .queryResult{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-container{
    height: auto;
    width: 75%;
    margin: 0 auto;
  }
  .el-header{
    background: #fff;
    margin-bottom: 20px;
  } 
  .el-header .el-row{

    padding: 15px 0;
  } 
  .el-select{
  }
  .el-main{
    padding: 0;
    box-sizing:border-box;
  } 
  .personal_msg{
    width: 100%;
    height: 210px;
    background: #fff;
  } 
  .title_style{
    height: 40px;
    background: #ccc;
    padding:10px 20px;
    box-sizing:border-box;
  }
  .table_msg{
    width: 50%;
    float: left;
  }
  .table_left{
    padding: 1.5% 0 0 15%;
    box-sizing:border-box;
  }
  .table_right{
    padding: 1.5% 15% 0 0;
    box-sizing:border-box;
  }
</style>
