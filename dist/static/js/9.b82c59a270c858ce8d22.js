webpackJsonp([9],{"/L9C":function(e,t,a){"use strict";(function(e){var l=a("mvHQ"),n=a.n(l);t.a={data:function(){return{ruleForm:{name:"",cardId:"",phone:""},rules:{name:[{validator:function(e,t,a){""===t?a(new Error("请输入姓名")):a()},trigger:"blur"}],cardId:[{validator:function(t,a,l){var n=e.trim(a);""===a?l(new Error("请输入身份证号码")):!1===/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/.test(n)?l(new Error("身份证号码不正确")):l()},trigger:"blur"}],phone:[{validator:function(t,a,l){var n=e.trim(a);""===a?l(new Error("请输入手机号码")):!1===/^1[0-9]{10}$/.test(n)?l(new Error("手机号码不正确")):l()},trigger:"blur"}]},elementvalue:"",options:[{value:"选项1",label:"摩尔征信"},{value:"选项2",label:"汇法网"},{value:"选项3",label:"同盾"},{value:"选项4",label:"魔蝎"},{value:"选项5",label:"全部"}],items:[{icon:"el-icon-homePage",index:"moerCredit",title:"首页"},{icon:"el-icon-overView",index:"queryResult",title:"审核报告"},{icon:"el-icon-personal",index:"1",title:"个人信息",subs:[{index:"perInfoBasic",title:"基本信息"},{index:"xueli",title:"学历"},{index:"touzi",title:"投资"},{index:"renzhi",title:"任职"}]},{icon:"el-icon-judicial",index:"3",title:"司法信息",subs:[{index:"lawCasedetail",title:"法律案件详情"}]},{icon:"el-icon-frand",index:"4",title:"风险反欺诈",subs:[{index:"breach_Blacklist",title:"失信黑名单"},{index:"highrisk_list",title:"高风险名单"}]},{icon:"el-icon-publicMsg",index:"5",title:"公共信息",subs:[{index:"onlineshopping",title:"网购消费"},{index:"yunyingshang",title:"运营商"},{index:"societysecurity",title:"社保"},{index:"gongjijin",title:"公积金"},{index:"carinsurance",title:"车险"}]}]}},methods:{goBack:function(){this.$router.go(-0)},querySelect:function(t){var a=this;this.$refs[t].validate(function(t){if(t){var l=a.$loading({lock:!0,background:"rgba(0, 0, 0, 0.5)"}),r={};r.name=a.ruleForm.name,r.cardId=a.ruleForm.cardId,r.phone=a.ruleForm.phone,r=n()(r),localStorage.setItem("InquireMsg",r),localStorage.setItem("name",a.ruleForm.name),localStorage.setItem("cardId",a.ruleForm.cardId),localStorage.setItem("phone",a.ruleForm.phone);var o=e.trim(a.ruleForm.name),i=e.trim(a.ruleForm.cardId),s=e.trim(a.ruleForm.phone);"选项1"==a.elementvalue?(a.$axios.defaults.withCredentials=!0,a.$axios.get("http://123.59.181.202:9990/api/v1/search",{params:{name:o,cardId:i,phone:s}}).then(function(e){if(console.log(e.data),"登录超时"===e.data)a.$message("登录超时，请重新登录"),a.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)a.$message("暂无信息");else{var t=e.data;t=n()(t),localStorage.setItem("msgData",t),l.close(),"/queryResult"==a.$route.path?window.location.reload():a.$router.push("/queryResult")}}).catch(function(e){console.log(e)})):"选项2"==a.elementvalue?(a.$axios.defaults.withCredentials=!0,a.$axios.get("http://123.59.181.202:9990/api/v1/hfw/search",{params:{name:o,cardId:i,phone:s}}).then(function(e){if("登录超时"===e.data)a.$message("登录超时，请重新登录"),a.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)a.$message("暂无信息");else{var t=n()(e.data);localStorage.setItem("newHfMsg",t),l.close(),a.$router.push("/huifaQuery")}}).catch(function(e){console.log(e.response)})):"选项3"==a.elementvalue?(a.$axios.defaults.withCredentials=!0,a.$axios.get("http://123.59.181.202:9990/api/v1/tdsearch",{params:{account_name:o,id_number:i,account_mobile:s}}).then(function(e){if("登录超时"===e.data)a.$message("登录超时，请重新登录"),a.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)a.$message("暂无信息");else{var t=n()(e.data);localStorage.setItem("newTdMsg",t),l.close(),a.$router.push("/tongdunQuery")}}).catch(function(e){console.log(e.response)})):"选项4"==a.elementvalue?(l.close(),a.$router.push("/moxieQuery")):"选项5"==a.elementvalue&&(a.$axios.defaults.withCredentials=!0,a.$axios.get("http://123.59.181.202:9990/api/v1/multiple/search",{params:{account_name:o,id_number:i,account_mobile:s}}).then(function(e){if("登录超时"===e.data)a.$message("登录超时，请重新登录"),a.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)a.$message("暂无信息");else{var t=e.data;t=n()(t),localStorage.setItem("msgData",t),l.close(),"/queryResult"==a.$route.path?window.location.reload():a.$router.push("/queryResult")}}).catch(function(e){console.log(e.response)}))}})}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},watch:{},mounted:function(){},created:function(){var e=localStorage.getItem("InquireMsg"),t=JSON.parse(e),a=localStorage.getItem("InstitutionalChoice");this.ruleForm.name=t.name,this.ruleForm.cardId=t.cardId,this.ruleForm.phone=t.phone,this.elementvalue=a}}}).call(t,a("7t+N"))},RbfY:function(e,t){},p99O:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("/L9C"),n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"totalInfo"},[a("el-container",{staticClass:"content_main"},[a("el-aside",{staticClass:"sideMenu",attrs:{width:"205px"}},[a("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,"default-openeds":["1","2","3","4","5"],router:""}},[e._l(e.items,function(t){return[t.subs?[a("el-submenu",{key:t.index,attrs:{index:t.index}},[a("template",{slot:"title"},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.subs,function(t,l){return a("el-menu-item",{key:l,attrs:{index:t.index}},[e._v("\n                              "+e._s(t.title)+"\n                          ")])})],2)]:[a("el-menu-item",{key:t.index,attrs:{index:t.index}},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]})],2)],1),e._v(" "),a("el-container",{staticClass:"main_right"},[a("el-header",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content query_orgn"},[a("span",[e._v("选择查询机构：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.elementvalue,callback:function(t){e.elementvalue=t},expression:"elementvalue"}},e._l(e.options,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("el-form",{ref:"ruleForm",staticStyle:{width:"100%"},attrs:{model:e.ruleForm,rules:e.rules}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content query_name"},[a("span",[e._v("姓名：")]),e._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"grid-content query_cardid"},[a("span",[e._v("身份证号：")]),e._v(" "),a("el-form-item",{attrs:{prop:"cardId"}},[a("el-input",{attrs:{placeholder:"请输入身份证号码",clearable:""},model:{value:e.ruleForm.cardId,callback:function(t){e.$set(e.ruleForm,"cardId",t)},expression:"ruleForm.cardId"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content query_phone"},[a("span",[e._v("手机号码：")]),e._v(" "),a("el-form-item",{attrs:{prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入手机号码",clearable:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.querySelect("ruleForm")}}},[e._v("查询")])],1)])],1)],1)],1),e._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=function(e){a("RbfY")},o=a("VU/8")(l.a,n,!1,r,"data-v-3c0fb1d1",null);t.default=o.exports}});