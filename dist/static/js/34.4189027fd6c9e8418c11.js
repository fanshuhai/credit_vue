webpackJsonp([34],{aQd6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mvHQ"),l=a.n(r),i={data:function(){return{radio:"1",seen_personal:!0,seen_enterprise:!1,ruleForm:{name:"龚来富",cardId:"330121196212241414",phone:"13333333333"},rules:{name:[{validator:function(e,t,a){""===t?a(new Error("请输入姓名")):a()},trigger:"blur"}],cardId:[{validator:function(e,t,a){""===t?a(new Error("请输入身份证号码")):!1===/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)?a(new Error("身份证号码不正确")):a()},trigger:"blur"}],phone:[{validator:function(e,t,a){""===t?a(new Error("请输入手机号码")):!1===/^1[0-9]{10}$/.test(t)?a(new Error("手机号码不正确")):a()},trigger:"blur"}]}}},methods:{changeContain:function(){1==this.radio?(this.seen_personal=!1,this.seen_enterprise=!0):(this.seen_personal=!0,this.seen_enterprise=!1)},huifa:function(){this.$router.push("/huifa")},tongdun:function(){this.$router.push("/tongdun")},moxieinfo:function(){this.$router.push("/moxie")},QueryResult:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$axios.get("http://10.1.2.32:9990/api/v1/search",{params:{name:t.ruleForm.name,cardId:t.ruleForm.cardId,phone:t.ruleForm.phone}}).then(function(e){if(console.log(e.data),""===e.data||null===e.data||"{}"===e.data)t.$message("暂无信息");else{var a=e.data;a=l()(a),localStorage.setItem("msgData",a),t.$router.push("/queryResult")}}).catch(function(e){alert("暂无服务"),console.log(e)})})}},computed:{}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"moerCredit"},[a("el-container",[a("el-header",[a("div",{staticClass:"header_contain"},[a("div",{staticClass:"header_title contain-center"},[a("p",[e._v("征信查询111111")])]),e._v(" "),a("div",{staticClass:"header_radio"},[a("span",[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("个人")])],1),e._v(" "),a("span",{staticStyle:{"margin-left":"40px"}},[a("el-radio",{attrs:{disabled:"",label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("企业")])],1)]),e._v(" "),e.seen_personal?a("div",{staticClass:"header_input"},[a("el-row",{attrs:{gutter:30}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-col",{attrs:{span:6}},[a("div",{},[a("span",[e._v("姓   名：")]),e._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{},[a("span",[e._v("身份证号：")]),e._v(" "),a("el-form-item",{attrs:{prop:"cardId"}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.cardId,callback:function(t){e.$set(e.ruleForm,"cardId",t)},expression:"ruleForm.cardId"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{},[a("span",[e._v("手机号码：")]),e._v(" "),a("el-form-item",{attrs:{prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{},[a("el-button",{attrs:{plain:""},on:{click:function(t){e.QueryResult("ruleForm")}}},[e._v("查询")])],1)])],1)],1)],1):e._e(),e._v(" "),e.seen_enterprise?a("div",{staticClass:"header_input header_enterprise"},[a("div",{staticClass:"qiye_name"},[a("span",[e._v("企业名称：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.input4,callback:function(t){e.input4=t},expression:"input4"}}),e._v(" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])],1),e._v(" "),a("div",{staticClass:"qiye_num"},[a("span",[e._v("纳税编号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.input5,callback:function(t){e.input5=t},expression:"input5"}})],1),e._v(" "),a("div",{staticClass:"contain-center"},[a("el-button",{attrs:{plain:""},on:{click:e.QueryResult}},[e._v("查询")])],1)]):e._e()])]),e._v(" "),a("el-main",[a("div",{staticClass:"main_contain"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content contain-center main_contain_1"},[a("p",[e._v("摩尔征信数据产品")])])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("个人信息")]),e._v(" "),a("li",[e._v("基本信息")]),e._v(" "),a("li",[e._v("学历")]),e._v(" "),a("li",[e._v("资格证书")]),e._v(" "),a("li",[e._v("投资")]),e._v(" "),a("li",[e._v("任职")]),e._v(" "),a("li",[e._v("偿付能力")])])])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("信贷信息")]),e._v(" "),a("li",[e._v("银行信贷")]),e._v(" "),a("li",[e._v("信用卡")]),e._v(" "),a("li",[e._v("担保")])])])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("司法信息")]),e._v(" "),a("li",[e._v("法律案件详情")])])])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("反欺诈信息")]),e._v(" "),a("li",[e._v("失信黑名单")]),e._v(" "),a("li",[e._v("网贷黑名单")]),e._v(" "),a("li",[e._v("高风险名单")])])])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content "},[a("ul",[a("li",[e._v("公共信息")]),e._v(" "),a("li",[e._v("网购数据")]),e._v(" "),a("li",[e._v("运营商数据")]),e._v(" "),a("li",[e._v("社保")]),e._v(" "),a("li",[e._v("公积金")]),e._v(" "),a("li",[e._v("寿险")]),e._v(" "),a("li",[e._v("车险")]),e._v(" "),a("li",[e._v("水电")]),e._v(" "),a("li",[e._v("燃气")])])])])],1)],1)]),e._v(" "),a("el-footer",[a("div",{staticClass:"footer_contain"},[a("div",{staticClass:"footer_title contain-center"},[a("p",[e._v("第三方数据合作查询")])]),e._v(" "),a("div",{staticClass:"footer_bottom"},[a("el-row",{attrs:{gutter:80}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content footer_thirdP1",on:{click:e.huifa}})]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content footer_thirdP2",on:{click:e.tongdun}})]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content footer_thirdP3",on:{click:e.moxieinfo}})])],1)],1)])])],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(e){a("mkGL")},"data-v-3284d10a",null);t.default=s.exports},mkGL:function(e,t){}});