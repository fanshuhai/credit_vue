webpackJsonp([28],{NI64:function(e,t){},wIT9:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("E8UG"),r={data:function(){return{options:[{value:"24",label:"近24个月"},{value:"12",label:"近12个月"},{value:"9",label:"近9个月"},{value:"6",label:"近6个月"},{value:"3",label:"近3个月"},{value:"1",label:"近1个月"}],newQuery:{cycle:"",cellphone:""},rules:{cellphone:[{required:!0,validator:a.f,trigger:"blur"}],cycle:[{required:!0,message:"请选择时间段！",trigger:"change"}]},overdueDetail:[],content:""}},creadte:function(){},methods:{overdueQuery:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.$axios.defaults.withCredentials=!0,t.$axios.post(t.HOST2+"/api/v1/acedata",{apiCode:"acedata.user.overdueloan",cycle:t.newQuery.cycle,cellphone:t.newQuery.cellphone}).then(function(e){console.log(e.data),t.content=e.data.message,e.data.cost>0?(t.overdueDetail=e.data.data.result,t.overdueDetail.map(function(e){"0"===e.platformType?e.platformType="全部":"1"===e.platformType?e.platformType="银行":"2"===e.platformType&&(e.platformType="非银行")})):"0"!==e.data.cost&&"0.00"!==e.data.cost||(t.$message({dangerouslyUseHTMLString:!0,message:t.content,type:"error"}),t.overdueDetail=[])}).catch(function(e){})):t.$message({message:"请填写相关信息！",type:"error"})})}}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"contentFull"},[l("div",{staticClass:"newCheck"},[l("p",{staticClass:"newCheck-content"},[e._v("多头借贷逾期查询")]),e._v(" "),l("div",{staticClass:"newCheck_form"},[l("el-form",{ref:"newQuery",attrs:{rules:e.rules,inline:!0,model:e.newQuery}},[l("el-form-item",{attrs:{label:"手机号：",prop:"cellphone"}},[l("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.newQuery.cellphone,callback:function(t){e.$set(e.newQuery,"cellphone",t)},expression:"newQuery.cellphone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"时间段：",prop:"cycle"}},[l("el-select",{model:{value:e.newQuery.cycle,callback:function(t){e.$set(e.newQuery,"cycle",t)},expression:"newQuery.cycle"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.overdueQuery("newQuery")}}},[e._v("提交")])],1)],1)],1)]),e._v(" "),l("div",{staticClass:"queryResult"},[l("p",{staticClass:"newCheck-content newCheck-example"},[e._v("多头借贷逾期查询结果")]),e._v(" "),l("div",{staticClass:"queryResult_table"},[l("p",{staticClass:"tableTitle"},[e._v("逾期平台详情查询")]),e._v(" "),l("el-table",{attrs:{border:"",data:e.overdueDetail}},[l("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),l("el-table-column",{attrs:{label:"机构类型",prop:"platformType"}}),e._v(" "),l("el-table-column",{attrs:{label:"逾期次数",prop:"counts"}}),e._v(" "),l("el-table-column",{attrs:{label:"逾期金额区间",prop:"money"}})],1)],1)])])},staticRenderFns:[]};var o=l("VU/8")(r,n,!1,function(e){l("NI64")},"data-v-7190eef3",null);t.default=o.exports}});