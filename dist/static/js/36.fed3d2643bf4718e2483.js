webpackJsonp([36],{EwBw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("E8UG"),l={data:function(){return{labelPosition:"right",form:{name:"",bankCard:"",tradeTime1:"",tradeTime2:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],bankCard:[{required:!1,message:"请输入银行卡号",trigger:"blur"},{validator:r.b,trigger:"blur"}],tradeTime1:[{required:!0,message:"请输入查询日期",trigger:"blur"}],tradeTime2:[{required:!0,message:"请输入查询日期",trigger:"blur"}]},unionpayTableData:[]}},methods:{onSubmit:function(e){var t=this,a=this.form.tradeTime1,l=this.form.tradeTime2;this.$refs[e].validate(function(e){e&&(""==a||null==a?t.$message.error("交易起始时间不能为空！"):""==l||null==l?t.$message.error("交易结束时间不能为空！"):new Date(a).getTime()<=new Date(l).getTime()?t.$axios.post(t.HOST2+"/api/v1/acedata",{apiCode:"acedata.user.verificationB",name:t.form.name,bankcard:t.form.bankCard,beginTime:Object(r.a)(a),endTime:Object(r.a)(l)}).then(function(e){console.log(e.data),"登录超时"===e.data?(t.$message("登录超时，请重新登录"),t.$router.push("/login")):""===e.data||null===e.data||"{}"===e.data?t.$message("暂无信息"):1==e.data.success?"没有获取有效数据"==e.data.message?(t.$message.error(e.data.data),t.unionpayTableData=[]):(t.$message.success("数据查询成功"),t.unionpayTableData=e.data.data.result):(t.$message.error("异常错误"),t.unionpayTableData=[])}).catch(function(e){t.$message.error("异常错误")}):t.$message.error("交易起始时间不能大于交易结束时间！"))})},headStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return"text-align:center"},SpanMethod:function(e){e.row,e.column,e.rowIndex,e.columnIndex}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bankCardcheckPage"},[a("div",{staticClass:"createSearch"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px","label-position":e.labelPosition}},[a("div",{staticStyle:{height:"3em","border-bottom":"1px solid #ccc","line-height":"3em"}},[a("span",{staticStyle:{"margin-left":"30px"}},[e._v("个人银联账单查询")])]),e._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:15}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名：",prop:"name"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"银行卡号：",prop:"bankCard"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.bankCard,callback:function(t){e.$set(e.form,"bankCard",t)},expression:"form.bankCard"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}})],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:15}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"交易起始时间：",prop:"tradeTime1"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.tradeTime1,callback:function(t){e.$set(e.form,"tradeTime1",t)},expression:"form.tradeTime1"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"交易结束时间：",prop:"tradeTime2"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.tradeTime2,callback:function(t){e.$set(e.form,"tradeTime2",t)},expression:"form.tradeTime2"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")])],1)],1)],1)],1)])],1),e._v(" "),a("div",{staticClass:"searchResult"},[e._m(0),e._v(" "),a("div",[a("el-table",{staticClass:"tableStyle",attrs:{data:e.unionpayTableData,"header-cell-style":e.headStyle,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",prop:"transTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"交易金额（元）",prop:"transAmount"}}),e._v(" "),a("el-table-column",{attrs:{label:"币种",prop:"currency"}})],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"3em","line-height":"3em"}},[t("span",{staticStyle:{"margin-left":"30px"}},[this._v("个人银联账单查询结果")])])}]};var s=a("VU/8")(l,i,!1,function(e){a("Tbm4")},"data-v-5241b4a8",null);t.default=s.exports},Tbm4:function(e,t){}});