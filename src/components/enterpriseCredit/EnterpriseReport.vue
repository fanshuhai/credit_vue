<template>
	<div class="contentFull entReportDe">
		<div class="newCheck selectCheck">
			<!--<p class="newCheck-content">个人司法信息核查</p>-->
			<div class="newCheck_form">
				<el-form :inline="true" :model="newQuery" ref="newQuery" :rules="rules">
					<!--<el-form-item label="选择查询方式：" prop="name">
						<el-select v-model="queryType" placeholder="请查询">
							<el-option v-for="(item,index) in queryEnt"
								:key="item.value"
								:value="item.value"
								:label="item.label" >
							</el-option>
						</el-select>
					</el-form-item>-->
					<el-form-item label="企业征信查询" prop="entPrise">
						<el-input style="width: 400px;" v-model="newQuery.entPrise" placeholder="请输入企业名称/企业注册号"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="informationQuery('newQuery')">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="queryResult"
	      	v-loading="loading"
	      	element-loading-text='查询中,请稍后...'
	      	element-loading-background="rgba(0,0,0,0.3)">
			<!--<p class="newCheck-content newCheck-example">个人司法信息查询结果</p>-->
			<div class="checks_all selectCheck enterReporting" >
				<el-form :inline="true" :model="queryResult" ref="queryResult" :rules="rules1">
					<el-form-item class='check_error1' label="" prop="type">
						<el-checkbox class="selectAllC" :label="checkAllData" :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAll"></el-checkbox>
						<el-checkbox-group style="display: inline;" v-model="queryResult.type" @change="handleCheckedTypeChange">							
							<el-checkbox v-for="(item,index) in typeOption" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>							
						</el-checkbox-group>
					</el-form-item>
				</el-form>
			</div>
			<!--企业基本信息1-->
            <div v-show="basic_s" class="investmentContent">
            	<template v-if='basic.length>0' v-for="(item,index) in basic">
	            	<el-row  :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>企业基本信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>企业名称</td>
				                      <td>{{item.entName}}</td>
				                      <td>企业英文名称</td>
				                      <td>{{item.entEngName}}</td>
			                        </tr>
				                    <tr>
				                      <td>法定代表人/负责人/执行事务合伙人</td>
				                      <td>{{item.legalPersonName}}</td>
				                      <td>注册资本币种</td>
				                      <td>{{item.regCapCur}}</td>
				                    </tr>
				                    <tr>
				                      <td>经营状态</td>
				                      <td>{{item.entStatus}}</td>
				                      <td>实收资本（万元）</td>
				                      <td>{{item.recCap}}</td>
				                    </tr>
				                    <tr>
				                      <td>统一社会信用代码</td>
				                      <td>{{item.creditCode}}</td>
				                      <td>注册地址行政区域编码</td>
				                      <td>{{item.regOrgCode}}</td>
				                    </tr>
				                    <tr>
				                      <td>原注册号</td>
				                      <td>{{item.oriRegNo}}</td>
				                      <td>注册号</td>
				                      <td>{{item.regNo}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业（机构）类型</td>
				                      <td>{{item.entType}}</td>
				                      <td>所在省份</td>
				                      <td>{{item.regOrgProvince}}</td>
				                    </tr>
				                    <tr>
				                      <td>成立日期</td>
				                      <td>{{item.estabDate}}</td>
				                      <td>所在城市</td>
				                      <td>{{item.city}}</td>
				                    </tr>
				                    <tr>
				                      <td>经营期限</td>
				                      <td>{{item.openFrom}} 至  {{item.openTo}}</td>
				                      <td>所在区/县</td>
				                      <td>{{item.county}}</td>
				                    </tr>
				                    <tr>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
				                      <td>最后年检年度</td>
				                      <td>{{item.lastInspecYear}}</td>
				                    </tr>
				                    <tr>
				                      <td>吊销日期</td>
				                      <td>{{item.revokeDate}}</td>
				                      <td>核准日期</td>
				                      <td>{{item.approvalDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>地址</td>
				                      <td>{{item.address}}</td>
				                      <td>住所所在行政区划</td>
				                      <td>{{item.addressDistrict}}</td>
				                    </tr>
				                    <tr>
				                      <td>登记机关</td>
				                      <td>{{item.regOrg}}</td>
				                      <td>曾用名</td>
				                      <td>{{item.usedName}}</td>
				                    </tr>
				                    <tr>
				                      <td>邮箱</td>
				                      <td>{{item.email}}</td>
				                      <td>联系人电话</td>
				                      <td>{{item.telephone}}</td>
				                    </tr>
				                    <tr>
				                      <td>许可经营项目</td>
				                      <td>{{item.licenseProject}}</td>
				                      <td>注册资本（万元）</td>
				                      <td>{{item.regCap}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业（机构）类型编码</td>
				                      <td>{{item.orgCode}}</td>
				                      <td>注册资本（企业:万元,个体:元）</td>
				                      <td>{{item.regCap}}</td>
				                    </tr>
				                    <tr>
				                      <td>国民经济行业名称</td>
				                      <td>{{item.industryEconomyName}}</td>
				                      <td>国民经济行业代码</td>
				                      <td>{{item.industryEconomyCode}}</td>
				                    </tr>
				                    <tr>
				                      <td>经营（业务）范围</td>
				                      <td colspan="3">{{item.openScope}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--股东及出资信息2 shareholder-->
            <div v-show="shareholder_s" class="investmentContent">
            	<template v-if='shareholder.length>0' v-for="(item,index) in shareholder">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>股东及出资信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>股东名称</td>
				                      <td>{{item.shareholder}}</td>
				                      <td>出资日期</td>
				                      <td>{{item.contriDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>认缴出资额（万元）</td>
				                      <td>{{item.contriAmount}}</td>
				                      <td>出资比例</td>
				                      <td>{{item.contriRatio}}</td>
				                    </tr>
				                    <tr>
				                      <td>认缴出资币种</td>
				                      <td>{{item.regCapCur}}</td>
				                      <td>出资方式</td>
				                      <td>{{item.contriForm}}</td>
				                    </tr>
				                    <tr>
				                      <td>股东类型</td>
				                      <td>{{item.shareholderType}}</td>
				                      <td>国别</td>
				                      <td>{{item.country}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--主要人员3 manager-->
            <div v-show="manager_s" class="investmentContent">
            	<template v-if='manager.length>0' v-for="(item,index) in manager">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>主要人员信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>人员总数量</td>
				                      <td>{{item.managerCount}}</td>
				                      <td>企业名称</td>
				                      <td>{{item.entName}}</td>
			                        </tr>
				                    <tr>
				                      <td>是否法人</td>
				                      <td v-if='item.isCorporate==1'>是</td>
				                      <td v-else>否</td>
				                      <td>人员姓名</td>
				                      <td>{{item.name}}</td>
				                    </tr>
				                    <tr>
				                      <td>职位</td>
				                      <td colspan="3">{{item.position}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--法定代表人对外投资信息4-->
            <div v-show="legalPersonInv_s" class="investmentContent">
            	<template v-if='legalPersonInv.length>0' v-for="(item,index) in legalPersonInv">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>法定代表人对外投资信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>法定代表人姓名</td>
				                      <td>{{item.legalPersonName}}</td>
				                      <td>登记机关</td>
				                      <td>{{item.regOrg}}</td>
			                        </tr>
				                    <tr>
				                      <td>企业（机构）名称</td>
				                      <td>{{item.entName}}</td>
				                      <td>认缴出资额（万元）</td>
				                      <td>{{item.contriAmount}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业状态</td>
				                      <td>{{item.entStatus}}</td>
				                      <td>认缴出资币种</td>
				                      <td>{{item.currency}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册号</td>
				                      <td>{{item.regNo}}</td>
				                      <td>出资比例</td>
				                      <td>{{item.contriRatio}}</td>
				                    </tr>
				                    <tr>
				                      <td>统一社会信用代码</td>
				                      <td>{{item.creditCode}}</td>
				                      <td>出资方式</td>
				                      <td>{{item.contriForm}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业（机构）类型</td>
				                      <td>{{item.entType}}</td>
				                      <td>开业日期</td>
				                      <td>{{item.estabDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本（企业:万元,个人:元）</td>
				                      <td>{{item.regCap}}</td>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本币种</td>
				                      <td>{{item.regCapCur}}</td>
				                      <td>吊销日期</td>
				                      <td>{{item.revokeDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册地址行政区编号</td>
				                      <td>{{item.regOrgCode}}</td>
				                      <td>企业总数量</td>
				                      <td>{{item.entCount}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--法定代表人其他公司任职信息5-->
            <div v-show="legalPersonPosition_s" class="investmentContent">
            	<template v-if='legalPersonPosition.length>0' v-for="(item,index) in legalPersonPosition">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>法定代表人其他公司任职信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>法定代表人姓名</td>
				                      <td>{{item.legalPersonName}}</td>
				                      <td>是否法定代表人</td>
				                      <td>{{item.isLegalPerson}}</td>
			                        </tr>
				                    <tr>
				                      <td>企业（机构）名称</td>
				                      <td>{{item.entName}}</td>
				                      <td>职务</td>
				                      <td>{{item.position}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业状态</td>
				                      <td>{{item.entStatus}}</td>
				                      <td>注册号</td>
				                      <td>{{item.regNo}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业（机构）类型</td>
				                      <td>{{item.entType}}</td>
				                      <td>成立日期</td>
				                      <td>{{item.estabDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本（企业:万元,个人:元）</td>
				                      <td>{{item.regCap}}</td>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本币种</td>
				                      <td>{{item.regCapCur}}</td>
				                      <td>吊销日期</td>
				                      <td>{{item.revokeDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册地址行政区编号</td>
				                      <td>{{item.regOrgCode}}</td>
				                      <td>企业总数量</td>
				                      <td>{{item.entCount}}</td>
				                    </tr>
				                    <tr>
				                      <td>登记机关</td>
				                      <td colspan="3">{{item.regOrg}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--企业对外投资信息6 entInv-->
            <div v-show="entInv_s" class="investmentContent">
            	<template v-if='entInv.length>0' v-for="(item,index) in entInv">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>企业对外投资信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
				                    <tr>
				                      <td>企业（机构）名称</td>
				                      <td>{{item.entName}}</td>
				                      <td>登记机关</td>
				                      <td>{{item.regOrg}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业状态</td>
				                      <td>{{item.entStatus}}</td>
				                      <td>认缴出资额（万元）</td>
				                      <td>{{item.contriAmount}}</td>
				                    </tr>
			                        <tr>
				                      <td>法定代表人姓名</td>
				                      <td>{{item.legalPersonName}}</td>
				                      <td>认缴出资币种</td>
				                      <td>{{item.currency}}</td>
			                        </tr>
				                    <tr>
				                      <td>注册号</td>
				                      <td>{{item.regNo}}</td>
				                      <td>出资比例</td>
				                      <td>{{item.contriRatio}}</td>
				                    </tr>
				                    <tr>
				                      <td>统一社会信用代码</td>
				                      <td>{{item.creditCode}}</td>
				                      <td>出资方式</td>
				                      <td>{{item.contriForm}}</td>
				                    </tr>
				                    <tr>
				                      <td>企业（机构）类型</td>
				                      <td>{{item.entType}}</td>
				                      <td>开业日期</td>
				                      <td>{{item.estabDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本（企业:万元,个人:元）</td>
				                      <td>{{item.regCap}}</td>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册资本币种</td>
				                      <td>{{item.regCapCur}}</td>
				                      <td>吊销日期</td>
				                      <td>{{item.revokeDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>注册地址行政区编号</td>
				                      <td>{{item.regOrgCode}}</td>
				                      <td>企业总数量</td>
				                      <td>{{item.enterpriseAmt}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--历史变更7-->
            <div v-show="alterHistory_s" class="investmentContent">
            	<template v-if='alterHistory.length>0'>
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>历史变更</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>变更日期</td>
				                      <td>变更前内容</td>
				                      <td>变更事项</td>
				                      <td>变更后内容</td>
			                        </tr>
				                    <tr v-for="(item,index) in alterHistory">
				                      <td>{{item.alterDate}}</td>
				                      <td>{{item.alterBefore}}</td>
				                      <td>{{item.alterItem}}</td>
				                      <td>{{item.alterAfter}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--分支机构8-->
            <div v-show="affiliate_s" class="investmentContent">
            	<template v-if='affiliate.length>0' v-for="(item,index) in affiliate">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>分支机构信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>分支机构名称</td>
				                      <td>{{item.name}}</td>
				                      <td>分支机构企业注册号</td>
				                      <td>{{item.regNo}}</td>
			                        </tr>
				                    <tr>
				                      <td>分支机构统一社会信用代码</td>
				                      <td>{{item.creditCode}}</td>
				                      <td>分支机构登记机关</td>
				                      <td>{{item.registAuth}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--股权出质信息9-->
            	<!--股权出质信息-->
            <div v-show="equityPledgeHistory_s" class="investmentContent">
            	<template v-if='equityPledgeHistory.length>0' v-for="(item,index) in equityPledgeHistory">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>股权出质信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>出质股权数额</td>
				                      <td>{{item.pledgedEquitAmt}}</td>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
			                        </tr>
			                        <tr>
				                      <td>关联内容</td>
				                      <td>{{item.associatedContent}}</td> 
				                      <td>质权人证件/证件号码</td>
				                      <td>{{item.pledgeeCardNo}}</td>
			                        </tr>
				                    <tr>
				                      <td>出质人</td>
				                      <td>{{item.pledgor}}</td>
				                      <td>公示日期</td>
				                      <td>{{item.publicationDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>出质人证件/证件号</td>
				                      <td>{{item.pledgorCard}}</td>
				                      <td>状态</td>
				                      <td>{{item.status}}</td>
				                    </tr>
				                    <tr>
				                      <td>质权出质设立登记日期</td>
				                      <td>{{item.pledgeDate}}</td>
				                      <td>质权人姓名</td>
				                      <td>{{item.pledgee}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            	<!--股权出质信息-变更-->
            <div v-show="equityPledgeAlter_s" class="investmentContent">
            	<template v-if='equityPledgeAlter.length>0' v-for="(item,index) in equityPledgeAlter">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>股权出质信息-变更{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>变更内容</td>
				                      <td>{{item.alterContent}}</td>
				                      <td>变更日期</td>
				                      <td>{{item.alterDate}}</td>
			                        </tr>
			                        <tr>
				                      <td>关联内容</td>
				                      <td colspan="3">{{item.associatedContent}}</td> 
			                        </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            	<!--股权出质信息-注销-->
            <div v-show="equityPledgeAlter_s" class="investmentContent">
            	<template v-if='equityPledgeAlter.length>0' v-for="(item,index) in equityPledgeAlter">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>股权出质信息-注销{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>注销原因</td>
				                      <td>{{item.cancleReason}}</td>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
			                        </tr>
			                        <tr>
				                      <td>关联内容</td>
				                      <td colspan="3">{{item.associatedContent}}</td> 
			                        </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--动产抵押信息10-->
                <!--动产抵押信息-基本信息-->
            <div v-show="chattelMortgageBasic_s" class="investmentContent">
            	<template v-if='chattelMortgageBasic.length>0' v-for="(item,index) in chattelMortgageBasic">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-基本信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>登记日期</td>
				                      <td>{{item.regDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>登记机关</td>
				                      <td>{{item.regOrg}}</td>
				                      <td>被担保债权数额</td>
				                      <td>{{item.principalSecuredAmount}}</td>
				                    </tr>
				                    <tr>
				                      <td>状态</td>
				                      <td>{{item.status}}</td>
				                      <td>公示日期</td>
				                      <td>{{item.publicationDate}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='chattelMortgageBasic.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">民商事裁判文书</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div> 
                <!--动产抵押信息-抵押物信息-->
            <div v-show="chattelMortgageCollateral_s" class="investmentContent">
            	<template v-if='chattelMortgageCollateral.length>0' v-for="(item,index) in chattelMortgageCollateral">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-抵押物信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>名称</td>
				                      <td>{{item.name}}</td>
			                        </tr>
				                    <tr>
				                      <td>所有权或使用权归属</td>
				                      <td>{{item.ownership}}</td>
				                      <td>数量、质量、状况、所在地情况</td>
				                      <td>{{item.details}}</td>
				                    </tr>
				                    <tr>
				                      <td>备注</td>
				                      <td colspan="3">{{item.remarks}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            	<!--<template v-if='chattelMortgageCollateral.length==0'>
	            	<el-row style="padding-left:30px ;">
	            		<el-col :span='23'>
		            		<p>{{username}}<span class="invest_title themeG_c">民商事裁判文书</span></p>
			            	<p class='nomseg'>暂无数据</p>
	            		</el-col>
		            </el-row>
            	</template>-->
            </div>
                <!--动产抵押信息-抵押人信息-->
            <div v-show="chattelMortgagePerson_s" class="investmentContent">
            	<template v-if='chattelMortgagePerson.length>0' v-for="(item,index) in chattelMortgagePerson">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-抵押人信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>抵押权人名称</td>
				                      <td>{{item.mortgagee}}</td>
			                        </tr>
				                    <tr>
				                      <td>抵押权人证照/证件类型</td>
				                      <td>{{item.mortgageeCardType}}</td>
				                      <td>抵押权人证照/证件号码</td>
				                      <td>{{item.mortgageeCard}}</td>
				                    </tr>
				                    <tr>
				                      <td>所在地</td>
				                      <td colspan="3">{{item.mortgageeAddress}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
                <!--动产抵押信息-登记信息-->
            <div v-show="chattelMortgageRegister_s" class="investmentContent">
            	<template v-if='chattelMortgageRegister.length>0' v-for="(item,index) in chattelMortgageRegister">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-登记信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>登记日期</td>
				                      <td>{{item.regDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>登记机关</td>
				                      <td>{{item.regOrg}}</td>
				                      <td>被担保债权数额</td>
				                      <td>{{item.principalSecuredAmount}}</td>
				                    </tr>
				                    <tr>
				                      <td>担保范围</td>
				                      <td>{{item.guanScope}}</td>
				                      <td>被担保债权种类</td>
				                      <td>{{item.principalSecureType}}</td>
				                    </tr>
				                    <tr>
				                      <td>履行债务开始日期</td>
				                      <td>{{item.performBeginDate}}</td>
				                      <td>履行债务结束日期</td>
				                      <td>{{item.performEndDate}}</td>
				                    </tr>
				                    <tr>
				                    	<td>状态</td>
				                    	<td colspan="3">type</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
                <!--动产抵押信息-被担保主债权信息-->
            <!--<div v-show="chattelMortgageMainSecuredClaim_s" class="investmentContent">
            	<template v-if='chattelMortgageMainSecuredClaim.length>0' v-for="(item,index) in chattelMortgageMainSecuredClaim">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-被担保主债权信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            	
            </div>-->
                <!--动产抵押信息-变更信息-->
            <div v-show="chattelMortgageAlter_s" class="investmentContent">
            	<template v-if='chattelMortgageAlter.length>0' v-for="(item,index) in chattelMortgageAlter">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-变更信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>变更日期</td>
				                      <td>{{item.alterDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>变更内容</td>
				                      <td colspan="3">{{item.alterContent}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
                <!--动产抵押信息-注销信息-->
            <div v-show="chattelMortgageLogout_s" class="investmentContent">
            	<template v-if='chattelMortgageAlter.length>0' v-for="(item,index) in chattelMortgageLogout">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>动产抵押信息-注销信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>登记编号</td>
				                      <td>{{item.registrationNum}}</td>
				                      <td>注销日期</td>
				                      <td>{{item.cancleDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>注销原因</td>
				                      <td colspan="3">{{item.cancleReason}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--股权冻结信息11-->
            <div v-show="sharesFreeze_s" class="investmentContent">
            	<template v-if='sharesFreeze.length>0' v-for="(item,index) in sharesFreeze">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>股权冻结信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>冻结起始日期</td>
				                      <td>{{item.freezeFrom}}</td>
				                      <td>冻结执行通知书文号</td>
				                      <td>{{item.freezeExecuteDocNo}}</td>
			                        </tr>
				                    <tr>
				                      <td>解冻日期</td>
				                      <td>{{item.unfreezeDate}}</td>
				                      <td>失效原因</td>
				                      <td>{{item.invalidReason}}</td>
				                    </tr>
				                    <tr>
				                      <td>解冻说明</td>
				                      <td>{{item.unfreezeComment}}</td>
				                      <td>失效时间</td>
				                      <td>{{item.invalidTime}}</td>
				                    </tr>
				                    <tr>
				                      <td>解冻机关</td>
				                      <td>{{item.unfreezeOrg}}</td>
				                      <td>被执行人证件号码</td>
				                      <td>{{item.judicialPersonCard}}</td>
				                    </tr>
				                    <tr>
				                      <td>冻结截止日期</td>
				                      <td>{{item.freezeExpire}}</td>
				                      <td>被执行人证件类型</td>
				                      <td>{{item.cardType}}</td>
				                    </tr>
				                    <tr>
				                      <td>解冻文号</td>
				                      <td>{{item.unfreezeDocNo}}</td>
				                      <td>类型、状态</td>
				                      <td>{{item.state}}</td>
				                    </tr>
				                    <tr>
				                      <td>冻结文号</td>
				                      <td>{{item.freezeDocNo}}</td>
				                      <td>被执行人</td>
				                      <td>{{item.judicialPerson}}</td>
				                    </tr>
				                    <tr>
				                      <td>冻结金额（万元）</td>
				                      <td>{{item.freezeAmount}}</td>
				                      <td>续行冻结期限</td>
				                      <td>{{item.keepFreese}}</td>
				                    </tr>
				                    <tr>
				                      <td>解冻机关</td>
				                      <td>{{item.unfreezeOrg}}</td>
				                      <td>续行冻结期限自</td>
				                      <td>{{item.keepFreeseFrom}}</td>
				                    </tr>
				                    <tr>
				                      <td>股权数额</td>
				                      <td>{{item.socketAmount}}</td>
				                      <td>续行冻结期限至</td>
				                      <td>{{item.keepFreeseTo}}</td>
				                    </tr>
				                    <tr>
				                      <td>解冻执行事项</td>
				                      <td>{{item.freezeExcuteItem}}</td>
				                      <td>解冻执行通知书文号</td>
				                      <td>{{item.unFreeseExecDocNo}}</td>
				                    </tr>
				                    <tr>
				                      <td>冻结公示日期</td>
				                      <td>{{item.freezeOpenDate}}</td>
				                      <td>解冻公示日期</td>
				                      <td>{{item.unFreezeOpenDate}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--清算信息12-->
            <div v-show="liquidation_s" class="investmentContent">
            	<template v-if='liquidation.length>0' v-for="(item,index) in liquidation">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>清算信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>清算责任人</td>
				                      <td>清算组成员</td>
			                        </tr>
				                    <tr>
				                      <td>{{item.pledgeExpire}}</td>
				                      <td>{{item.pledgeeType}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--行政处罚历史信息13-->
            <div v-show="administrativeSanction_s" class="investmentContent">
            	<template v-if='administrativeSanction.length>0' v-for="(item,index) in administrativeSanction">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>行政处罚历史信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>处罚种类</td>
				                      <td>{{item.sanctionType}}</td>
				                      <td>公示日期</td>
				                      <td>{{item.openDate}}</td>
			                        </tr>
				                    <tr>
				                      <td>处罚决定书</td>
				                      <td>{{item.punishDecisionDoc}}</td>
				                      <td>处罚决定书签发日期</td>
				                      <td>{{item.sanctionSignDate}}</td>
				                    </tr>
				                    <tr>
				                      <td>处罚机关</td>
				                      <td>{{item.sanctionOrgCn}}</td>
				                      <td>行政处罚内容</td>
				                      <td>{{item.sanctionContent}}</td>
				                    </tr>
				                    <tr>
				                      <td>主要违法事实</td>
				                      <td colspan="3">{{item.illegalFact}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--经营异常信息14-->
            <div v-show="abnormalInfo_s" class="investmentContent">
            	<template v-if='abnormalInfo.length>0' v-for="(item,index) in abnormalInfo">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>经营异常信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>列入日期</td>
				                      <td>列入做出决定机关</td>
				                      <td>列入原因</td>
				                      <td>移出日期（有移出日期表示已在该次经营异常名录中移出）</td>
				                      <td>移出做出决定机关</td>
				                      <td>移出原因</td>
			                        </tr>
				                    <tr>
				                      <td>{{item.includeDate}}</td>
				                      <td>{{item.includeOrg}}</td>
				                      <td>{{item.includeReason}}</td>
				                      <td>{{item.excludeDate}}</td>
				                      <td>{{item.excludeOrg}}</td>
				                      <td>{{item.excludeReason}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--被执行人信息15-->
            <div v-show="executedPersonInfo_s" class="investmentContent">
            	<template v-if='executedPersonInfo.length>0' v-for="(item,index) in executedPersonInfo">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>被执行人信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>案号</td>
				                      <td>{{item.caseNum}}</td>
				                      <td>省份</td>
				                      <td>{{item.province}}</td>
			                        </tr>
				                    <tr>
				                      <td>立案时间</td>
				                      <td>{{item.filingDate}}</td>
				                      <td>关注次数</td>
				                      <td>{{item.concernsNum}}</td>
				                    </tr>
				                    <tr>
				                      <td>案件状态</td>
				                      <td>{{item.caseStatus}}</td>
				                      <td>被执行人类型</td>
				                      <td>{{item.executionPersonType}}</td>
				                    </tr>
				                    <tr>
				                      <td>性别</td>
				                      <td>{{item.sex}}</td>
				                      <td>执行法院</td>
				                      <td>{{item.executiveCourt}}</td>
				                    </tr>
				                    <tr>
				                      <td>身份证原始发证地</td>
				                      <td>{{item.identityOriAddr}}</td>
				                      <td>年龄</td>
				                      <td>{{item.age}}</td>
				                    </tr>
				                    <tr>
				                      <td>被执行人姓名/名称</td>
				                      <td>{{item.judicialPersonName}}</td>
				                      <td>身份证号码/企业注册号</td>
				                      <td>{{item.card}}</td>
				                    </tr>
				                    <tr>
				                      <td>执行标的（元）</td>
				                      <td colspan="3">{{item.executionTarget}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--失信被执行人信息16-->
            <div v-show="defamationExecuted_s" class="investmentContent">
            	<template v-if='defamationExecuted.length>0' v-for="(item,index) in defamationExecuted">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>失信被执行人信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>被执行人姓名/名称</td>
				                      <td>{{item.excutionPersonName}}</td>
				                      <td>法定代表人或者负责人姓名</td>
				                      <td>{{item.legalPersonName}}</td>
			                        </tr>
				                    <tr>
				                      <td>发布时间</td>
				                      <td>{{item.releaseTime}}</td>
				                      <td>省份</td>
				                      <td>{{item.province}}</td>
				                    </tr>
				                    <tr>
				                      <td>案号</td>
				                      <td>{{item.caseNum}}</td>
				                      <td>关注次数</td>
				                      <td>{{item.concernsNum}}</td>
				                    </tr>
				                    <tr>
				                      <td>立案时间</td>
				                      <td>{{item.filingDate}}</td>
				                      <td>未履行（元）</td>
				                      <td>{{item.noImplemented}}</td>
				                    </tr>
				                    <tr>
				                      <td>案件状态</td>
				                      <td>{{item.caseStatus}}</td>
				                      <td>已履行（元）</td>
				                      <td>{{item.achieved}}</td>
				                    </tr>
				                    <tr>
				                      <td>性别</td>
				                      <td>{{item.sex}}</td>
				                      <td>失信人类型</td>
				                      <td>{{item.dishonestyType}}</td>
				                    </tr>
				                    <tr>
				                      <td>执行依据文号</td>
				                      <td>{{item.executiveSymbol}}</td>
				                      <td>执行法院</td>
				                      <td>{{item.executiveCourt}}</td>
				                    </tr>
				                    <tr>
				                      <td>做出执行依据单位</td>
				                      <td>{{item.implementationBasisUnit}}</td>
				                      <td>身份证号码/工商注册号</td>
				                      <td>{{item.card}}</td>
				                    </tr>
				                    <tr>
				                      <td>身份证原始发证地</td>
				                      <td>{{item.identityOriAddr}}</td>
				                      <td>年龄</td>
				                      <td>{{item.age}}</td>
				                    </tr>
				                    <tr>
				                      <td>失信被执行人行为具体情况</td>
				                      <td>{{item.defamationExecutedSituation}}</td>
				                      <td>被执行人履行情况</td>
				                      <td>{{item.defamationExecutedPerform}}</td>
				                    </tr>
				                    <tr>
				                      <td>生效法律文书确定的义务</td>
				                      <td colspan="3">{{item.duty}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--关联被执行人信息17-->
            <div v-show="relatedExecutedPerson_s" class="investmentContent">
            	<template v-if='relatedExecutedPerson.length>0' v-for="(item,index) in relatedExecutedPerson">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>关联被执行人信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>案号</td>
				                      <td>{{item.caseNum}}</td>
				                      <td>省份</td>
				                      <td>{{item.province}}</td>
			                        </tr>
				                    <tr>
				                      <td>立案时间</td>
				                      <td>{{item.filingDate}}</td>
				                      <td>关注次数</td>
				                      <td>{{item.concernsNum}}</td>
				                    </tr>
				                    <tr>
				                      <td>案件状态</td>
				                      <td>{{item.caseStatus}}</td>
				                      <td>被执行人类型</td>
				                      <td>{{item.executionPersonType}}</td>
				                    </tr>
				                    <tr>
				                      <td>性别</td>
				                      <td>{{item.sex}}</td>
				                      <td>执行法院</td>
				                      <td>{{item.executiveCourt}}</td>
				                    </tr>
				                    <tr>
				                      <td>身份证原始发证地</td>
				                      <td>{{item.identityOriAddr}}</td>
				                      <td>年龄</td>
				                      <td>{{item.age}}</td>
				                    </tr>
				                    <tr>
				                      <td>被执行人姓名/名称</td>
				                      <td>{{item.executionPersonName}}</td>
				                      <td>身份证号码/企业注册号</td>
				                      <td>{{item.card}}</td>
				                    </tr>
				                    <tr>
				                      <td>执行标的（元）</td>
				                      <td colspan="3">{{item.executionTarget}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            <!--关联失信被执行人信息18-->
            <div v-show="relatedDefamationExecuted_s" class="investmentContent">
            	<template v-if='relatedDefamationExecuted.length>0' v-for="(item,index) in relatedDefamationExecuted">
	            	<el-row :gutter="10" type="flex">
	            		<el-col :span='23' style="padding-left:30px ;">
	            			<p>关联被执行人信息{{index+1}}</p>
			                <div class="basic_info">
			                    <table>
			                        <tr>
				                      <td>被执行人姓名/名称</td>
				                      <td>{{item.excutionPersonName}}</td>
				                      <td>法定代表人或者负责人姓名</td>
				                      <td>{{item.legalPersonName}}</td>
			                        </tr>
				                    <tr>
				                      <td>发布时间</td>
				                      <td>{{item.releaseTime}}</td>
				                      <td>省份</td>
				                      <td>{{item.province}}</td>
				                    </tr>
				                    <tr>
				                      <td>案号</td>
				                      <td>{{item.caseNum}}</td>
				                      <td>关注次数</td>
				                      <td>{{item.concernsNum}}</td>
				                    </tr>
				                    <tr>
				                      <td>立案时间</td>
				                      <td>{{item.filingDate}}</td>
				                      <td>未履行（元）</td>
				                      <td>{{item.noImplemented}}</td>
				                    </tr>
				                    <tr>
				                      <td>案件状态</td>
				                      <td>{{item.caseStatus}}</td>
				                      <td>已履行（元）</td>
				                      <td>{{item.achieved}}</td>
				                    </tr>
				                    <tr>
				                      <td>性别</td>
				                      <td>{{item.sex}}</td>
				                      <td>失信人类型</td>
				                      <td>{{item.dishonestyType}}</td>
				                    </tr>
				                    <tr>
				                      <td>执行依据文号</td>
				                      <td>{{item.executiveSymbol}}</td>
				                      <td>执行法院</td>
				                      <td>{{item.executiveCourt}}</td>
				                    </tr>
				                    <tr>
				                      <td>做出执行依据单位</td>
				                      <td>{{item.implementationBasisUnit}}</td>
				                      <td>身份证号码/工商注册号</td>
				                      <td>{{item.card}}</td>
				                    </tr>
				                    <tr>
				                      <td>身份证原始发证地</td>
				                      <td>{{item.identityOriAddr}}</td>
				                      <td>年龄</td>
				                      <td>{{item.age}}</td>
				                    </tr>
				                    <tr>
				                      <td>失信被执行人行为具体情况</td>
				                      <td>{{item.defamationExecutedSituation}}</td>
				                      <td>被执行人履行情况</td>
				                      <td>{{item.defamationExecutedPerform}}</td>
				                    </tr>
				                    <tr>
				                      <td>生效法律文书确定的义务</td>
				                      <td colspan="3">{{item.duty}}</td>
				                    </tr>
			                    </table>
			                </div>
	            		</el-col>
	            	</el-row>
            	</template>
            </div>
            
            
            <div v-if='noQuery' class='nomseg investmentContent'>
            	暂无数据
            </div>
            <div v-if='queryMsg' class='nomseg investmentContent'>
            	查询成功，暂无数据
            </div>
            
		</div>
		<div class="prostyle_bottom" v-show="reportButton">
            <div class="button_bottom">
              <a :href="urlReport" class="report_out">导出报告</a>
            </div>
        </div>
		
	</div>
</template>

<script>
	import { validataEnterPrise } from '../common/http.js';
	import bus from '../common/bus';
	const cityOptions = [
			{
				value: 'S001',
				label: '企业基本信息（0）'
			},
			{
				value: 'S002',
				label: '股东及出资信息（0）'
			},
			{
				value: 'S003',
				label: '主要人员（0）'
			},
			{
				value: 'S004',
				label: '法定代表人对外投资信息（0）'
			},
			{
				value: 'S005',
				label: '法定代表人其他公司任职信息（0）'
			},
			{
				value: 'S006',
				label: '对外投资（0）'
			},
			{
				value: 'S007',
				label: '历史变更（0）'
			},
			{
				value: 'S008',
				label: '分支机构（0）'
			},
			{
				value: 'S010',
				label: '股权出质信息（0）'
			},
			{
				value: 'S011',
				label: '动产抵押信息（0）'
			},
			{
				value: 'S009',
				label: '股权冻结信息（0）'
			},
			{
				value: 'S012',
				label: '清算信息（0）'
			},
			{
				value: 'S013',
				label: '行政处罚历史信息（0）'
			},
			{
				value: 'S014',
				label: '经营异常信息（0）'
			},
			{
				value: 'S015',
				label: '被执行人信息（0）'
			},
			{
				value: 'S016',
				label: '失信被执行人信息（0）'
			},
			{
				value: 'S017',
				label: '关联被执行人信息（0）'
			},
			{
				value: 'S018',
				label: '关联失信被执行人信息（0）'
			},								
		]
	const cityOptions_value = ['S001','S002','S003','S004','S005','S006','S007','S008','S009','S010','S011','S012','S013','S014','S015','S016','S017','S018'];
	export default {
		data() {
			return {
				queryType:'s1',
				queryEnt:[{
					value:'s1',
					label:'摩尔征信'
				},{
					value:'s2',
					label:'第三方查询'
				},],
				
				typeOption: cityOptions,
				isIndeterminate: false,
				checkAll: true,
				newQuery: {
					name: '',
					entPrise: '',
				},
				queryResult: {
					type: cityOptions_value,
				},
				types: cityOptions_value,
				rules:{
//	              name:[
//	                {required: true, message: '请输入姓名！', trigger:'blur'}
//	              ],
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
	            //企业报告信息
	            reportMsg:'',
	            noQuery:true,
	            queryMsg:false,
	            checkAllData:'全部（0）',
	            reportButton:false,
	            loading:false,
	            
	            //基本信息1
	            basic:[],
	            //股东及出资信息2
				shareholder:[],
				//主要人员3
				manager:[],
				//法定代表人对外投资信息4
				legalPersonInv:[],
				//法定代表人其他公司任职信息5
				legalPersonPosition:[],
				//企业对外投资信息6
				entInv:[],
				//历史变更信息7
				alterHistory:[],
				//分支机构信息8
				affiliate:[],
				//股权出质信息9
					//股权出质信息
				    equityPledgeHistory:[],
					//股权出质信息-变更
				    equityPledgeAlter:[],
					//股权出质信息-注销
				    equityPledgeLogout:[],
				//动产抵押信息10 ===合并
//				    chattelMortgage:[],
					//动产抵押信息-基本信息
				    chattelMortgageBasic:[],
					//动产抵押信息-抵押物信息
				    chattelMortgageCollateral:[],
					//动产抵押信息-抵押人信息
				    chattelMortgagePerson:[],
					//动产抵押信息-登记信息
				    chattelMortgageRegister:[],
				    //动产抵押信息-被担保主债权信息
//				    chattelMortgageMainSecuredClaim:[],
					//动产抵押信息-变更信息
				    chattelMortgageAlter:[],
					//动产抵押信息-注销信息
				    chattelMortgageLogout:[],
				//股权冻结信11
				sharesFreeze:[],
				liquidation:[],
				administrativeSanction:[],
				abnormalInfo:[],
				executedPersonInfo:[],
				defamationExecuted:[],
				relatedExecutedPerson:[],
				relatedDefamationExecuted:[],
				
	            basic_s:true,
				shareholder_s:false,
				affiliate_s:false,
				
				
				//股权出质信息
			    equityPledgeHistory_s:false,
				//股权出质信息-变更
			    equityPledgeAlter_s:false,
				//股权出质信息-注销
			    equityPledgeLogout_s:false,
			    
//				chattelMortgage_s:false,
				//动产抵押信息-基本信息
			    chattelMortgageBasic_s:false,
				//动产抵押信息-抵押物信息
			    chattelMortgageCollateral_s:false,
				//动产抵押信息-抵押人信息
			    chattelMortgagePerson_s:false,
				//动产抵押信息-登记信息
			    chattelMortgageRegister_s:false,
			    //动产抵押信息-被担保主债权信息
//			    chattelMortgageMainSecuredClaim_s:false,
				//动产抵押信息-变更信息
			    chattelMortgageAlter_s:false,
				//动产抵押信息-注销信息
			    chattelMortgageLogout_s:false,
			    
				manager_s:false,
				entInv_s:false,
				legalPersonPosition_s:false,
				alterHistory_s:false,
				legalPersonInv_s:false,
				sharesFreeze_s:false,
				liquidation_s:false,
				administrativeSanction_s:false,
				abnormalInfo_s:false,
				executedPersonInfo_s:false,
				defamationExecuted_s:false,
				relatedExecutedPerson_s:false,
				relatedDefamationExecuted_s:false,
                // 导出报告
                urlReport:'',
			}
		},
		methods: {
			showReMsg(totalData){
				console.log(totalData)
				let TData=totalData.data.result;
//				let totalNum=
// 缺失+TData.chattelMortgageMainSecuredClaim.length
				//股权出质信息
				let equityPledgeNum=TData.equityPledgeHistory.length+TData.equityPledgeAlter.length+TData.equityPledgeLogout.length;
				//动产抵押信息
				let chattelMortgageNum=TData.chattelMortgageBasic.length+TData.chattelMortgageCollateral.length+TData.chattelMortgagePerson.length
										+TData.chattelMortgageRegister.length+TData.chattelMortgageLogout.length
										+TData.chattelMortgageAlter.length;
                let totalNum=TData.basic.length+TData.shareholder.length+TData.manager.length+TData.legalPersonInv.length
                             +TData.legalPersonPosition.length+TData.entInv.length+TData.alterHistory.length+TData.affiliate.length
                             +TData.sharesFreeze.length+TData.administrativeSanction.length+TData.executedPersonInfo.length
                             +TData.abnormalInfo.length+TData.defamationExecuted.length+TData.relatedExecutedPerson.length
                             +TData.relatedDefamationExecuted.length+chattelMortgageNum+equityPledgeNum+TData.liquidation.length;
//              console.log(totalNum)
            	this.checkAllData='全部（'+totalNum+'）';
            	//遍历typeOption
            	this.typeOption.map((item,index)=>{
//          		console.log(item)
            		if(item.value=='S001'){
            			item.label='企业基本信息（'+TData.basic.length+'）'
            		}else if(item.value=='S002'){
            			item.label='股东及出资信息（'+TData.shareholder.length+'）'
            		}else if(item.value=='S003'){
            			item.label='主要人员（'+TData.manager.length+'）'
            		}else if(item.value=='S004'){
            			item.label='法定代表人对外投资信息（'+TData.legalPersonInv.length+'）'
            		}else if(item.value=='S005'){
            			item.label='法定代表人及其他公司任职信息（'+TData.legalPersonPosition.length+'）'
            		}else if(item.value=='S006'){
            			item.label='对外投资（'+TData.entInv.length+'）'
            		}else if(item.value=='S007'){
            			item.label='历史变更（'+TData.alterHistory.length+'）'
            		}else if(item.value=='S008'){
            			item.label='分支机构（'+TData.affiliate.length+'）'
            		}else if(item.value=='S009'){
            			item.label='股权出质押信息（'+equityPledgeNum+'）'
            		}else if(item.value=='S010'){
            			item.label='动产抵押信息（'+chattelMortgageNum+'）'
            		}else if(item.value=='S011'){
            			item.label='股权冻结信息（'+TData.sharesFreeze.length+'）'
            		}else if(item.value=='S012'){
            			item.label='清算信息（'+TData.liquidation.length+'）'
            		}else if(item.value=='S013'){
            			item.label='行政处罚历史信息（'+TData.administrativeSanction.length+'）'
            		}else if(item.value=='S014'){
            			item.label='经营异常信息（'+TData.abnormalInfo.length+'）'
            		}else if(item.value=='S015'){
            			item.label='被执行人信息（'+TData.executedPersonInfo.length+'）'
            		}else if(item.value=='S016'){
            			item.label='失信被执行人信息（'+TData.defamationExecuted.length+'）'
            		}else if(item.value=='S017'){
            			item.label='关联被执行人信息（'+TData.relatedExecutedPerson.length+'）'
            		}else if(item.value=='S018'){
            			item.label='失信关联被执行人信息（'+TData.relatedDefamationExecuted.length+'）'
            		}
            	})

 
				this.basic=TData.basic;
				this.shareholder=TData.shareholder;
				this.manager=TData.manager;
				this.legalPersonInv=TData.legalPersonInv;
				this.legalPersonPosition=TData.legalPersonPosition;
				this.entInv=TData.entInv;
			    this.alterHistory=TData.alterHistory;
				this.affiliate=TData.affiliate;
				//股权出质信息
				this.equityPledgeHistory=TData.equityPledgeHistory;
				//股权出质信息-变更
				this.equityPledgeAlter=TData.equityPledgeAlter;
				//股权出质信息-注销
				this.equityPledgeLogout=TData.equityPledgeLogout;
				//需要合并 
				this.chattelMortgage=[];
				//动产抵押信息-基本信息
			    this.chattelMortgageBasic=TData.chattelMortgageBasic;
				//动产抵押信息-抵押物信息
			    this.chattelMortgageCollateral=TData.chattelMortgageCollateral;
				//动产抵押信息-抵押人信息
			    this.chattelMortgagePerson=TData.chattelMortgagePerson;
				//动产抵押信息-登记信息
			    this.chattelMortgageRegister=TData.chattelMortgageRegister;
			    //动产抵押信息-被担保主债权信息
//			    this.chattelMortgageMainSecuredClaim=TData.chattelMortgageMainSecuredClaim;
				//动产抵押信息-变更信息
			    this.chattelMortgageAlter=TData.chattelMortgageAlter;
				//动产抵押信息-注销信息
			    this.chattelMortgageLogout=TData.chattelMortgageLogout;
		
				this.sharesFreeze=TData.sharesFreeze;
				this.liquidation=TData.liquidation;
				this.administrativeSanction=TData.administrativeSanction;
				this.abnormalInfo=TData.abnormalInfo;
				this.executedPersonInfo=TData.executedPersonInfo;
				this.defamationExecuted=TData.defamationExecuted;
				this.relatedExecutedPerson=TData.relatedExecutedPerson;
				this.relatedDefamationExecuted=TData.relatedDefamationExecuted;

            	this.typeSelect(this.types);
	            if(TData.basic.length>0 || TData.shareholder.length>0 || TData.manager.length>0 || 
	            	TData.legalPersonInv.length>0 || TData.legalPersonPosition.length>0 || 
	            	TData.entInv.length>0 || TData.alterHistory.length>0 || TData.affiliate.length>0 || 
	            	TData.sharesFreeze.length>0 || TData.administrativeSanction.length>0 || TData.executedPersonInfo.length>0 || 
	            	TData.abnormalInfo.length>0 || TData.defamationExecuted.length>0 || TData.relatedExecutedPerson.length>0 || 
	            	TData.relatedDefamationExecuted.length>0 || chattelMortgageNum>0 || 
	            	equityPledgeNum>0 || TData.liquidation.length){
	              this.noQuery=false;
    			  this.queryMsg=false;
    			  this.reportButton=true;
	            }else{
	              this.noQuery=false;
    			  this.queryMsg=true;
    			  this.reportButton=false;
	            };
			},
			informationQuery(formName){  
	            this.$refs[formName].validate((valid)=>{
	               // 验证是否有汉字中文
	                let regEntr=/.*[\u4e00-\u9fa5]+.*$/;
	                let enterMsg={};
	                let ruleName=$.trim(this.newQuery.entPrise);
		            if(valid){ 
		            	localStorage.setItem('reportName',ruleName)
	            	    this.loading=true;
		          	    if(regEntr.test(ruleName)){
			          	    enterMsg={
			                    apiCode: "acedata.user.basicInfoB",
								entName:ruleName,
							    accessType:"1"
			                };
			                localStorage.setItem("reportType",'1');
		          	    }else{
			          	    enterMsg={
			                    apiCode: "acedata.user.basicInfoB",
								regNo:ruleName,
							    accessType:"1"
			               };
			               localStorage.setItem("reportType",'2');
		          	    }
		          	    localStorage.setItem("reportName",ruleName);
		                this.$axios.defaults.withCredentials=true;
		                this.$axios.post(this.HOST2+'/api/v1/acedata',enterMsg)
		                .then(res=>{
		                	this.loading=false;
							console.log(res.data);
					    	this.showReMsg(res.data);
					    	this.typeSelect(this.types);
		                	this.report_out();
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
          		this.basic_s= val.indexOf('S001')>-1 && this.basic.length>0? true : false;
				this.shareholder_s= val.indexOf('S002')>-1 && this.shareholder.length>0? true : false;
                this.manager_s= val.indexOf('S003')>-1 && this.manager.length>0? true : false;
                this.legalPersonInv_s= val.indexOf('S004')>-1 && this.legalPersonInv.length>0? true : false;
                this.legalPersonPosition_s= val.indexOf('S005')>-1 && this.legalPersonPosition.length>0? true : false;
                this.entInv_s= val.indexOf('S006')>-1 && this.entInv.length>0? true : false;
                this.alterHistory_s= val.indexOf('S007')>-1 && this.alterHistory.length>0? true : false;
                this.affiliate_s= val.indexOf('S008')>-1 && this.affiliate.length>0? true : false;
                //股权出质信息
                this.equityPledgeHistory_s= val.indexOf('S009')>-1 && this.equityPledgeHistory.length>0? true : false;
				//股权出质信息-变更
			    this.equityPledgeAlter_s= val.indexOf('S009')>-1 && this.equityPledgeAlter.length>0? true : false;
				//股权出质信息-注销
			    this.equityPledgeLogout_s= val.indexOf('S009')>-1 && this.equityPledgeLogout.length>0? true : false;
                
                this.chattelMortgage_s= val.indexOf('S010')>-1 && this.chattelMortgage.length>0? true : false;
                //动产抵押信息-基本信息
			    this.chattelMortgageBasic_s= val.indexOf('S010')>-1 && this.chattelMortgageBasic.length>0? true : false;
				//动产抵押信息-抵押物信息
			    this.chattelMortgageCollateral_s= val.indexOf('S010')>-1 && this.chattelMortgageCollateral.length>0? true : false;
				//动产抵押信息-抵押人信息
			    this.chattelMortgagePerson_s= val.indexOf('S010')>-1 && this.chattelMortgagePerson.length>0? true : false;
				//动产抵押信息-登记信息
			    this.chattelMortgageRegister_s= val.indexOf('S010')>-1 && this.chattelMortgageRegister.length>0? true : false;
			    //动产抵押信息-被担保主债权信息
//			    this.chattelMortgageMainSecuredClaim_s= val.indexOf('S010')>-1 && this.chattelMortgageMainSecuredClaim.length>0? true : false;
				//动产抵押信息-变更信息
			    this.chattelMortgageAlter_s= val.indexOf('S010')>-1 && this.chattelMortgageAlter.length>0? true : false;
				//动产抵押信息-注销信息
			    this.chattelMortgageLogout_s= val.indexOf('S010')>-1 && this.chattelMortgageLogout.length>0? true : false;
                
                this.sharesFreeze_s= val.indexOf('S011')>-1 && this.sharesFreeze.length>0? true : false;
                this.liquidation_s= val.indexOf('S012')>-1 && this.liquidation.length>0? true : false;
                this.administrativeSanction_s= val.indexOf('S013')>-1 && this.administrativeSanction.length>0? true : false;
          		this.abnormalInfo_s= val.indexOf('S014')>-1 && this.abnormalInfo.length>0? true : false;
          		this.executedPersonInfo_s= val.indexOf('S015')>-1 && this.executedPersonInfo.length>0? true : false;
          		this.defamationExecuted_s= val.indexOf('S016')>-1 && this.defamationExecuted.length>0? true : false;
          		this.relatedExecutedPerson_s= val.indexOf('S017')>-1 && this.relatedExecutedPerson.length>0? true : false;
          		this.relatedDefamationExecuted_s= val.indexOf('S018')>-1 && this.relatedDefamationExecuted.length>0? true : false;
          	},
          	//导出报告
          	report_out(){
			    if(localStorage.getItem('reportType')=='1'){
  			  	   this.urlReport=this.HOST+'/api/v1/download/pdf/entReport?entName='+localStorage.getItem('reportName');
			    }else{
			  	   this.urlReport=this.HOST+'/api/v1/download/pdf/entReport?regNo='+localStorage.getItem('reportName');
			    } 
			    console.log(this.urlReport)
            },
	    },
	    watch:{
	    	types:function(val){
	    		console.log(val )
	    		this.typeSelect(val)
	    	}
	    },
	    created(){
	    	let enReMsg=JSON.parse(localStorage.getItem('enReMsg'));
	    	this.reportMsg=enReMsg;
	    	this.showReMsg(this.reportMsg);
	    	this.typeSelect(this.types);
	    	this.report_out();
//        	bus.$on('enReMsg',msg=>{
//        		this.showReMsg(msg);
//        	});
	    },
	    mounted(){
	    	this.newQuery.entPrise=this.$route.query.ruleName;
//	    	localStorage.setItem('reportName',this.$route.query.ruleName)
	    	
	    }
	 
	}
</script>

<style lang="" scoped>
	.contentFull {
		padding: 20px;
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
		min-height: 300px;
	}
	.queryResult .el-table {
		margin-bottom: 30px;
	}
	.queryResult_table {
		margin:0 30px 0;
	}
	
	
	.investmentContent{
		box-sizing: border-box;
		margin: 1.7em;
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
  .basic_info{
    width: 100%;
    min-height: 30px;
  }
  table{
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  tr,td,th{
    font-size: 14px;
    /*overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;*/
    font-family: '微软雅黑';
    color:#666;
    border: 1px solid #666666;
  }
  .basic_info table tr,.basic_info table td{
    height: 20px;
    line-height: 20px;
    padding:8px;
  }
  .basic_info table tr td:nth-child(odd){
    text-align: center;
    width: 300px;
    padding-right: 20px;
  }
  .prostyle_bottom{
    width: 100%;
    height: 200px;
    padding-top: 50px;
    padding-left: 0%;
    box-sizing: border-box;
  }
  .button_bottom{
    width: 100%;
    margin:0 auto;
  }
  .report_out{
    display: block;
    letter-spacing: 20px;
    color: #fff;
    width: 200px;
    line-height: 45px;
    text-align: center;
    padding-left: 10px;
    background:#30af90;
    height: 45px;
    border-radius:4px;
    font-size: 16px;
    margin:0 auto;
  }
  .button_bottom .el-button{
    background:#30af90;
    height: 45px;
    text-align: center;
    width: 200px;
    border-radius:4px; 
    color: #fff;
    font-size: 16px;
    margin:0 auto;
    position: relative;
  }
</style>