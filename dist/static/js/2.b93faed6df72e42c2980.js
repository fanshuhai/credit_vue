webpackJsonp([2],{"+LW4":function(_,t){},JFsF:function(_,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={data:function(){return{carriertitle:"",basic_check_items:"",behavior_checks:"",info_peoplenums:"",peer_num_top_list3months:"",peer_num_top_list6months:"",location_top_list3months:"",location_top_list6months:"",cell_behaviors:"",contact_region3months:"",contact_region6months:"",call_risk_analysis:"",active_degrees:"",consumption_details:"",call_time_details:"",call_family_details:"",call_duration_detail3ms:"",call_duration_detail6ms:"",roam_analysis:"",roam_details:"",user_info_check:"",trip_infos:"",cstatus:""}},methods:{goBack:function(){this.$router.push("/moerCredit")},goBack1:function(){this.$router.push("/moxie")},goBack2:function(){this.$router.push("/moxieQuery")}},computed:{},mounted:function(){var _=this;this.$axios.defaults.withCredentials=!0,this.$axios.get("http://123.59.181.202:9990/api/v1/carrier",{params:{account_name:localStorage.getItem("name"),id_number:localStorage.getItem("cardId"),account_mobile:localStorage.getItem("phone")}}).then(function(t){if(console.log(t.data),"登录超时"===t.data)_.$message("登录超时，请重新登录"),_.$router.push("/login");else if(""===t.data||null===t.data||"{}"===t.data)_.$message("暂无信息");else{var e=t.data;if(void 0!==e){for(var v={},a=0;a<e.report.length;a++)"source_name_zh"==e.report[a].key&&(v.source_name_zh=e.report[a].value),"task_id"==e.report[a].key&&(v.task_id=e.report[a].value),"data_gain_time"==e.report[a].key&&(v.data_gain_time=e.report[a].value),"update_time"==e.report[a].key&&(v.update_time=e.report[a].value);for(var i=0;i<e.user_basic.length;i++)"name"==e.user_basic[i].key&&(v.name=e.user_basic[i].value),"id_card"==e.user_basic[i].key&&(v.id_card=e.user_basic[i].value),"gender"==e.user_basic[i].key&&(v.gender=e.user_basic[i].value),"age"==e.user_basic[i].key&&(v.age=e.user_basic[i].value),"constellation"==e.user_basic[i].key&&(v.constellation=e.user_basic[i].value),"native_place"==e.user_basic[i].key&&(v.native_place=e.user_basic[i].value);for(var s=0;s<e.cell_phone.length;s++)"mobile"==e.cell_phone[s].key&&(v.mobile=e.cell_phone[s].value),"reg_time"==e.cell_phone[s].key&&(v.reg_time=e.cell_phone[s].value),"in_time"==e.cell_phone[s].key&&(v.in_time=e.cell_phone[s].value),"package_name"==e.cell_phone[s].key&&(v.package_name=e.cell_phone[s].value),"bill_certification_day"==e.cell_phone[s].key&&(v.bill_certification_day=e.cell_phone[s].value),"phone_attribution"==e.cell_phone[s].key&&(v.phone_attribution=e.cell_phone[s].value),"available_balance"==e.cell_phone[s].key&&(v.available_balance=e.cell_phone[s].value),"email"==e.cell_phone[s].key&&(v.email=e.cell_phone[s].value),"address"==e.cell_phone[s].key&&(v.address=e.cell_phone[s].value);for(var l=[],c=e.basic_check_items,n=0;n<c.length;n++){if("idcard_check"==c[n].check_item){var d={check:"身份证号码有效性"};d.result=c[n].result,l.push(d)}if("email_check"==c[n].check_item){var r={check:"邮箱有效性"};r.result=c[n].result,l.push(r)}if("address_check"==c[n].check_item){var h={check:"地址有效性"};h.result=c[n].result,l.push(h)}if("call_data_check"==c[n].check_item){var o={check:"通话记录完整性"};o.result=c[n].result,l.push(o)}if("idcard_match"==c[n].check_item){var m={check:"身份证号码是否与运营商数据匹配"};m.result=c[n].result,l.push(m)}if("name_match"==c[n].check_item){var u={check:"姓名是否与运营商数据匹配"};u.result=c[n].result,l.push(u)}if("is_name_and_idcard_in_court_black"==c[n].check_item){var p={check:"申请人姓名+身份证号码是否出现在法院黑名单"};p.result=c[n].result,l.push(p)}if("is_name_and_idcard_in_finance_black"==c[n].check_item){var f={check:"申请人姓名+身份证号码是否出现在金融机构黑名单"};f.result=c[n].result,l.push(f)}if("is_name_and_mobile_in_finance_black"==c[n].check_item){var b={check:"申请人姓名+手机号码是否出现在金融机构黑名单"};b.result=c[n].result,l.push(b)}if("mobile_silence_3m"==c[n].check_item){var y={check:"号码沉默度(近3月)"};y.result=c[n].result,l.push(y)}if("mobile_silence_6m"==c[n].check_item){var k={check:"号码沉默度(近6月)"};k.result=c[n].result,l.push(k)}if("arrearage_risk_3m"==c[n].check_item){var g={check:"欠费风险度(近3月)"};g.result=c[n].result,l.push(g)}if("arrearage_risk_6m"==c[n].check_item){var x={check:"欠费风险度(近6月)"};x.result=c[n].result,l.push(x)}if("binding_risk"==c[n].check_item){var C={check:"亲情网风险度"};C.result=c[n].result,l.push(C)}}for(var S=[],$=e.friend_circle.summary,E=0;E<$.length;E++){if(console.log($.length),"friend_num_3m"==$[E].key){var w={check:"近3月朋友联系数量"};w.result=$[E].value,S.push(w)}if("good_friend_num_3m"==$[E].key){var z={check:"近3月好朋友联系数量（联系10次以上）"};z.result=$[E].value,S.push(z)}if("friend_city_center_3m"==$[E].key){var B={check:"近3月朋友圈中心城市"};B.result=$[E].value,S.push(B)}if("is_city_match_friend_city_center_3m"==$[E].key){var q={check:"近3月朋友圈中心地是否与手机归属地一致"};q.result=$[E].value,S.push(q)}if("inter_peer_num_3m"==$[E].key){var I={check:"近3月互通电话号码数目"};I.result=$[E].value,S.push(I)}if("friend_num_6m"==$[E].key){var T={check:"近6月朋友联系数量"};T.result=$[E].value,S.push(T)}if("good_friend_num_6m"==$[E].key){var F={check:"近6月好朋友联系数量（联系10次以上）"};F.result=$[E].value,S.push(F)}if("friend_city_center_6m"==$[E].key){var J={check:"近6月朋友圈中心城市"};J.result=$[E].value,S.push(J)}if("is_city_match_friend_city_center_6m"==$[E].key){var L={check:"近6月朋友圈中心地是否与手机归属地一致"};L.result=$[E].value,S.push(L)}if("inter_peer_num_6m"==$[E].key){var W={check:"近6月互通电话号码数目"};W.result=$[E].value,S.push(W)}}_.carriertitle=v,_.basic_check_items=l,_.behavior_checks=e.behavior_check,_.info_peoplenums=S,_.peer_num_top_list3months=e.friend_circle.peer_num_top_list[0].top_item,_.peer_num_top_list6months=e.friend_circle.peer_num_top_list[1].top_item,_.location_top_list3months=e.friend_circle.location_top_list[0].top_item,_.location_top_list6months=e.friend_circle.location_top_list[1].top_item,_.cell_behaviors=e.cell_behavior[0].behavior,_.contact_region3months=e.contact_region[0].region_list,_.contact_region6months=e.contact_region[1].region_list,_.call_risk_analysis=e.call_risk_analysis,_.active_degrees=e.active_degree,_.consumption_details=e.consumption_detail,_.call_time_details=e.call_time_detail,_.call_family_details=e.call_time_detail,_.call_duration_detail3ms=e.call_duration_detail[0].duration_list,_.call_duration_detail6ms=e.call_duration_detail[1].duration_list,_.roam_analysis=e.roam_analysis,_.roam_details=e.roam_detail,_.user_info_check=e.user_info_check[0],_.trip_infos=e.trip_info,_.cstatus=1}else _.cstatus=2}}).catch(function(_){alert("暂无服务"),console.log(_),console.log(_.response)})}},a={render:function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"huifa"},[e("div",{staticClass:"huifa_header"},[_._v("\n      当前位置："),e("span",{on:{click:_.goBack}},[_._v("首页")]),_._v(">>"),e("span",{on:{click:_.goBack1}},[_._v("魔蝎科技（第三方数据查询）")]),_._v(">>"),e("span",{on:{click:_.goBack2}},[_._v("魔蝎科技查询结果")]),_._v(">>运营商报告\n    ")]),_._v(" "),1===_.cstatus?e("div",{staticClass:"box"},[e("div",[e("h3",{staticStyle:{"padding-left":"0px","font-size":"25px","text-align":"center"}},[_._v("\n                  运营商报告\n              ")]),_._v(" "),e("div",{staticStyle:{"text-align":"right","font-size":"10px"}},[_._v("\n                  报告编号："+_._s(_.carriertitle.task_id)+"\n              ")])]),_._v(" "),_._m(0),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("1.1 用户基本信息")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[e("tr",[e("td",[_._v("真实姓名")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.name))]),_._v(" "),e("td",[_._v("性别")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.gender))])]),_._v(" "),e("tr",[e("td",[_._v("年龄")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.age)+"岁")]),_._v(" "),e("td",[_._v("星座")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.constellation))])]),_._v(" "),e("tr",[e("td",[_._v("籍贯")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.native_place))]),_._v(" "),e("td",[_._v("邮箱")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.email))])]),_._v(" "),e("tr",[e("td",[_._v("身份证号")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.id_card))]),_._v(" "),e("td",[_._v("手机号码")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.mobile))])]),_._v(" "),e("tr",[e("td",[_._v("手机号码归属地")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.phone_attribution))]),_._v(" "),e("td",[_._v("通讯地址")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.address))])]),_._v(" "),e("tr",[e("td",[_._v("入网时长")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.in_time)+"个月")]),_._v(" "),e("td",[_._v("账户余额")]),_._v(" "),e("td",[_._v(_._s(_.carriertitle.available_balance/100)+"元")])])])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",{},[_._v("用户信息检测（联系人数据）")]),_._v(" "),e("div",{staticClass:"tabbox textCenter"},[e("table",[e("tr",[e("td",{attrs:{rowspan:"9",width:"150"}},[_._v("用户查询信息")]),_._v(" "),e("td",[_._v("查询过该用户的相关企业数量")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.searched_org_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("查询过该用户的相关企业类型")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.searched_org_type))])]),_._v(" "),e("tr",[e("td",[_._v("身份证组合过的其他姓名")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.idcard_with_other_names))])]),_._v(" "),e("tr",[e("td",[_._v("身份证组合过的其他电话")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.idcard_with_other_phones))])]),_._v(" "),e("tr",[e("td",[_._v("电话号码组合过其他姓名")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.phone_with_other_names))])]),_._v(" "),e("tr",[e("td",[_._v("电话号码组合过其他身份证")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.phone_with_other_idcards))])]),_._v(" "),e("tr",[e("td",[_._v("电话号码注册过的相关企业数量")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.register_org_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("电话号码注册过的相关企业类型")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.register_org_type))])]),_._v(" "),e("tr",[e("td",[_._v("电话号码出现过的公开信息网站")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_search_info.arised_open_web))])])])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",{},[_._v("用户信息检测（黑名单）")]),_._v(" "),e("div",{staticClass:"tabbox  textCenter"},[e("table",[e("tr",[e("td",{attrs:{rowspan:"9",width:"150"}},[_._v("黑名单信息")]),_._v(" "),e("td",[_._v("黑中介分数")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.phone_gray_score))])]),_._v(" "),e("tr",[e("td",[_._v("直接联系人中黑名单人数")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.contacts_class1_blacklist_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("间接联系人中黑名单人数")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.contacts_class2_blacklist_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("直接联系人人数")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.contacts_class1_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("引起黑名单的直接联系人数量")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.contacts_router_cnt))])]),_._v(" "),e("tr",[e("td",[_._v("直接联系人中引起间接黑名单占比")]),_._v(" "),e("td",[_._v(_._s(_.user_info_check.check_black_info.contacts_router_ratio))])])])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("1.2行为监测")]),_._v(" "),e("div",{staticClass:"tabbox  textCenter"},[e("table",[_._m(1),_._v(" "),_._l(_.behavior_checks,function(t){return e("tr",[e("td",[_._v(_._s(t.check_point_cn))]),_._v(" "),e("td",[_._v(_._s(t.result))]),_._v(" "),e("td",[_._v(_._s(t.evidence))]),_._v(" "),e("td",[_._v(_._s(t.score))])])})],2)])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("1.3信息校验")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(2),_._v(" "),e("tbody",_._l(_.basic_check_items,function(t){return e("tr",[e("td",[_._v(_._s(t.check))]),_._v(" "),e("td",[_._v(_._s(t.result))])])}))])])]),_._v(" "),_._m(3),_._v(" "),_._m(4),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("朋友圈联系人数量")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[e("tbody",_._l(_.info_peoplenums,function(t){return e("tr",[e("td",[_._v(_._s(t.check))]),_._v(" "),e("td",[_._v(_._s(t.result))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人Top3（近3月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(5),_._v(" "),e("tbody",_._l(_.peer_num_top_list3months,function(t){return e("tr",[e("td",[_._v(_._s(t.peer_number))]),_._v(" "),e("td",[_._v(_._s(t.peer_num_loc))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.call_time))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.dialed_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人Top3（近6月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(6),_._v(" "),e("tbody",_._l(_.peer_num_top_list6months,function(t){return e("tr",[e("td",[_._v(_._s(t.peer_number))]),_._v(" "),e("td",[_._v(_._s(t.peer_num_loc))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.call_time))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.dialed_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人号码归属地Top3（近3月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(7),_._v(" "),e("tbody",_._l(_.location_top_list3months,function(t){return e("tr",[e("td",[_._v(_._s(t.location))]),_._v(" "),e("td",[_._v(_._s(t.call_cnt))]),_._v(" "),e("td",[_._v(_._s(t.peer_number_cnt))]),_._v(" "),e("td",[_._v(_._s(t.call_time))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.dialed_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人号码归属地Top3（近6月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(8),_._v(" "),e("tbody",_._l(_.location_top_list6months,function(t){return e("tr",[e("td",[_._v(_._s(t.location))]),_._v(" "),e("td",[_._v(_._s(t.call_cnt))]),_._v(" "),e("td",[_._v(_._s(t.peer_number_cnt))]),_._v(" "),e("td",[_._v(_._s(t.call_time))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.dialed_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("用户行为分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(9),_._v(" "),e("tbody",_._l(_.cell_behaviors,function(t){return e("tr",[e("td",[_._v(_._s(t.sms_cnt))]),_._v(" "),e("td",[_._v(_._s(t.cell_phone_num))]),_._v(" "),e("td",[_._v(_._s(t.net_flow))]),_._v(" "),e("td",[_._v(_._s(t.total_amount))]),_._v(" "),e("td",[_._v(_._s(t.cell_mth))]),_._v(" "),e("td",[_._v(_._s(t.cell_loc))]),_._v(" "),e("td",[_._v(_._s(t.cell_operator_zh))]),_._v(" "),e("td",[_._v(_._s(t.call_cnt))]),_._v(" "),e("td",[_._v(_._s(t.call_time))]),_._v(" "),e("td",[_._v(_._s(t.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.rechange_cnt))]),_._v(" "),e("td",[_._v(_._s(t.rechange_amount))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("亲情号通话分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(10),_._v(" "),e("tbody",_._l(_.call_family_details,function(t){return e("tr",[e("td",[_._v(_._s(t.app_point_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.item_1m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_6m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_6m))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("通话时段（近三个月）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(11),_._v(" "),e("tbody",_._l(_.call_duration_detail3ms,function(t){return e("tr",[e("td",[_._v(_._s(t.time_step_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.total_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.uniq_num_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.total_time))]),_._v(" "),e("td",[_._v(_._s(t.item.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.item.dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.item.latest_call_time))]),_._v(" "),e("td",[_._v(_._s(t.item.farthest_call_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("通话时段（近六个月）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(12),_._v(" "),e("tbody",_._l(_.call_duration_detail6ms,function(t){return e("tr",[e("td",[_._v(_._s(t.time_step_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.total_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.uniq_num_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.total_time))]),_._v(" "),e("td",[_._v(_._s(t.item.dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.item.dial_time))]),_._v(" "),e("td",[_._v(_._s(t.item.dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.item.latest_call_time))]),_._v(" "),e("td",[_._v(_._s(t.item.farthest_call_time))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人区域汇总（近3月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(13),_._v(" "),e("tbody",_._l(_.contact_region3months,function(t){return e("tr",[e("td",[_._v(_._s(t.region_loc))]),_._v(" "),e("td",[_._v(_._s(t.region_uniq_num_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_call_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_call_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.region_avg_dial_time))]),_._v(" "),e("td",[_._v(_._s(t.region_avg_dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_cnt_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dial_time_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_cnt_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_time_pct)+"%")])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("联系人区域汇总（近6月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(14),_._v(" "),e("tbody",_._l(_.contact_region6months,function(t){return e("tr",[e("td",[_._v(_._s(t.region_loc))]),_._v(" "),e("td",[_._v(_._s(t.region_uniq_num_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_call_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_call_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_cnt))]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.region_avg_dial_time))]),_._v(" "),e("td",[_._v(_._s(t.region_avg_dialed_time))]),_._v(" "),e("td",[_._v(_._s(t.region_dial_cnt_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dial_time_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_cnt_pct)+"%")]),_._v(" "),e("td",[_._v(_._s(t.region_dialed_time_pct)+"%")])])}))])])]),_._v(" "),_._m(15),_._v(" "),_._m(16),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("3.1通话风险分析摘要")]),_._v(" "),e("span",[_._v("近一个月通话风险分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(17),_._v(" "),e("tbody",_._l(_.call_risk_analysis,function(t){return e("tr",[e("td",[_._v(_._s(t.analysis_desc))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_cnt_1m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_time_1m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_cnt_1m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_time_1m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_cnt_1m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_time_1m))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("近三个月通话风险分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(18),_._v(" "),e("tbody",_._l(_.call_risk_analysis,function(t){return e("tr",[e("td",[_._v(_._s(t.analysis_desc))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_time_3m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_time_3m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_time_3m))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("近六个月通话风险分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(19),_._v(" "),e("tbody",_._l(_.call_risk_analysis,function(t){return e("tr",[e("td",[_._v(_._s(t.analysis_desc))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_cnt_6m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_time_6m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_cnt_6m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dial_point.call_dial_time_6m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_cnt_6m))]),_._v(" "),e("td",[_._v(_._s(t.analysis_point.call_analysis_dialed_point.call_dialed_time_6m))])])}))])])]),_._v(" "),_._m(20),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("4.1活跃分析摘要")]),_._v(" "),e("span",[_._v("活跃识别")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(21),_._v(" "),e("tbody",_._l(_.active_degrees,function(t){return e("tr",[e("td",[_._v(_._s(t.app_point_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.item_1m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_6m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_6m))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("4.2通话活跃度分析摘要")]),_._v(" "),e("span",[_._v("通话活跃分析")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(22),_._v(" "),e("tbody",_._l(_.call_time_details,function(t){return e("tr",[e("td",[_._v(_._s(t.app_point_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.item_1m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_6m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_6m))])])}))])])]),_._v(" "),_._m(23),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("5.1消费分析摘要")]),_._v(" "),e("span",[_._v("消费识别")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(24),_._v(" "),e("tbody",_._l(_.consumption_details,function(t){return e("tr",[e("td",[_._v(_._s(t.app_point_zh))]),_._v(" "),e("td",[_._v(_._s(t.item.item_1m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.item_6m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_3m))]),_._v(" "),e("td",[_._v(_._s(t.item.avg_item_6m))])])}))])])]),_._v(" "),_._m(25),_._v(" "),_._m(26),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("6.1漫游分析摘要")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(27),_._v(" "),e("tbody",_._l(_.roam_analysis,function(t){return e("tr",[e("td",[_._v(_._s(t.roam_location))]),_._v(" "),e("td",[_._v(_._s(t.roam_day_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.roam_day_cnt_6m))]),_._v(" "),e("td",[_._v(_._s(t.continue_roam_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.continue_roam_cnt_6m))]),_._v(" "),e("td",[_._v(_._s(t.max_roam_day_cnt_3m))]),_._v(" "),e("td",[_._v(_._s(t.max_roam_day_cnt_6m))])])}))])])]),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("6.2漫游详单")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(28),_._v(" "),e("tbody",_._l(_.roam_details,function(t){return e("tr",[e("td",[_._v(_._s(t.roam_day))]),_._v(" "),e("td",[_._v(_._s(t.roam_location))])])}))])])]),_._v(" "),_._m(29),_._v(" "),e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("7.用户出行分析")]),_._v(" "),e("span",[_._v("用户出行数据")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[_._m(30),_._v(" "),e("tbody",_._l(_.trip_infos,function(t){return e("tr",[e("td",[_._v(_._s(t.trip_dest))]),_._v(" "),e("td",[_._v(_._s(t.trip_start_time))]),_._v(" "),e("td",[_._v(_._s(t.trip_end_time))]),_._v(" "),e("td",[_._v(_._s(t.trip_leave))]),_._v(" "),e("td",[_._v(_._s(t.trip_type))])])}))])])])]):_._e(),_._v(" "),2===_.cstatus?e("div",{staticClass:"nomseg"},[e("span",[_._v("查询成功，暂无数据")])]):_._e()])},staticRenderFns:[function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  1.基本信息\n              ")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("tr",[t("th",[this._v("分析点")]),this._v(" "),t("th",[this._v("结果")]),this._v(" "),t("th",[this._v("证据")]),this._v(" "),t("th",[this._v("标记分")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("thead",[t("th",[this._v("检查项")]),this._v(" "),t("th",[this._v("结果")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  2.通话社交\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("h5",{staticClass:"h5"},[_._v("2.1社交分析摘要")]),_._v(" "),e("span",[_._v("朋友圈")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[e("thead",[e("th",[_._v("魔蝎变量")]),_._v(" "),e("th",[_._v("近3月")]),_._v(" "),e("th",[_._v("近6月")]),_._v(" "),e("th",[_._v("备注")])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("朋友圈大小")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")])]),_._v(" "),e("tr",[e("td",[_._v("朋友圈亲密度")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")])]),_._v(" "),e("tr",[e("td",[_._v("朋友圈中心地")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")])]),_._v(" "),e("tr",[e("td",[_._v("朋友圈是否在本地")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")])]),_._v(" "),e("tr",[e("td",[_._v("互通电话的号码数目")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")])])])])])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("对方号码")]),_._v(" "),e("th",[_._v("归属地")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("被叫时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("对方号码")]),_._v(" "),e("th",[_._v("归属地")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("被叫时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("通话地")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("被叫时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("通话地")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("被叫时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("短信次数")]),_._v(" "),e("th",[_._v("手机号码")]),_._v(" "),e("th",[_._v("流量使用")]),_._v(" "),e("th",[_._v("消费金额")]),_._v(" "),e("th",[_._v("月份")]),_._v(" "),e("th",[_._v("归属地")]),_._v(" "),e("th",[_._v("运营商")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("被叫时长（秒）")]),_._v(" "),e("th",[_._v("充值次数")]),_._v(" "),e("th",[_._v("充值金额")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近1月数量")]),_._v(" "),e("th",[_._v("近3月数量")]),_._v(" "),e("th",[_._v("近6月数量")]),_._v(" "),e("th",[_._v("近3月平均数量")]),_._v(" "),e("th",[_._v("近6月平均数量")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("通话时间段")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长")]),_._v(" "),e("th",[_._v("被叫时长")]),_._v(" "),e("th",[_._v("最后一次通话时间")]),_._v(" "),e("th",[_._v("第一次通话时间")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("通话时间段")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("主叫时长")]),_._v(" "),e("th",[_._v("被叫时长")]),_._v(" "),e("th",[_._v("最后一次通话时间")]),_._v(" "),e("th",[_._v("第一次通话时间")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("地区名称")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("被叫时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("主叫平均时长（秒）")]),_._v(" "),e("th",[_._v("被叫平均时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数占比")]),_._v(" "),e("th",[_._v("主叫时长占比")]),_._v(" "),e("th",[_._v("被叫次数占比")]),_._v(" "),e("th",[_._v("被叫时长占比")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("地区名称")]),_._v(" "),e("th",[_._v("通话号码数")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("被叫时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("主叫平均时长（秒）")]),_._v(" "),e("th",[_._v("被叫平均时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数占比")]),_._v(" "),e("th",[_._v("主叫时长占比")]),_._v(" "),e("th",[_._v("被叫次数占比")]),_._v(" "),e("th",[_._v("被叫时长占比")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("是否呼叫指定联系人号码（近6月通话次数降序）")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[e("thead",[e("th",[_._v("姓名")]),_._v(" "),e("th",[_._v("号码")]),_._v(" "),e("th",[_._v("关系")]),_._v(" "),e("th",[_._v("归属地")]),_._v(" "),e("th",[_._v("短信")]),_._v(" "),e("th",[_._v("通话次数")]),_._v(" "),e("th",[_._v("通话时长（秒）")]),_._v(" "),e("th",[_._v("主叫次数")]),_._v(" "),e("th",[_._v("主叫时长（秒）")]),_._v(" "),e("th",[_._v("被叫次数")]),_._v(" "),e("th",[_._v("被叫时长（秒）")]),_._v(" "),e("th",[_._v("第一次通话时间")]),_._v(" "),e("th",[_._v("最后一次通话时间")])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")])])])])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  3.风险状况\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近1月通话次数")]),_._v(" "),e("th",[_._v("近1月通话时长（秒）")]),_._v(" "),e("th",[_._v("近1月主叫通话次数")]),_._v(" "),e("th",[_._v("近1月主叫通话时长（秒）")]),_._v(" "),e("th",[_._v("近1月被叫通话次数")]),_._v(" "),e("th",[_._v("近1月被叫通话时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近3月通话次数")]),_._v(" "),e("th",[_._v("近3月通话时长（秒）")]),_._v(" "),e("th",[_._v("近3月主叫通话次数")]),_._v(" "),e("th",[_._v("近3月主叫通话时长（秒）")]),_._v(" "),e("th",[_._v("近3月被叫通话次数")]),_._v(" "),e("th",[_._v("近3月被叫通话时长（秒）")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近6月通话次数")]),_._v(" "),e("th",[_._v("近6月通话时长（秒）")]),_._v(" "),e("th",[_._v("近6月主叫通话次数")]),_._v(" "),e("th",[_._v("近6月主叫通话时长（秒）")]),_._v(" "),e("th",[_._v("近6月被叫通话次数")]),_._v(" "),e("th",[_._v("近6月被叫通话时长（秒）")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  4.活跃程度\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近1月数量")]),_._v(" "),e("th",[_._v("近3月数量")]),_._v(" "),e("th",[_._v("近6月数量")]),_._v(" "),e("th",[_._v("近3月平均数量")]),_._v(" "),e("th",[_._v("近6月平均数量")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近1月数量")]),_._v(" "),e("th",[_._v("近3月数量")]),_._v(" "),e("th",[_._v("近6月数量")]),_._v(" "),e("th",[_._v("近3月平均数量")]),_._v(" "),e("th",[_._v("近6月平均数量")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  5.消费情况\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("分析项")]),_._v(" "),e("th",[_._v("近1月数量")]),_._v(" "),e("th",[_._v("近3月数量")]),_._v(" "),e("th",[_._v("近6月数量")]),_._v(" "),e("th",[_._v("近3月平均数量")]),_._v(" "),e("th",[_._v("近6月平均数量")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"table",staticStyle:{"padding-left":"0px"}},[e("span",[_._v("消费细类统计")]),_._v(" "),e("div",{staticClass:"tabbox"},[e("table",[e("thead",[e("th",[_._v("消费类别")]),_._v(" "),e("th",[_._v("近1月")]),_._v(" "),e("th",[_._v("近3月")]),_._v(" "),e("th",[_._v("近6月")]),_._v(" "),e("th",[_._v("近3月均")]),_._v(" "),e("th",[_._v("近6月均")])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("消费总金额（分）")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")]),_._v(" "),e("td",[_._v("消费总金额（分）")]),_._v(" "),e("td",[_._v("数据类别")]),_._v(" "),e("td",[_._v("身份证号码有效性")])])])])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                  6.漫游详情统计\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("漫游地")]),_._v(" "),e("th",[_._v("近3月漫游天数")]),_._v(" "),e("th",[_._v("近6月漫游天数")]),_._v(" "),e("th",[_._v("近3月连续漫游天数")]),_._v(" "),e("th",[_._v("近6月连续漫游天数")]),_._v(" "),e("th",[_._v("近3月漫游地最大连续漫游天数")]),_._v(" "),e("th",[_._v("近6月漫游地最大连续漫游天数")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("thead",[t("th",[this._v("漫游日期")]),this._v(" "),t("th",[this._v("漫游地")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("h3",{staticStyle:{"padding-left":"0px"}},[this._v("\n                 7.用户出行分析\n              ")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("thead",[e("th",[_._v("目的地")]),_._v(" "),e("th",[_._v("出发时间")]),_._v(" "),e("th",[_._v("回程时间")]),_._v(" "),e("th",[_._v("出发地")]),_._v(" "),e("th",[_._v("时间段")])])}]};var i=e("VU/8")(v,a,!1,function(_){e("+LW4")},"data-v-4f2ab4d3",null);t.default=i.exports}});