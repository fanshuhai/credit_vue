webpackJsonp([27],{"jg+J":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),o=r.n(a),l={data:function(){return{ruleForm:{name:"",cardId:"",phone:""},rules:{name:[{validator:function(e,t,r){""===t?r(new Error("请输入姓名")):r()},trigger:"blur"}],cardId:[{validator:function(e,t,r){""===t?r(new Error("请输入身份证号码")):!1===/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)?r(new Error("身份证号码不正确")):r()},trigger:"blur"}],phone:[{validator:function(e,t,r){""===t?r(new Error("请输入手机号码")):!1===/^1[0-9]{10}$/.test(t)?r(new Error("手机号码不正确")):r()},trigger:"blur"}]}}},methods:{goBack:function(){this.$router.push("/moerCredit")},TQueryResult:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r={};r.name=t.ruleForm.name,r.cardId=t.ruleForm.cardId,r.phone=t.ruleForm.phone,r=o()(r),localStorage.setItem("InquireMsg",r),localStorage.setItem("InstitutionalChoice","选项4"),localStorage.setItem("name",t.ruleForm.name),localStorage.setItem("cardId",t.ruleForm.cardId),localStorage.setItem("phone",t.ruleForm.phone),t.$router.push("/moxieQuery")}})}},computed:{},mounted:function(){}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"huifa"},[r("div",{staticClass:"huifa_header"},[e._v("\n    当前位置："),r("span",{on:{click:e.goBack}},[e._v("首页")]),e._v(">>魔蝎科技（第三方数据查询）\n  ")]),e._v(" "),r("div",{staticClass:"huifa_main changePassword"},[r("div",{staticStyle:{width:"60%"}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("div",{staticStyle:{"margin-bottom":"10px","text-align":"center"}},[r("span",[e._v("姓      名：")]),e._v(" "),r("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),e._v(" "),r("div",{staticStyle:{"margin-bottom":"10px","text-align":"center"}},[r("span",[e._v("身份证号：")]),e._v(" "),r("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"cardId"}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.cardId,callback:function(t){e.$set(e.ruleForm,"cardId",t)},expression:"ruleForm.cardId"}})],1)],1),e._v(" "),r("div",{staticStyle:{"margin-bottom":"30px","text-align":"center"}},[r("span",[e._v("手机号码：")]),e._v(" "),r("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"phone"}},[r("el-input",{staticStyle:{height:"40px"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),e._v(" "),r("div",{staticClass:"wrapper_button"},[r("el-button",{on:{click:function(t){e.TQueryResult("ruleForm")}}},[e._v("查询")])],1)])],1)])])},staticRenderFns:[]};var i=r("VU/8")(l,n,!1,function(e){r("vyW4")},"data-v-75048677",null);t.default=i.exports},vyW4:function(e,t){}});