webpackJsonp([18],{"1uXd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("E8UG"),s={data:function(){return{labelPosition:"right",form:{name:"",bankCard:""},tableData:[],tableShow:!1,rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],bankCard:[{required:!0,message:"请输入银行卡号",trigger:"blur"},{validator:r.b,trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.$axios.post(this.HOST+"/api/v1/acedata",{apiCode:"acedata.user.cardPortraitB",bankcard:this.form.bankCard,name:this.form.name,type:"all"}).then(function(e){if(console.log(e.data),"登录超时"===e.data)t.$message("登录超时，请重新登录"),t.$router.push("/login");else if(""===e.data||null===e.data||"{}"===e.data)t.$message("暂无信息");else if(1==e.data.success)if("没有获取有效数据"==e.data.message)t.$message.error("没有获取有效数据"),t.tableData=[],t.tableShow=!1;else{var a=e.data.data.result;a.length>0?(t.$message.success("获取数据成功"),t.tableData=a,t.combineTable(t.tableData),t.tableShow=!0):(t.$message.success("暂无数据"),t.tableData=[],t.tableShow=!1)}else t.$message.error("异常错误"),t.tableData=[],t.tableShow=!1}).catch(function(e){t.$message.error("没有获取有效数据")})},headStyle:function(t){t.row,t.column,t.rowIndex,t.columnIndex;return"text-align:center"},combineTable:function(t){var e={bigCategoryCode:"第一列",smallCategoryCode:"第二列"};for(var a in e)for(var r=0;r<t.length;){t[r][a+"span"]=1,t[r][a+"dis"]=!1;for(var s=r+1;s<=t.length-1&&(t[r][a]==t[s][a]&&""!=t[r][a]);s++)t[r][a+"span"]++,t[r][a+"dis"]=!1,t[s][a+"span"]=1,t[s][a+"dis"]=!0;r=s}return t}},mounted:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bankCardcheckPage"},[a("div",{staticClass:"createSearch"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"100px","label-position":t.labelPosition}},[a("div",{staticStyle:{height:"3em","border-bottom":"1px solid #ccc","line-height":"3em"}},[a("span",{staticStyle:{"margin-left":"30px"}},[t._v("银联消费画像查询")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"姓名：",prop:"name"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-left":"30px"},attrs:{label:"银行卡号：",prop:"bankCard"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.bankCard,callback:function(e){t.$set(t.form,"bankCard",e)},expression:"form.bankCard"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-button",{staticClass:"buttonPrimary",attrs:{type:"primary"},on:{click:function(e){t.onSubmit("form")}}},[t._v("提交")])],1)],1)],1)],1)])],1),t._v(" "),a("div",{staticClass:"searchResult"},[t._m(0),t._v(" "),[a("div",{staticClass:"el-table_content selfTable"},[a("table",{attrs:{cellspacing:"0",cellpadding:"0"}},[t._m(1),t._v(" "),t.tableShow?a("tbody",t._l(t.tableData,function(e,r){return a("tr",[a("td",{class:{hidden:e.bigCategoryCodedis},attrs:{rowspan:e.bigCategoryCodespan}},[t._v(t._s(e.bigCategoryName))]),t._v(" "),a("td",{class:{hidden:e.smallCategoryCodedis},attrs:{rowspan:e.smallCategoryCodespan}},[t._v(t._s(e.smallCategoryName))]),t._v(" "),a("td",[t._v(t._s(e.typeName))]),t._v(" "),a("td",[t._v(t._s(e.totalDim))]),t._v(" "),a("td",[t._v(t._s(e.value))]),t._v(" "),a("td",[t._v(t._s(e.desc))])])})):a("tbody",{staticClass:"noData"},[t._m(2)])])])]],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"3em","line-height":"3em"}},[e("span",{staticStyle:{"margin-left":"30px"}},[this._v("银联消费画像查询结果")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("查询类别")]),t._v(" "),a("th",[t._v("查询项名称")]),t._v(" "),a("th",[t._v("时间范围")]),t._v(" "),a("th",[t._v("查询结果")]),t._v(" "),a("th",[t._v("备注")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"6"}},[this._v("暂无数据")])])}]};var n=a("VU/8")(s,l,!1,function(t){a("kiwh")},"data-v-d8cafde6",null);e.default=n.exports},kiwh:function(t,e){}});