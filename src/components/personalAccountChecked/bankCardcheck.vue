<template>
    <div class="bankCardcheckPage">
        <div class="createSearch">
            <el-form :model="form"  ref="form" :rules="rules"  label-width="80px" :label-position="labelPosition">
                <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">银行卡核查查询</span></div>
                <el-form-item label="查询项目:" style="margin-left: 30px;margin-top: 20px">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="姓名、银行卡" @change="nameCard" ></el-radio>
                        <el-radio label="手机号、银行卡" @change="phoneCard"></el-radio>
                        <el-radio label="身份证、银行卡" @change="cardBank"></el-radio>
                        <el-radio label="姓名、身份证、银行卡" @change="nameCardBank"></el-radio>
                        <el-radio label="姓名、身份证、银行卡、手机号" @change="nameCardBankPhone"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div ref="nameCard" >
                    <el-row :gutter="15">
                        <el-col :span="5">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="name">
                                <el-input v-model="form.name" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankcard">
                                <el-input v-model="form.bankcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item >
                                <el-button type="primary" @click="onSubmit_nameBankcard('form')">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div ref="phoneCard">
                    <el-row :gutter="15">
                        <el-col :span="4">
                            <el-form-item label="手机号:" style="margin-left: 30px" prop="cellphone">
                                <el-input v-model="form.cellphone" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankcard">
                                <el-input v-model="form.bankcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_phoneBankcard('form')">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div ref="cardBank">
                    <el-row :gutter="15">
                        <el-col :span="5">
                            <el-form-item label="身份证:" style="margin-left: 30px"  prop="idcard">
                                <el-input v-model="form.idcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankcard">
                                <el-input v-model="form.bankcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_cardBankcard('form')">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div ref="nameCardBank">
                    <el-row :gutter="15">
                        <el-col :span="4">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="name">
                                <el-input v-model="form.name" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="身份证:" style="margin-left: 30px" prop="idcard">
                                <el-input v-model="form.idcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankcard">
                                <el-input v-model="form.bankcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_nameCardBankcard('form')" style="background: #3c88f6;border-color: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div ref="nameCardBankPhone">
                    <el-row :gutter="5">
                        <el-col :span="4">
                            <el-form-item label="姓名:" style="margin-left: 30px" prop="name">
                                <el-input v-model="form.name" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="身份证:" style="margin-left: 30px" prop="idcard">
                                <el-input v-model="form.idcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="银行卡:" style="margin-left: 30px" prop="bankcard">
                                <el-input v-model="form.bankcard" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="手机号:" style="margin-left: 30px" prop="cellphone">
                                <el-input v-model="form.cellphone" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit_nameCardBankcsrdTelphone('form')" style="background: #3c88f6;border-color: #3c88f6">提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>

        <div class="searchResult">
            <div style="height: 3em;line-height: 3em;">
                <span style="margin-left: 30px">银行卡核查查询结果</span>
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
    export default{
        data(){
            return{
                labelPosition:'left',
                param:'1',
                form: {
                   name:'',
                   bankcard:'',
                   resource: '姓名、银行卡',
                   cellphone:'',
                   idcard: ''
                },
               
                rules: {
                    name: [
                        {
                            required: true,
                            message: '请输入姓名',
                            trigger: 'blur'
                        },
                        {
                            min: 2,
                            max: 5,
                            message: '长度在2到5个字符'
                        },
                        // {
                        //     // pattern: /^[a-zA-z]w{1,4}$/, message:'以字母开头,长度在2-5之间,只能包含字符,数字和下划线'
                        //     pattern: /^[\u4E00-\u9FA5]+$/,
                        //     message: '用户名只能为中文'
                        // }
                    ],
                    bankcard: [
                        {
                            required: true,
                            message: '请输入银行卡号',
                            trigger: 'blur'
                        },
                       
                        {
                            pattern: /^(\d{16}|\d{19})$/,
                            message: '银行卡号格式不正确'
                        }
                    ],
                    cellphone: [
                        {
                            required: true,
                            message: '请输入手机号',
                            trigger: 'blur'
                        },
                       
                        {
                            pattern: /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
                            message: '手机号格式不正确'
                        }
                    ],
                    idcard: [
                        {
                            required: true,
                            message: '请输入身份证号',
                            trigger: 'blur'
                        },
                       
                        {
                            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                            message: '身份证格式不正确'
                        }
                    ]
                },
                searchResultExamp: [],
                
            }
        },
        created() {
            this.$nextTick(()=>{
                this.$refs.nameCard.style.display = 'block';
                this.$refs.phoneCard.style.display = 'none';
                this.$refs.cardBank.style.display = 'none';
                this.$refs.nameCardBank.style.display = 'none';
                this.$refs.nameCardBankPhone.style.display = 'none';
            })

        },
        methods:{
            onSubmit_nameBankcard(formName){
                this.rules.name[0].required=true;
                this.rules.bankcard[0].required=true;
                this.rules.cellphone[0].required=false;
                this.rules.idcard[0].required=false;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // this.$axios.defaults.withCredentials=true;
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.bankcard",
                            bankcard: this.form.bankcard,
                            name: this.form.name,
                            type: "3"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                	if(res.data.data.result=='' || typeof(res.data.data.result)==undefined){
                                		this.$message.success("没有获取有效数据")
                                	}else{
                                	  this.$message.error(res.data.data.result)
                                	}
                                	this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.searchResultExamp = []
                            }
                        
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
            },
            onSubmit_phoneBankcard(formName){
                this.rules.name[0].required=false;
                this.rules.idcard[0].required=false;
                this.rules.bankcard[0].required=true;
                this.rules.cellphone[0].required=true;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.cellphone.bankcard",
                            bankcard: this.form.bankcard,
                            cellphone: this.form.cellphone,
                            type: "4"
                        })
                        .then(res=>{
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                	if(res.data.data.result=='' || typeof(res.data.data.result)==undefined){
                                		this.$message.success("没有获取有效数据")
                                	}else{
                                	  this.$message.error(res.data.data.result)
                                	}
                                	this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.searchResultExamp = []
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
            },
            onSubmit_cardBankcard(formName){
                this.rules.name[0].required=false;
                this.rules.idcard[0].required=true;
                this.rules.bankcard[0].required=true;
                this.rules.cellphone[0].required=false;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.idcard.bankcard",
                            bankcard: this.form.bankcard,
                            idcard: this.form.idcard,
                            type: "7"
                        })
                        .then(res=>{
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                	if(res.data.data.result=='' || typeof(res.data.data.result)==undefined){
                                		this.$message.success("没有获取有效数据")
                                	}else{
                                	  this.$message.error(res.data.data.result)
                                	}
                                	this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.searchResultExamp = []
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
            },
            onSubmit_nameCardBankcard(formName){
                this.rules.name[0].required=true;
                this.rules.idcard[0].required=true;
                this.rules.bankcard[0].required=true;
                this.rules.cellphone[0].required=false;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                            apiCode: "acedata.user.validation.name.idcard.bankcard",
                            bankcard: this.form.bankcard,
                            name: this.form.name,
                            idcard: this.form.idcard,
                            type: "5"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                	if(res.data.data.result=='' || typeof(res.data.data.result)==undefined){
                                		this.$message.success("没有获取有效数据")
                                	}else{
                                	  this.$message.error(res.data.data.result)
                                	}
                                	this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.searchResultExamp = []
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
                
            },
            onSubmit_nameCardBankcsrdTelphone(formName){
                console.log(this.form.name)
                const uncodeName = encodeURI(this.form.name);
                console.log(uncodeName)
                this.rules.name[0].required=true;
                this.rules.idcard[0].required=true;
                this.rules.bankcard[0].required=true;
                this.rules.cellphone[0].required=true;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post(this.HOST1+'/api/v1/acedata',{
                        apiCode: "acedata.user.validation.name.idcard.bankcard.cellphone",
                            bankcard: this.form.bankcard,
                            name: uncodeName,
                            idcard: this.form.idcard,
                            cellphone:this.form.cellphone,
                            type: "6"
                        })
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.success == true){
                                if(res.data.message=='没有获取有效数据'){
                                	if(res.data.data.result=='' || typeof(res.data.data.result)==undefined){
                                		this.$message.success("没有获取有效数据")
                                	}else{
                                	  this.$message.error(res.data.data.result)
                                	}
                                	this.searchResultExamp = []
                                }else{
                                    const datas = res.data.data
                                    const dataArr = new Array();
                                    dataArr.push(datas)
                                    this.searchResultExamp = dataArr
                                }
                            }else{
                                this.$message.error("异常错误")
                                this.searchResultExamp = []
                            }
                        })
                        .catch(error=>{
                            this.$message.error("没有获取有效数据")
                            this.searchResultExamp = []
                        })
                    }
                });
                
            },
           
            headStyle({row,column,rowIndex,columnIndex}){
                return 'text-align:center'
            },
            nameCard(){
                this.$refs.nameCard.style.display = 'block' ;
                this.$refs.phoneCard.style.display = 'none';
                this.$refs.cardBank.style.display = 'none';
                this.$refs.nameCardBank.style.display = 'none';
                this.$refs.nameCardBankPhone.style.display = 'none';
            },
            phoneCard(){
                this.$refs.nameCard.style.display = 'none' ;
                this.$refs.phoneCard.style.display = 'block';
                this.$refs.cardBank.style.display = 'none';
                this.$refs.nameCardBank.style.display = 'none';
                this.$refs.nameCardBankPhone.style.display = 'none';
            },
            cardBank(){
                this.$refs.nameCard.style.display = 'none' ;
                this.$refs.phoneCard.style.display = 'none';
                this.$refs.cardBank.style.display = 'block';
                this.$refs.nameCardBank.style.display = 'none';
                this.$refs.nameCardBankPhone.style.display = 'none';
            },
            nameCardBank(){
                this.$refs.nameCard.style.display = 'none' ;
                this.$refs.phoneCard.style.display = 'none';
                this.$refs.cardBank.style.display = 'none';
                this.$refs.nameCardBank.style.display = 'block';
                this.$refs.nameCardBankPhone.style.display = 'none';
            },
            nameCardBankPhone(){
                this.$refs.nameCard.style.display = 'none' ;
                this.$refs.phoneCard.style.display = 'none';
                this.$refs.cardBank.style.display = 'none';
                this.$refs.nameCardBank.style.display = 'none';
                this.$refs.nameCardBankPhone.style.display = 'block';
            }
        }
    }
</script>

<style  scoped>
    /*.bankCardcheckPage{
        background: #fff;
        padding-top: 3%;
        width: 100%
    }
    .createSearch{
        border: 1px solid #ccc;
        width: 90%;
        margin-left: 5%;
        height: 30%;
    }
    .searchResult{
        border: 1px solid #ccc;
        width: 90%;
        margin-left: 5%;
        margin-top: 3%;
        height: 50%;
    }*/
</style>