<template>
    <div class="bankCardcheckPage">
        <div class="createSearch">
            <el-form :model="form"  ref="form" :rules="rules"  label-width="80px" :label-position="labelPosition">
                <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">身份核查查询</span></div>
                <el-form-item label="查询项目:" style="margin-left: 30px;margin-top: 20px">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="姓名、身份证" @change="nameId_radio" ></el-radio>
                        <el-radio label="姓名、手机号" @change="namePhone_radio"></el-radio>
                        <el-radio label="姓名、身份证、手机号" @change="nameCardPhone_radio"></el-radio>
                        <el-radio label="姓名、身份证、银行卡、手机号" @change="nameCardBankPhone_radio"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div v-show="nameId">
                    <el-row :gutter="10">
                        <el-col :span="5" >
                            <el-form-item label="姓名:" style="margin-left: 10px" prop="nameCheck">
                                <el-input v-model="form.nameCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :md="6" :sm="7" :xs="8">
                            <el-form-item label="身份证:" style="margin-left: 10px" prop="idCheck">
                                <el-input v-model="form.idCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_nameId('form')" style="background: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div v-show="namePhone">
                    <el-row :gutter="15">
                        <el-col :span="4">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="nameCheck">
                                <el-input v-model="form.nameCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="手机号:" style="margin-left: 30px" prop="phoneCheck">
                                <el-input v-model="form.phoneCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_namePhone('form')" style="background: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div v-show="nameCardPhone">
                    <el-row :gutter="15">
                        <el-col :span="5">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="nameCheck">
                                <el-input v-model="form.nameCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="身份证:" style="margin-left: 30px"  prop="idCheck">
                                <el-input v-model="form.idCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="手机号:" style="margin-left: 30px" prop="phoneCheck">
                                <el-input v-model="form.phoneCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_nameCardPhone('form')" style="background: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div v-show="nameCardBankPhone">
                    <el-row :gutter="5">
                        <el-col :span="4">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="nameCheck">
                                <el-input v-model="form.nameCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="身份证:" style="margin-left: 30px" prop="idCheck">
                                <el-input v-model="form.idCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankCheck">
                                <el-input v-model="form.bankCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="手机号:" style="margin-left: 30px" prop="phoneCheck">
                                <el-input v-model="form.phoneCheck" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_nameCardBankPhone('form')" style="background: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>

        <div class="searchResult">
            <div style="height: 3em;line-height: 3em;">
                <span style="margin-left: 30px">身份核查结果</span>
            </div>
            <template>
                <el-table :data="searchResultExamp" border  :header-cell-style="headStyle"  style="width: 90%;margin-left: 2%;text-align: center;margin-top: 2%;">
                  <el-table-column label="查询项目" prop="title" ></el-table-column>
                  <el-table-column label="查询结果" prop="result" ></el-table-column>
                </el-table>
            </template>
        </div>

    </div>
    
</template>

