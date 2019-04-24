<template>
	<div class="contentFull">
		<div class="newCheck selectCheck">
			<p class="newCheck-content">企业司法信息核查</p>
			<div class="newCheck_form">
				<el-form :inline="true" :model="newQuery" ref="newQuery" :rules="rules">
					<el-form-item label="" prop="entPrise">
						<el-input style="width: 400px;" v-model="newQuery.entPrise" placeholder="请输入企业名称/企业注册号"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="informationQuery('newQuery')">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="queryResult">
			<p class="newCheck-content newCheck-example">企业司法信息查询结果</p>
			<div class="checks_all selectCheck perjudicial" >
				<el-form :inline="true" :model="queryResult" ref="queryResult" :rules="rules1">
					<el-form-item class='check_error1' label="类型：" prop="type">
						<el-checkbox class="selectAllC" :label="checkAllData" :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAll"></el-checkbox>
						<el-checkbox-group style="display: inline;" v-model="queryResult.type" @change="handleCheckedTypeChange">							
							<el-checkbox v-for="(item,index) in typeOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>							
						</el-checkbox-group>
					</el-form-item>
				</el-form>
			</div>
			<!--执行公开信息1-->
            <div v-show="zhixing_s" class="investmentContent">
            	<template v-if='zhixing.length>0' v-for="(item,index) in zhixing">
	            	<el-row  :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">执行公开信息-{{index+1}}</span></p>
	            				<p>立案时间：<span>{{item.sslong}}</span></p>
	            				<p>被执行人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>执行案号：<span>{{item.casenum}}</span></p>
	            				<p>执行法院：<span>{{item.court}}</span></p>
	            				<p>证件内容：<span>{{item.content}}</span></p>
	            				<p>执行状态：<span>{{item.state}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='zhixing.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">执行公开信息</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--失信老赖名单2-->
            <div v-show="shixin_s" class="investmentContent">
            	<template v-if='shixin.length>0' v-for="(item,index) in shixin">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">失信老赖名单-{{index+1}}</span></p>
	            				<p>具体日期：<span>{{item.sslong}}</span></p>
	            				<p>被执行人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>执行案号：<span>{{item.casenum}}</span></p>
	            				<p>执行法院：<span>{{item.court}}</span></p>
	            				<p>执行内容：<span>{{item.content}}</span></p>
	            				<p>执行状态：<span>{{item.state}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='shixin.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">失信老赖名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--欠税名单3-->
            <div v-show="qianshui_s" class="investmentContent">
            	<template v-if='qianshui.length>0' v-for="(item,index) in qianshui">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">欠税名单-{{index+1}}</span></p>
	            				<p>欠税发生时间：<span>{{item.sslong}}</span></p>
	            				<p>纳税人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>主管税务机关：<span>{{item.court}}</span></p>
	            				<p>欠税余额：<span>{{item.money}}</span></p>
	            				<p>所欠税种：<span>{{item.taxtype}}</span></p>
	            				<p>欠税属期：<span>{{item.taxperiod}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='qianshui.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">欠税名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--纳税非正常户4-->
            <div v-show="feizheng_s" class="investmentContent">
            	<template v-if='feizheng.length>0' v-for="(item,index) in feizheng">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
            				<p>{{username}}<span class="invest_title themeG_c">纳税非正常户-{{index+1}}</span></p>
            				<p>认定日期：<span>{{item.sslong}}</span></p>
            				<p>纳税人：<span>{{item.name}}</span></p>
            				<p>纳税人识别号：<span>{{item.id}}</span></p>
            				<p>主管税务机关：<span>{{item.court}}</span></p>
            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='feizheng.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">纳税非正常户</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--欠款欠费名单5-->
            <div v-show="qiankuan_s" class="investmentContent">
            	<template v-if='qiankuan.length>0' v-for="(item,index) in qiankuan">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
            				<p>{{username}}<span class="invest_title themeG_c">欠款欠费名单-{{index+1}}</span></p>
            				<p>具体日期：<span>{{item.sslong}}</span></p>
            				<p>欠款人：<span>{{item.name}}</span></p>
            				<p>证件号码：<span>{{item.id}}</span></p>
            				<p>身份：<span>{{item.pctype}}</span></p>
            				<p>欠款原因：<span>{{item.casetopic}}</span></p>
            				<p>拖欠金额：<span>{{item.money}}</span></p>
            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='qiankuan.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">欠款欠费名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--限制高消费名单6-->
            <div v-show="xiangao_s" class="investmentContent">
            	<template v-if='xiangao.length>0' v-for="(item,index) in xiangao">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
            				<p>{{username}}<span class="invest_title themeG_c">限制高消费名单-{{index+1}}</span></p>
            				<p>具体日期：<span>{{item.sslong}}</span></p>
            				<p>被执行人：<span>{{item.name}}</span></p>
            				<p>证件号码：<span>{{item.id}}</span></p>
            				<p>执行案号：<span>{{item.casenum}}</span></p>
            				<p>执行法院：<span>{{item.court}}</span></p>
            				<p>执行内容：<span>{{item.content}}</span></p>
            				<p>日期类别：<span>{{item.timetype}}</span></p>
            				<p>执行状态：<span>{{item.state}}</span></p>
            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='xiangao.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">限制高消费名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--限制出入境名单7-->
            <div v-show="xianchu_s" class="investmentContent">
            	<template v-if='xianchu.length>0' v-for="(item,index) in xianchu">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
            				<p>{{username}}<span class="invest_title themeG_c">限制出入境名单-{{index+1}}</span></p>
            				<p>具体日期：<span>{{item.sslong}}</span></p>
            				<p>被限制人：<span>{{item.name}}</span></p>
            				<p>证件号码：<span>{{item.id}}</span></p>
            				<p>执行案号：<span>{{item.casenum}}</span></p>
            				<p>执行法院：<span>{{item.court}}</span></p>
            				<p>执行内容：<span>{{item.content}}</span></p>
            				<p>日期类别：<span>{{item.timetype}}</span></p>
            				<p>执行状态：<span>{{item.state}}</span></p>
            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='xianchu.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">限制出入境名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--民商事裁判文书8-->
            <div v-show="caipan_s" class="investmentContent">
            	<template v-if='caipan.length>0' v-for="(item,index) in caipan">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">民商事裁判文书-{{index+1}}</span></p>
	            				<p>结案时间：<span>{{item.sslong}}</span></p>
	            				<p>当事人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>案号：<span>{{item.casenum}}</span></p>
	            				<p>诉讼地位：<span>{{item.pctype}}</span></p>
	            				<p>审理机关：<span>{{item.court}}</span></p>
	            				<p>文书类型：<span>{{item.writtype}}</span></p>
	            				<p>涉案事由：<span>{{item.casetopic}}</span></p>
	            				<p>涉案金额：<span>{{item.money}}</span></p>
	            				<p>审理结果：<span>{{item.content}}</span></p>
	            				<p>审理程序：<span>{{item.vprogram}}</span></p>
	            				<p>审理人员：<span>{{item.tribunal}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            				<p>原告当事人：<span>{{item.plaintiff}}</span></p>
	            				<p>被告当事人：<span>{{item.defendant}}</span></p>
	            				<p>其他当事人：<span>{{item.otherparty}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='caipan.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">民商事裁判文书</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--民商事审判流程9-->
            <div v-show="shenpan_s" class="investmentContent">
            	<template v-if='shenpan.length>0' v-for="(item,index) in shenpan">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">民商事审判流程-{{index+1}}</span></p>
	            				<p>具体日期：<span>{{item.sslong}}</span></p>
	            				<p>当事人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>案号：<span>{{item.casenum}}</span></p>
	            				<p>诉讼地位：<span>{{item.pctype}}</span></p>
	            				<p>审理机关：<span>{{item.court}}</span></p>
	            				<p>公告类型：<span>{{item.writtype}}</span></p>
	            				<p>涉案事由：<span>{{item.casetopic}}</span></p>
	            				<p>公告内容：<span>{{item.content}}</span></p>
	            				<p>日期类别：<span>{{item.timetype}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='shenpan.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">民商事审判流程-0</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--犯罪及嫌疑人名单10-->
            <div v-show="zuifan_s" class="investmentContent">
            	<template v-if='zuifan.length>0' v-for="(item,index) in zuifan">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">犯罪及嫌疑人名单-{{index+1}}</span></p>
	            				<p>处理时间：<span>{{item.sslong}}</span></p>
	            				<p>当事人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>案号：<span>{{item.casenum}}</span></p>
	            				<p>执法机关：<span>{{item.court}}</span></p>
	            				<p>违法事由：<span>{{item.casetopic}}</span></p>
	            				<p>处理结果：<span>{{item.content}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='zuifan.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">犯罪及嫌疑人名单</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            <!--行政违法记录11-->
            <div v-show="weifa_s" class="investmentContent">
            	<template v-if='weifa.length>0' v-for="(item,index) in weifa">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='22' style="padding-left:30px ;">
	            			<div id="">
	            				<p>{{username}}<span class="invest_title themeG_c">行政违法记录-{{index+1}}</span></p>
	            				<p>具体日期：<span>{{item.sslong}}</span></p>
	            				<p>当事人：<span>{{item.name}}</span></p>
	            				<p>证件号码：<span>{{item.id}}</span></p>
	            				<p>案号：<span>{{item.casenum}}</span></p>
	            				<p>执法机关：<span>{{item.court}}</span></p>
	            				<p>违法事由：<span>{{item.casetopic}}</span></p>
	            				<p>执法结果：<span>{{item.content}}</span></p>
	            				<p>日期类别：<span>{{item.timetype}}</span></p>
	            				<p>异议备注：<span>{{item.remark}}</span></p>
	            				<p>法院审理结果：<span>{{item.content2}}</span></p>
	            			</div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='weifa.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">行政违法记录</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
            
            
            <div v-if='noQuery' class='nomseg investmentContent'>
            	暂无数据
            </div>
            <div v-if='queryMsg' class='nomseg investmentContent'>
            	查询成功，暂无数据
            </div>
            
		</div>
		
	</div>
</template>

<script>
	import { validataEnterPrise } from '../common/http.js'
	const cityOptions = [
			{
				value: 'S001',
				label: '执行公开信息（0）'
			},
			{
				value: 'S002',
				label: '失信老赖名单（0）'
			},
			{
				value: 'S003',
				label: '限制高消费（0）'
			},
			{
				value: 'S004',
				label: '限制出入境（0）'
			},
			{
				value: 'S005',
				label: '民商事裁判文书（0）'
			},
			{
				value: 'S006',
				label: '欠税名单（0）'
			},
			{
				value: 'S007',
				label: '行政违法记录（0）'
			},
			{
				value: 'S008',
				label: '犯罪及嫌疑人名单（0）'
			},
			{
				value: 'S009',
				label: '纳税非正常户（0）'
			},
			{
				value: 'S010',
				label: '欠税欠费名单（0）'
			},
			{
				value: 'S011',
				label: '民商事审判流程（0）'
			}					
		]
	const cityOptions_value = ['S001','S002','S003','S004','S005','S006','S007','S008','S009','S010','S011'];
	export default {
		data() {
			return {
				typeOption: cityOptions,
				isIndeterminate: false,
				checkAll: true,
				newQuery: {
					entPrise:'',
				},
				queryResult: {
					type: cityOptions_value,
				},
				types: cityOptions_value,
				rules:{
	              entPrise:[
	                {validator:validataEnterPrise,trigger:'blur'}
	              ]
	            },
				rules1:{
	              type:[
	                {type: 'array', required: false, message: '请至少选择一个查询类型！', trigger:'change'}
	              ]
	            },
	            content: '',
	            
	            username:'',
	            //执行公开信息
	            noQuery:true,
	            queryMsg:false,
	            checkAllData:'全部（0）',
	            zhixing:[ ],
				shixin:[],
				xiangao:[],
				xianchu:[],
				caipan:[],
				qianshui:[],
				feizheng:[],
				weifa:[],
				zuifan:[],
				qiankuan:[],
				shenpan:[],
				
				
	            zhixing_s:true,
				shixin_s:false,
				xiangao_s:false,
				xianchu_s:false,
				caipan_s:false,
				qianshui_s:false,
				feizheng_s:false,
				weifa_s:false,
				zuifan_s:false,
				qiankuan_s:false,
				shenpan_s:false,
			}
		},
		methods: {
			informationQuery(formName){  
	            this.$refs[formName].validate((valid)=>{ 
		            if(valid){
		                this.$axios.defaults.withCredentials=true;
		                this.$axios.post(this.HOST2+'/api/v2/hfw',{
							apiCode:"hfw.judicial.company",
							version:"v2",
							stype:"2",
							accessType:"1",
						   	n:this.newQuery.entPrise
		                })
		                .then(res=>{
		                	console.log(res.data)
		                	if(res.data.data.success=='e'){
		                		this.$message.error(res.data.data.message);
		                	}
		                	let fxcontent=res.data.data.fxcontent;
		                	this.username=res.data.data.username;
		                	this.checkAllData='全部（'+res.data.data.fxmsgnum+'）';
		                	//遍历typeOption
		                	this.typeOption.map((item,index)=>{
		                		console.log(item)
		                		if(item.value=='S001'){
		                			item.label='执行公开信息（'+fxcontent.zhixing.length+'）'
		                		}else if(item.value=='S002'){
		                			item.label='失信老赖名单（'+fxcontent.shixin.length+'）'
		                		}else if(item.value=='S003'){
		                			item.label='限制高消费（'+fxcontent.xiangao.length+'）'
		                		}else if(item.value=='S004'){
		                			item.label='限制出入境（'+fxcontent.xianchu.length+'）'
		                		}else if(item.value=='S005'){
		                			item.label='民商事裁判文书（'+fxcontent.caipan.length+'）'
		                		}else if(item.value=='S006'){
		                			item.label='欠税名单（'+fxcontent.qianshui.length+'）'
		                		}else if(item.value=='S007'){
		                			item.label='行政违法记录（'+fxcontent.weifa.length+'）'
		                		}else if(item.value=='S008'){
		                			item.label='犯罪及嫌疑人名单（'+fxcontent.zuifan.length+'）'
		                		}else if(item.value=='S009'){
		                			item.label='纳税非正常户（'+fxcontent.feizheng.length+'）'
		                		}else if(item.value=='S010'){
		                			item.label='欠款欠费名单（'+fxcontent.qiankuan.length+'）'
		                		}else if(item.value=='S011'){
		                			item.label='民商事审判流程（'+fxcontent.shenpan.length+'）'
		                		}
		                	})

		                	
							this.zhixing=fxcontent.zhixing;
							this.shixin=fxcontent.shixin;
							this.xiangao=fxcontent.xiangao;
							this.xianchu=fxcontent.xianchu;
							this.caipan=fxcontent.caipan;
							this.qianshui=fxcontent.qianshui;
							this.feizheng=fxcontent.feizheng;
							this.weifa=fxcontent.weifa;
							this.zuifan=fxcontent.zuifan;
							this.qiankuan=fxcontent.qiankuan;
							this.shenpan=fxcontent.shenpan;
							
		                	this.typeSelect(this.types);
				            if(this.zhixing.length>0 ||this.xiangao.length>0
				            || this.xianchu.length>0 || this.caipan.length>0 
				            || this.qianshui.length>0 || this.feizheng.length>0
				            || this.weifa.length>0 || this.zuifan.length>0 
				            || this.qiankuan.length>0 || this.shenpan.length>0
				            || this.shixin.length>0){
				              this.noQuery=false;
	            			  this.queryMsg=false;
				            }else{
				              this.noQuery=false;
	            			  this.queryMsg=true;
				            };
		                	
		                })
		                .catch(error=>{
		                  // alert('暂无服务');
//		                    console.log(error.response);
		                })
		            }else {
		            	this.$message({message: "请填写相关信息！",type: "error"})
		            }
	            })
          	},
          	
          	handleCheckAll(val) {
          		this.queryResult.type = val ? cityOptions_value : [ ];
//				if(val){
//					this.queryResult.type=cityOptions_value;
//				}else{
//					this.queryResult.type=[ ];
//				}
          		this.isIndeterminate = false;
          		if(val){
          			this.typeSelect(cityOptions_value);	
          		}else{
          			this.typeSelect('');
          		}
          		
          	},
          	handleCheckedTypeChange(value) {
          		this.types=value;
          		let checkedCount = value.length;
          		this.checkAll = checkedCount === this.typeOption.length;
          		this.isIndeterminate = checkedCount > 0 && checkedCount < this.typeOption.length
          	},
          	typeSelect(val){
          		this.zhixing_s= val.indexOf('S001')>-1 && this.zhixing.length>0? true : false;
				this.shixin_s= val.indexOf('S002')>-1 && this.shixin.length>0? true : false;
                this.xiangao_s= val.indexOf('S003')>-1 && this.xiangao.length>0? true : false;
                this.xianchu_s= val.indexOf('S004')>-1 && this.xianchu.length>0? true : false;
                this.caipan_s= val.indexOf('S005')>-1 && this.caipan.length>0? true : false;
                this.qianshui_s= val.indexOf('S006')>-1 && this.qianshui.length>0? true : false;
                this.weifa_s= val.indexOf('S007')>-1 && this.weifa.length>0? true : false;
                this.zuifan_s= val.indexOf('S008')>-1 && this.zuifan.length>0? true : false;
                this.feizheng_s= val.indexOf('S009')>-1 && this.feizheng.length>0? true : false;
                this.qiankuan_s= val.indexOf('S010')>-1 && this.qiankuan.length>0? true : false;
                this.shenpan_s= val.indexOf('S011')>-1 && this.shenpan.length>0? true : false;
          	}
	    },
	    watch:{
	    	types:function(val){
	    		console.log(val)
	    		this.typeSelect(val)
	    	}
	    },
	    created(){
	    	this.typeSelect(this.types)
          	
	    }
	 
	}
</script>

<style lang="" scoped>
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
		margin: 30px 0 20px 30px;
	}
	.checks_all{
		margin: 0 0 0 30px;
	}
	.queryResult {
		border: 1px solid #ccc;
		margin: 40px 0;
	}
	.queryResult .el-table {
		margin-bottom: 30px;
	}
	.queryResult_table {
		margin:0 30px 0;
	}
	
	
	.investmentContent{
		border: 1px solid #ccc;
		box-sizing: border-box;
		margin: 0 1.7em 1.7em 1.7em;
		border-radius: 5px;
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
    .check_error1{
    	margin-bottom: -5px;
    }
</style>