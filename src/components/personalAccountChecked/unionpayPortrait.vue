<template>
        <div class="bankCardcheckPage">
            <div class="createSearch">
                <el-form :model="form" :rules="rules"  ref="form" label-width="100px" :label-position="labelPosition">
                    <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">新建查询</span></div>
                    <div style="margin-top:40px">
                        <el-row :gutter="15">
                            <el-col :span="6">
                                <el-form-item label="姓名：" style="margin-left: 30px" prop="name">
                                    <el-input v-model="form.name" placeholder=""></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="银行卡号：" style="margin-left: 30px;" prop="bankCard">
                                    <el-input v-model="form.bankCard" placeholder=""></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('form')" class="buttonPrimary">提交</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </div>
            <div class="searchResult">
                <div style="height: 3em;line-height: 3em;">
                    <span style="margin-left: 30px">查询结果样例</span>
                </div> 
                <template>
                    <div class="el-table_content selfTable">
                       <!--  <el-table
                          :table-data="tableData" 
                          :span-method="arraySpanMethod"
                          style="width:100%"
                          border
                          :data="tableData">
                          <el-table-column
                            label="查询"
                            prop="bigCategoryName"
                            show-overflow-tooltip>
                          </el-table-column>

                          <el-table-column
                            label="查询类别"
                            prop="smallCategoryName"
                            show-overflow-tooltip>
                          </el-table-column>

                          <el-table-column
                            label="查询项名称"
                            prop="typeName"
                            show-overflow-tooltip>
                          </el-table-column>

                          <el-table-column
                            label="时间范围"
                            prop="totalDim"
                            show-overflow-tooltip>
                          </el-table-column>

                          <el-table-column
                            label="查询结果"
                            prop="value"
                            show-overflow-tooltip>
                          </el-table-column>

                          <el-table-column
                            label="备注"
                            prop="desc"
                            show-overflow-tooltip>
                          </el-table-column>

                        </el-table> -->
                        <table cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <th colspan="2">查询类别</th>
                                    <th>查询项名称</th>
                                    <th>时间范围</th>
                                    <th>查询结果</th>
                                    <th>备注</th>
                                </tr>
                            </thead>
                            <tbody v-if='tableShow'>
                                <tr v-for="(item,index) in tableData">
                                    <td :rowspan="item.bigCategoryCodespan" :class="{hidden:item.bigCategoryCodedis}">{{item.bigCategoryName}}</td>
                                    <td :rowspan="item.smallCategoryCodespan" :class="{hidden:item.smallCategoryCodedis}">{{item.smallCategoryName}}</td>
                                    <td>{{item.typeName}}</td>
                                    <td>{{item.totalDim}}</td>
                                    <td>{{item.value}}</td>
                                    <td>{{item.desc}}</td>
                                </tr>
                            </tbody>
                            <tbody class="noData" v-else>
                                <tr>
                                    <td colspan="6" >暂无数据</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </template>
            </div>
        </div>
        
    </template>
    
    <script>
        import {validataBankcard} from '../common/http.js'
        export default{
            data(){
                return{
                    labelPosition:'right',
                    form: {
                       name:'',
                       bankCard:'',
                    },
                    tableData: [],
                    tableShow:false,
                    rules:{
                        name: [
                            {required:true,message:'请输入姓名',trigger: 'blur'}
                        ],
                        bankCard: [
                            {required:true,message:'请输入银行卡号',trigger: 'blur'},
                            {validator:validataBankcard,trigger:'blur'}
                        ],
                    }
                }
            },
            methods:{
                onSubmit(){
                    // const uncodeName = encodeURI(this.form.name);
                    // console.log(uncodeName)
                    this.$axios.post(this.HOST+'/api/v1/acedata',{
                        apiCode: 'acedata.user.cardPortraitB',
                        bankcard: this.form.bankCard,
                        name: this.form.name,
                        type: "all"
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
                                    this.$message.error("没有获取有效数据")
                                    this.tableData = [];
                                    this.tableShow=false;
                                }else{
                                    
                                    const datas = res.data.data.result
                                    if(datas.length>0){
                                        this.$message.success("获取数据成功")
                                        this.tableData = datas;
                                        this.combineTable(this.tableData)
                                        this.tableShow=true;
                                    }else{
                                        this.$message.success("暂无数据")
                                        this.tableData = [];
                                        this.tableShow=false;
                                    }
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.tableData = [];
                                this.tableShow=false;
                            }
                            
                        } 
                    
                    })
                    .catch(error=>{
                        this.$message.error("没有获取有效数据")
                    })
                },
                headStyle({row,column,rowIndex,columnIndex}){
                   
                    return 'text-align:center'
                },
                // 合并表格
                combineTable(list){
                    let field={};
                    field.bigCategoryCode="第一列";
                    field.smallCategoryCode="第二列";
                    for(let ob in field){
                        var k=0;
                        while(k<list.length){
                            list[k][ob+'span']=1;
                            list[k][ob+'dis']=false;
                            for(var i=k+1;i<=list.length-1;i++){
                                if(list[k][ob]==list[i][ob] && list[k][ob]!=""){
                                    list[k][ob+'span']++;
                                    list[k][ob+"dis"]=false;
                                    list[i][ob+'span']=1;
                                    list[i][ob+"dis"]=true;
                                }else{
                                    break;
                                }
                            }
                            k=i;
                        }
                    }
                    return list;
                },
                
            },
            mounted(){
                
            }
           
        }
    </script>
    
    <style scoped>
        .el-table_content{ 
            box-sizing:border-box;
            padding:10px 40px; 
        }
        .el-table_content .cell{ 
            text-align: center;
        }

        /*table{
            width: 100%;
            border: 1px solid #dcdfe6;
        }
        tr{
           border: 1px solid #dcdfe6; 
        }*/
        /*th{
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
        }*/
        td{
            min-height: 30px;
            line-height: 30px;
            width: 6%;
            font-size: 12px;
            text-align: center;
            /*border:1px solid #dcdfe6;*/ 
            overflow:hidden;
            word-wrap:break-word;
            word-break: break-all;
        }
        td:nth-child(6){
            width: 20%;
        }
        .hidden{
            display: none;
        }
        .noData td{
            min-height: 50px;
            line-height: 50px;
            text-align: center;
            border-top:1px solid #dcdfe6; 
            overflow:hidden;
            word-wrap:break-word;
            word-break: break-all;
        }
       /* .bankCardcheckPage{
            background: #fff;
            width: 100%;
            padding-top: 3%;
        }
        .createSearch{
            border: 1px solid #ccc;
            width: 90%;
            margin-left: 5%;
            height: 25%;
        }
        .searchResult{
            border: 1px solid #ccc;
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;
            min-height: 50%;
        }
        .v-table-views{
            font-size: 14px
        }
        .buttonPrimary{
            background: #30af90;
            border-color: #30af90;
        }*/
    </style>