<template>
	<div class="contentFull">
		<div class="newCheck">
			<p class="newCheck-content">多头借贷全量查询</p>
			<div class="newCheck_form">
				<el-form ref="newQuery" :rules="rules" :inline="true" :model="newQuery">
					<el-form-item label="手机号：" prop="cellphone">
						<el-input v-model="newQuery.cellphone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="时间段：" prop="cycle">
						<el-select v-model="newQuery.cycle">
							<el-option 
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="fullQuery('newQuery')">提交</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="queryResult">
			<p class="newCheck-content newCheck-example">多头借贷全量查询结果</p>
			<div class="queryResult_table">
				<p class="tableTitle">信贷平台注册详情</p>
				<el-table border :data="creditRegistration">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="注册时间" prop="registerTime"></el-table-column>
				</el-table>
				<p class="tableTitle">贷款申请详情</p>
				<el-table border :data='applicationDetail'>					
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="申请时间" prop='applicationTime'></el-table-column>
					<el-table-column label="申请金额区间" prop="applicationAmount"></el-table-column>
				</el-table>
				<!--<el-table border>
					<el-table-column label="序号" type='index'></el-table-column>
					<el-table-column label=""></el-table-column>
					<el-table-column label=""></el-table-column>
				</el-table>-->
				<p class="tableTitle">贷款驳回详情</p>
				<el-table border :data="dismissalDetail">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="驳回时间" prop="rejectionTime"></el-table-column>
				</el-table>
				<p class="tableTitle">逾期平台详情查询</p>
				<el-table border :data="overdueDetail">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="逾期数量" prop="counts"></el-table-column>
					<el-table-column label="逾期金额区间" prop="money"></el-table-column>
					<!--<el-table-column label="最近逾期时间"></el-table-column>-->
				</el-table>
				<p class="tableTitle">欠款查询</p>
				<el-table border :data="arrearsInquiry">
					<el-table-column label="序号" type="index"></el-table-column>
					<!--<el-table-column label="平台类型" prop="platformType"></el-table-column>-->
					<el-table-column label="欠款金额区间" prop="money"></el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{
						value: '24',
						label: '近24个月'
					},
					{
						value: '12',
						label: '近12个月'
					},
					{
						value: '9',
						label: '近9个月'
					},
					{
						value: '6',
						label: '近6个月'
					},
					{
						value: '3',
						label: '近3个月'
					},
					{
						value: '1',
						label: '近1个月'
					}
				],
				newQuery: {
					cellphone: '',
					cycle: ''
				},
				rules:{
	              cellphone:[
	                {required: true, message: '请输入手机号！', trigger:'blur'}
	              ],
	              cycle:[
	                {required: true, message: '请选择时间段！', trigger:'change'}
	              ]
	           },
	           creditRegistration: [],
	           applicationDetail: [],
	           dismissalDetail: [],
	           overdueDetail: [],
	           arrearsInquiry: [],
	           content: '',
	           codes: ''
			}
		},
		creadte() {
			
		},
		methods: {
			fullQuery(formName){  
	            this.$refs[formName].validate((valid)=>{              
		            if(valid){
		                this.$axios.defaults.withCredentials=true;
		                this.$axios.post(this.HOST2+'/api/v1/acedata',{
		                    cycle: this.newQuery.cycle,
		                    cellphone: this.newQuery.cellphone,
		                    apiCode: 'acedata.user.creditinfoall',
		                })
		                .then(res=>{		                	
		                	this.content = res.data.message
		                	this.codes = res.data.cost
		                	if(res.data.cost === '140') {
		                		this.creditRegistration = res.data.data.result.data.S002.data
			                    this.creditRegistration.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                    this.applicationDetail = res.data.data.result.data.S004.data
			                    this.applicationDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                    this.dismissalDetail = res.data.data.result.data.S009.data
			                    this.dismissalDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                    this.overdueDetail = res.data.data.result.data.S012.data
			                    this.overdueDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                    this.arrearsInquiry = res.data.data.result.data.S013.data
			                    this.arrearsInquiry.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
		                	} else {
		                		this.$message({
									dangerouslyUseHTMLString: true,
									message: this.content, 
									type: "error"})
			                		this.creditRegistration = [],
						            this.applicationDetail = [],
						            this.dismissalDetail = [],
						            this.overdueDetail = [],
						            this.arrearsInquiry = []
		                	}
		                    
		                })
		                .catch(error=>{		                   
		                })
		            } else {
		            	this.$message({message: "请填写相关信息！",type: "error"})
		            }
	            })
          	}
		}
	}
</script>

<style scoped>
	.contentFull {
		padding: 40px;
		width: 100%;
		background-color: #fff;		
	}
	.newCheck {
		width: 100%;
		border: 1px solid #ccc;
	}
	.newCheck-content {
		border-bottom: 1px solid #ccc;
		padding: 15px 0 15px 30px;
		font-size: 14px;
	}
	.newCheck-example {
		border-bottom: none;
	}
	.newCheck_form {
		margin: 30px 0 50px 30px;
	}
	.queryResult {
		border: 1px solid #ccc;
		margin-top: 40px;
	}
	.queryResult .el-table {
		margin-bottom: 30px;
	}
	.queryResult_table {
		margin: 30px;
	}
	.queryResult_table .tableTitle {
		line-height: 40px;
		font-size: 14px;
		border:1px solid #ebeef5;
		border-bottom:none;
		padding-left: 10px;
	}
	.queryResult_table .cell {
		text-align: center;
	}
</style>