webpackJsonp([44],{ZFzX:function(_,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{car_basic:"",car_xianzhongs:"",car_jilus:"",cstatus:""}},methods:{goBack:function(){this.$router.go(-1)}},computed:{},mounted:function(){var _=localStorage.getItem("msgData"),t=JSON.parse(_);if(void 0!==t.mx_insurance){var v=t.mx_insurance[0],a=v.insurance_one[0].insurancePolicyBaseInfo,s=v.insurance_one[0].vehicleInsuranceDetailInfos,e=v.insurance_one[0].insuranceDamageInfos;this.car_basic=a,this.car_xianzhongs=s,this.car_jilus=e,this.cstatus=1}else this.cstatus=2}},s={render:function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticStyle:{padding:"0 0 20px 0",background:"#fff"}},[1===_.cstatus?v("div",{staticClass:"box"},[v("div",[v("h3",{staticStyle:{"padding-left":"0px","font-size":"25px","text-align":"center"}},[_._v("\n                  车险报告\n              ")]),_._v(" "),v("div",{staticStyle:{"text-align":"right","font-size":"10px"}},[_._v("\n                  报告编号："+_._s(_.car_basic.mapping_id)+"\n              ")])]),_._v(" "),_._m(0),_._v(" "),v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("1.1 用户基本信息")]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tr",[v("td",[_._v("保单号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.policy_num))]),_._v(" "),v("td",[_._v("被保险人：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurant))])]),_._v(" "),v("tr",[v("td",[_._v("投保人：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.applicant))]),_._v(" "),v("td",[_._v("身份证号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.idcard_num))])]),_._v(" "),v("tr",[v("td",[_._v("保险公司：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_company))]),_._v(" "),v("td",[_._v("险种名字：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_name))])]),_._v(" "),v("tr",[v("td",[_._v("被保险车牌号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.plate_num))]),_._v(" "),v("td",[_._v("保险生效起始时间：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_start_date))])]),_._v(" "),v("tr",[v("td",[_._v("保险有效终止时间：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_end_date))]),_._v(" "),v("td",[_._v("汽车的厂牌和型号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.brand_model))])]),_._v(" "),v("tr",[v("td",[_._v("汽车发动机号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.engineer_num))]),_._v(" "),v("td",[_._v("汽车车架号：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.vehicle_frame_num))])]),_._v(" "),v("tr",[v("td",[_._v("核定载重质量：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.approved_load))]),_._v(" "),v("td",[_._v("核定座位：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.approved_passengers_capacity))])]),_._v(" "),v("tr",[v("td",[_._v("车辆类型：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.vehicle_type))]),_._v(" "),v("td",[_._v("车辆使用性质：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.use_character))])]),_._v(" "),v("tr",[v("td",[_._v("保单状态：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_status))]),_._v(" "),v("td",[_._v("保单总保额：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_amount))])]),_._v(" "),v("tr",[v("td",[_._v("保单总保费：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.insurance_premium))]),_._v(" "),v("td",[_._v("已支付保费：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.paid_insurance_premium))])]),_._v(" "),v("tr",[v("td",[_._v("欠缴保费金额：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.unPaid_insurance_premium))]),_._v(" "),v("td",[_._v("保费支付日期：")]),_._v(" "),v("td",[_._v(_._s(_.car_basic.payment_date))])]),_._v(" "),v("tr",[v("td",[_._v("支付方式")]),_._v(" "),v("td",{attrs:{colspan:"3"}},[_._v(_._s(_.car_basic.mode_of_payment))])])])])]),_._v(" "),_._m(1),_._v(" "),_._l(_.car_xianzhongs,function(t,a){return v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("2."+_._s(a+1)+_._s(t.conditions))]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tbody",[v("tr",[v("td",[_._v("承保险种：")]),_._v(" "),v("td",[_._v(_._s(t.conditions))]),_._v(" "),v("td",[_._v("保单号：")]),_._v(" "),v("td",[_._v(_._s(t.policy_num))]),_._v(" "),v("td",[_._v("保险金额：")]),_._v(" "),v("td",[_._v(_._s(t.insurance_amount))]),_._v(" "),v("td",[_._v("保费金额：")]),_._v(" "),v("td",[_._v(_._s(t.insurance_premium))])]),_._v(" "),v("tr",[v("td",[_._v("保险公司缩写：")]),_._v(" "),v("td",[_._v(_._s(t.insurance_company))]),_._v(" "),v("td",[_._v("实际支付金额：")]),_._v(" "),v("td",[_._v(_._s(t.premiums_paid))]),_._v(" "),v("td",[_._v("承保险种费率系数：")]),_._v(" "),v("td",[_._v(_._s(t.premium_coefficient))]),_._v(" "),v("td",[_._v("费率浮动原因：")]),_._v(" "),v("td",[_._v(_._s(t.premium_floating_reason))])])])])])])}),_._v(" "),_._m(2),_._v(" "),_._l(_.car_jilus,function(t,a){return v("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[v("h5",{staticClass:"h5"},[_._v("3."+_._s(a+1)+_._s(t.insurance_name))]),_._v(" "),v("div",{staticClass:"tabbox"},[v("table",[v("tbody",[v("tr",[v("td",[_._v("保险公司缩写：")]),_._v(" "),v("td",[_._v(_._s(t.insurance_company))]),_._v(" "),v("td",[_._v("保险名字：")]),_._v(" "),v("td",[_._v(_._s(t.insurance_name))]),_._v(" "),v("td",[_._v("被保险人：")]),_._v(" "),v("td",[_._v(_._s(t.insurant))]),_._v(" "),v("td",[_._v("车牌号：")]),_._v(" "),v("td",[_._v(_._s(t.plate_num))])]),_._v(" "),v("tr",[v("td",[_._v("厂牌型号：")]),_._v(" "),v("td",[_._v(_._s(t.brand_model))]),_._v(" "),v("td",[_._v("保险单号：")]),_._v(" "),v("td",[_._v(_._s(t.policy_num))]),_._v(" "),v("td",[_._v("出险时间：")]),_._v(" "),v("td",[_._v(_._s(t.damage_time))]),_._v(" "),v("td",[_._v("报案时间：")]),_._v(" "),v("td",[_._v(_._s(t.report_time))])]),_._v(" "),v("tr",[v("td",[_._v("出险原因：")]),_._v(" "),v("td",[_._v(_._s(t.cause_of_damage))]),_._v(" "),v("td",[_._v("出险情况详细描述：")]),_._v(" "),v("td",[_._v(_._s(t.damage_desc))]),_._v(" "),v("td",[_._v("驾驶员姓名：")]),_._v(" "),v("td",[_._v(_._s(t.driver_name))]),_._v(" "),v("td",[_._v("出险地址：")]),_._v(" "),v("td",[_._v(_._s(t.damage_address))])]),_._v(" "),v("tr",[v("td",[_._v("报案人：")]),_._v(" "),v("td",[_._v(_._s(t.reportor_name))]),_._v(" "),v("td",[_._v("联系人：")]),_._v(" "),v("td",[_._v(_._s(t.linker_name))]),_._v(" "),v("td",[_._v("结案进程：")]),_._v(" "),v("td",[_._v(_._s(t.progress))]),_._v(" "),v("td",[_._v("案件号：")]),_._v(" "),v("td",[_._v(_._s(t.case_num))])])])])])])})],2):_._e(),_._v(" "),2===_.cstatus?v("div",{staticClass:"nomseg"},[v("span",[_._v("查询成功，暂无数据")])]):_._e()])},staticRenderFns:[function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  1.基本信息\n              ")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  2.承保险种\n              ")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  3.出险记录\n              ")])])}]};var e=v("VU/8")(a,s,!1,function(_){v("mk+u")},"data-v-3c4fdb53",null);t.default=e.exports},"mk+u":function(_,t){}});