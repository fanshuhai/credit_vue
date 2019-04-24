<template>
        <div class="bankCardcheckPage">
            <div class="createSearch">
                <el-form :model="form" :rules="rules"  ref="form" label-width="100px" :label-position="labelPosition">
                    <div style="height: 3em;border-bottom: 1px solid #ccc;line-height: 3em;"><span style="margin-left: 30px">个人投资核查</span></div>
                    <div style="margin-top:40px" class="per-1366">
                        <el-row :gutter="15">
                            <el-col :span="6">
                                <el-form-item label="身份证号：" style="margin-left: 30px" prop="idCard">
                                    <el-input v-model="form.idCard" placeholder=""></el-input>
                                </el-form-item>
                            </el-col>
                            <!--<el-col :span="8">
                                <el-form-item label="银行卡号：" style="margin-left: 30px;" prop="bankCard">
                                    <el-input v-model="form.bankCard" placeholder=""></el-input>
                                </el-form-item>
                            </el-col>-->
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
                    <span style="margin-left: 30px">个人投资查询结果</span>
                </div> 
                <!-- legaPerson 人员法人信息 -->
                <div v-if='legaPerson.length>0' v-for='item in legaPerson' class="investmentContent">
                	<el-row :gutter="10" type="flex" justify='center'>
                		<el-col :xs='12' :md='12' :xl='8'>
                			<div id="">
                				<p>{{item.entName}}<span class="invest_title themeG_c">法定代表人</span></p>
                				<p>法定代表人：<span>{{item.name}}</span></p>
                				<p>注册号：<span>{{item.regNo}}</span></p>
                				<p>企业类型：<span>{{item.entType}}</span></p>
                				<p>注册资本（万元）：<span>{{item.regCap}}</span>（{{item.regCapCur}}）</p>
                				<p>统一社会信用代码：<span>{{item.creditCode}}</span></p>
                				<p>成立时间：<span>{{item.estabDate}}</span></p>
                				<p>行业名称：<span>{{item.industryName}}</span></p>
                				<p>省份：<span>{{item.regOrgProvince}}</span></p>
                			</div>
                		</el-col>
                		<el-col :xs='8' :md='8' :xl='8'>
                			<div id="">
                				
                			</div>
                		</el-col>
                		<el-col :xs='2' :md='3' :xl='6'>
                			<div id="">
                				<span class="enStatus">{{item.entStatus}}</span>
                			</div>
                		</el-col>
                	</el-row>
                </div>
                <!-- shareHolder 人员股东信息 -->
                <div v-if='shareHolder.length>0' v-for='item in shareHolder'  class="investmentContent">
                	<el-row :gutter="10" type="flex" justify='center'>
                		<el-col :xs='12' :md='12' :xl='8'>
                			<div id="">
                				<p>{{item.entName}}<span class="invest_title themeG_c">股权投资</span></p>
                				<p>投资人：<span>{{item.name}}</span></p>
                				<p>注册号：<span>{{item.regNo}}</span></p>
                				<p>企业类型：<span>{{item.entType}}</span></p>
                				<p>注册资本（万元）：<span>{{item.regCap}}</span>（{{item.regCapCur}}）</p>
                				<p>统一社会信用代码：<span>{{item.creditCode}}</span></p>
                				<p>成立时间：<span>{{item.estabDate}}</span></p>
                				<p>行业名称：<span>{{item.industryName}}</span></p>
                				<p>省份：<span>{{item.regOrgProvince}}</span></p>
                			</div>
                		</el-col>
                		<el-col :xs='8' :md='8' :xl='8'>
                			<div id="">
                				<p></p>
                				<p>认缴出资额（万元）：<span>{{item.contriAmount}}</span>（{{item.currency}}）</p>
                				<p>出资方式：<span>{{item.contriForm}}</span></p>
                				<p>出资比例：<span>{{item.contriRatio}}</span></p>
                			</div>
                		</el-col>
                		<el-col :xs='2'  :md='3' :xl='6'>
                			<div id="">
                				<span class="enStatus">{{item.entStatus}}</span>
                			</div>
                		</el-col>
                	</el-row>
                </div>
                <!-- manager 人员高管信息 -->
                <div v-if='manager.length>0' v-for="item in manager" class="investmentContent">
                	<el-row :gutter="10" type="flex" justify='center'>
                		<el-col :xs='12'  :md='12' :xl='8'>
                			<div id="" class="cellStyle">
                				<p>{{item.entName}}<span class="invest_title themeG_c">{{item.position}}</span></p>
                				<p>任职人：<span>{{item.name}}</span></p>
                				<p>注册号：<span>{{item.regNo}}</span></p>
                				<p>企业类型：<span>{{item.entType}}</span></p>
                				<p>注册资本（万元）：<span>{{item.regCap}}</span>（{{item.regCapCur}}）</p>
                				<p>统一社会信用代码：<span>{{item.creditCode}}</span></p>
                				<p>成立时间：<span>{{item.estabDate}}</span></p>
                				<p>行业名称：<span>{{item.industryName}}</span></p>
                				<p>省份：<span>{{item.regOrgProvince}}</span></p>
                			</div>
                		</el-col>
                		<el-col :xs='8'  :md='8' :xl='8'>
                			<div id="">
                				
                			</div>
                		</el-col>
                		<el-col :xs='3'  :md='3' :xl='6'>
                			<div id="">
                				<span class="enStatus">{{item.entStatus}}</span>
                			</div>
                		</el-col>
                	</el-row>
                </div>
                <div v-if='noMeg' class='nomseg'>
                	暂无数据
                </div>
            </div>
        </div>
        
    </template>
    
    <script>
        import { validataCardId } from '../common/http.js'
        export default{
            data(){
                return{
                    labelPosition:'right',
                    form: {
                       idCard:'',
                    },
                    legaPerson:'',
                    shareHolder:'',
                    manager:'',
                    rules:{
                        idCard: [
                            {required:true,message:'请输入身份证号',trigger: 'blur'},
                            {validator:validataCardId,trigger:'blur'}
                        ],
                    },
                    noMeg:true,
                }
            },
            methods:{
                onSubmit(formName){
                	this.$refs[formName].validate((valid)=>{
			            if(valid){
			                this.$axios.post(this.HOST2+'/api/v1/acedata',{
		                        apiCode: 'acedata.user.investment',
		                        idcard: this.form.idCard,
		                    })
		                    .then(res=>{
		                        if(res.data==='登录超时'){
		                                this.$message('登录超时，请重新登录');
		                                this.$router.push('/login');
		                        }else if(res.data===''||res.data===null||res.data==='{}'){
		                            this.$message('暂无信息');
		                        }else{
		                            if(res.data.success == true){
		                                if(res.data.message=='没有获取有效数据'){
		                                    this.$message.error(res.data.data)
			                                this.shareHolder=[];
			                                this.legaPerson=[];
			                                this.manager=[];
			                                this.noMeg=true;
		                                }else{
		                                    const datas = res.data.data.result;
		                                    console.log(res.data)
		                                    this.shareHolder=datas.shareholder;
		                                    this.legaPerson=datas.legalPerson;
		                                    this.manager=datas.manager;
		                                    this.shareHolder.map((item,index)=>{
		                                    	item.regCap=(item.regCap*1).toFixed(2);
		                                    	item.contriAmount=(item.contriAmount*1).toFixed(2);
		                                    })
		                                    this.legaPerson.map((item,index)=>{
		                                    	item.regCap=(item.regCap*1).toFixed(2);
		                                    })
		                                    this.manager.map((item,index)=>{
		                                    	item.regCap=(item.regCap*1).toFixed(2);
		                                    })
		                                    this.noMeg=false;
		                                }
		                            }else{
		                                this.$message.error("异常错误")
		                                this.shareHolder=[];
		                                this.legaPerson=[];
		                                this.manager=[];
		                                this.noMeg=true;
		                            }
		                            
		                        } 
		                    
		                    })
		                    .catch(error=>{
		                        this.$message.error("没有获取有效数据1")
		                        this.shareHolder=[];
		                        this.legaPerson=[];
		                        this.manager=[];
		                        this.noMeg=true;
		                    })
			            }else {
			            	this.$message({message: "请填写相关信息！",type: "error"})
			            }
		            })
          
                    // const uncodeName = encodeURI(this.form.name);
                    // console.log(uncodeName)
                    
                    

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
		.investmentContent{
			border: 1px solid #ccc;
			box-sizing: border-box;
			margin: 0 1.7em 1.7em 1.7em;
		}
		.enStatus,.investmentContent p{
			/*text-align: center;*/
			min-height: 2.4em;
			line-height: 2.4em;
			font-size: 0.8rem;
			color: #606266;
		}
        .investmentContent p:nth-child(1){
        	font-size: 1rem;
        	font-weight: bold;
        	color: #000;
        }
        .invest_title{
        	font-size: 0.8rem;
        	margin-left: 1.25em;
        }
        .cellStyle{
        	white-space: nowrap;
        }
    </style>