<script>
    //银行验证：/^(\d{16}|\d{19})$/ 
    //身份证验证： /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    //手机号验证： /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
    
    import { validataCardId } from "../../common/http.js"
    import { validataBankcard } from "../../common/http.js"
    import { validataPhone } from "../../common/http.js"
    export default{
        data(){
            return{
                labelPosition:'left',
                param:'1',
                form: {
                   nameCheck:'',
                   idCheck:'',
                   bankCheck:'', 
                   phoneCheck:'',
                  
                   resource: '姓名、身份证',
                },
                nameId:true,
                namePhone:false,
                nameCardPhone:false,
                nameCardBankPhone:false,
                rules: {
                    nameCheck: [
                        {required:true,message:'请输入姓名！',trigger: 'blur'}
                    ],

                    phoneCheck: [
                        {required:true,message:'请输入手机号！',trigger: 'blur'},
                       
                        {
                            pattern: /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
                            message: '手机号格式不正确！'
                        }
                    ],

                    idCheck: [
                        {required:true,message:'请输入身份证号！',trigger: 'blur'},
                       
                        {
                            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                            message: '身份证格式不正确！'
                        }
                    ],

                    bankCheck: [
                        {required:true,message:'请输入银行卡号！',trigger: 'blur'},
                       
                        {
                            pattern: /^(\d{16}|\d{19})$/,
                            message: '银行卡号格式不正确！'
                        }
                    ],

                    
                },
                searchResultExamp: [],
                
            }
        },
        created() {
           

        },
        methods:{
            onSubmit_nameId(formName){
                this.rules.nameCheck[0].required=true;
                this.rules.phoneCheck[0].required=false;
                this.rules.idCheck[0].required=true;
                this.rules.bankCheck[0].required=false;
                this.$refs[formName].validate((valid) => {
                    console.log(valid)
                    if(valid){
                        // this.$axios.defaults.withCredentials=true;
                        this.$axios.post(this.HOST+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.idcard",
                            idcard: this.form.idCheck,
                            name: this.form.nameCheck,
                            type: "1"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                    this.$message.error("没有获取有效数据")
                                    this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    console.log(dataArr)
                                    this.$message.success("获取数据成功！")
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                            }
                        
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
            },
            onSubmit_namePhone(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.cellphone",
                            name: this.form.nameCheck,
                            cellphone: this.form.phoneCheck,
                            type: "2"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                    this.$message.error("没有获取有效数据")
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.$message.success("获取数据成功！")
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                        })
                    }
                });
            },
            onSubmit_nameCardPhone(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.idcard.cellphone",
                            name: this.form.nameCheck,
                            idcard:this.form.idCheck,
                            cellphone:this.form.phoneCheck,
                            type: "8"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                    this.$message.error("没有获取有效数据")
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.$message.success("获取数据成功！")
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                        })
                    }
                });
            },
            onSubmit_nameCardBankPhone(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.idcard.bankcard.cellphone",
                            name: this.form.nameCheck,
                            idcard:this.form.idCheck,
                            cellphone:this.form.phoneCheck,
                            bankcard:this.form.bankCheck,
                            type:"6"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                    this.$message.error("没有获取有效数据")
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.$message.success("获取数据成功！")
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
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
            nameId_radio(){
                this.rules.nameCheck[0].required=true;
                this.rules.phoneCheck[0].required=false;
                this.rules.idCheck[0].required=true;
                this.rules.bankCheck[0].required=false;
                
                this.nameId=true;
                this.namePhone=false;
                this.nameCardPhone=false;
                this.nameCardBankPhone=false;
            },
            namePhone_radio(){
                this.rules.nameCheck[0].required=true;
                this.rules.phoneCheck[0].required=true;
                this.rules.idCheck[0].required=false;
                this.rules.bankCheck[0].required=false;

                this.nameId=false;
                this.namePhone=true;
                this.nameCardPhone=false;
                this.nameCardBankPhone=false;
            },
            nameCardPhone_radio(){
                this.rules.nameCheck[0].required=true;
                this.rules.phoneCheck[0].required=true;
                this.rules.idCheck[0].required=true;
                this.rules.bankCheck[0].required=false;
                
                this.nameId=false;
                this.namePhone=false;
                this.nameCardPhone=true;
                this.nameCardBankPhone=false;
            },
            nameCardBankPhone_radio(){
                this.rules.nameCheck[0].required=true;
                this.rules.phoneCheck[0].required=true;
                this.rules.idCheck[0].required=true;
                this.rules.bankCheck[0].required=true;
                
                this.nameId=false;
                this.namePhone=false;
                this.nameCardPhone=false;
                this.nameCardBankPhone=true;
            }
        }
    }
</script>

<style>
    .bankCardcheckPage{
       
    }
    .createSearch{
       padding-bottom: 20px;
    }
    .searchResult{
       
    }
</style>