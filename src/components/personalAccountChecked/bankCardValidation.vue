<template>
    <div class="bankCardcheckPage">
        <div class="createSearch">
            <el-form :model="form"  ref="form" :rules="rules" label-width="90px" :label-position="labelPosition">
                <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">银行卡有效性查询</span></div>
                <div style="margin-top:40px">
                    <el-row :gutter="15">
                        <el-col :span="6">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="name">
                                <el-input v-model="form.name" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="银行卡号:" style="margin-left: 30px" prop="bankCard">
                                <el-input v-model="form.bankCard" placeholder=""></el-input>
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
                <span style="margin-left: 30px">银行卡有效性查询结果</span>
            </div>
            <template>
                <el-table :data="searchResultExamp" :header-cell-style="headStyle" border style="width: 90%;margin-left: 2%;text-align: center;margin-top: 2%">
                  <el-table-column label="查询项目" prop="title" ></el-table-column>
                  <el-table-column label="查询结果" prop="result" ></el-table-column>
                </el-table>
            </template>
        </div>
    </div>
    
</template>

<script>
    export default{
        data(){
            return{
                labelPosition:'left',
                form: {
                   name:'',
                   bankCard:'',
                 
                },
                rules: {
                    name: [
                        {required:true,message:'请输入姓名',trigger: 'blur'}
                    ],
                    bankCard: [
                        {required:true,message:'请输入银行卡号',trigger: 'blur'}
                    ],
                },
                searchResultExamp:[]
            }
        },
        methods:{
            onSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // this.$axios.defaults.withCredentials=true;
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.bankcard",
                            bankcard: this.form.bankCard,
                            name: this.form.name,
                            type: "9"
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
                                    }else{
                                        const datas = res.data.data
                                        const dataArr = new Array();
                                        dataArr.push(datas)
                                        this.searchResultExamp = dataArr
                                    }
                                }else{
                                    this.$message.error("异常错误")
                                }
                              } 
                        
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                        })
                    }
                });
            },
            headStyle({row,column,rowIndex,columnIndex}){
                return 'text-align:center'
            },
        }
       
    }
</script>

<style scoped>
   /* .bankCardcheckPage{
        background: #fff;
        width: 100%
    }
    .createSearch{
        border: 1px solid #ccc;
        width: 90%;
        margin-left: 5%;
        margin-top: 3%;
        height: 20%;
    }
    .searchResult{
        border: 1px solid #ccc;
        width: 90%;
        margin-left: 5%;
        margin-top: 3%;
        height: 50%;
    }*/
</style>
