<template>
    <div class="bankCardcheckPage">
        <div class="createSearch">
            <el-form :model="form"  ref="form" :rules='rules' label-width="130px" :label-position="labelPosition">
                <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">个人银联账单查询</span></div>
                <div style="margin-top:40px">
                    <el-row :gutter="15" style="margin-bottom:20px">
                        <el-col :span="7">
                            <el-form-item label="姓名：" style="margin-left: 30px" prop="name">
                                <el-input v-model="form.name" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="银行卡号：" style="margin-left: 30px" prop="bankCard">
                                <el-input v-model="form.bankCard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <!-- <el-form-item>
                                <el-button type="primary" @click="onSubmit">提交</el-button>
                            </el-form-item> -->
                        </el-col>
                    </el-row>
                    <el-row :gutter="15" style="margin-bottom:20px">
                        <el-col :span="7">
                            <el-form-item label="交易起始时间：" style="margin-left: 30px;" prop="tradeTime1">
                                <el-date-picker
                                    v-model="form.tradeTime1"
                                    type="date"
                                    placeholder="选择日期"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="交易结束时间：" style="margin-left: 30px" prop="tradeTime2">
                                <el-date-picker
                                    v-model="form.tradeTime2"
                                    type="date"
                                    placeholder="选择日期"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
        <div class="searchResult">
            <div style="height: 3em;line-height: 3em;">
                <span style="margin-left: 30px">个人银联账单查询结果</span>
            </div>
            <template>
                <div>
                    <el-table :data="unionpayTableData" :header-cell-style="headStyle" :span-method="SpanMethod" border style="width: 90%;margin-left: 2%;text-align: center;margin-top: 2%">
                      <el-table-column label="序号" type="index" width="100"></el-table-column>
                      <el-table-column label="交易时间"  prop="transTime"></el-table-column>
                      <el-table-column label="交易金额（元）"  prop="transAmount"></el-table-column>
                      <el-table-column label="币种"  prop="currency"></el-table-column>
                    </el-table>
                </div>
            </template>
        </div>
    </div>
    
</template>

<script>
    import { getYYDDMM } from "../../common/http.js"
    import { validataBankcard } from "../../common/http.js"
    const testData= [
      {
        "transAmount": 18000,
        "transTime": "2018-04-02 15:20:53",
        "currency": "人民币"
      },
      {
        "transAmount": 1590,
        "transTime": "2018-02-22 06:00:00",
        "currency": "人民币"
      },
      {
        "transAmount": 1610,
        "transTime": "2018-01-22 05:53:50",
        "currency": "人民币"
      },
      {
        "transAmount": 4550,
        "transTime": "2018-03-20 11:14:59",
        "currency": "人民币"
      },
      {
        "transAmount": 1480,
        "transTime": "2018-04-20 08:12:23",
        "currency": "人民币"
      }
    ]

    export default{
        data(){
            return{
                labelPosition:'right',
                form: {
                    name:'',
                    bankCard:'',
                    tradeTime1:'',
                    tradeTime2:'',
                },
                rules:{
                    name:[
                        {
                            required: true,
                            message: '请输入姓名',
                            trigger: 'blur'
                        },
                      // {validator:validataCardId,trigger:'blur'}
                    ],
                    bankCard:[
                        {
                            required: false,
                            message: '请输入银行卡号',
                            trigger: 'blur'
                        },
                        {validator:validataBankcard,trigger:'blur'}
                    ],
                    tradeTime1: [
                        {
                            required: true,
                            message: '请输入查询日期',
                            trigger: 'blur'
                        },
                    ],
                    tradeTime2: [
                        {
                            required: true,
                            message: '请输入查询日期',
                            trigger: 'blur'
                        },
                    ],
                    
                },
                unionpayTableData: [ ],

            }
        },
        methods:{
            onSubmit(formName){
                let startTime=this.form.tradeTime1;
                let endTime=this.form.tradeTime2;

                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // this.$axios.defaults.withCredentials=true;
                        if(startTime=='' || startTime==null){
                           this.$message.error("交易起始时间不能为空！") 
                        }else if(endTime=='' || endTime==null){
                           this.$message.error("交易结束时间不能为空！")  
                        }else{
                            if(new Date(startTime).getTime()<=new Date(endTime).getTime()){
                                this.$axios.post(this.HOST2+'/api/v1/acedata',{
                                    apiCode: "acedata.user.verificationB",
                                    name:this.form.name,
                                    bankcard:this.form.bankCard,
                                    beginTime:getYYDDMM(startTime),
                                    endTime:getYYDDMM(endTime),
                                })
                                .then(res=>{
                                    console.log(res.data);
                                      if(res.data==='登录超时'){
                                            this.$message('登录超时，请重新登录');
                                            this.$router.push('/login');
                                      }else if(res.data===''||res.data===null||res.data==='{}'){
                                        this.$message('暂无信息');
                                      }else{
                                        if(res.data.success == true){
                                            if(res.data.message=='没有获取有效数据'){
                                                this.$message.error("没有获取有效数据");
                                                this.unionpayTableData=[];
                                            }else{
                                                // const datas = res.data.data
                                                // const dataArr = new Array();
                                                // dataArr.push(datas)
                                                // this.searchResultExamp = dataArr
                                                this.$message.success("数据查询成功");
                                                this.unionpayTableData=res.data.data.result;
                                            }
                                        }else{
                                            this.$message.error("异常错误")
                                            this.unionpayTableData=[];
                                        }

                                      } 
                                
                                })
                                .catch(error=>{
                                    this.$message.error("没有获取有效数据")
                                }) 

                            }else{
                               this.$message.error("交易起始时间不能大于交易结束时间！") 
                            }
                        }
                    }
                });
            },
            headStyle({row,column,rowIndex,columnIndex}){
               
                return 'text-align:center'
            },
            SpanMethod({row,column,rowIndex,columnIndex}){
                // if(rowIndex === 0){
                //     if(columnIndex === 0){
                //         return [1,2]
                //     }
                // }
                // if(rowIndex % 2 === 0){
                //     if(columnIndex === 0){
                //         return [1,1];
                //     }else if(columnIndex === 1){
                //         return [0,0]
                //     }
                //     else if(columnIndex === 2){
                //         return [0,0]
                //     }else if(columnIndex === 3){
                //         return [0,0]
                //     }else if(columnIndex === 4){
                //         return [0,0]
                //     }
                // }
            }
        }
       
    }
</script>

<style scoped>

</style>