webpackJsonp([23],{TfOG:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{renzhis:"",cstatus:""}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){},computed:{},mounted:function(){var s=localStorage.getItem("msgData"),t=JSON.parse(s),a={};void 0===t.industry?this.cstatus=2:"成功获取相关工商数据！"==t.industry.message?(a.renzhiNow=t.industry.gscontent.renzhi_now,this.renzhis=a.renzhiNow,this.cstatus=1):this.cstatus=2}},i={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"header_info"},[s._v("任职信息")]),s._v(" "),s._l(s.renzhis,function(t,e){return 1===s.cstatus?a("div",{staticClass:"case_info"},[a("div",{staticClass:"case_info_header"},[s._v("任职信息"+s._s(e+1))]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("职务：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.position))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("企业名称：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.entname))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("首席代表标志：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.chiofthedelsign))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("法定代表人标志：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.lerepsign))])]),s._v(" "),a("div",{staticClass:"case_detail"},[a("div",{staticClass:"case_detail_left"},[s._v("登记机关：")]),s._v(" "),a("div",{staticClass:"case_detail_right"},[s._v(s._s(t.regorg))])])]):s._e()}),s._v(" "),2===s.cstatus?a("div",{staticClass:"nomseg"},[a("span",[s._v("查询成功，暂无数据")])]):s._e()],2)},staticRenderFns:[]};var _=a("VU/8")(e,i,!1,function(s){a("seys")},"data-v-7408a0c2",null);t.default=_.exports},seys:function(s,t){}});