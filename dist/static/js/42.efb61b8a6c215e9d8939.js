webpackJsonp([42],{"2OVc":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){var t=this;return{ruleForm:{originalpass:"",pass:"",checkpass:""},rules:{originalpass:[{validator:function(t,e,s){""===e?s(new Error("密码不能为空")):s()},trigger:"blur"}],pass:[{validator:function(t,e,s){""===e?s(new Error("密码不能为空")):!1===/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/.test(e)?s(new Error("密码8-16位，至少含数字/字母/字符两种组合")):s()},trigger:"blur"}],checkpass:[{validator:function(e,s,a){""===s?a(new Error("请再次输入密码")):s!==t.ruleForm.pass?a(new Error("两次输入密码不一致")):a()},trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$axios.defaults.withCredentials=!0,e.$axios.get("http://123.59.181.202:8082/mgr/changePwd",{params:{oldPwd:e.ruleForm.originalpass,newPwd:e.ruleForm.pass,rePwd:e.ruleForm.checkpass}}).then(function(t){console.log(t.data),"104"==t.data.status&&e.$message({message:t.data.message,type:"success"}),"410"==t.data.status&&e.$message({message:t.data.message,type:"error"})}).catch(function(t){alert("暂无服务"),console.log(t.response)})})}},computed:{}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"huifa"},[s("div",{staticClass:"huifa_main"},[s("div",{staticStyle:{width:"60%"}},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm changePassword",attrs:{model:t.ruleForm,rules:t.rules}},[s("div",{staticStyle:{"margin-bottom":"20px","text-align":"center"}},[s("span",{staticClass:"pcontent"},[t._v("原密码")]),t._v(" "),s("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"originalpass"}},[s("el-input",{attrs:{placeholder:"若包含字母，注意区分大小写"},model:{value:t.ruleForm.originalpass,callback:function(e){t.$set(t.ruleForm,"originalpass",e)},expression:"ruleForm.originalpass"}})],1)],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"20px","text-align":"center"}},[s("span",{staticClass:"pcontent"},[t._v("新密码")]),t._v(" "),s("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"pass"}},[s("el-input",{attrs:{type:"password",placeholder:"8-16位，至少含数字/字母/字符两种组合"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1)],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"30px","text-align":"center"}},[s("span",{staticClass:"pcontent"},[t._v("确认密码")]),t._v(" "),s("el-form-item",{staticStyle:{width:"70%",display:"inline-block"},attrs:{prop:"checkpass"}},[s("el-input",{staticStyle:{height:"40px"},attrs:{type:"password",placeholder:"8-16位，至少含数字/字母/字符两种组合"},model:{value:t.ruleForm.checkpass,callback:function(e){t.$set(t.ruleForm,"checkpass",e)},expression:"ruleForm.checkpass"}})],1)],1),t._v(" "),s("div",{staticStyle:{"text-align":"right"}},[s("el-button",{on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("提交")])],1)])],1)])])},staticRenderFns:[]};var i=s("VU/8")(a,r,!1,function(t){s("Fsty")},"data-v-2ccf4981",null);e.default=i.exports},Fsty:function(t,e){}});