webpackJsonp([56],{"6Med":function(t,s){},SZN5:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("fZjL"),a=i.n(e),d={data:function(){return{status:1,address_detect:"",Zstatus:1,risk_frauds:""}},methods:{goBack:function(){this.$router.push("/")},goBack2:function(){this.$router.push("/tongdun")}},computed:{},created:function(){},mounted:function(){var t=localStorage.getItem("newTdMsg"),s=JSON.parse(t);console.log(s);for(var i=s.result_desc.ANTIFRAUD.risk_items,e=[],d=0;d<i.length;d++){var _={};void 0!==i[d].risk_detail&&(void 0===i[d].risk_detail.description&&void 0===i[d].risk_detail.hit_type_displayname&&void 0===i[d].risk_detail.black_list_details||(_.risk_name=i[d].risk_name,void 0===i[d].risk_detail.description?_.description="暂无信息":_.description=i[d].risk_detail.description,void 0===i[d].risk_detail.hit_type_displayname?_.hit_type_displayname="暂无信息":_.hit_type_displayname=i[d].risk_detail.hit_type_displayname,void 0===i[d].risk_detail.black_list_details?_.type="暂无信息":_.type=i[d].risk_detail.black_list_details[0].fraudTypeDisplayName)),e.push(_)}for(var r=[],l=0;l<e.length;l++)a()(e[l]).length>0&&r.push(e[l]);this.address_detect=s.result_desc.INFOANALYSIS.address_detect,this.risk_frauds=r,a()(this.address_detect).length>0?this.status=1:this.status=0,a()(this.risk_frauds).length>0?this.Zstatus=1:this.Zstatus=0}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"huifaQuery"},[i("div",{staticClass:"huifa_header"},[t._v("\n      当前位置："),i("span",{on:{click:t.goBack}},[t._v("首页")]),t._v(">>"),i("span",{on:{click:t.goBack2}},[t._v("同盾科技（第三方数据查询）")]),t._v(">>同盾网查询结果\n    ")]),t._v(" "),i("div",{staticClass:"huifaQuery_header"},[t._v("查询结果")]),t._v(" "),i("div",{staticClass:"detail_list"},[i("div",{staticClass:"detail_list_title"},[t._v("归属地解析")]),t._v(" "),1===t.status?i("div",{staticStyle:{"box-sizing":"border-box"}},[i("div",{staticClass:"case_info"},[i("div",{staticClass:"case_detail"},[i("div",{staticClass:"case_detail_left"},[t._v("身份证所属地：")]),t._v(" "),i("div",{staticClass:"case_detail_right"},[t._v(t._s(t.address_detect.id_card_address))])]),t._v(" "),i("div",{staticClass:"case_detail"},[i("div",{staticClass:"case_detail_left"},[t._v("手机所属地：")]),t._v(" "),i("div",{staticClass:"case_detail_right"},[t._v(t._s(t.address_detect.mobile_address))])])])]):0===t.status?i("div",{staticClass:"nomseg"},[t._v("查询成功，暂无数据！")]):t._e()]),t._v(" "),i("div",{staticClass:"detail_list"},[i("div",{staticClass:"detail_list_title"},[t._v("贷前风险情况")]),t._v(" "),1===t.Zstatus?i("table",[t._m(0),t._v(" "),t._l(t.risk_frauds,function(s){return i("tr",[i("td",[t._v(t._s(s.risk_name))]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("\n              规则描述："+t._s(s.description)),i("br"),t._v("\n              匹配字段："+t._s(s.hit_type_displayname)),i("br"),t._v("\n              风险类型："+t._s(s.type)),i("br")])])})],2):0===t.Zstatus?i("div",{staticClass:"nomseg"},[t._v("查询成功，暂无数据！")]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("th",{attrs:{width:"200"}},[this._v("检查项目")]),this._v(" "),s("th",{attrs:{width:"150"}},[this._v("分险等级")]),this._v(" "),s("th",[this._v("备注")])])}]};var r=i("VU/8")(d,_,!1,function(t){i("6Med")},"data-v-0cbdad98",null);s.default=r.exports}});