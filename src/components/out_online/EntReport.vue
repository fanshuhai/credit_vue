<template>
	<div class="contentFull outReport"
      	v-loading="loading"
      	element-loading-text='查询中,请稍后...'
      	element-loading-background="rgba(0,0,0,0.3)">
	    <div class="header">
	        <div class="logo"></div>
	        <div class="header-center">
	        	摩尔征信
	        </div>
	        <div class="header-right">
	            <a :href="urlReport" class="report_out report_top">下载报告</a>
	        </div>
	    </div>
		<h1 class="el-header">企业信用报告</h1>
		<!--查询信息-->
	    <div class="prostyle">
		    <div class="prostyle_main">
			  <table>
				  <tr>
					  <td class="basicStyle basicF">企业名称</td>
					  <td class="showStyle">{{entName}}</td>
				  </tr>
				  <tr>
					  <td class="basicStyle basicF">查询机构</td>
					  <td class="showStyle">摩尔征信</td>
				  </tr>
				  <tr>
					  <td class="basicStyle basicF">查询时间</td>
					  <td class="showStyle">{{reportTime}}</td>
				  </tr>
				  <tr>
					  <td class="basicStyle basicF">报告编号</td>
					  <td class="showStyle">{{reportNum}}</td>
				  </tr>
			  </table>
			</div>

	          
	        <div class="danInfo" v-if="defamationExecuted.length!=0 || sharesFreeze.length!=0 || liquidation.length!=0 ||administrativeSanction.length!=0 || abnormalInfo.length!=0">
				<span style="color:#ff0000">风险提示：</span>该企业（机构）命中
				<span v-if="sharesFreeze.length!=0">【股权冻结】</span>
				<span v-if="liquidation.length!=0">【清算】</span>
				<span v-if="administrativeSanction.length!=0">【行政处罚】</span>
				<span v-if="administrativeSanction.length!=0">【经营异常】</span>
				<span v-if="defamationExecuted.length!=0">【严重违法失信】</span>
				信息，详情见下方。
			</div>
	          
	          
	        <!--企业基本信息1-->
			<div class="">
			  <div class="prostyle_title"><span class="border_style"></span>企业基本信息</div>
			  <div v-if='basic.length>0' v-for="(item,index) in basic" class="prostyle_main">
					  <div class="msg_style">企业基本信息{{index+1}}</div>
					  <table>
						  <tr>
							  <td class="basicStyle">企业名称</td>
							  <td class="showStyle">{{item.entName}}</td>
							  <td class="basicStyle">企业英文名称</td>
							  <td class="showStyle">{{item.entEngName}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">法定代表人/负责人/执行事务合伙人</td>
							  <td class="showStyle">{{item.legalPersonName}}</td>
							  <td class="basicStyle">注册资本币种</td>
							  <td class="showStyle">{{item.regCapCur}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">经营状态</td>
							  <td class="showStyle">{{item.entStatus}}</td>
							  <td class="basicStyle">实收资本（万元）</td>
							  <td class="showStyle">{{item.recCap}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">统一社会信用代码</td>
							  <td class="showStyle">{{item.creditCode}}</td>
							  <td class="basicStyle">注册地址行政区域编码</td>
							  <td class="showStyle">{{item.regOrgCode}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">原注册号</td>
							  <td class="showStyle">{{item.oriRegNo}}</td>
							  <td class="basicStyle">注册号</td>
							  <td class="showStyle">{{item.regNo}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">企业（机构）类型</td>
							  <td class="showStyle">{{item.entType}}</td>
							  <td class="basicStyle">所在省份</td>
							  <td class="showStyle">{{item.regOrgProvince}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">成立日期</td>
							  <td class="showStyle">{{item.estabDate}}</td>
							  <td class="basicStyle">所在城市</td>
							  <td class="showStyle">{{item.city}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">经营期限</td>
							  <td class="showStyle">{{item.openFrom}} 至  {{item.openTo}}</td>
							  <td class="basicStyle">所在区/县</td>
							  <td class="showStyle">{{item.county}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">注销日期</td>
							  <td class="showStyle">{{item.cancleDate}}</td>
							  <td class="basicStyle">最后年检年度</td>
							  <td class="showStyle">{{item.lastInspecYear}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">吊销日期</td>
							  <td class="showStyle">{{item.revokeDate}}</td>
							  <td class="basicStyle">核准日期</td>
							  <td class="showStyle">{{item.approvalDate}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">地址</td>
							  <td class="showStyle">{{item.address}}</td>
							  <td class="basicStyle">住所所在行政区划</td>
							  <td class="showStyle">{{item.addressDistrict}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">登记机关</td>
							  <td class="showStyle">{{item.regOrg}}</td>
							  <td class="basicStyle">曾用名</td>
							  <td class="showStyle">{{item.usedName}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">邮箱</td>
							  <td class="showStyle">{{item.email}}</td>
							  <td class="basicStyle">联系人电话</td>
							  <td class="showStyle">{{item.telephone}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">许可经营项目</td>
							  <td class="showStyle">{{item.licenseProject}}</td>
							  <td class="basicStyle">注册资本</td>
							  <td class="showStyle">{{item.regCap}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">企业（机构）类型编码</td>
							  <td class="showStyle">{{item.orgCode}}</td>
							  <td class="basicStyle">注册资本（企业:万元,个体:元）</td>
							  <td class="showStyle">{{item.regCap}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">国民经济行业名称</td>
							  <td class="showStyle">{{item.industryEconomyName}}</td>
							  <td class="basicStyle">国民经济行业代码</td>
							  <td class="showStyle">{{item.industryEconomyCode}}</td>
						  </tr>
						  <tr>
							  <td class="basicStyle">经营（业务）范围</td>
							  <td colspan="3" class="showStyle">{{item.openScope}}</td>
						  </tr>
					  </table>
			  </div>
			  <div v-if="basic.length==0" class="datanull">
				  <span>查询成功，暂无数据</span>
			  </div>
			</div>
			
			<!--股东及出资信息2-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股东及出资信息</div>
				<div v-if='shareholder.length>0' v-for="(item,index) in shareholder" class="prostyle_main">
					<div class="msg_style">股东及出资信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">股东名称</td>
							<td class="showStyle">{{item.shareholder}}</td>
							<td class="basicStyle">出资日期</td>
							<td class="showStyle">{{item.contriDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">认缴出资额（万元）</td>
							<td class="showStyle">{{item.contriAmount}}</td>
							<td class="basicStyle">出资比例</td>
							<td class="showStyle">{{item.contriRatio}}</td>
						</tr>
						<tr>
							<td class="basicStyle">认缴出资币种</td>
							<td class="showStyle">{{item.regCapCur}}</td>
							<td class="basicStyle">出资方式</td>
							<td class="showStyle">{{item.contriForm}}</td>
						</tr>
						<tr>
							<td class="basicStyle">股东类型</td>
							<td class="showStyle">{{item.shareholderType}}</td>
							<td class="basicStyle">国别</td>
							<td class="showStyle">{{item.country}}</td>
						</tr>
					</table>
			    </div>
				<div v-if='shareholder.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--主要人员信息3-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>主要人员信息</div>
				<div v-if='manager.length>0' v-for="(item,index) in manager" class="prostyle_main">
					<div class="msg_style">主要人员信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">人员总数量</td>
							<td class="showStyle">{{item.managerCount}}</td>
							<td class="basicStyle">企业名称</td>
							<td class="showStyle">{{item.entName}}</td>
						</tr>
						<tr>
							<td class="basicStyle">是否法人</td>
							<td v-if="item.isCorporate=='1'" class="showStyle">是</td>
							<td v-else class="showStyle">否</td>
							<td class="basicStyle">人员姓名</td>
							<td class="showStyle">{{item.name}}</td>
						</tr>
						<tr>
							<td class="basicStyle">职位</td>
							<td colspan="3" class="showStyle">{{item.position}}</td>
						</tr>
					</table>
				</div>
				<div v-if="manager.length==0" class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--法定代表人对外投资信息4-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>法定代表人对外投资信息</div>
				<div v-if='legalPersonInv.length>0' v-for="(item,index) in legalPersonInv" class="prostyle_main">
					<div class="msg_style">法定代表人对外投资信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">法定代表人姓名</td>
							<td class="showStyle">{{item.legalPersonName}}</td>
							<td class="basicStyle">登记机关</td>
							<td class="showStyle">{{item.regOrg}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业（机构）名称</td>
							<td class="showStyle">{{item.entName}}</td>
							<td class="basicStyle">认缴出资额（万元）</td>
							<td class="showStyle">{{item.contriAmount}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业状态</td>
							<td class="showStyle">{{item.entStatus}}</td>
							<td class="basicStyle">认缴出资币种</td>
							<td class="showStyle">{{item.currency}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册号</td>
							<td class="showStyle">{{item.regNo}}</td>
							<td class="basicStyle">出资比例</td>
							<td class="showStyle">{{item.contriRatio}}</td>
						</tr>
						<tr>
							<td class="basicStyle">统一社会信用代码</td>
							<td class="showStyle">{{item.creditCode}}</td>
							<td class="basicStyle">出资方式</td>
							<td class="showStyle">{{item.contriForm}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业（机构）类型</td>
							<td class="showStyle">{{item.entType}}</td>
							<td class="basicStyle">开业日期</td>
							<td class="showStyle">{{item.estabDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本（企业:万元,个人:元）</td>
							<td class="showStyle">{{item.regCap}}</td>
							<td class="basicStyle">注销日期</td>
							<td class="showStyle">{{item.cancleDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本币种</td>
							<td class="showStyle">{{item.regCapCur}}</td>
							<td class="basicStyle">吊销日期</td>
							<td class="showStyle">{{item.revokeDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册地址行政区编号</td>
							<td class="showStyle">{{item.regOrgCode}}</td>
							<td class="basicStyle">企业总数量</td>
							<td class="showStyle">{{item.entCount}}</td>
						</tr>

					</table>
				</div>
				<div v-if="legalPersonInv.length==0" class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--法定代表人其他公司任职信息5-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>法定代表人其他公司任职信息</div>
				<div v-if='legalPersonPosition.length>0' v-for="(item,index) in legalPersonPosition" class="prostyle_main">
					<div class="msg_style">法定代表人其他公司任职信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">法定代表人姓名</td>
							<td class="showStyle">{{item.legalPersonName}}</td>
							<td class="basicStyle">是否法定代表人</td>
							<td class="showStyle">{{item.isLegalPerson}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业（机构）名称</td>
							<td class="showStyle">{{item.entName}}</td>
							<td class="basicStyle">职务</td>
							<td class="showStyle">{{item.position}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业状态</td>
							<td class="showStyle">{{item.entStatus}}</td>
							<td class="basicStyle">注册号</td>
							<td class="showStyle">{{item.regNo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业（机构）类型</td>
							<td class="showStyle">{{item.entType}}</td>
							<td class="basicStyle">成立日期</td>
							<td class="showStyle">{{item.estabDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本（企业:万元,个人:元）</td>
							<td class="showStyle">{{item.regCap}}</td>
							<td class="basicStyle">注销日期</td>
							<td class="showStyle">{{item.cancleDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本币种</td>
							<td class="showStyle">{{item.regCapCur}}</td>
							<td class="basicStyle">吊销日期</td>
							<td class="showStyle">{{item.revokeDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册地址行政区编号</td>
							<td class="showStyle">{{item.regOrgCode}}</td>
							<td class="basicStyle">企业总数量</td>
							<td class="showStyle">{{item.entCount}}</td>
						</tr>
						<tr>
							<td class="basicStyle">登记机关</td>
							<td class="showStyle" colspan="3">{{item.regOrg}}</td>
						</tr>
					</table>
				</div>
				<div v-if='legalPersonPosition.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--企业对外投资信息6-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>企业对外投资信息</div>
				<div v-if='entInv.length>0' v-for="(item,index) in entInv" class="prostyle_main">
					<div class="msg_style">企业对外投资信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">企业（机构）名称</td>
							<td class="showStyle">{{item.entName}}</td>
							<td class="basicStyle">登记机关</td>
							<td class="showStyle">{{item.regOrg}}</td>
						</tr>
						<tr>
							<td class="basicStyle">企业状态</td>
							<td class="showStyle">{{item.entStatus}}</td>
							<td class="basicStyle">认缴出资额（万元）</td>
							<td class="showStyle">{{item.contriAmount}}</td>
						</tr>
						<tr>
							<td class="basicStyle">法定代表人姓名</td>
							<td class="showStyle">{{item.legalPersonName}}</td>
							<td class="basicStyle">认缴出资币种</td>
							<td class="showStyle">{{item.currency}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册号</td>
							<td class="showStyle">{{item.regNo}}</td>
							<td class="basicStyle">出资比例</td>
							<td class="showStyle">{{item.contriRatio}}</td>
						</tr>
						<tr>
							<td class="basicStyle">统一社会信用代码</td>
							<td class="showStyle">{{item.creditCode}}</td>
							<td class="basicStyle">出资方式</td>
							<td class="showStyle">{{item.contriForm}}</td>
						</tr>
						<tr><td class="basicStyle">企业（机构）类型</td>
							<td class="showStyle">{{item.entType}}</td>
							<td class="basicStyle">开业日期</td>
							<td class="showStyle">{{item.estabDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本（企业:万元,个人:元）</td>
							<td class="showStyle">{{item.regCap}}</td>
							<td class="basicStyle">注销日期</td>
							<td class="showStyle">{{item.cancleDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册资本币种</td>
							<td class="showStyle">{{item.regCapCur}}</td>
							<td class="basicStyle">吊销日期</td>
							<td class="showStyle">{{item.revokeDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注册地址行政区编号</td>
							<td class="showStyle">{{item.regOrgCode}}</td>
							<td class="basicStyle">企业总数量</td>
							<td class="showStyle">{{item.enterpriseAmt}}</td>
						</tr>
					</table>
				</div>
				<div v-if='entInv.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--历史变更7-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>历史变更</div>
				<div class="prostyle_main">
					<table>
						<tr>
							<td  class="basicStyle">变更日期</td>
							<td  class="basicStyle">变更前内容</td>
							<td  class="basicStyle">变更事项</td>
							<td  class="basicStyle">变更后内容</td>
						</tr>
						<tr v-if='alterHistory.length>0' v-for="(item,index) in alterHistory">
							<td class="showStyle">{{item.alterDate}}</td>
							<td class="showStyle">{{item.alterBefore}}</td>
							<td class="showStyle">{{item.alterItem}}</td>
							<td class="showStyle">{{item.alterAfter}}</td>
						</tr>
					</table>
				</div>
				<div v-if='alterHistory.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--分支机构信息8-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>分支机构信息</div>
				<div v-if='affiliate.length>0' v-for="(item,index) in affiliate" class="prostyle_main">
					<div class="msg_style">分支机构信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">分支机构名称</td>
							<td class="showStyle">{{item.name}}</td>
							<td class="basicStyle">分支机构企业注册号</td>
							<td class="showStyle">{{item.regNo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">分支机构统一社会信用代码</td>
							<td class="showStyle">{{item.creditCode}}</td>
							<td class="basicStyle">分支机构登记机关</td>
							<td class="showStyle">{{item.registAuth}}</td>
						</tr>
					</table>
				</div>
				<div v-if='affiliate.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--股权出质信息9-1-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股权出质信息</div>
				<div v-if='equityPledgeHistory.length>0' v-for="(item,index) in equityPledgeHistory" class="prostyle_main">
					<div class="msg_style">股权出质信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">出质股权数额</td>
							<td class="showStyle">{{item.pledgedEquitAmt}}</td>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
						</tr>
						<tr>
							<td class="basicStyle">关联内容</td>
							<td class="showStyle">{{item.associatedContent}}</td>
							<td class="basicStyle">质权人证件/证件号码</td>
							<td class="showStyle">{{item.pledgeeCardNo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">出质人</td>
							<td class="showStyle">{{item.pledgor}}</td>
							<td class="basicStyle">公示日期</td>
							<td class="showStyle">{{item.publicationDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">出质人证件/证件号</td>
							<td class="showStyle">{{item.pledgorCard}}</td>
							<td class="basicStyle">状态</td>
							<td class="showStyle">{{item.status}}</td>
						</tr>
						<tr>
							<td class="basicStyle">质权出质设立登记日期</td>
							<td class="showStyle">{{item.pledgeDate}}</td>
							<td class="basicStyle">质权人姓名</td>
							<td class="showStyle">{{item.pledgee}}</td>
						</tr>
					</table>
				</div>
				<div v-if='equityPledgeHistory.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--股权出质信息-变更2-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股权出质信息-变更</div>
				<div v-if='equityPledgeAlter.length>0' v-for="(item,index) in equityPledgeAlter" class="prostyle_main">
					<div class="msg_style">股权出质信息-变更{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">变更内容</td>
							<td class="showStyle">{{item.alterContent}}</td>
							<td class="basicStyle">变更日期</td>
							<td class="showStyle">{{item.alterDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">关联内容</td>
							<td class="showStyle" colspan="3">{{item.associatedContent}}</td>
						</tr>
					</table>
				</div>
				<div v-if='equityPledgeAlter.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>


			<!--股权出质信息-注销3-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股权出质信息-注销</div>
				<div v-if='equityPledgeAlter.length>0' v-for="(item,index) in equityPledgeAlter" class="prostyle_main">
					<div class="msg_style">股权出质信息-注销{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">注销原因</td>
							<td class="showStyle">{{item.cancleReason}}</td>
							<td class="basicStyle">注销日期</td>
							<td class="showStyle">{{item.cancleDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">关联内容</td>
							<td class="showStyle" colspan="3">{{item.associatedContent}}</td>
						</tr>
					</table>
				</div>
				<div v-if='equityPledgeAlter.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息10-基本信息1-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>动产抵押信息-基本信息</div>
				<div v-if='chattelMortgageBasic.length>0' v-for="(item,index) in chattelMortgageBasic" class="prostyle_main">
					<div class="msg_style">动产抵押信息-基本信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
							<td class="basicStyle">登记日期</td>
							<td class="showStyle">{{item.regDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">登记机关</td>
							<td class="showStyle">{{item.regOrg}}</td>
							<td class="basicStyle">被担保债权数额</td>
							<td class="showStyle">{{item.principalSecuredAmount}}</td>
						</tr>
						<tr>
							<td class="basicStyle">状态</td>
							<td class="showStyle">{{item.status}}</td>
							<td class="basicStyle">公示日期</td>
							<td class="showStyle">{{item.publicationDate}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageBasic.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息-抵押物信息2-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>动产抵押信息-抵押物信息</div>
				<div v-if='chattelMortgageCollateral.length>0' v-for="(item,index) in chattelMortgageCollateral" class="prostyle_main">
					<div class="msg_style">动产抵押信息-抵押物信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
							<td class="basicStyle">名称</td>
							<td class="showStyle">{{item.name}}</td>
						</tr>
						<tr>
							<td class="basicStyle">所有权或使用权归属</td>
							<td class="showStyle">{{item.ownership}}</td>
							<td class="basicStyle">数量、质量、状况、所在地情况</td>
							<td class="showStyle">{{item.details}}</td>
						</tr>
						<tr>
							<td class="basicStyle">备注</td>
							<td class="showStyle" colspan="3">{{item.remarks}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageCollateral.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息-抵押人信息3-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>动产抵押信息-抵押人信息</div>
				<div v-if='chattelMortgagePerson.length>0' v-for="(item,index) in chattelMortgagePerson" class="prostyle_main">
					<div class="msg_style">动产抵押信息-抵押人信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
							<td class="basicStyle">抵押权人名称</td>
							<td class="showStyle">{{item.mortgagee}}</td>
						</tr>
						<tr>
							<td class="basicStyle">抵押权人证照/证件类型</td>
							<td class="showStyle">{{item.mortgageeCardType}}</td>
							<td class="basicStyle">抵押权人证照/证件号码</td>
							<td class="showStyle">{{item.mortgageeCard}}</td>
						</tr>
						<tr>
							<td class="basicStyle">所在地</td>
							<td class="showStyle" colspan="3">{{item.mortgageeAddress}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgagePerson.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息-登记信息4-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股权出质信息-变更</div>
				<div v-if='chattelMortgageRegister.length>0' v-for="(item,index) in chattelMortgageRegister" class="prostyle_main">
					<div class="msg_style">股权出质信息-变更{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">变更内容</td>
							<td class="showStyle">{{item.alterContent}}</td>
							<td class="basicStyle">变更日期</td>
							<td class="showStyle">{{item.alterDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">备注</td>
							<td class="showStyle" colspan="3">{{item.remarks}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageRegister.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息-变更信息5-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>动产抵押信息-变更信息</div>
				<div v-if='chattelMortgageAlter.length>0' v-for="(item,index) in chattelMortgageAlter" class="prostyle_main">
					<div class="msg_style">动产抵押信息-变更信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
							<td class="basicStyle">变更日期</td>
							<td class="showStyle">{{item.alterDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">变更内容</td>
							<td class="showStyle" colspan="3">{{item.alterContent}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageAlter.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--动产抵押信息-注销信息6-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>动产抵押信息-注销信息</div>
				<div v-if='chattelMortgageAlter.length>0' v-for="(item,index) in chattelMortgageAlter" class="prostyle_main">
					<div class="msg_style">动产抵押信息-注销信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">登记编号</td>
							<td class="showStyle">{{item.registrationNum}}</td>
							<td class="basicStyle">注销日期</td>
							<td class="showStyle">{{item.cancleDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">注销原因</td>
							<td class="showStyle" colspan="3">{{item.cancleReason}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageAlter.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			
		    <!--股权冻结信息11-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>股权冻结信息</div>
				<div v-if='sharesFreeze.length>0' v-for="(item,index) in sharesFreeze" class="prostyle_main">
					<div class="msg_style">股权冻结信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">冻结起始日期</td>
							<td class="showStyle">{{item.freezeFrom}}</td>
							<td class="basicStyle">冻结执行通知书文号</td>
							<td class="showStyle">{{item.freezeExecuteDocNo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻日期</td>
							<td class="showStyle">{{item.unfreezeDate}}</td>
							<td class="basicStyle">失效原因</td>
							<td class="showStyle">{{item.invalidReason}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻说明</td>
							<td class="showStyle">{{item.unfreezeComment}}</td>
							<td class="basicStyle">失效时间</td>
							<td class="showStyle">{{item.invalidTime}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻机关</td>
							<td class="showStyle">{{item.unfreezeOrg}}</td>
							<td class="basicStyle">被执行人证件号码</td>
							<td class="showStyle">{{item.judicialPersonCard}}</td>
						</tr>
						<tr>
							<td class="basicStyle">冻结截止日期</td>
							<td class="showStyle">{{item.freezeExpire}}</td>
							<td class="basicStyle">被执行人证件类型</td>
							<td class="showStyle">{{item.cardType}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻文号</td>
							<td class="showStyle">{{item.unfreezeDocNo}}</td>
							<td class="basicStyle">类型、状态</td>
							<td class="showStyle">{{item.state}}</td>
						</tr>
						<tr>
							<td class="basicStyle">冻结文号</td>
							<td class="showStyle">{{item.freezeDocNo}}</td>
							<td class="basicStyle">被执行人</td>
							<td class="showStyle">{{item.judicialPerson}}</td>
						</tr>
						<tr>
							<td class="basicStyle">冻结金额（万元）</td>
							<td class="showStyle">{{item.freezeAmount}}</td>
							<td class="basicStyle">续行冻结期限</td>
							<td class="showStyle">{{item.keepFreese}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻机关</td>
							<td class="showStyle">{{item.unfreezeOrg}}</td>
							<td class="basicStyle">续行冻结期限自</td>
							<td class="showStyle">{{item.keepFreeseFrom}}</td>
						</tr>
						<tr>
							<td class="basicStyle">股权数额</td>
							<td class="showStyle">{{item.socketAmount}}</td>
							<td class="basicStyle">续行冻结期限至</td>
							<td class="showStyle">{{item.keepFreeseTo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">解冻执行事项</td>
							<td class="showStyle">{{item.freezeExcuteItem}}</td>
							<td class="basicStyle">解冻执行通知书文号</td>
							<td class="showStyle">{{item.unFreeseExecDocNo}}</td>
						</tr>
						<tr>
							<td class="basicStyle">冻结公示日期</td>
							<td class="showStyle">{{item.freezeOpenDate}}</td>
							<td class="basicStyle">解冻公示日期</td>
							<td class="showStyle">{{item.unFreezeOpenDate}}</td>
						</tr>
					</table>
				</div>
				<div v-if='sharesFreeze.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--清算信息12-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>清算信息</div>
				<div  class="prostyle_main">
					<div class="msg_style">清算信息</div>
					<table>
						<tr>
							<td class="basicStyle">清算责任人</td>
							<td class="basicStyle">清算组成员</td>
						</tr>
						<tr v-if='liquidation.length>0' v-for="(item,index) in liquidation">
							<td class="showStyle">{{item.pledgeExpire}}</td>
							<td class="showStyle">{{item.pledgeeType}}</td>
						</tr>
					</table>
				</div>
				<div v-if='liquidation.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--行政处罚历史信息13-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>行政处罚历史信息</div>
				<div v-if='administrativeSanction.length>0' v-for="(item,index) in administrativeSanction" class="prostyle_main">
					<div class="msg_style">行政处罚历史信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">处罚种类</td>
							<td class="showStyle">{{item.sanctionType}}</td>
							<td class="basicStyle">公示日期</td>
							<td class="showStyle">{{item.openDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">处罚决定书</td>
							<td class="showStyle">{{item.punishDecisionDoc}}</td>
							<td class="basicStyle">处罚决定书签发日期</td>
							<td class="showStyle">{{item.sanctionSignDate}}</td>
						</tr>
						<tr>
							<td class="basicStyle">处罚机关</td>
							<td class="showStyle">{{item.sanctionOrgCn}}</td>
							<td class="basicStyle">行政处罚内容</td>
							<td class="showStyle">{{item.sanctionContent}}</td>
						</tr>
						<tr>
							<td class="basicStyle">主要违法事实</td>
							<td class="showStyle" colspan="3">{{item.illegalFact}}</td>
						</tr>
					</table>
				</div>
				<div v-if='administrativeSanction.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--经营异常信息14-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>经营异常信息</div>
				<div v-if='abnormalInfo.length>0' v-for="(item,index) in abnormalInfo" class="prostyle_main">
					<div class="msg_style">经营异常信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">列入日期</td>
							<td class="basicStyle">列入做出决定机关</td>
							<td class="basicStyle">列入原因</td>
							<td class="basicStyle">移出日期（有移出日期表示已在该次经营异常名录中移出）</td>
							<td class="basicStyle">移出做出决定机关</td>
							<td class="basicStyle">移出原因</td>
						</tr>
						<tr>
							<td class="showStyle">{{item.includeDate}}</td>
							<td class="showStyle">{{item.includeOrg}}</td>
							<td class="showStyle">{{item.includeReason}}</td>
							<td class="showStyle">{{item.excludeDate}}</td>
							<td class="showStyle">{{item.excludeOrg}}</td>
							<td class="showStyle">{{item.excludeReason}}</td>
						</tr>
					</table>
				</div>
				<div v-if='abnormalInfo.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--被执行人信息15-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>被执行人信息</div>
				<div v-if='executedPersonInfo.length>0' v-for="(item,index) in executedPersonInfo" class="prostyle_main">
					<div class="msg_style">被执行人信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">案号</td>
							<td class="showStyle">{{item.caseNum}}</td>
							<td class="basicStyle">省份</td>
							<td class="showStyle">{{item.province}}</td>
						</tr>
						<tr>
							<td class="basicStyle">立案时间</td>
							<td class="showStyle">{{item.filingDate}}</td>
							<td class="basicStyle">关注次数</td>
							<td class="showStyle">{{item.concernsNum}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案件状态</td>
							<td class="showStyle">{{item.caseStatus}}</td>
							<td class="basicStyle">被执行人类型</td>
							<td class="showStyle">{{item.executionPersonType}}</td>
						</tr>
						<tr>
							<td class="basicStyle">性别</td>
							<td class="showStyle">{{item.sex}}</td>
							<td class="basicStyle">执行法院</td>
							<td class="showStyle">{{item.executiveCourt}}</td>
						</tr>
						<tr>
							<td class="basicStyle">身份证原始发证地</td>
							<td class="showStyle">{{item.identityOriAddr}}</td>
							<td class="basicStyle">年龄</td>
							<td class="showStyle">{{item.age}}</td>
						</tr>
						<tr>
							<td class="basicStyle">被执行人姓名/名称</td>
							<td class="showStyle">{{item.judicialPersonName}}</td>
							<td class="basicStyle">身份证号码/企业注册号</td>
							<td class="showStyle">{{item.card}}</td>
						</tr>
						<tr>
							<td class="basicStyle">执行标的（元）</td>
							<td class="showStyle" colspan="3">{{item.executionTarget}}</td>
						</tr>
					</table>
				</div>
				<div v-if='chattelMortgageAlter.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--失信被执行人信息16-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>失信被执行人信息</div>
				<div v-if='defamationExecuted.length>0' v-for="(item,index) in defamationExecuted" class="prostyle_main">
					<div class="msg_style">失信被执行人信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">被执行人姓名/名称</td>
							<td class="showStyle">{{item.excutionPersonName}}</td>
							<td class="basicStyle">法定代表人或者负责人姓名</td>
							<td class="showStyle">{{item.legalPersonName}}</td>
						</tr>
						<tr>
							<td class="basicStyle">发布时间</td>
							<td class="showStyle">{{item.releaseTime}}</td>
							<td class="basicStyle">省份</td>
							<td class="showStyle">{{item.province}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案号</td>
							<td class="showStyle">{{item.caseNum}}</td>
							<td class="basicStyle">关注次数</td>
							<td class="showStyle">{{item.concernsNum}}</td>
						</tr>
						<tr>
							<td class="basicStyle">立案时间</td>
							<td class="showStyle">{{item.filingDate}}</td>
							<td class="basicStyle">未履行（元</td>
							<td class="showStyle">{{item.noImplemented}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案件状态</td>
							<td class="showStyle">{{item.caseStatus}}</td>
							<td class="basicStyle">已履行（元）</td>
							<td class="showStyle">{{item.achieved}}</td>
						</tr>
						<tr>
							<td class="basicStyle">性别</td>
							<td class="showStyle">{{item.sex}}</td>
							<td class="basicStyle">失信人类型</td>
							<td class="showStyle">{{item.dishonestyType}}</td>
						</tr>
						<tr>
							<td class="basicStyle">执行依据文号</td>
							<td class="showStyle">{{item.executiveSymbol}}</td>
							<td class="basicStyle">执行法院</td>
							<td class="showStyle">{{item.executiveCourt}}</td>
						</tr>
						<tr>
							<td class="basicStyle">做出执行依据单位</td>
							<td class="showStyle">{{item.implementationBasisUnit}}</td>
							<td class="basicStyle">身份证号码/工商注册号</td>
							<td class="showStyle">{{item.card}}</td>
						</tr>
						<tr>
							<td class="basicStyle">身份证原始发证地</td>
							<td class="showStyle">{{item.identityOriAddr}}</td>
							<td class="basicStyle">年龄</td>
							<td class="showStyle">{{item.age}}</td>
						</tr>
						<tr>
							<td class="basicStyle">失信被执行人行为具体情况</td>
							<td class="showStyle">{{item.defamationExecutedSituation}}</td>
							<td class="basicStyle">被执行人履行情况</td>
							<td class="showStyle">{{item.defamationExecutedPerform}}</td>
						</tr>
						<tr>
							<td class="basicStyle">生效法律文书确定的义务</td>
							<td class="showStyle" colspan="3">{{item.duty}}</td>
						</tr>
					</table>
				</div>
				<div v-if='defamationExecuted.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--关联被执行人信息17-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>关联被执行人信息</div>
				<div v-if='relatedExecutedPerson.length>0' v-for="(item,index) in relatedExecutedPerson" class="prostyle_main">
					<div class="msg_style">关联被执行人信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">案号</td>
							<td class="showStyle">{{item.caseNum}}</td>
							<td class="basicStyle">省份</td>
							<td class="showStyle">{{item.province}}</td>
						</tr>
						<tr>
							<td class="basicStyle">立案时间</td>
							<td class="showStyle">{{item.filingDate}}</td>
							<td class="basicStyle">关注次数</td>
							<td class="showStyle">{{item.concernsNum}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案件状态</td>
							<td class="showStyle">{{item.caseStatus}}</td>
							<td class="basicStyle">被执行人类型</td>
							<td class="showStyle">{{item.executionPersonType}}</td>
						</tr>
						<tr>
							<td class="basicStyle">性别</td>
							<td class="showStyle">{{item.sex}}</td>
							<td class="basicStyle">执行法院</td>
							<td class="showStyle">{{item.executiveCourt}}</td>
						</tr>
						<tr>
							<td class="basicStyle">身份证原始发证地</td>
							<td class="showStyle">{{item.identityOriAddr}}</td>
							<td class="basicStyle">年龄</td>
							<td class="showStyle">{{item.age}}</td>
						</tr>
						<tr>
							<td class="basicStyle">被执行人姓名/名称</td>
							<td class="showStyle">{{item.executionPersonName}}</td>
							<td class="basicStyle">身份证号码/企业注册号</td>
							<td class="showStyle">{{item.card}}</td>
						</tr>
						<tr>
							<td class="basicStyle">执行标的（元）</td>
							<td class="showStyle" colspan="3">{{item.executionTarget}}</td>
						</tr>
					</table>
				</div>
				<div v-if='relatedExecutedPerson.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>

			<!--关联被执行人信息18-->
			<div class="prostyle">
				<div class="prostyle_title"><span class="border_style"></span>关联被执行人信息</div>
				<div v-if='relatedDefamationExecuted.length>0' v-for="(item,index) in relatedDefamationExecuted" class="prostyle_main">
					<div class="msg_style">关联被执行人信息{{index+1}}</div>
					<table>
						<tr>
							<td class="basicStyle">被执行人姓名/名称</td>
							<td class="showStyle">{{item.executionPersonName}}</td>
							<td class="basicStyle">法定代表人或者负责人姓名</td>
							<td class="showStyle">{{item.legalPersonName}}</td>
						</tr>
						<tr>
							<td class="basicStyle">发布时间</td>
							<td class="showStyle">{{item.releaseTime}}</td>
							<td class="basicStyle">省份</td>
							<td class="showStyle">{{item.province}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案号</td>
							<td class="showStyle">{{item.caseNum}}</td>
							<td class="basicStyle">关注次数</td>
							<td class="showStyle">{{item.concernsNum}}</td>
						</tr>
						<tr>
							<td class="basicStyle">立案时间</td>
							<td class="showStyle">{{item.filingDate}}</td>
							<td class="basicStyle">未履行（元）</td>
							<td class="showStyle">{{item.noImplemented}}</td>
						</tr>
						<tr>
							<td class="basicStyle">案件状态</td>
							<td class="showStyle">{{item.caseStatus}}</td>
							<td class="basicStyle">已履行（元）</td>
							<td class="showStyle">{{item.achieved}}</td>
						</tr>
						<tr>
							<td class="basicStyle">性别</td>
							<td class="showStyle">{{item.sex}}</td>
							<td class="basicStyle">失信人类型</td>
							<td class="showStyle">{{item.dishonestyType}}</td>
						</tr>
						<tr>
							<td class="basicStyle">执行依据文号</td>
							<td class="showStyle">{{item.executiveSymbol}}</td>
							<td class="basicStyle">执行法院</td>
							<td class="showStyle">{{item.executiveCourt}}</td>
						</tr>
						<tr>
							<td class="basicStyle">做出执行依据单位</td>
							<td class="showStyle">{{item.implementationBasisUnit}}</td>
							<td class="basicStyle">身份证号码/工商注册号</td>
							<td class="showStyle">{{item.card}}</td>
						</tr>
						<tr>
							<td class="basicStyle">身份证原始发证地</td>
							<td class="showStyle">{{item.identityOriAddr}}</td>
							<td class="basicStyle">年龄</td>
							<td class="showStyle">{{item.age}}</td>
						</tr>
						<tr>
							<td class="basicStyle">失信被执行人行为具体情况</td>
							<td class="showStyle">{{item.defamationExecutedSituation}}</td>
							<td class="basicStyle">被执行人履行情况</td>
							<td class="showStyle">{{item.defamationExecutedPerform}}</td>
						</tr>
						<tr>
							<td class="basicStyle">生效法律文书确定的义务</td>
							<td class="showStyle" colspan="3">{{item.duty}}</td>
						</tr>
					</table>
				</div>
				<div v-if='relatedDefamationExecuted.length==0' class="datanull">
					<span>查询成功，暂无数据</span>
				</div>
			</div>
			
				
        </div>
		<div class="prostyle_bottom">
            <div class="button_bottom">
              <a :href="urlReport" class="report_out">下载报告</a>
            </div>
        </div>
		
	</div>
</template>

<script>
	import bus from '../common/bus';
	export default {
		data() {
			return {
				
	            content: '',
	            
	            entName:'',
	            //企业报告信息
	            reportTime:'',
	            reportNum:'',
	            reportMsg:'',
	            noQuery:true,
	            queryMsg:false,
	            checkAllData:'全部（0）',
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
				
	            
                // 导出报告
                urlReport:'',
			}
		},
		components:{
			
		},
		methods: {
			showReMsg(totalData){
				console.log(totalData)
				this.reportNum=totalData.data.basicInfoBNum;
				let queryTime=totalData.data.queryDate.split(' ')[0].split('-');
				queryTime=queryTime[0]+'年'+queryTime[1]+'月'+queryTime[2]+'日';
				this.reportTime=queryTime;
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

            	
			},
			informationQuery(res_data){ 
	               // 验证是否有汉字中文
	                let regEntr=/.*[\u4e00-\u9fa5]+.*$/;
	                let enterMsg={};
	                let ruleName=$.trim(res_data);
            	    this.loading=true;
	          	    if(regEntr.test(ruleName)){
		          	    enterMsg={
		                    apiCode: "acedata.user.basicInfoB",
							entName:ruleName,
						    accessType:"1"
		               };
	          	    }else{
		          	    enterMsg={
		                    apiCode: "acedata.user.basicInfoB",
							regNo:ruleName,
						    accessType:"1"
		               };
	          	    }
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
	          
          	},
          	//导出报告
          	report_out(res){
			  	this.urlReport=this.HOST+'/api/v1/download/pdf/entReport?entName='+res;
			    console.log(this.urlReport)
            },
	    },
	    watch:{
	    	
	    },
	    created(){
//	    	let enReMsg=JSON.parse(localStorage.getItem('enReMsg'));
//	    	this.reportMsg=enReMsg;
//	    	this.showReMsg(this.reportMsg);
//	    	this.typeSelect(this.types);
			this.entName=this.$route.query.entName
	    	this.report_out(this.entName);
            this.informationQuery(this.entName)

	    },
	    mounted(){
//	    	this.newQuery.entPrise=this.$route.query.ruleName;
//	    	localStorage.setItem('reportName',this.$route.query.ruleName)
	    	
	    }
	 
	}
</script>

<style lang="" scoped>
    body{
      font-family:SimHei;
    }
    .contentFull{
    	padding: 0% 15% 3%;
    	margin:0 auto;
    	overflow-y: scroll;
    }
    .queryResult{
      height: auto;
      width: 100%;
      padding:0;
      margin: 0;
    }
    .el-header{
      height: 70px;
      line-height: 70px;
      margin-top: 100px;
      text-align: center;
      padding-top:12px;
      font-size: 28px;
      color: #30af90;
      font-weight: 600;
      letter-spacing: 5px;
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
    td,th{
      padding: 10px;
      font-size: 14px;
      /*overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;*/
      width: 45%;
      height: 30px;
      line-height: 30px;
      color: #666666;

      /*background: #f1f1f1;*/
    }

    tr{
      padding: 10px;
      font-size: 14px;
      /*overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;*/
      width: 45%;
      height: 30px;
      line-height: 30px;
      color: black;
      /*background: #f1f1f1;*/
    }
    td {
      border: 1px solid #A6A9AD;
      border-collapse: collapse;
      padding-left: 10px;
      min-height: 20px;
    }
    td:nth-child(odd){
    	background: #eee;
    }
    table tr:nth-child(even) {
      background-color: #ffffff;
    }
    .basic_table td{
      border:0px;
    }
    .prostyle{
    	margin-top: 20px;
    }
    .prostyle_title{
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      border-bottom: 1px solid #A6A9AD;
      color: #30af90;
    }
    .border_style{
      padding-right:4px;
      margin:0 10px 0 20px;
      border-right: 6px solid #30af90;
      border-left: 6px solid #30af90;
      /*background: #30af90;*/

    }
    .prostyle_main{
      padding-top: 20px;
    }
    .credite{
      height: 55%;
      width: 300px;
      position: absolute;
      top:38%;
      left: 65%;

    }
    .circle_title{
      position: absolute;
      top: 28%;
      left: 7%;
      color: #20a0ff;
    }
    .circle_title div:nth-child(1){
      font-size: 28px;
      width: 80px;
      text-align: center;
    }
    .circle_title div:nth-child(2){
      font-size: 14px;
      width: 80px;
      text-align: center;
    }
    .guishudi table{
      width: 90%;
    }
    .guishudi table tr td:nth-child(odd){
      width:120px;
    }
    .authentication{
      width: 100%;
    }
    .authentication table tr:nth-child(odd) {
      background: #f0f0f0;
    }
    .blacklist{
      width: 100%;
      box-sizing: border-box;
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .blacklist table tr td:nth-child(odd){
      width:180px;
      text-align:right;
    }
    .msg_style{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #A6A9AD;
      font-weight: revert;	
      padding-left: 20px;
      box-sizing: border-box;

    }
    .headers_loan th{
      height: 40px;
      line-height: 40px;
      background: #f0f0f0;
    }
    .datanull{
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #666;
    }
	.basicStyle{
		color: black;
	}
	.showStyle{
		font-size: 12px;
	}
	 .basicF{
		 width: 20%;
		 text-align: center;
	 }
	.danInfo{
		margin-top: 10px;
	}
	.header{
		height: 90px;
	    line-height: 90px;
	    color: #FFF;
	    position: fixed;
	    width: 69.1%;
	}
    .header .logo{
        float: left;
        width:250px;
        height: 100%;
        line-height: 100%;
        background-image:url(../../assets/img/logo.png);
        background-size:50% 50%;
        background-repeat: no-repeat;
        background-position: center;
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
  .report_top{ 
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    letter-spacing: 5px;
  }
    .header-center{
        float: left;
        height: 100%;
        font-size: 20px;
        letter-spacing: 4px;
    }
	.header-right{
	    float: right;
	    padding-right: 100px;
	    position: relative;
	    height: 100%;
	}
</style>