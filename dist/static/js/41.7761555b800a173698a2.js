webpackJsonp([41],{"9DzI":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{law_t:"",law_infos:"",cstatus:""}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){},computed:{},mounted:function(){var t=localStorage.getItem("msgData"),s=JSON.parse(t),a={};void 0===s.judicial?this.cstatus=2:"成功获取相关风险数据！"==s.judicial.message?(a.length=s.judicial.fxcontent.zhixing.length,a.content=s.judicial.fxcontent.zhixing,this.law_t=a.length,this.law_infos=a.content,this.cstatus=1):this.cstatus=2}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[1===t.cstatus?a("div",[a("div",{staticClass:"header_info"},[t._v("共"+t._s(t.law_t)+"条法律案件信息")]),t._v(" "),t._l(t.law_infos,function(s,i){return a("div",{staticClass:"case_info"},[a("div",{staticClass:"case_info_header"},[t._v("法律案件详情")]),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("执行法院：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.court))])]),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("执行文号：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.casenum))])]),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("立案时间：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.sslong))])]),t._v(" "),t._m(0,!0),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("执行单位：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.typetname))])]),t._v(" "),t._m(1,!0),t._v(" "),t._m(2,!0),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("履行情况：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.content))])]),t._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[t._v("执行情形：")]),t._v(" "),a("div",{staticClass:"case_detail_right"},[t._v(t._s(s.state))])]),t._v(" "),t._m(3,!0)])})],2):t._e(),t._v(" "),2===t.cstatus?a("div",{staticClass:"datanull"},[a("span",[t._v("查询成功，暂无数据")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left"},[this._v("案       号：")]),this._v(" "),s("div",{staticClass:"case_detail_right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left"},[this._v("省       份：")]),this._v(" "),s("div",{staticClass:"case_detail_right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"case_detail",staticStyle:{height:"auto"}},[s("div",{staticClass:"case_detail_left"},[this._v("法律义务：")]),this._v(" "),s("div",{staticClass:"case_detail_right",staticStyle:{height:"auto"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left"},[this._v("公示时间：")]),this._v(" "),s("div",{staticClass:"case_detail_right"})])}]};var _=a("VU/8")(i,e,!1,function(t){a("rPWi")},"data-v-30196615",null);s.default=_.exports},rPWi:function(t,s){}});