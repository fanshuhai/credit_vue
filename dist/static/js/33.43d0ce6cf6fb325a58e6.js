webpackJsonp([33],{S4te:function(s,t){},cttX:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{touzis:"",cstatus:""}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){},computed:{},mounted:function(){var s=localStorage.getItem("msgData"),t=JSON.parse(s),a={};void 0===t.industry?this.cstatus=2:"成功获取相关工商数据！"==t.industry.message?(a.touziNow=t.industry.gscontent.touzi_now,this.touzis=a.touziNow,this.cstatus=1):this.cstatus=2}},e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"header_info"},[s._v("投资信息")]),s._v(" "),s._l(s.touzis,function(t,i){return 1===s.cstatus?a("div",{staticClass:"case_info"},[a("div",{staticClass:"case_info_header"},[s._v("投资信息"+s._s(i+1))]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("企业名称：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.entname))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("认缴出资额（万元）：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.subconam))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("出资方式：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.conform))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("币种：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.currency))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("出资比例：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.conprop))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("企业（机构）类型：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.enttype))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("注册资本（万元）：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regcap))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("注册资本币种：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regcurrency))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("企业状态：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.entstatus))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("注销日期：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.canceldate))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("吊销日期：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.revokedate))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("成立日期：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.esdate))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("登记机关：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regorg))])])]):s._e()}),s._v(" "),2===s.cstatus?a("div",{staticClass:"nomseg"},[a("span",[s._v("查询成功，暂无数据")])]):s._e()],2)},staticRenderFns:[]};var _=a("VU/8")(i,e,!1,function(s){a("S4te")},"data-v-4a390ebe",null);t.default=_.exports}});