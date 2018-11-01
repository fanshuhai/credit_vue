webpackJsonp([14],{tBxn:function(e,a){},vKii:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t("E8UG");var r={data:function(){return{labelPosition:"left",param:"1",form:{nameCheck:"",idCheck:"",bankCheck:"",phoneCheck:"",resource:"姓名、身份证"},nameId:!0,namePhone:!1,nameCardPhone:!1,nameCardBankPhone:!1,rules:{nameCheck:[{required:!0,message:"请输入姓名！",trigger:"blur"}],phoneCheck:[{required:!0,message:"请输入手机号！",trigger:"blur"},{pattern:/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,message:"手机号格式不正确！"}],idCheck:[{required:!0,message:"请输入身份证号！",trigger:"blur"},{pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:"身份证格式不正确！"}],bankCheck:[{required:!0,message:"请输入银行卡号！",trigger:"blur"},{pattern:/^(\d{16}|\d{19})$/,message:"银行卡号格式不正确！"}]},searchResultExamp:[]}},created:function(){},methods:{onSubmit_nameId:function(e){var a=this;this.rules.nameCheck[0].required=!0,this.rules.phoneCheck[0].required=!1,this.rules.idCheck[0].required=!0,this.rules.bankCheck[0].required=!1,this.$refs[e].validate(function(e){console.log(e),e&&a.$axios.post(a.HOST+"/api/v1/acedata",{apiCode:"acedata.user.validation.name.idcard",idcard:a.form.idCheck,name:a.form.nameCheck,type:"1"}).then(function(e){if(console.log(e.data),1==e.data.success)if("没有获取有效数据"==e.data.message)a.$message.error("没有获取有效数据"),a.searchResultExamp=[];else{var t=e.data.data,r=new Array;r.push(t),console.log(r),a.$message.success("获取数据成功！"),a.searchResultExamp=r}else a.$message.error("异常错误")}).catch(function(e){a.$message.error("没有获取有效数据"),a.searchResultExamp=[]})})},onSubmit_namePhone:function(e){var a=this;this.$refs[e].validate(function(e){e&&a.$axios.post(a.HOST+"/api/v1/acedata",{apiCode:"acedata.user.validation.name.cellphone",name:a.form.nameCheck,cellphone:a.form.phoneCheck,type:"2"}).then(function(e){if(console.log(e.data),1==e.data.success)if("没有获取有效数据"==e.data.message)a.$message.error("没有获取有效数据");else{var t=e.data.data,r=new Array;r.push(t),a.$message.success("获取数据成功！"),a.searchResultExamp=r}else a.$message.error("异常错误")}).catch(function(e){a.$message.error("没有获取有效数据")})})},onSubmit_nameCardPhone:function(e){var a=this;this.$refs[e].validate(function(e){e&&a.$axios.post(a.HOST+"/api/v1/acedata",{apiCode:"acedata.user.validation.name.idcard.cellphone",name:a.form.nameCheck,idcard:a.form.idCheck,cellphone:a.form.phoneCheck,type:"8"}).then(function(e){if(console.log(e.data),1==e.data.success)if("没有获取有效数据"==e.data.message)a.$message.error("没有获取有效数据");else{var t=e.data.data,r=new Array;r.push(t),a.$message.success("获取数据成功！"),a.searchResultExamp=r}else a.$message.error("异常错误")}).catch(function(e){a.$message.error("没有获取有效数据")})})},onSubmit_nameCardBankPhone:function(e){var a=this;this.$refs[e].validate(function(e){e&&a.$axios.post(a.HOST+"/api/v1/acedata",{apiCode:"acedata.user.validation.name.idcard.bankcard.cellphone",name:a.form.nameCheck,idcard:a.form.idCheck,cellphone:a.form.phoneCheck,bankcard:a.form.bankCheck,type:"6"}).then(function(e){if(console.log(e.data),1==e.data.success)if("没有获取有效数据"==e.data.message)a.$message.error("没有获取有效数据");else{var t=e.data.data,r=new Array;r.push(t),a.$message.success("获取数据成功！"),a.searchResultExamp=r}else a.$message.error("异常错误")}).catch(function(e){a.$message.error("没有获取有效数据")})})},headStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return"text-align:center"},nameId_radio:function(){this.rules.nameCheck[0].required=!0,this.rules.phoneCheck[0].required=!1,this.rules.idCheck[0].required=!0,this.rules.bankCheck[0].required=!1,this.nameId=!0,this.namePhone=!1,this.nameCardPhone=!1,this.nameCardBankPhone=!1},namePhone_radio:function(){this.rules.nameCheck[0].required=!0,this.rules.phoneCheck[0].required=!0,this.rules.idCheck[0].required=!1,this.rules.bankCheck[0].required=!1,this.nameId=!1,this.namePhone=!0,this.nameCardPhone=!1,this.nameCardBankPhone=!1},nameCardPhone_radio:function(){this.rules.nameCheck[0].required=!0,this.rules.phoneCheck[0].required=!0,this.rules.idCheck[0].required=!0,this.rules.bankCheck[0].required=!1,this.nameId=!1,this.namePhone=!1,this.nameCardPhone=!0,this.nameCardBankPhone=!1},nameCardBankPhone_radio:function(){this.rules.nameCheck[0].required=!0,this.rules.phoneCheck[0].required=!0,this.rules.idCheck[0].required=!0,this.rules.bankCheck[0].required=!0,this.nameId=!1,this.namePhone=!1,this.nameCardPhone=!1,this.nameCardBankPhone=!0}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bankCardcheckPage"},[t("div",{staticClass:"createSearch"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":e.labelPosition}},[t("div",{staticStyle:{height:"3em","border-bottom":"1px solid #ccc","line-height":"3em"}},[t("span",{staticStyle:{"margin-left":"30px"}},[e._v("身份核查查询")])]),e._v(" "),t("el-form-item",{staticStyle:{"margin-left":"30px","margin-top":"20px"},attrs:{label:"查询项目:"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.$set(e.form,"resource",a)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"姓名、身份证"},on:{change:e.nameId_radio}}),e._v(" "),t("el-radio",{attrs:{label:"姓名、手机号"},on:{change:e.namePhone_radio}}),e._v(" "),t("el-radio",{attrs:{label:"姓名、身份证、手机号"},on:{change:e.nameCardPhone_radio}}),e._v(" "),t("el-radio",{attrs:{label:"姓名、身份证、银行卡、手机号"},on:{change:e.nameCardBankPhone_radio}})],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameId,expression:"nameId"}]},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名:",prop:"nameCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.nameCheck,callback:function(a){e.$set(e.form,"nameCheck",a)},expression:"form.nameCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"身份证:",prop:"idCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.idCheck,callback:function(a){e.$set(e.form,"idCheck",a)},expression:"form.idCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-button",{staticStyle:{background:"#3c88f6"},attrs:{type:"primary"},on:{click:function(a){e.onSubmit_nameId("form")}}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.namePhone,expression:"namePhone"}]},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:4}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名:",prop:"nameCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.nameCheck,callback:function(a){e.$set(e.form,"nameCheck",a)},expression:"form.nameCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"手机号:",prop:"phoneCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.phoneCheck,callback:function(a){e.$set(e.form,"phoneCheck",a)},expression:"form.phoneCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-button",{staticStyle:{background:"#3c88f6"},attrs:{type:"primary"},on:{click:function(a){e.onSubmit_namePhone("form")}}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameCardPhone,expression:"nameCardPhone"}]},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名:",prop:"nameCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.nameCheck,callback:function(a){e.$set(e.form,"nameCheck",a)},expression:"form.nameCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"身份证:",prop:"idCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.idCheck,callback:function(a){e.$set(e.form,"idCheck",a)},expression:"form.idCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"手机号:",prop:"phoneCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.phoneCheck,callback:function(a){e.$set(e.form,"phoneCheck",a)},expression:"form.phoneCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-button",{staticStyle:{background:"#3c88f6"},attrs:{type:"primary"},on:{click:function(a){e.onSubmit_nameCardPhone("form")}}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameCardBankPhone,expression:"nameCardBankPhone"}]},[t("el-row",{attrs:{gutter:5}},[t("el-col",{attrs:{span:4}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名:",prop:"nameCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.nameCheck,callback:function(a){e.$set(e.form,"nameCheck",a)},expression:"form.nameCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"身份证:",prop:"idCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.idCheck,callback:function(a){e.$set(e.form,"idCheck",a)},expression:"form.idCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"银行卡:",prop:"bankCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.bankCheck,callback:function(a){e.$set(e.form,"bankCheck",a)},expression:"form.bankCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"手机号:",prop:"phoneCheck"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.phoneCheck,callback:function(a){e.$set(e.form,"phoneCheck",a)},expression:"form.phoneCheck"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-form-item",[t("el-button",{staticStyle:{background:"#3c88f6"},attrs:{type:"primary"},on:{click:function(a){e.onSubmit_nameCardBankPhone("form")}}},[e._v("提交")])],1)],1)],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"searchResult"},[e._m(0),e._v(" "),[t("el-table",{staticStyle:{width:"90%","margin-left":"2%","text-align":"center","margin-top":"2%"},attrs:{data:e.searchResultExamp,border:"","header-cell-style":e.headStyle}},[t("el-table-column",{attrs:{label:"查询项目",prop:"title"}}),e._v(" "),t("el-table-column",{attrs:{label:"查询结果",prop:"result"}})],1)]],2)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticStyle:{height:"3em","line-height":"3em"}},[a("span",{staticStyle:{"margin-left":"30px"}},[this._v("身份核查结果")])])}]};var s=t("VU/8")(r,n,!1,function(e){t("tBxn")},null,null);a.default=s.exports}});