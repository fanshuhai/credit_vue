webpackJsonp([15],{"7Sde":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("x+WD"),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"moerCredit_person"},[a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{background:"#f3f3f3"},attrs:{"element-loading-text":"查询中,请稍后...","element-loading-background":"rgba(0,0,0,0.3)"}},[a("el-container",{staticClass:"main_mo"},[a("el-header",[a("div",{staticClass:"header_contain"},[a("div",{staticClass:"header_title contain-center"},[a("p",[e._v("企业征信查询")])]),e._v(" "),a("div",{staticClass:"header_input enterReport"},[a("el-row",{attrs:{gutter:30,type:"flex",justify:"center"}},[a("el-form",{ref:"ruleForm",staticStyle:{width:"50%"},attrs:{model:e.ruleForm,rules:e.rules,inline:!0}},[a("el-col",{attrs:{span:18}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"",prop:"enterName"}},[a("el-input",{attrs:{placeholder:"请输入企业名称/企业注册号",clearable:""},model:{value:e.ruleForm.enterName,callback:function(t){e.$set(e.ruleForm,"enterName",t)},expression:"ruleForm.enterName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("div",{},[a("el-button",{on:{click:function(t){e.QueryResult("ruleForm")}}},[e._v("查询")])],1)])],1)],1)],1)])]),e._v(" "),a("el-main",[a("div",{staticClass:"main_contain_title"},[e._v("企业信用数据服务")]),e._v(" "),a("div",{staticClass:"main_contain"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("企业基本信息")]),e._v(" "),a("li",[e._v("企业分支机构")]),e._v(" "),a("li",[e._v("企业清算信息")])])])]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("股东及出资信息")]),e._v(" "),a("li",[e._v("股权出质押信息")]),e._v(" "),a("li",[e._v("行政处罚历史信息")])])])]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("企业主要人员")]),e._v(" "),a("li",[e._v("动产抵押信息")]),e._v(" "),a("li",[e._v("经营异常信息")])])])]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content"},[a("ul",[a("li",[e._v("企业对外投资")]),e._v(" "),a("li",[e._v("股权冻结信息")]),e._v(" "),a("li",[e._v("严重违法失信信息")])])])]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content "},[a("ul",[a("li",[e._v("法定代表人对外投资信息")]),e._v(" "),a("li",[e._v("法定代表人对外投资信息")]),e._v(" "),a("li",[e._v("历史变更信息")])])])])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var i=function(e){a("RtLE")},r=a("VU/8")(s.a,l,!1,i,"data-v-7c56a9dd",null);t.default=r.exports},RtLE:function(e,t){},"x+WD":function(e,t,a){"use strict";(function(e){var s=a("mvHQ"),l=a.n(s),i=a("E8UG"),r=a("8+FI");t.a={data:function(){return{loading:!1,totalMessage:"",radio:"1",ruleForm:{enterName:""},rules:{enterName:[{validator:i.d,trigger:"blur"}]},collapse:!1,isActive:!0,isActive2:!1}},components:{},methods:{QueryResult:function(t){var a=this;this.$refs[t].validate(function(t){var s={},i=e.trim(a.ruleForm.enterName);t&&(a.loading=!0,/.*[\u4e00-\u9fa5]+.*$/.test(i)?(s={apiCode:"acedata.user.basicInfoB",entName:i,accessType:"1"},localStorage.setItem("reportType","1")):(s={apiCode:"acedata.user.basicInfoB",regNo:i,accessType:"1"},localStorage.setItem("reportType","2")),localStorage.setItem("reportName",i),a.$axios.defaults.withCredentials=!0,a.$axios.post(a.HOST2+"/api/v1/acedata",s).then(function(e){if(a.loading=!1,"登录超时"===e.data)a.$message("登录超时，请重新登录"),a.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)a.$message("暂无信息");else if(!1===e.data.success)a.$message.error(e.data.message);else{var t=e.data;t=l()(t),localStorage.setItem("enReMsg",t),a.totalMessage=e.data,r.a.$emit("enReMsg",a.totalMessage),a.$router.push({path:"/enterpriseReport",query:{ruleName:i}})}}).catch(function(e){console.log(e.response)}))})},personal:function(){this.isActive=!0,this.isActive2=!1},company:function(){}},computed:{},mounted:function(){console.log(sessionStorage.getItem("inputData"))}}}).call(t,a("7t+N"))}});