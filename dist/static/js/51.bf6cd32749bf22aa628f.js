webpackJsonp([51],{"3e+X":function(t,_,s){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var e={data:function(){return{userAndAccountBasicInfo:"",totalssets:"",fundamentalPointAnalysis:"",commonlyUsedAddress:"",recepiptDetails:"",totalConsumption:"",receivingConsumption:"",specialConsumption:"",cstatus:""}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){},computed:{},mounted:function(){var t=localStorage.getItem("msgData"),_=JSON.parse(t),s={};void 0!==_.mx_taobao?(s.basicInfo=_.mx_taobao[0].basic_info,s.wealthInfo=_.mx_taobao[0].wealth_info,s.addressAnalysis=_.mx_taobao[0].address_analysis,s.consumptionAnalysis=_.mx_taobao[0].consumption_analysis,s.userAndAccountBasicInfo=_.mx_taobao[0].basic_info.user_and_account_basic_info,this.userAndAccountBasicInfo=s.userAndAccountBasicInfo,s.totalssets=_.mx_taobao[0].wealth_info.totalssets,this.totalssets=s.totalssets,s.fundamentalPointAnalysis=_.mx_taobao[0].address_analysis.fundamental_point_analysis,this.fundamentalPointAnalysis=s.fundamentalPointAnalysis,s.commonlyUsedAddress=_.mx_taobao[0].address_analysis.commonly_used_address,this.commonlyUsedAddress=s.commonlyUsedAddress,s.recepiptDetails=_.mx_taobao[0].address_analysis.receipt_details,this.recepiptDetails=s.recepiptDetails,s.totalConsumption=_.mx_taobao[0].consumption_analysis.total_consumption,this.totalConsumption=s.totalConsumption,s.receivingConsumption=_.mx_taobao[0].consumption_analysis.receiving_consumption,this.receivingConsumption=s.receivingConsumption,s.specialConsumption=_.mx_taobao[0].consumption_analysis.special_consumption,this.specialConsumption=s.specialConsumption,this.cstatus=1):this.cstatus=2}},d={render:function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("div",{staticStyle:{padding:"0 0 20px 0",background:"#fff"}},[1===t.cstatus?s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("1.1 用户及账号基本信息")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[s("tr",[s("td",[t._v("姓名：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.taobao_name))]),t._v(" "),s("td",[t._v("邮箱：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.taobao_email))])]),t._v(" "),s("tr",[s("td",[t._v("电话号码：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.taobao_phone_number))]),t._v(" "),s("td",[t._v("关联支付宝账号：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.alipay_account))])]),t._v(" "),s("tr",[s("td",[t._v("vip等级：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.taobao_vip_level))]),t._v(" "),s("td",[t._v("vip值：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.taobao_vip_count))])]),t._v(" "),s("tr",[s("td",[t._v("天猫等级：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.tmall_level))]),t._v(" "),s("td",[t._v("天猫vip值：")]),t._v(" "),s("td",[t._v(t._s(t.userAndAccountBasicInfo.tmall_vip_count))])]),t._v(" "),s("tr",[s("td",[t._v("天猫信誉：")]),t._v(" "),s("td",{attrs:{colspan:"3"}},[t._v(t._s(t.userAndAccountBasicInfo.tmall_apass))])])])])]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("2.1 总资产")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[t._m(3),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("账户余额（元）")]),t._v(" "),s("td",[t._v(t._s(t.totalssets.balance))])]),t._v(" "),s("tr",[s("td",[t._v("余额宝余额（元）")]),t._v(" "),s("td",[t._v(t._s(t.totalssets.yue_e_bao_amt))])]),t._v(" "),s("tr",[s("td",[t._v("历史累计收益(元)")]),t._v(" "),s("td",[t._v(t._s(t.totalssets.total_profit))])]),t._v(" "),s("tr",[s("td",[t._v("花呗授信额度（元）")]),t._v(" "),s("td",[t._v(t._s(t.totalssets.huai_bei_limit))])]),t._v(" "),s("tr",[s("td",[t._v("花呗可授信额度（元）")]),t._v(" "),s("td",[t._v(t._s(t.totalssets.huai_bei_can_use_limit))])])])])])]),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("3.1 基本地点分析")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[t._m(5),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("本人收货地址变化情况")]),t._v(" "),s("td",[t._v(t._s(t.fundamentalPointAnalysis.self_address_change))]),t._v(" "),s("td",[t._v("使用["+t._s(t.fundamentalPointAnalysis.self_address_cnt)+"]个地址，平均每个地址使用["+t._s(t.fundamentalPointAnalysis.avg_self_address_cnt)+"]次")])]),t._v(" "),s("tr",[s("td",[t._v("本人收货城市变化情况")]),t._v(" "),s("td",[t._v(t._s(t.fundamentalPointAnalysis.self_city_change))]),t._v(" "),s("td",[t._v("地址分布在["+t._s(t.fundamentalPointAnalysis.self_city_cnt)+"]个城市，平均每个城市使用["+t._s(t.fundamentalPointAnalysis.avg_self_city_cnt)+"]次")])]),t._v(" "),s("tr",[s("td",[t._v("非本人收货地址变化情况")]),t._v(" "),s("td",[t._v(t._s(t.fundamentalPointAnalysis.nonself_address_change))]),t._v(" "),s("td",[t._v("使用["+t._s(t.fundamentalPointAnalysis.nonself_address_cnt)+"]个地址，平均每个地址使用["+t._s(t.fundamentalPointAnalysis.avg_nonself_address_cnt)+"]次")])])])])])]),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("3.2 常用地址（收货次数top3）")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[t._m(6),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("收货地址")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address.top3))])]),t._v(" "),s("tr",[s("td",[t._v("收货城市")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_city.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_city.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_city.top3))])]),t._v(" "),s("tr",[s("td",[t._v("地址类型")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address_type.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address_type.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_address_type.top3))])]),t._v(" "),s("tr",[s("td",[t._v("持续使用月数")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.use_month.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.use_month.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.use_month.top3))])]),t._v(" "),s("tr",[s("td",[t._v("最后送货时间距今天数")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_past_cur.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_past_cur.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_past_cur.top3))])]),t._v(" "),s("tr",[s("td",[t._v("首次送货时间")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.first_deliver_time.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.first_deliver_time.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.first_deliver_time.top3))])]),t._v(" "),s("tr",[s("td",[t._v("最后送货时间")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_time.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_time.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.last_deliver_time.top3))])]),t._v(" "),s("tr",[s("td",[t._v("收货人姓名")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_name.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_name.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_name.top3))])]),t._v(" "),s("tr",[s("td",[t._v("收货人号码")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_phone.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_phone.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_phone.top3))])]),t._v(" "),s("tr",[s("td",[t._v("送货总金额（元）")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_amt.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_amt.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_amt.top3))])]),t._v(" "),s("tr",[s("td",[t._v("送货总次数")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_cnt.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_cnt.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.deliver_cnt.top3))])]),t._v(" "),s("tr",[s("td",[t._v("收货总金额（元）")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_amt.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_amt.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_amt.top3))])]),t._v(" "),s("tr",[s("td",[t._v("收货总次数")]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_cnt.top1))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_cnt.top2))]),t._v(" "),s("td",[t._v(t._s(t.commonlyUsedAddress.receiving_cnt.top3))])])])])])]),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("3.3 收件详细信息")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[t._m(7),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("最多收件人姓名")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_name_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_name_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件人电话")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_phone_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_phone_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件人联系地址")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_address_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_address_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件城市")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_city_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_city_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件人是否是默认联系人")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.is_default_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.is_default_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件人收件数")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_cnt_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_cnt_6))])]),t._v(" "),s("tr",[s("td",[t._v("默认收件人收件数")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.default_deliver_cnt_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.default_deliver_cnt_6))])]),t._v(" "),s("tr",[s("td",[t._v("最多收件城市收件数")]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_city_cnt_3))]),t._v(" "),s("td",[t._v(t._s(t.recepiptDetails.max_deliver_city_cnt_6))])])])])])]),t._v(" "),s("h3",{staticStyle:{"padding-left":"0px"}},[t._v("\n              4.消费分析\n          ")]),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("4.1 消费分析")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[s("thead",[s("tr",[s("th",[t._v("月份")]),t._v(" "),t._l(t.totalConsumption.total_consum_amt,function(_,e,d){return s("th",[t._v(t._s(e))])})],2)]),t._v(" "),s("tr",[s("td",[t._v("消费金额（元）")]),t._v(" "),t._l(t.totalConsumption.total_consum_amt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("消费次数")]),t._v(" "),t._l(t.totalConsumption.total_consum_times,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("消费类别")]),t._v(" "),t._l(t.totalConsumption.total_category_cnt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2)])])]),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("4.2 本人收货的消费")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[s("thead",[s("tr",[s("th",[t._v("月份")]),t._v(" "),t._l(t.receivingConsumption.self_consum_amt,function(_,e,d){return s("th",[t._v(t._s(e))])})],2)]),t._v(" "),s("tr",[s("td",[t._v("消费金额（元）")]),t._v(" "),t._l(t.receivingConsumption.self_consum_amt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("消费次数")]),t._v(" "),t._l(t.receivingConsumption.self_consum_times,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("消费类别")]),t._v(" "),t._l(t.receivingConsumption.self_category_cnt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2)])])]),t._v(" "),s("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[s("h5",{staticClass:"h5"},[t._v("4.3 特殊品消费")]),t._v(" "),s("div",{staticClass:"tabbox"},[s("table",[s("thead",[s("tr",[s("th",[t._v("月份")]),t._v(" "),t._l(t.specialConsumption.virtual_goods_amt,function(_,e,d){return s("th",[t._v(t._s(e))])})],2)]),t._v(" "),s("tr",[s("td",[t._v("虚拟物品消费金额（元）")]),t._v(" "),t._l(t.specialConsumption.virtual_goods_amt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("虚拟物品消费金额占比（%）")]),t._v(" "),t._l(t.specialConsumption.virtual_goods_rate,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("虚拟物品消费次数")]),t._v(" "),t._l(t.specialConsumption.virtual_goods_cnt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("彩票消费金额（元）")]),t._v(" "),t._l(t.specialConsumption.lottery_amt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("彩票消费金额占比（%）")]),t._v(" "),t._l(t.specialConsumption.lottery_rate,function(_,e,d){return s("td",[t._v(t._s(_))])})],2),t._v(" "),s("tr",[s("td",[t._v("彩票消费笔数")]),t._v(" "),t._l(t.specialConsumption.lottery_cnt,function(_,e,d){return s("td",[t._v(t._s(_))])})],2)])])])]):t._e(),t._v(" "),2===t.cstatus?s("div",{staticClass:"nomseg"},[s("span",[t._v("查询成功，暂无数据")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,_=this._self._c||t;return _("div",[_("h3",{staticStyle:{"padding-left":"0px","font-size":"25px","text-align":"center"}},[this._v("\n                  淘宝报告\n              ")]),this._v(" "),_("div",{staticStyle:{"text-align":"right","font-size":"10px"}},[this._v("\n                  报告编号：639672c0-8689-22e7-84c5-00163e1d50ad\n              ")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("div",[_("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  1.基本信息\n              ")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("div",[_("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  2.财富信息\n              ")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("thead",[_("th",[this._v("魔蝎变量")]),this._v(" "),_("th",[this._v("当前")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("div",[_("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  3.地址分析\n              ")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("thead",[_("th",[this._v("魔蝎变量")]),this._v(" "),_("th",[this._v("结果")]),this._v(" "),_("th",[this._v("证据")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("thead",[_("th",[this._v("魔蝎变量")]),this._v(" "),_("th",[this._v("top1")]),this._v(" "),_("th",[this._v("top2")]),this._v(" "),_("th",[this._v("top3")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("thead",[_("th",[this._v("魔蝎变量")]),this._v(" "),_("th",[this._v("近3月")]),this._v(" "),_("th",[this._v("近6月")])])}]};var v=s("VU/8")(e,d,!1,function(t){s("78vI")},"data-v-209297d6",null);_.default=v.exports},"78vI":function(t,_){}});