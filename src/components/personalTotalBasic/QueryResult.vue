<template>
    <div class="queryResult" id="pdfDom">
      <el-container>
          <el-header>
              个人征信报告
          </el-header>
          <el-main>
              <!-- 基础信息 -->
              <div class="basic_info">
                  <table>
                    <tr>
                      <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                      <td>{{total_msg.name}}</td>
                      <td>查询时间</td>
                      <td>{{reportTime}}</td>
                    </tr>
                    <tr>
                      <td>手机号码</td>
                      <td>{{total_msg.phone}}</td>
                      <td>查询机构</td>
                      <td>摩尔征信</td>
                    </tr>
                    <tr>
                      <td>身份证号</td>
                      <td>{{total_msg.cardId}}</td>
                      <td>报告编号</td>
                      <td>{{reportNum}}</td>
                    </tr>
                  </table>
              </div>

              <!-- 基本信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>基本信息</div>
                
                <div class="basic_info personal_info">
                  <table>
                    <tr>
                      <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                      <td>{{total_msg.name}}</td>
                      <td>出生日期</td>
                      <td>{{total_msg.birthdate}}</td>
                    </tr>
                    <tr>
                      <td>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</td>
                      <td>{{total_msg.gender}}</td>
                      <td>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍</td>
                      <td>{{total_msg.province}}</td>
                    </tr>
                    <tr>
                      <td>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</td>
                      <td>{{total_msg.age}} 岁</td>
                      <td>手&nbsp;&nbsp;机&nbsp;&nbsp;号</td>
                      <td>{{total_msg.phone}}</td>
                    </tr>
                    <tr>
                      <td>身份证号</td>
                      <td>{{total_msg.cardId}}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- 风险评分 -->
              <div class="prostyle"
                v-loading="loading"
                element-loading-spinner="el-icon-loading"
                element-loading-text="查询中，请稍后......">
                <div class="prostyle_title"><span class="border_style"></span>风险评分</div>
                <div class="prostyle_main">
                  <div class="p_content guishudi">
                    <table>
                      <tr>
                        <td>信用评分</td>
                        <td style="color: #fb4c40;">{{creditScore}}
                        	<span style="font-size: 14px;color: #A6A9AD;padding-left: 20px;">(信用分介于0~100，分数越高，表明信用越好)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>个人收入能力评分</td>
                        <td style="color: #fb4c40;">{{incomeScore}}
                        	<span style="font-size: 14px;color: #A6A9AD;padding-left: 20px;">(能力分介于0~100，分数越高，表明收入能力越好)</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div>
                  </div>
                </div>
                <!--<div class="credite">
                  <el-progress type="circle" :show-text='false' :percentage=score :width="120"></el-progress>
                  <div class="circle_title">
                    <div>无</div>
                    <div>信用评分</div>
                  </div>
                </div>-->
              </div>

              <!-- 归属地解析 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>归属地解析</div>
                <div class="prostyle_main">
                  <div class="p_content guishudi">
                    <table>
                      <tr>
                        <td>身份证归属地</td>
                        <td>{{belongtos.id_card_address}}</td>
                      </tr>
                      <tr>
                        <td>手机归属地</td>
                        <td>{{belongtos.phone_attribution}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>


             <!-- 身份验证 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>身份验证</div>
                <div class="prostyle_main">
                  <div class="p_content guishudi">
                    <table>
                      <tr>
                        <td>姓名、身份证</td>
                        <td>{{sensetime_twofactor}}</td>
                      </tr>
                      <tr>
                        <td>姓名、身份证、手机号</td>
                        <td>{{acedata_userValidation}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              
              <!-- 黑名单（失信执行人） -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>黑名单（失信被执行人）</div>
                <div class="prostyle_main">
                  <div v-if="sstatus===1" v-for="(shixin,index) in shixins"  class=" blacklist">
                    <div class="msg_style">失信信息{{index+1}}</div>
                    <table>
                      <tr>
                        <td>执行法院</td>
                        <td>{{shixin.court}}</td>
                      </tr>
                      <tr>
                        <td>被执行人的履行情况</td>
                        <td>{{shixin.sx_lx}}</td>
                      </tr>
                      <tr>
                        <td>省份</td>
                        <td>{{shixin.sx_sf}}</td>
                      </tr>
                      <tr>
                        <td>被执行人行为具体情况</td>
                        <td>{{shixin.sx_jt}}</td>
                      </tr>
                      <tr>
                        <td>案号</td>
                        <td>{{shixin.casenum}}</td>
                      </tr>
                      <tr>
                        <td>发布时间</td>
                        <td>{{shixin.sx_fb}}</td>
                      </tr>
                      <tr>
                        <td>生效法律文书确定的义务</td>
                        <td>{{shixin.concent}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="sstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>。
                  </div>
                </div>
              </div>
              
              <!-- 个人司法信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>个人司法信息</div>
                <div class="prostyle_main">
                  <div v-if="zstatus===1">
                  	<!--执行公开信息-->
	                  <div v-if="zhixings.length>0" v-for="(zhixing,index) in zhixings" class=" blacklist">
	                    <div class="msg_style">执行公开信息{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>执行法院</td>
	                        <td>{{zhixing.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>立案时间</td>
	                        <td>{{zhixing.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>案号</td>
	                        <td>{{zhixing.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行标的</td>
	                        <td>{{zhixing.money}}（元）</td>
	                      </tr>
	                      <tr>
	                        <td>执行状态</td>
	                        <td>{{zhixing.state}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--欠税名单-->
	                  <div v-if="qianshuis.length>0" v-for="(item,index) in qianshuis" class=" blacklist">
	                    <div class="msg_style">欠税名单{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>欠税发生时间</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>纳税人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>主管税务机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>欠税余额</td>
	                        <td>{{item.money}}（元）</td>
	                      </tr>
	                      <tr>
	                        <td>所欠税种</td>
	                        <td>{{item.taxtype}}</td>
	                      </tr>
	                      <tr>
	                        <td>欠税属期</td>
	                        <td>{{item.taxperiod}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--纳税非正常户-->
	                  <div v-if="feizhengs.length>0" v-for="(item,index) in feizhengs" class=" blacklist">
	                    <div class="msg_style">纳税非正常户{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>认定日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>纳税人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>纳税人识别号</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>主管税务机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--欠款欠费名单-->
	                  <div v-if="qiankuans.length" v-for="(item,index) in qiankuans" class=" blacklist">
	                    <div class="msg_style">欠款欠费名单{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>具体日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>欠款人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>身份</td>
	                        <td>{{item.pctype}}</td>
	                      </tr>
	                      <tr>
	                        <td>欠款原因</td>
	                        <td>{{item.casetopic}}</td>
	                      </tr>
	                      <tr>
	                        <td>拖欠金额</td>
	                        <td>{{item.money}}（元）</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--限制高消费名单-->
	                  <div v-if="xiangaos.length" v-for="(item,index) in xiangaos" class=" blacklist">
	                    <div class="msg_style">限制高消费名单{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>具体日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>被执行人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行法院</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行内容</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>日期类别</td>
	                        <td>{{item.timetype}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行状态</td>
	                        <td>{{item.state}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--限制出入境名单-->
	                  <div v-if="xianchus.length" v-for="(item,index) in xianchus" class=" blacklist">
	                    <div class="msg_style">限制出入境名单{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>具体日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>被限制人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行法院</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行内容</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>日期类别</td>
	                        <td>{{item.timetype}}</td>
	                      </tr>
	                      <tr>
	                        <td>执行状态</td>
	                        <td>{{item.state}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--民商事裁判文书-->
	                  <div v-if="caipans.length" v-for="(item,index) in caipans" class=" blacklist">
	                    <div class="msg_style">民商事裁判文书{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>结案时间</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>当事人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>诉讼地位</td>
	                        <td>{{item.pctype}}</td>
	                      </tr>
	                      <tr>
	                        <td>审理机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>文书类型</td>
	                        <td>{{item.writtype}}</td>
	                      </tr>
	                      <tr>
	                        <td>涉案事由</td>
	                        <td>{{item.casetopic}}</td>
	                      </tr>
	                      <tr>
	                        <td>涉案金额</td>
	                        <td>{{item.money}}（元）</td>
	                      </tr>
	                      <tr>
	                        <td>审理结果</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>审理程序</td>
	                        <td>{{item.vprogram}}</td>
	                      </tr>
	                      <tr>
	                        <td>审理人员</td>
	                        <td>{{item.tribunal}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                      <tr>
	                        <td>原告当事人</td>
	                        <td>{{item.plaintiff}}</td>
	                      </tr>
	                      <tr>
	                        <td>被告当事人</td>
	                        <td>{{item.defendant}}</td>
	                      </tr>
	                      <tr>
	                        <td>其他当事人</td>
	                        <td>{{item.otherparty}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--民商事审判流程-->
	                  <div v-if="shenpans.length" v-for="(item,index) in shenpans" class=" blacklist">
	                    <div class="msg_style">民商事审判流程{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>具体日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>当事人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>诉讼地位</td>
	                        <td>{{item.pctype}}</td>
	                      </tr>
	                      <tr>
	                        <td>审理机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>公告类型</td>
	                        <td>{{item.writtype}}</td>
	                      </tr>
	                      <tr>
	                        <td>涉案事由</td>
	                        <td>{{item.casetopic}}</td>
	                      </tr>
	                      <tr>
	                        <td>公告内容</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>日期类别</td>
	                        <td>{{item.timetype}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--犯罪及嫌疑人名单-->
	                  <div v-if="zuifans.length" v-for="(item,index) in zuifans" class=" blacklist">
	                    <div class="msg_style">犯罪及嫌疑人名单{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>处理时间</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>当事人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>执法机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>违法事由</td>
	                        <td>{{item.casetopic}}</td>
	                      </tr>
	                      <tr>
	                        <td>处理结果</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  	<!--行政违法记录-->
	                  <div v-if="weifas.length" v-for="(item,index) in weifas" class=" blacklist">
	                    <div class="msg_style">行政违法记录{{index+1}}</div>
	                    <table>
	                      <tr>
	                        <td>具体日期</td>
	                        <td>{{item.sslong}}</td>
	                      </tr>
	                      <tr>
	                        <td>当事人</td>
	                        <td>{{item.name}}</td>
	                      </tr>
	                      <tr>
	                        <td>证件号码</td>
	                        <td>{{item.id}}</td>
	                      </tr>
	                      <tr>
	                        <td>案号</td>
	                        <td>{{item.casenum}}</td>
	                      </tr>
	                      <tr>
	                        <td>执法机关</td>
	                        <td>{{item.court}}</td>
	                      </tr>
	                      <tr>
	                        <td>违法事由</td>
	                        <td>{{item.casetopic}}</td>
	                      </tr>
	                      <tr>
	                        <td>执法结果</td>
	                        <td>{{item.content}}</td>
	                      </tr>
	                      <tr>
	                        <td>日期类别</td>
	                        <td>{{item.timetype}}</td>
	                      </tr>
	                      <tr>
	                        <td>异议备注</td>
	                        <td>{{item.remark}}</td>
	                      </tr>
	                      <tr>
	                        <td>法院审理结果</td>
	                        <td>{{item.content2}}</td>
	                      </tr>
	                    </table>
	                  </div>
                  </div>

                  <div v-if="zstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                  
                </div>
              </div>


              <!-- 多头借贷 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>多头借贷</div>
                <div class="prostyle_main">
                  <div v-if="hstatus===1"  class=" blacklist">
                    <table style="padding-left:2%;">
                      <tr>
                        <td style="width:250px;vertical-align: top;">3个月内申请人在多个平台申请借款:</td>
                        <td>总个数{{headersloans.association_partner_count}}个
                        <span v-for="val in headersloans.association_partner_details">，{{val.count}}个 {{val.industryDisplayName}}</span></td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="hstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 风险反欺诈 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>风险反欺诈</div>
                <div class="prostyle_main">
                  <div v-if="rstatus===1"  class="authentication">
                    <table>
                      <tr>
                        <th>检查项</th>
                        <th>风险等级</th>
                        <th>备注</th>
                      </tr>
                      <tr v-for="risk_fraud in risk_frauds">
                        <td>{{risk_fraud.risk_name}}</td>
                        <td></td>
                        <td>
                          规则描述：{{risk_fraud.description}}</br>
                          匹配字段：{{risk_fraud.hit_type_displayname}}</br>
                          风险类型：{{risk_fraud.type}}</br>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="rstatus===2" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 个人担任法定代表人信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>个人担任法定代表人信息</div>
                <div class="prostyle_main">
                  <div v-if="legalPerson.length>=1" class="authentication">
                    <table>
                      <tr>
                      	<th width="40px">序号</th>
                        <th>机构名称</th>
                        <th>法定代表人</th>
                        <th>机构类型</th>
                        <th>注册资本</th>
                        <th>机构状态</th>
                        <th>成立时间</th>
                        <th>行业名称</th>
                        <th>省份</th>
                      </tr>
                      <tr v-for='(renzhi_now,index) in legalPerson'>
                        <td>{{index+1}}</td>
                        <td class="entSty" @click="queryEnt(renzhi_now.entName)">{{renzhi_now.entName}}</td>
                        <td>{{renzhi_now.name}}</td>
                        <td>{{renzhi_now.entType}}</td>
                        <td>{{renzhi_now.regCap}}万（{{renzhi_now.regCapCur}}）</td>
                        <td>{{renzhi_now.entStatus}}</td>
                        <td>{{renzhi_now.estabDate}}</td>
                        <td>{{renzhi_now.industryName}}</td>
                        <td>{{renzhi_now.regOrgProvince}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="legalPerson.length===0" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>
              <!-- 个人担任高管信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>个人担任高管信息</div>
                <div class="prostyle_main">
                  <div v-if="manager.length>=1" class="authentication">
                    <table>
                      <tr>
                      	<th width="40px">序号</th>
                        <th>机构名称</th>
                        <th>职务</th>
                        <th>机构类型</th>
                        <th>注册资本</th>
                        <th>机构状态</th>
                        <th>成立时间</th>
                        <th>行业名称</th>
                        <th>省份</th>
                      </tr>
                      <tr v-for='(renzhi_now,index) in manager'>
                        <td>{{index+1}}</td>
                        <td class="entSty" @click="queryEnt(renzhi_now.entName)">{{renzhi_now.entName}}</td>
                        <td>{{renzhi_now.position}}</td>
                        <td>{{renzhi_now.entType}}</td>
                        <td>{{renzhi_now.regCap}}万（{{renzhi_now.regCapCur}}）</td>
                        <td>{{renzhi_now.entStatus}}</td>
                        <td>{{renzhi_now.estabDate}}</td>
                        <td>{{renzhi_now.industryName}}</td>
                        <td>{{renzhi_now.regOrgProvince}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="manager.length===0" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>


              <!-- 个人股权投资信息 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>个人股权投资信息</div>
                <div class="prostyle_main">
                  <div  v-if="shareholder.length>=1"  class="authentication">
                    <table>
                      <tr>
                      	<th width="40px">序号</th>
                        <th>机构名称</th>
                        <th>机构类型</th>
                        <th>注册资本</th>
                        <th>机构状态</th>
                        <th>认缴出资额</th>
                        <th>出资方式</th>
                        <th>出资比例</th>
                        <th>成立时间</th>
                        <th>行业名称</th>
                        <th>省份</th>
                      </tr>
                      <tr v-for='(touzi_now,index) in shareholder'>
                        <td>{{index+1}}</td>
                        <td class="entSty" @click="queryEnt(touzi_now.entName)">{{touzi_now.entName}}</td>
                        <td>{{touzi_now.entType}}</td>
                        <td>{{touzi_now.regCap}}万（{{touzi_now.regCapCur}}）</td>
                        <td>{{touzi_now.entStatus}}</td>
                        <td>{{touzi_now.contriAmount}}万（{{touzi_now.currency}}）</td>
                        <td>{{touzi_now.contriForm}}</td>
                        <td>{{touzi_now.contriRatio}}</td>
                        <td>{{touzi_now.estabDate}}</td>
                        <td>{{touzi_now.industryName}}</td>
                        <td>{{touzi_now.regOrgProvince}}</td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="shareholder.length===0" class="datanull">
                    <span>查询成功，暂无数据</span>
                  </div>
                </div>
              </div>

              <!-- 辅助型授权数据 -->
              <div class="prostyle">
                <div class="prostyle_title"><span class="border_style"></span>辅助型授权数据</div>
                <div class="prostyle_main">
                  <div class="authentication">
                    <table>
                      <tr>
                        <th>类型</th>
                        <th>状态</th>
                        <th>操作</th>
                      </tr>
                      <tr v-if="reportStatus_1===2">
                        <td>公积金</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_1===1" @click="goFund" class="authorization">
                        <td>公积金</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_2===2">
                        <td>社保</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_2===1" @click="goSecurity" class="authorization">
                        <td>社保</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_3===2">
                        <td>车险</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_3===1" @click="goCarinsurance" class="authorization">
                        <td>车险</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_4===2">
                        <td>淘宝</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_4===1" @click="goTaobao" class="authorization">
                        <td>淘宝</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_5===2">
                        <td>运营商</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_5===1" @click="goCarrier" class="authorization">
                        <td>运营商</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                      <tr v-if="reportStatus_6===2">
                        <td>学历</td>
                        <td>暂未授权</td>
                        <td>暂无数据</td>
                      </tr>
                      <tr v-if="reportStatus_6===1" @click="goChsi" class="authorization">
                        <td>学历</td>
                        <td>已授权</td>
                        <td>查看详情</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>

              <div class="prostyle_bottom">
                <div class="button_bottom">
                  <a :href="urlReport" class="report_out">导出报告</a>
                </div>
                
              </div>
            


          </el-main> 
            <!--<div class="prostyle_bottom">
                <div class="button_bottom">
                  <el-button @click="getPDf()">导出报告1</el-button>
                </div>
             </div>-->
      </el-container>
	    <el-dialog class="queryDialog"
	    	:center="true"
			:show-close="false"
			:visible.sync="dialogVisible"
			top="20%"
			width="30%">
			<div class="dialogRe">确定查询该企业的信用信息吗？</div>
			<span id="" slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible=false">取  消</el-button>
				<el-button type="primary" @click="entReport">确  定</el-button>
			</span>
			
		</el-dialog>
     
    </div>
</template>

<script>
    import bus from '../common/bus'
    import VDialog from '../common/Dialog.vue'
    var num=0;
    export default {
        data() {
            return { 
            	htmlTitle:'袁杰',
                totalMessage:'',
                loading:true,
				reportNum:'',
                total_msg:'',
                currentime:'',
                reportTime:'',
                score:0,
                creditScore: 'qqq',
                incomeScore: '',
                // 基础信息
                total_msg:'',
                // 归属地解析
                belongtos:'',
                // 任职信息 投资信息
                legalPerson:[],
	            manager:[],
	            shareholder:[],
                tstatus:1,
                // 失信执行人
                shixins:'',
                sstatus:1,
                //个人司法信息
	            zhixings:[],
				xiangaos:[],
				xianchus:[],
				caipans:[],
				qianshuis:[],
				feizhengs:[],
				weifas:[],
				zuifans:[],
				qiankuans:[],
				shenpans:[],
				
                zstatus:1,
                //多头借贷
                headersloans:'',
                hstatus:1,
                //风险反欺诈
                risk_frauds:'',
                rstatus:1,

                reportStatus_1:'',
                reportStatus_2:'',
                reportStatus_3:'',
                reportStatus_4:'',
                reportStatus_5:'',
                reportStatus_6:'',
                // 导出报告
                urlReport:'',

                //身份验证
                sensetime_twofactor:'',
                acedata_userValidation:'',

                num:1,
                max:10,
                dialogVisible:false,
            }
        },
        components:{
        	VDialog
        },
        methods:{
          goFund(){
            this.$router.push('/gongjijin');
          },
          goSecurity(){
            this.$router.push('/societysecurity');
          },
          goCarinsurance(){
            this.$router.push('/carinsurance');
          },
          goTaobao(){
            this.$router.push('/onlineshopping');
          },
          goCarrier(){
            this.$router.push('/yunyingshang');
          },
          goChsi(){
            this.$router.push('/xueli');
          },
          // 导出报告
          reportOut(){
            this.urlReport=this.HOST+"/api/v2/download?account_name="+localStorage.getItem('name')+"&id_number="+localStorage.getItem('cardId')+"&account_mobile="+localStorage.getItem('phone');
          },
          // 魔蝎报告接口
          moxieReport(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get(this.HOST+'/api/v1/moxieReportNum',{
              params:{
                account_name:localStorage.getItem('name'),
                id_number:localStorage.getItem('cardId'),
                account_mobile:localStorage.getItem('phone'),
              }
            })
            .then(res=>{
              // console.log(res.data);
              if(res.data==='登录超时'){
                    this.$message('登录超时，请重新登录');
                    this.$router.push('/login');
              }else if(res.data===''||res.data===null||res.data==='{}'){
                this.$message('暂无信息');
              }else{
                // console.log(res.data);
                //公积金
                if(res.data.mx_fund==0){
                  this.reportStatus_1=2;
                }else{
                  this.reportStatus_1=1;
                }
                //车险
                if(res.data.mx_insurance==0){
                  this.reportStatus_2=2;
                }else{
                  this.reportStatus_2=1;
                }
                //社保
                if(res.data.mx_security==0){
                  this.reportStatus_3=2;
                }else{
                  this.reportStatus_3=1;
                }
                //淘宝
                if(res.data.mx_taobao==0){
                  this.reportStatus_4=2;
                }else{
                  this.reportStatus_4=1;
                }
                //运营商
                if(res.data.mx_carrier==0){
                  this.reportStatus_5=2;
                }else{
                  this.reportStatus_5=1;
                }
                //学信
                if(res.data.mx_chsi==0){
                  this.reportStatus_6=2;
                }else{
                  this.reportStatus_6=1;
                }
              }
            })
            .catch(error=>{
              alert('暂无服务');
            })
          },
          // 征信报告信息
          creditReportMessage(queryMode,res_data){
          	//报告编号 报告时间
          	this.reportNum=res_data.reportId;
          	this.reportTime=res_data.reportTime;
            // 获取身份验证
            this.sensetime_twofactor=res_data.sensetime_twofactor;
            this.acedata_userValidation=res_data.acedata_userValidation;
            //基础信息
            this.total_msg=res_data.basicInfo;
            // 归属地数据
            const belongto={};
            if(typeof(res_data.tongdun)==='undefined' || res_data.tongdun==''){
                belongto.id_card_address='查询成功，暂无数据。';
                belongto.phone_attribution='查询成功，暂无数据。';

            }else{
                belongto.id_card_address=res_data.tongdun.result_desc.INFOANALYSIS.address_detect.id_card_address;
                belongto.phone_attribution=res_data.tongdun.result_desc.INFOANALYSIS.address_detect.mobile_address;
            }
            this.belongtos=belongto;
            // 失信执行人  个人司法信息
            const shixinp={};
            if(typeof(res_data.judicial)==='undefined' || res_data.judicial.message=='请提供正确身份证！[异常输入]'
            || res_data.judicial.message=='此人无相关风险数据！' || res_data.judicial.success=="e" || res_data.judicial==''){
              shixinp.blacklist='';
              shixinp.zhixing=[];
			  shixinp.xiangaos=[];
			  shixinp.xianchus=[];
			  shixinp.caipans=[];
			  shixinp.qianshuis=[];
		      shixinp.feizhengs=[];
			  shixinp.weifas=[];
			  shixinp.zuifans=[];
			  shixinp.qiankuans=[];
			  shixinp.shenpans=[];
            }else{
              shixinp.blacklist=res_data.judicial.fxcontent.shixin;
              
              shixinp.zhixing=res_data.judicial.fxcontent.zhixing;
			  shixinp.xiangaos=res_data.judicial.fxcontent.xiangao;
			  shixinp.xianchus=res_data.judicial.fxcontent.xianchu;
			  shixinp.caipans=res_data.judicial.fxcontent.caipan;
			  shixinp.qianshuis=res_data.judicial.fxcontent.qianshui;
		      shixinp.feizhengs=res_data.judicial.fxcontent.feizheng;
			  shixinp.weifas=res_data.judicial.fxcontent.weifa;
			  shixinp.zuifans=res_data.judicial.fxcontent.zuifan;
			  shixinp.qiankuans=res_data.judicial.fxcontent.qiankuan;
			  shixinp.shenpans=res_data.judicial.fxcontent.shenpan;
            }
	          this.shixins=shixinp.blacklist;
	          this.zhixings=shixinp.zhixing;
		      this.xiangaos=shixinp.xiangaos;
			  this.xianchus=shixinp.xianchus;
			  this.caipans=shixinp.caipans;
			  this.qianshuis=shixinp.qianshuis;
			  this.feizhengs=shixinp.feizhengs;
			  this.weifas=shixinp.weifas;
			  this.zuifans=shixinp.zuifans;
			  this.qiankuans=shixinp.qiankuans;
			  this.shenpans=shixinp.shenpans;
            if(Object.keys(this.shixins).length>0){
              this.sstatus=1;
            }else{
              this.sstatus=2;
            };
            if(Object.keys(this.zhixings).length>0 || Object.keys(this.xiangaos).length>0 || Object.keys(this.xianchus).length>0 
            || Object.keys(this.caipans).length>0 || Object.keys(this.qianshuis).length>0 || Object.keys(this.feizhengs).length>0 
            || Object.keys(this.weifas).length>0 || Object.keys(this.zuifans).length>0 || Object.keys(this.qiankuans).length>0 
            || Object.keys(this.shenpans).length>0){
              this.zstatus=1;
            }else{
              this.zstatus=2;
            };
            //多头借贷
            const headersloan={};
            if(typeof(res_data.tongdun)==='undefined' || res_data.tongdun==''){

            }else{
                  let loan=res_data.tongdun.result_desc.ANTIFRAUD.risk_items;
                  //console.log(loan)
                  for(let i=0;i<loan.length;i++){
                      if(loan[i].risk_name.indexOf('3个月内申请人在多个平台申请借款')>'-1'){
                        headersloan.association_partner_count=loan[i].risk_detail.association_partner_count;
                        headersloan.association_partner_details=loan[i].risk_detail.association_partner_details;
                      }
                  }
            }
            this.headersloans=headersloan;
            // console.log(headersloan)
            if(Object.keys(this.headersloans).length>0){
              this.hstatus=1;
            }else{
              this.hstatus=2;
            }
            
            //风险反欺诈
            const risk_fraud=[];
            if(typeof(res_data.tongdun)==='undefined' || res_data.tongdun==''){

            }else{
                const risk_items_t=res_data.tongdun.result_desc.ANTIFRAUD.risk_items;
                //console.log(risk_items_t.length)
                let risk_items_d=[];
                for (let i=0;i<risk_items_t.length;i++){
                  let obj_l={};
                  if(typeof(risk_items_t[i].risk_detail)!=='undefined'){
                    if(typeof(risk_items_t[i].risk_detail.description)!=='undefined' && typeof(risk_items_t[i].risk_detail.hit_type_displayname)!=='undefined' && typeof(risk_items_t[i].risk_detail.black_list_details)!=='undefined'){
                      obj_l.risk_name=risk_items_t[i].risk_name;
                      if(typeof(risk_items_t[i].risk_detail.description)==='undefined'){
                        obj_l.description='暂无信息';
                      }else{
                        obj_l.description=risk_items_t[i].risk_detail.description;
                      }
                      if(typeof(risk_items_t[i].risk_detail.hit_type_displayname)==='undefined'){
                        obj_l.hit_type_displayname='暂无信息';
                      }else{
                        obj_l.hit_type_displayname=risk_items_t[i].risk_detail.hit_type_displayname;
                      }
                      if(typeof(risk_items_t[i].risk_detail.black_list_details)==='undefined'){
                        obj_l.type='暂无信息';
                      }else{
                        obj_l.type=risk_items_t[i].risk_detail.black_list_details[0].fraudTypeDisplayName;
                      }
                      
                    }
                  }
                  risk_items_d.push(obj_l);
                }
                for(let i=0;i<risk_items_d.length;i++){
                    if(Object.keys(risk_items_d[i]).length>0){
                      risk_fraud.push(risk_items_d[i])
                    }
                }
            }
            this.risk_frauds=risk_fraud;
            if(Object.keys(this.risk_frauds).length>0){
              this.rstatus=1;
            }else{
              this.rstatus=2;
            }
            // 任职信息  投资信息
            const gscontent={};
            // console.log(res_data)
            if(typeof(res_data.investment)==='undefined' || res_data.investment.message=='请提供正确身份证！[异常输入]' || res_data.investment.message=='没有获取有效数据'
            || res_data.investment.message=='此人无相关工商数据！' || res_data.investment.success==false || res_data.investment.data=='本数据库中未查得'){
                gscontent.legalPerson=[];
                gscontent.manager=[];
                gscontent.shareholder=[];
            }else{
                gscontent.legalPerson=res_data.investment.data.result.legalPerson;
                gscontent.manager=res_data.investment.data.result.manager;
                gscontent.shareholder=res_data.investment.data.result.shareholder;
            }
            this.legalPerson=gscontent.legalPerson;
            this.manager=gscontent.manager;
            this.shareholder=gscontent.shareholder;
//          if(Object.keys(this.renzhi_nows).length>0){
//            this.tstatus=1;
//          }else{
//            this.tstatus=2;
//          }
          	//风险评分
          	let creditScore1=res_data.reportScore.creditScore;
          	if(queryMode=='local'){
          		this.loading=false;
          		if(creditScore1=='' || creditScore1==null || creditScore1/1<0){
          			this.creditScore='暂无数据';
          		}else{
          			this.creditScore=creditScore1;
          		}
          	}
          	if(queryMode=='tPart'){
          		this.riskScore(res_data.reportId);
          	}
          	if(res_data.reportScore.incomeScore==''){
          		this.incomeScore='暂无数据'
          	}else{
	            this.incomeScore=res_data.reportScore.incomeScore;	
          	}
            
          },
          //风险评分
          riskScore(res){
          	let self=this;
          	self.loading=true;
          	let num1=0;
          	let timer=setInterval(function(){
          		self.$axios.defaults.withCredentials=true;
                self.$axios.get(self.HOST3+'/api/v1/reportScore',{
                	params:{
	                    reportId:res,
                	}
                })
          		.then(res=>{
		          	num1++;
		      		if(num1>2){
		      			const msgData=localStorage.getItem('msgData');
                        self.totalMessage=JSON.parse(msgData);
                        self.totalMessage.reportScore.creditScore=res.data.data;
                        localStorage.setItem('msgData',JSON.stringify(self.totalMessage));
                        console.log(res.data)
                        console.log(res.data.data)
                        console.log(typeof(res.data.data/1))
		          		if(res.data.data==='' || res.data.data===null){
		          			self.creditScore='暂无数据';
		          		}else if(res.data.data===-1){
		          			self.creditScore='加载失败';
		          		}else{
		          			self.creditScore=res.data.data;
		          		}
		      			clearInterval(timer);
		      			self.loading=false;
		      		}
          		})
          	},500)
          },
         //跳转企业报告
         queryEnt(res){
         	this.dialogVisible=true;
         	this.entName=res;
         },
         entReport(){
         	this.dialogVisible=false;
         	let routeTurn=this.$router.resolve({
         		path:'entReport',
         		query:{entName:this.entName}
         	})
         	window.open(routeTurn.href,'_blanks')
         },

        },
        computed: {
          
			
        },
        watch:{
          
        },
        mounted(){
          // 导出报告
          this.reportOut();
           // 查询时间
//        let datetime=new Date();
//        let y=datetime.getFullYear();
//        let m=datetime.getMonth()+1;
//        m=m<10?('0'+m):m;
//        let d=datetime.getDate();
//        d=d<10?('0'+d):d;
//        let currentime1=y+'年'+m+'月'+d+'日';
//        // 获取当前时间
//        this.currentime = currentime1;

          const msgData=localStorage.getItem('msgData');
          this.totalMessage=JSON.parse(msgData);
          this.creditReportMessage('local',this.totalMessage);
        },
        created(){
            bus.$on('cMessage',msg=>{
//               console.log(msg)
              this.totalMessage=msg;
//            let msgData=JSON.stringify(msg);
//            localStorage.setItem("msgData",msgData);
              this.creditReportMessage(msg.queryWay,msg);
              // 更新 报告url
              this.urlReport=this.HOST+"/api/v2/download?account_name="+localStorage.getItem('name')+"&id_number="+localStorage.getItem('cardId')+"&account_mobile="+localStorage.getItem('phone');

            });
            bus.$on('moxieReport',msg=>{
            	if(msg==1){
	              //魔蝎报告接口
	              this.moxieReport();
            	}else{
	                //公积金
	                  this.reportStatus_1=2;
	                //车险
	                  this.reportStatus_2=2;
	                //社保
	                  this.reportStatus_3=2;
	                //淘宝
	                  this.reportStatus_4=2;
	                //运营商
	                  this.reportStatus_5=2;
	                //学信
	                  this.reportStatus_6=2;
	            }
            })
            //魔蝎报告接口 (不能删 在 由首页进入查询摩尔征信魔蝎接口)
            this.moxieReport();
        },
    }

</script>

<style scoped>
  .queryResult{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  .el-container{
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
  .el-header{
    height: 100px;
    margin-bottom: 20px;
    text-align: center;
    padding-top:20px;
    font-size: 28px;
    color: #30af90;
    font-weight: 600;
    letter-spacing: 5px;

  }
  .el-main{
    padding: 0;
    box-sizing:border-box;
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
    padding: 10px;
    font-size: 14px;
    /*overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;*/
    height: 30px;
    line-height: 30px;
    font-family: '微软雅黑';
    color:#666;
  }
  .basic_info table tr,.basic_info table td{
    height: 10px;
    line-height: 10px;
    padding:8px;
  }
  .basic_info table tr td:nth-child(odd){
    text-align: right;
    width: 180px;
    padding-right: 20px;
  }
  .prostyle{
    width: 100%;
    height: auto;
    padding:10px 20px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 20px;
    position: relative;
  }
  .prostyle_title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    border-bottom: 1px solid #ccc;
  }
  .prostyle_title .border_style{
    padding:0 0 0 25px;
    margin-right: 10px;
    border-right: 8px solid #30af90;
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
    /*color: #20a0ff;*/
    color: #e5e9f2;
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
  .p_content{
    width: 50%;
    height: auto;
    box-sizing: border-box;
    padding-left: 10%;

  }
  .p_content table{
    width: 60%;
  }

  .p_content table tr td,.personal_info table tr td{
    height:50px;
    line-height: 50px; 
    padding:0;
    font-size:16px;
    color:#666;
    font-family: '微软雅黑';
  }
  .p_content table tr td:nth-child(odd){
    width: 70px;
  }
  /*.p_content table tr td:nth-child(even){
    color:#f3b122;
  }*/
  .guishudi{
    width: 100%;
  }
  .guishudi table{
    width: 80%;
  }
  .guishudi table tr td:nth-child(odd){
    width:200px;
  }
  .authentication{
    width: 100%;
  }
  .authentication table tr td {
    text-align: center;
  }
  /*.authentication table tr:nth-child(1) {
    background: #f0f0f0;
  }*/
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
  /*.el-button{
    background:#30af90;
    height: 45px;
    text-align: center;
    width: 200px;
    border-radius:4px; 
    color: #fff;
    font-size: 16px;
    
    
    margin:0 auto;
    position: relative;
  }*/
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
  .msg_style{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f0f0f0;
    font-weight: bold;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .datanull{
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .authorization td:nth-child(3){
    color: #30af90;
    cursor: pointer;
  }
  .entSty{
  	cursor: pointer;
  	color: #0000FF;
  }
  .dialogRe{
  	text-align: center;
  	letter-spacing: 5px;
  	font-size: 16px;
  	height: 20px;
  	line-height: 20px;
  	font-weight: bold;
  }
  .queryDialog .el-button+.el-button {
    margin-left: 100px;
  }
  .queryDialog .el-button{
  	width: 100px;
  }
</style>
  