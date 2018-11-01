<template>
	<div class="contentFull">
		<div class="queryResult_table">
			<p class="tableTitle">摩尔征信平台汇总数据</p>
			<el-table border :data="moerCreditData"
				:header-row-class-name="tableRowClassName">
				<el-table-column label="日期" prop="date"></el-table-column>
				<el-table-column label="当天查询次数" prop="currentDateQueryNum"></el-table-column>
				<el-table-column label="当天付费金额" prop="currentDateCost"></el-table-column>
				<el-table-column label="累计查询次数" prop="sumQueryNum"></el-table-column>
				<el-table-column label="累计付费金额" prop="sumCost"></el-table-column>
			</el-table>
		</div>
		<div class="queryResult_table">
			<div class="tableTitle">第三方平台数据汇总</div>
			<el-table border :data="thirdPartyData"
				:header-row-class-name="tableRowClassName">
				<el-table-column label="数据源" prop="datasource_cn"></el-table-column>
				<el-table-column label="当天查询次数" prop="currentDateQueryNum"></el-table-column>
				<el-table-column label="当天付费金额" prop="currentDateCost"></el-table-column>
				<el-table-column label="累计查询次数" prop="sumQueryNum"></el-table-column>
				<el-table-column label="累计付费金额" prop="sumCost"></el-table-column>
			</el-table>
		</div>
		<div class="queryResult_table">
			<div class="tableTitle">用户查询数据明细
			  <div style="float:right;margin-right:20px;">
			  	<el-input placeholder="请输入姓名" v-model="queryName">
			  		<el-button class="" @click="queryUser" slot="append">搜索</el-button>
			  	</el-input>
			  </div>
			 </div>
			<el-table border :data="userData"
				:header-row-class-name="tableRowClassName">
				<el-table-column label="姓名" prop="name"></el-table-column>
				<el-table-column label="邮箱" prop="email"></el-table-column>
				<el-table-column label="查询类目" prop="channel"></el-table-column>
				<el-table-column label="查询费用" prop="cost"></el-table-column>
				<el-table-column label="查询时间" prop="queryDate"></el-table-column>
				<el-table-column label="数据源" prop="datasource"></el-table-column>
				<el-table-column label="公司" prop="simplename"></el-table-column>
			</el-table>
			<el-pagination
			    style="text-align:center;margin-top:10px;"
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:currrent-page.sync="currentPage"
				:page-size="10"
				:total="total"
				layout="total,prev,pager,next,jumper">
				
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				moerCreditData:[],
				thirdPartyData:[],
				userData:[],
				queryName:'',
				total:0,
				currentPage:1,
			}
		},
		methods: {
			tableRowClassName({row,rowIndex}){
				if(rowIndex=== 0){
					return 'warning-row';
				}
				return '';
			},
			// 计时计费页面 - 摩尔征信平台数据汇总
			moercreditDataInfo(){
	            this.$axios.defaults.withCredentials=true;
	            this.$axios.get(this.HOST3+'/api/v1/cost/moercreditDataInfo')
	            .then(res=>{
	              console.log(res.data);
	             this.moerCreditData=res.data
	             
	            })
	            .catch(error=>{
	                // alert('暂无服务')
	            })
			},
			// 计时计费页面 - 第三方平台数据汇总
			externalDatasourceInfo(){
	            this.$axios.defaults.withCredentials=true;
	            this.$axios.get(this.HOST3+'/api/v1/cost/externalDatasourceInfo')
	            .then(res=>{
	              console.log(res.data);
	             	this.thirdPartyData=res.data;
	            })
	            .catch(error=>{
	                // alert('暂无服务')
	            })
			},
			// 计时计费页面 - 第三方平台数据汇总
			userRecordInfo(username){
				const params={}
				if(username=='' || username==null){
					params.pageNum=this.currentPage;
	            	params.pageSize='10';
				}else{
					params.name=username;
					params.pageNum=this.currentPage;
	            	params.pageSize='10';
				}
	            this.$axios.defaults.withCredentials=true;
	            this.$axios.get(this.HOST3+'/api/v1/cost/recordInfo',{
	            	params:params
	            })
	            .then(res=>{
	              console.log(res.data);
	             this.userData=res.data.list;
	             this.total=res.data.total;
	            })
	            .catch(error=>{
	                // alert('暂无服务')
	            })
			},
			// 
			queryUser(){
			  this.userRecordInfo(this.queryName);
			},
			handleSizeChange(val){
				console.log(val)
			},
			handleCurrentChange(val){
				// console.log(val)
				this.currentPage=val;
				this.userRecordInfo(this.queryName);
			}
		},
		mounted(){
			this.moercreditDataInfo();
			this.externalDatasourceInfo();
			this.userRecordInfo(this.queryName);
		},
		created(){

		},
	}
</script>

<style scoped>
	.el-table .warning-row{
		background: #d2e3fd;
	}
	.contentFull {
		padding: 40px;
		width: 100%;
		background-color: #fff;		
	}
	.queryResult_table {
		margin:0 0 30px 0;
	}
	.queryResult_table .tableTitle {
		line-height: 40px;
		font-size: 14px;
		border:1px solid #ebeef5;
		border-bottom:none;
		padding-left: 10px;
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