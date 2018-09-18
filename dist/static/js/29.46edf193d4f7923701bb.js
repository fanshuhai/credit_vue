webpackJsonp([29],{Ckdt:function(_,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{userinfo:"",usercheck:"",fundinfo:"",repayinfo:"",paymentinfo:"",cstatus:"",fundMobile:""}},methods:{goBack:function(){this.$router.go(-1)}},computed:{},mounted:function(){var _=localStorage.getItem("msgData"),t=JSON.parse(_);if(void 0!==t.mx_fund){var v=t.mx_fund[0].user_basic_info,e=t.mx_fund[0].user_basic_info_check,n=t.mx_fund[0].fund_basic_info,a=t.mx_fund[0].repay_info,i=t.mx_fund[0].payment_info;this.userinfo=v,"null"==v.mobile?this.fundMobile="公积金未提供该数据":this.fundMobile=v.mobile,this.usercheck=e,this.fundinfo=n,this.repayinfo=a,this.paymentinfo=i,this.cstatus=1}else this.cstatus=2}},n={render:function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticStyle:{padding:"0 0 20px 0",background:"#fff"}},[v("div",{staticClass:"box"},[1===_.cstatus?v("div",{staticClass:"tabbable",attrs:{name:"TABLE",id:"content"}},[_._m(0),_._v(" "),v("div",{staticClass:"tab-content"},[_._m(1),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("1.1 用户基本信息")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tbody",[v("tr",[v("td",[_._v("姓名：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.real_name))]),_._v(" "),v("td",[_._v("证件号码：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.certificate_number))]),_._v(" "),v("td",[_._v("证件类型：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.certificate_type))])]),_._v(" "),v("tr",[v("td",[_._v("性别：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.gender))]),_._v(" "),v("td",[_._v("年龄：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.age))]),_._v(" "),v("td",[_._v("出生地区：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.native_place))])]),_._v(" "),v("tr",[v("td",[_._v("邮箱：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.email))]),_._v(" "),v("td",[_._v("家庭地址：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.home_address))]),_._v(" "),v("td",[_._v("手机号码：")]),_._v(" "),v("td",[_._v(_._s(_.fundMobile))])]),_._v(" "),v("tr",[v("td",[_._v("公积金地区：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.description))]),_._v(" "),v("td",[_._v("单位名称：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.corporation_name))]),_._v(" "),v("td",[_._v("单位类型：")]),_._v(" "),v("td",[_._v(_._s(_.userinfo.compay_type))])])])])])]),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("1.2 用户基本信息校验")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tbody",[_._m(2),_._v(" "),v("tr",[v("td",[_._v("身份证号码是否有效")]),_._v(" "),v("td",[_._v(_._s(_.usercheck.certificate_number_check))])]),_._v(" "),v("tr",[v("td",[_._v("家庭地址与公积金地区是否匹配")]),_._v(" "),v("td",[_._v(_._s(_.usercheck.description_is_match_home_address))])]),_._v(" "),v("tr",[v("td",[_._v("出生地区与公积金地区是否匹配")]),_._v(" "),v("td",[_._v(_._s(_.usercheck.native_place_is_match_description))])]),_._v(" "),v("tr",[v("td",[_._v("家庭地址与出生地区是否匹配")]),_._v(" "),v("td",[_._v(_._s(_.usercheck.home_address_is_match_native_place))])])])])])]),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("1.3 账号基本信息")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tbody",[v("tr",[v("td",[_._v("账号余额（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.balance))]),_._v(" "),v("td",[_._v("公积金存缴状态：")]),_._v(" "),v("td",[_._v(" "+_._s(_.fundinfo.pay_status))]),_._v(" "),v("td",[_._v("开户日期：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.begin_date))])]),_._v(" "),v("tr",[v("td",[_._v("月缴金额（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.monthly_total_income))]),_._v(" "),v("td",[_._v("单位月缴金额（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.monthly_corporation_income))]),_._v(" "),v("td",[_._v("个人月缴金额（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.monthly_customer_income))])]),_._v(" "),v("tr",[v("td",[_._v("基数（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.base_number))]),_._v(" "),v("td",[_._v("单位月缴比例：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.corporation_ratio))]),_._v(" "),v("td",[_._v("个人月缴比例：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.customer_ratio))])]),_._v(" "),v("tr",[v("td",[_._v("最后缴费日期：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.last_pay_date))]),_._v(" "),v("td",[_._v("最早缴费日期：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.earlyest_time))]),_._v(" "),v("td",[_._v("近24个月内公积金缴费公司数：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.corporation_name_num))])]),_._v(" "),v("tr",[v("td",[_._v("贷款金额（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.loan_amount))]),_._v(" "),v("td",[_._v("贷款年限：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.loan_periods))]),_._v(" "),v("td",[_._v("剩余贷款（元）：")]),_._v(" "),v("td",[_._v(_._s(_.fundinfo.loan_remain_amount))])])])])])]),_._v(" "),_._m(3),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("2.1 月缴纳信息")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[_._m(4),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("缴存金额（元）")]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.income_6))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.income_12))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.income_24))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.income_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("未缴月数")]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.un_month_6))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.un_month_12))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.un_month_24))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.un_month_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("取出金额（元）")]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_6))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_12))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_24))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("取出笔数")]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_num_6))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_num_12))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_num_24))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.outcome_num_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("最大连续缴存月数")]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.max_month_6))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.max_month_12))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.max_month_24))]),_._v(" "),v("td",[_._v(_._s(_.paymentinfo.max_month_avg_24))])])])])])]),_._v(" "),_._m(5),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("3.1 月还款信息")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[_._m(6),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("还款月数")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_month_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_month_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_month_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_month_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("最大连续还款月数")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_continues_month_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_continues_month_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_continues_month_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_continues_month_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("逾期还款合同数占比(%)")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.delay_repay_ratio_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.delay_repay_ratio_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.delay_repay_ratio_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.delay_repay_ratio_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("还款合同数")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_num_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_num_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_num_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_num_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("还款金额（元）")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_amount_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_amount_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_amount_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_amount_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("还款本金（元）")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_capital_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_capital_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_capital_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_capital_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("还款利息（元）")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_interest_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_interest_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_interest_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_interest_avg_24))])]),_._v(" "),v("tr",[v("td",[_._v("还款罚息（元）")]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_penalty_6))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_penalty_12))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_penalty_24))]),_._v(" "),v("td",[_._v(_._s(_.repayinfo.repay_penalty_avg_24))])])])])])])])]):_._e(),_._v(" "),2===_.cstatus?v("div",{staticClass:"nomseg"},[v("span",[_._v("查询成功，暂无数据")])]):_._e()])])},staticRenderFns:[function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px","font-size":"25px","text-align":"center"}},[this._v("\n                  公积金报告\n              ")]),this._v(" "),t("div",{staticStyle:{"text-align":"right","font-size":"10px"}},[this._v("\n                  报告编号：无\n              ")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                      1. 基本信息\n                  ")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("tr",[t("th",{staticStyle:{width:"50%"}},[this._v("检查项")]),this._v(" "),t("th",[this._v("结果")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                      2. 缴费信息\n                  ")])])},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("thead",[v("tr",[v("th",[_._v("魔蝎变量")]),_._v(" "),v("th",[_._v("近6月")]),_._v(" "),v("th",[_._v("近12月")]),_._v(" "),v("th",[_._v("近24月")]),_._v(" "),v("th",[_._v("近24月均")])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                      3. 还款信息\n                  ")])])},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("thead",[v("tr",[v("th",[_._v("魔蝎变量")]),_._v(" "),v("th",[_._v("近6月")]),_._v(" "),v("th",[_._v("近12月")]),_._v(" "),v("th",[_._v("近24月")]),_._v(" "),v("th",[_._v("近24月均")])])])}]};var a=v("VU/8")(e,n,!1,function(_){v("RjVM")},"data-v-5a5d82e6",null);t.default=a.exports},RjVM:function(_,t){}});