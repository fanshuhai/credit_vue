<template>
	<div class="contentFull">
		<div class="newCheck">
			<p class="newCheck-content">多头借贷逾期查询</p>
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
						<el-button type="primary" @click="overdueQuery('newQuery')">提交</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="queryResult">
			<p class="newCheck-content newCheck-example">多头借贷逾期查询结果</p>
			<div class="queryResult_table">
				<p class="tableTitle">逾期平台详情查询</p>
				<el-table border :data="overdueDetail">
					<el-table-column label="序号" type="index"></el-table-column>
					<el-table-column label="机构类型" prop="platformType"></el-table-column>
					<el-table-column label="逾期次数" prop="counts"></el-table-column>
					<el-table-column label="逾期金额区间" prop="money"></el-table-column>
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
					cycle: '',
					cellphone: ''
				},
				rules:{
	              cellphone:[
	                {required: true, message: '请输入手机号！', trigger:'blur'}
	              ],
	              cycle:[
	                {required: true, message: '请选择时间段！', trigger:'change'}
	              ]
	           },
	           overdueDetail: [],
	           content: ''
			}
		},
		creadte() {
			
		},
		methods: {
			overdueQuery(formName){  
	            this.$refs[formName].validate((valid)=>{              
		            if(valid){
		                this.$axios.defaults.withCredentials=true;
		                this.$axios.post(this.HOST2+'/api/v1/acedata',{
		                    apiCode: 'acedata.user.overdueloan',
		                    cycle: this.newQuery.cycle,
		                    cellphone: this.newQuery.cellphone,
		                })
		                .then(res=>{
		                    console.log(res.data)
		                    this.content = res.data.message
		                    if(res.data.cost === '70') {
		                    	this.overdueDetail = res.data.data.result	
			                    this.overdueDetail.map(item => {
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
		                    	this.overdueDetail = []
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
	.queryResult_table .cell {
		text-align: center;
	}
	.queryResult_table .tableTitle {
		line-height: 40px;
		font-size: 14px;
		border:1px solid #ebeef5;
		border-bottom:none;
		padding-left: 10px;
	}
</style>