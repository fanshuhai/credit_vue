webpackJsonp([32],{g3Fd:function(s,t){},saxQ:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("fZjL"),_=a.n(i),e=(a("8+FI"),{data:function(){return{status:1,Zstatus:1,inoffices:"",judicials:""}},methods:{goBack:function(){this.$router.push("/")},goBack2:function(){this.$router.push("/huifa")},datachange:function(){var s=localStorage.getItem("newHfMsg"),t=JSON.parse(s);console.log(t);var a=[],i=[];"成功获取相关工商数据！"==t.industry.message&&(a=t.industry.gscontent.renzhi_now),"成功获取相关风险数据！"==t.judicial.message&&(i=t.judicial.fxcontent.zhixing),this.inoffices=a,this.judicials=i,_()(this.inoffices).length>0?this.status=1:this.status=0,_()(this.judicials).length>0?this.Zstatus=1:this.Zstatus=0}},computed:{},created:function(){},mounted:function(){this.datachange()}}),l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"huifaQuery"},[a("div",{staticClass:"huifa_header"},[s._v("\n      当前位置："),a("span",{on:{click:s.goBack}},[s._v("首页")]),s._v(">>"),a("span",{on:{click:s.goBack2}},[s._v("汇法网（第三方数据查询）")]),s._v(">>汇法网查询结果\n    ")]),s._v(" "),a("div",{staticClass:"huifaQuery_header"},[s._v("查询结果")]),s._v(" "),a("div",{staticClass:"detail_list"},[a("div",{staticClass:"detail_list_title"},[s._v("个人工商名单")]),s._v(" "),s._m(0),s._v(" "),1===s.status?a("div",{staticStyle:{"box-sizing":"border-box"}},s._l(s.inoffices,function(t,i){return a("div",{staticClass:"case_info"},[a("div",{staticClass:"case_info_header"},[s._v("任职信息"+s._s(i+1))]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("注册号：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regno))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("法定代表人标志：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.lerepsign))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("职务:")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.position))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("企业名称：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.entname))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("首席代表标志：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.chiofthedelsign))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("登记机关：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regorg))])])])})):0===s.status?a("div",{staticClass:"nomseg"},[s._v("查询成功，暂无数据！")]):s._e()]),s._v(" "),a("div",{staticClass:"detail_list"},[a("div",{staticClass:"detail_list_title"},[s._v("个人司法信息")]),s._v(" "),s._m(1),s._v(" "),1===s.Zstatus?a("div",{staticStyle:{"box-sizing":"border-box"}},s._l(s.judicials,function(t,i){return a("div",{staticClass:"case_info"},[a("div",{staticClass:"case_info_header"},[s._v("执行公开信息"+s._s(i+1))]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("标题：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.title))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("立案时间：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.sslong))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("被执行人姓名:")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.name))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("证件号码：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.id))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("执行案号：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.casenum))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("执行法院：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.court))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("执行标的：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.money))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("执行内容：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.content))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("执行状态：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.state))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("异议备注：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.remark))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("终本日期：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.zblong))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("未履行金额(元)：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.wlmoney))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("申请执行人：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.apply))])])])})):0===s.Zstatus?a("div",{staticClass:"nomseg"},[s._v("查询成功，暂无数据！")]):s._e()])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"laolai_detail"},[t("div",[this._v("任职信息")]),this._v(" "),t("div",[this._v("数据来源：汇法网")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"laolai_detail"},[t("div",[this._v("执行公开信息")]),this._v(" "),t("div",[this._v("数据来源：汇法网")])])}]};var c=a("VU/8")(e,l,!1,function(s){a("g3Fd")},"data-v-4efa29c2",null);t.default=c.exports}});