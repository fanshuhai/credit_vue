webpackJsonp([32],{"2ArO":function(t,a){},NOa8:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("71e1"),i=s.n(e),r={data:function(){return{reportStatus_1:"",reportStatus_2:"",reportStatus_3:"",reportStatus_4:"",reportStatus_5:"",reportStatus_6:""}},methods:{goBack:function(){this.$router.push("/")},goBack2:function(){this.$router.push("/moxie")},goFund:function(){this.$router.push("/moxieFund")},goSecurity:function(){this.$router.push("/moxieSecurity")},goCarinsurance:function(){this.$router.push("/moxieCarinsurance")},goTaobao:function(){this.$router.push("/moxieTaobao")},goCarrier:function(){this.$router.push("/moxieCarrier")},goChsi:function(){this.$router.push("/moxieChsi")},useqrcode:function(t,a,s,e){this.queryDetail="123.59.181.202:8888/moxie/build/index.html?apiKey=2ec828c5f54a4d36a181667de2c115eb&userId="+t+"|"+a+"|"+s+"|"+e;var r=document.getElementById("qrcode");i.a.toCanvas(r,this.queryDetail,function(t){t?console.log(t):console.log("success")})}},mounted:function(){var t=localStorage.getItem("name"),a=localStorage.getItem("phone"),s=localStorage.getItem("cardId"),e=sessionStorage.getItem("ms_username");this.useqrcode(s,t,a,e)},created:function(){var t=this;this.$axios.defaults.withCredentials=!0,this.$axios.get(this.HOST+"/api/v1/moxieReportNum",{params:{account_name:localStorage.getItem("name"),id_number:localStorage.getItem("cardId"),account_mobile:localStorage.getItem("phone")}}).then(function(a){"登录超时"===a.data?(t.$message("登录超时，请重新登录"),t.$router.push("/login")):""===a.data||null===a.data||"{}"===a.data?t.$message("暂无信息"):(0==a.data.mx_fund?t.reportStatus_1=2:t.reportStatus_1=1,0==a.data.mx_insurance?t.reportStatus_2=2:t.reportStatus_2=1,0==a.data.mx_security?t.reportStatus_3=2:t.reportStatus_3=1,0==a.data.mx_taobao?t.reportStatus_4=2:t.reportStatus_4=1,0==a.data.mx_carrier?t.reportStatus_5=2:t.reportStatus_5=1,0==a.data.mx_chsi?t.reportStatus_6=2:t.reportStatus_6=1)}).catch(function(t){alert("暂无服务")})}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"huifaQuery"},[s("div",{staticClass:"huifa_header"},[t._v("\n      当前位置："),s("span",{on:{click:t.goBack}},[t._v("首页")]),t._v(">>"),s("span",{on:{click:t.goBack2}},[t._v("魔蝎科技（第三方数据查询）")]),t._v(">>魔蝎科技查询结果\n    ")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"huifaQuery_header"},[t._v("魔蝎数据认证")]),t._v(" "),s("div",{staticClass:"detail_list"},[s("div",{staticClass:"detail_list_title"},[t._v("资产信息验证")]),t._v(" "),s("div",{staticStyle:{"box-sizing":"border-box"}},[s("div",{staticClass:"case_info"},[s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left fund"},[t._v("公积金\n                  "),1===t.reportStatus_1?s("div",{staticClass:"repotr_details",on:{click:t.goFund}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_1?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()]),t._v(" "),s("div",{staticClass:"case_detail_right societysecurity"},[t._v("社保\n                  "),1===t.reportStatus_2?s("div",{staticClass:"repotr_details",on:{click:t.goSecurity}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_2?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()])]),t._v(" "),s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left carinsurance"},[t._v("车险\n                  "),1===t.reportStatus_3?s("div",{staticClass:"repotr_details",on:{click:t.goCarinsurance}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_3?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"detail_list"},[s("div",{staticClass:"detail_list_title"},[t._v("消费信息验证")]),t._v(" "),s("div",{staticStyle:{"box-sizing":"border-box"}},[s("div",{staticClass:"case_info"},[s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_right taobao"},[t._v("淘宝\n                  "),1===t.reportStatus_4?s("div",{staticClass:"repotr_details",on:{click:t.goTaobao}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_4?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"detail_list"},[s("div",{staticClass:"detail_list_title"},[t._v("社交信息验证")]),t._v(" "),s("div",{staticStyle:{"box-sizing":"border-box"}},[s("div",{staticClass:"case_info"},[s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left operator"},[t._v("运营商\n                  "),1===t.reportStatus_5?s("div",{staticClass:"repotr_details",on:{click:t.goCarrier}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_5?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"detail_list"},[s("div",{staticClass:"detail_list_title"},[t._v("身份信息验证")]),t._v(" "),s("div",{staticStyle:{"box-sizing":"border-box"}},[s("div",{staticClass:"case_info"},[s("div",{staticClass:"case_detail"},[s("div",{staticClass:"case_detail_left xuexin"},[t._v("学信\n                  "),1===t.reportStatus_6?s("div",{staticClass:"repotr_details",on:{click:t.goChsi}},[t._v("报告详情")]):t._e(),t._v(" "),2===t.reportStatus_6?s("div",{staticClass:"noRepotr_details"},[t._v("用户暂未授权")]):t._e()]),t._v(" "),s("div")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"qrcode_position"},[a("canvas",{attrs:{id:"qrcode"}}),this._v(" "),a("div",[this._v("手机扫一扫，登录授权查询")])])}]};var _=s("VU/8")(r,o,!1,function(t){s("2ArO")},"data-v-5ec22c39",null);a.default=_.exports}});