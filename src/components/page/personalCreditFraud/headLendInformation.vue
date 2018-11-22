<template>
	<div class="contentFull">
		<div class="newCheck">
			<p class="newCheck-content">多头借贷信息查询</p>
			<div class="newCheck_form">
				<el-form :inline="true" :model="newQuery" ref="newQuery" :rules="rules">
					<el-form-item class='check_error' label="查询类型：" prop="type">
						<el-checkbox label="全选" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll"></el-checkbox>
						<el-checkbox-group v-model="newQuery.type" @change="handleCheckedTypeChange">							
							<el-checkbox v-for="(item,index) in typeOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>							
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="手机号：" prop="cellphone">
						<el-input v-model="newQuery.cellphone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="时间段：" prop="cycle">
						<el-select v-model="newQuery.cycle" @change="open">
							<el-option 
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="informationQuery('newQuery')">提交</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="queryResult">
			<p class="newCheck-content newCheck-example">多头借贷信息查询结果</p>
			<div class="queryResult_table">
				<p class="tableTitle">信贷平台注册信息</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">查询时间段</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{creditRegistInformation.cycle}}</div>
							</el-col>
						</div>
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">注册总数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{creditRegistInformation.registerNum}}</div>
							</el-col>
						</div>
					</el-row>
				</div>
				<p class="tableTitle">信贷平台注册详情</p>
				<el-table border :data="creditRegistration">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="注册时间" prop="registerTime"></el-table-column>
				</el-table>
				<p class="tableTitle">贷款申请次数</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">查询时间段</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplication.cycle}}</div>
							</el-col>
						</div>
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">申请次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplication.loanNum}}</div>
							</el-col>
						</div>
					</el-row>
				</div>
				<p class="tableTitle">贷款申请详情</p>
				<el-table border :data='applicationDetail'>					
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="申请时间" prop='applicationTime'></el-table-column>
					<el-table-column label="申请金额区间" prop="applicationAmount"></el-table-column>
				</el-table>
				<p class="tableTitle">贷款申请结果</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">查询时间段</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaResult.cycle}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">记录总条数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaResult.resultNum}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">申请通过次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaResult.passes}}</div>
							</el-col>
						</div>
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">申请被拒次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaResult.rejected}}</div>
							</el-col>
						</div>
					</el-row>
				</div>
				<p class="tableTitle">贷款放款次数</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">查询时间段</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaNum.cycle}}</div>
							</el-col>
						</div>						
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">贷款放款次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanApplicaNum.loanLendersNum}}</div>
							</el-col>
						</div>
					</el-row>
				</div>								
				<p class="tableTitle">贷款放款详情</p>
				<el-table border :data="loanDisbursement">					
					<el-table-column label="序号" type='index'></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="放款时间" prop="loanLendersTime"></el-table-column>
					<el-table-column label="放款金额区间" prop="loanLendersAmount"></el-table-column>
				</el-table>
				<p class="tableTitle">贷款驳回次数</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">查询时间段</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanRejectNum.cycle}}</div>
							</el-col>
						</div>						
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">贷款驳回次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{loanRejectNum.loanRejectionNum}}</div>
							</el-col>
						</div>
					</el-row>
				</div>	
				<p class="tableTitle">贷款驳回详情</p>
				<el-table border :data="dismissalDetail">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="驳回时间" prop="rejectionTime"></el-table-column>
				</el-table>				
				<p class="tableTitle">逾期信息查询</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">手机号</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueInformationQuery.cellphone}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">逾期总次数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueInformationQuery.counts}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">逾期金额区间</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueInformationQuery.money}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">省</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueInformationQuery.province}}</div>
							</el-col>
						</div>
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">市</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueInformationQuery.city}}</div>
							</el-col>
						</div>
					</el-row>
				</div>																					
				<p class="tableTitle">逾期平台查询</p>				
				<div class="creditRegistInformation">
					<el-row :gutter="10">
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">手机号</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueCycleQuery.cellphone}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">发生逾期的平台总数</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueCycleQuery.counts}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">逾期金额区间</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueCycleQuery.money}}</div>
							</el-col>
						</div>
						<div class="cycle_time">
							<el-col :span="12">
								<div class="creditRegistInformation_title">省</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueCycleQuery.province}}</div>
							</el-col>
						</div>
						<div class="cycle_time cycle_times">
							<el-col :span="12">
								<div class="creditRegistInformation_title">市</div>
							</el-col>
							<el-col :span="12">
								<div class="creditRegistInformation_cont">{{overdueCycleQuery.city}}</div>
							</el-col>
						</div>
					</el-row>
				</div>								
				<p class="tableTitle">逾期平台详情查询</p>
				<el-table border :data="overdueDetail">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="平台类型" prop="platformType"></el-table-column>
					<el-table-column label="逾期数量" prop="counts"></el-table-column>
					<el-table-column label="逾期金额区间" prop="money"></el-table-column>
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
		const cityOptions = [
				{
					value: 'S001',
					label: '信贷平台注册信息'
				},
				{
					value: 'S002',
					label: '信贷平台注册详情'
				},
				{
					value: 'S003',
					label: '贷款申请次数'
				},
				{
					value: 'S004',
					label: '贷款申请详情'
				},
				{
					value: 'S005',
					label: '贷款申请结果'
				},
				{
					value: 'S006',
					label: '贷款放款次数'
				},
				{
					value: 'S007',
					label: '贷款放款详情'
				},
				{
					value: 'S008',
					label: '贷款驳回次数'
				},
				{
					value: 'S009',
					label: '贷款驳回详情'
				},
				{
					value: 'S010',
					label: '逾期信息查询'
				},
				{
					value: 'S011',
					label: '逾期平台查询'
				},
				{
					value: 'S012',
					label: '逾期平台详情查询'
				},
				{
					value: 'S013',
					label: '欠款查询'
				}					
			]
		const cityOptions_value = [
		 'S001','S002','S003','S004','S005','S006','S007','S008','S009','S010','S011','S012','S013',	
	    ]
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
				typeOption: cityOptions,
				isIndeterminate: false,
				checkAll: false,
				newQuery: {
					cellphone: '',
					cycle: '',
					type: [	],
					startTime: '',
					endTime: ''
				},
				types: '',
				rules:{
	              cellphone:[
	                {required: true, message: '请输入手机号！', trigger:'blur'}
	              ],
	              cycle:[
	                {required: true, message: '请选择时间段！', trigger:'change'}
	              ],
	              type:[
	                {type: 'array', required: true, message: '请至少选择一个查询类型！', trigger:'change'}
	              ]
	           },
	           currentdate: '',
	           newDate: '',
	           newDate1: '',
	           newDate2: '',
	           creditRegistInformation: {},
	           creditRegistration: [],
	           loanApplication: {},
	           applicationDetail: [],
	           dismissalDetail: [],
	           overdueDetail: [],
	           arrearsInquiry: [],
	           loanDisbursement: [],
	           loanApplicaResult:{},
	           loanApplicaNum: {},
	           loanRejectNum: {},
	           overdueInformationQuery: {},
	           overdueCycleQuery: {},
	           content: ''
			}
		},
		methods: {
			informationQuery(formName){  
	            this.$refs[formName].validate((valid)=>{              
		            if(valid){
		            	this.types = this.newQuery.type.join(",")
		                this.$axios.defaults.withCredentials=true;
		                this.$axios.post(this.HOST2+'/api/v1/acedata',{
		                    cycle: this.newQuery.cycle,
		                    cellphone: this.newQuery.cellphone,
		                    type: this.types,
		                    apiCode: 'acedata.user.creditinfo',
		                    startTime: this.currentdate,
		                    endTime: this.newDate
		                })
		                .then(res=>{
		                	this.content = res.data.message
		                	if(res.data.cost === '57') {
		                		this.creditRegistInformation = res.data.data.result.S001
			                  	this.creditRegistration = res.data.data.result.S002.data
			                  	this.creditRegistration.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                  	this.loanApplication = res.data.data.result.S003
			                     this.applicationDetail = res.data.data.result.S004.data
			                     this.applicationDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                     this.loanApplicaResult = res.data.data.result.S005
			                     this.loanApplicaNum = res.data.data.result.S006
			                     this.loanRejectNum = res.data.data.result.S008
			                     this.overdueInformationQuery = res.data.data.result.S010
			                     this.dismissalDetail = res.data.data.result.S009.data
			                     this.dismissalDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                     this.overdueCycleQuery = res.data.data.result.S011
			                     this.overdueDetail = res.data.data.result.S012.data
			                     this.overdueDetail.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                     this.arrearsInquiry = res.data.data.result.S013.data
			                     this.arrearsInquiry.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
			                     this.loanDisbursement = res.data.data.result.S007.data
			                     this.loanDisbursement.map(item => {
			                  		if(item.platformType === '0') {
			                  			item.platformType = '全部'
			                  		} else if(item.platformType === '1') {
			                  			item.platformType = '银行'
			                  		}else if(item.platformType === '2') {
			                  			item.platformType = '非银行'
			                  		}
				                })
		                	} else if(res.data.cost === '0') {
		                		this.$message({
									dangerouslyUseHTMLString: true,
									message: this.content, 
									type: "error"})
			                		   this.creditRegistInformation = {},
							           this.creditRegistration = [],
							           this.loanApplication = {},
							           this.applicationDetail = [],
							           this.dismissalDetail = [],
							           this.overdueDetail = [],
							           this.arrearsInquiry = [],
							           this.loanDisbursement = [],
							           this.loanApplicaResult = {},
							           this.loanApplicaNum = {},
							           this.loanRejectNum = {},
							           this.overdueInformationQuery = {},
							           this.overdueCycleQuery = {}
		                	}
		                	
		                })
		                .catch(error=>{
		                  // alert('暂无服务');
//		                    console.log(error.response);
		                })
		            } else {
		            	this.$message({message: "请填写相关信息！",type: "error"})
		            }
	            })
          	},
          	
          	AddMonth(date, num) {
          		var monthnum = parseInt(num);
          		var year = parseInt(date.substring(0,4));
          		var month = parseInt(date.substring(5,7));
          		var day = parseInt(date.substring(8,10));          		
          		if(month + monthnum > 12) {
          			var newyear = year + 1;
          			var newmonth = month + monthnum - 12;
          			var newday = day;
	           	} else {
	           		var newyear = year;
	           		var newmonth = month + monthnum;
	           		var newday = day
	           	}
	           	this.currentdate = newyear + "-" + newmonth + "-" + newday
	           	return this.currentdate
          	},          	         	          	
          	getNewFormatDate() {
            	let date = new Date()
          		let seperators1 = "-"
          		let year = date.getFullYear()
          		let month = date.getMonth() + 1
          		let strDate = date.getDate()
          		if(month >= 1 && month <= 9) {
          			month = "0" + month
          		}
          		if(strDate >= 0 && strDate <= 9) {
          			strDate = "0" + strDate
          		}
          		this.newDate = year + seperators1 + month + seperators1 + strDate
          		return this.newDate
          	},
          	getNewFormatDate1() {
            	let date = new Date()
          		let seperators1 = "-"
          		let year = date.getFullYear() -1
          		let month = date.getMonth() + 1
          		let strDate = date.getDate()
          		if(month >= 1 && month <= 9) {
          			month = "0" + month
          		}
          		if(strDate >= 0 && strDate <= 9) {
          			strDate = "0" + strDate
          		}
          		this.newDate1 = year + seperators1 + month + seperators1 + strDate
          		this.currentdate = this.newDate1
          		return this.newDate1
          	},
          	getNewFormatDate2() {
            	let date = new Date()
          		let seperators1 = "-"
          		let year = date.getFullYear() -2
          		let month = date.getMonth() + 1
          		let strDate = date.getDate()
          		if(month >= 1 && month <= 9) {
          			month = "0" + month
          		}
          		if(strDate >= 0 && strDate <= 9) {
          			strDate = "0" + strDate
          		}
          		this.newDate2 = year + seperators1 + month + seperators1 + strDate
          		console.log(this.newDate2)
          		this.currentdate = this.newDate2
          		console.log(this.currentdate)
          		return this.newDate2
          	},
          	open(val) {
      			this.getNewFormatDate()      			
      			if(val === '12') {
      				this.getNewFormatDate1()
      			} else if(val === '24') {
      				this.getNewFormatDate2()
      			} else {
      				this.AddMonth(this.newDate,-val)
      			}      			
          	},
          	handleCheckAll(val) {  
//        		this.newQuery.type = val ? cityOptions : [ ];
				if(val){
					this.newQuery.type=cityOptions_value;
				}else{
					this.newQuery.type=[ ];
				}
          		this.isIndeterminate = false;
          	},
          	handleCheckedTypeChange(value) {
          		let checkedCount = value.length;
          		this.checkAll = checkedCount === this.typeOption.length;
          		this.isIndeterminate = checkedCount > 0 && checkedCount < this.typeOption.length
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
	.queryResult_table .creditRegistInformation {
		border: 1px solid #ebeef5;
		margin-bottom: 30px;
	}
	.creditRegistInformation .cycle_time {
		border-bottom: 1px solid #ebeef5;
		height: 35px;
		line-height: 35px;
		text-align: center;
		color: #909399;
		font-size: 14px;		
	}
	.creditRegistInformation .cycle_times {
		border-bottom: none;
	}
	.creditRegistInformation .creditRegistInformation_title {
		border-right: 1px solid #ebeef5;
	}

</style>