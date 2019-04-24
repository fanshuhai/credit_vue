<template>
  <div class="huifa">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack1">魔蝎科技（第三方数据查询）</span>>><span @click="goBack2">魔蝎科技查询结果</span>>>运营商报告
      </div>
      <div v-if="cstatus===1" class="box">
            <div>
                <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                    运营商报告
                </h3>
                <div style="text-align: right;font-size: 10px">
                    报告编号：{{carriertitle.task_id}}
                </div>
            </div>
            <div>
                <h3 style="padding-left: 0px">
                    1.基本信息
                </h3>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">1.1 用户基本信息</h5>
                <div class="tabbox">
                    <table>
                        <tr>
                            <td>真实姓名</td>
                            <td>{{carriertitle.name}}</td>
                            <td>性别</td>
                            <td>{{carriertitle.gender}}</td>
                        </tr>
                        <tr>
                            <td>年龄</td>
                            <td>{{carriertitle.age}}岁</td>
                            <td>星座</td>
                            <td>{{carriertitle.constellation}}</td>
                        </tr>
                        <tr>
                            <td>籍贯</td>
                            <td>{{carriertitle.native_place}}</td>
                            <td>邮箱</td>
                            <td>{{carriertitle.email}}</td>
                        </tr>
                        <tr>
                            <td>身份证号</td>
                            <td>{{carriertitle.id_card}}</td>
                            <td>手机号码</td>
                            <td>{{carriertitle.mobile}}</td>
                        </tr>
                        <tr>
                            <td>手机号码归属地</td>
                            <td>{{carriertitle.phone_attribution}}</td>
                            <td>通讯地址</td>
                            <td>{{carriertitle.address}}</td>
                        </tr>
                        <tr>
                            <td>入网时长</td>
                            <td>{{carriertitle.in_time}}个月</td>
                            <td>账户余额</td>
                            <td>{{carriertitle.available_balance/100}}元</td>
                        </tr>
                    </table>
                </div>
            </div>


            <div class="table" style="padding-left: 0px">
                <span class="">用户信息检测（联系人数据）</span>
                <div class="tabbox textCenter">
                    <table>
                        <tr>
                            <td rowspan="9" width="150">用户查询信息</td>
                            <td >查询过该用户的相关企业数量</td>
                            <td>{{user_info_check.check_search_info.searched_org_cnt}}</td>
                        </tr>
                        <tr>
                            <td>查询过该用户的相关企业类型</td>
                            <td>{{user_info_check.check_search_info.searched_org_type}}</td>
                        </tr>
                        <tr>
                            <td>身份证组合过的其他姓名</td>
                            <td>{{user_info_check.check_search_info.idcard_with_other_names}}</td>
                        </tr>
                        <tr>
                            <td>身份证组合过的其他电话</td>
                            <td>{{user_info_check.check_search_info.idcard_with_other_phones}}</td>
                        </tr>
                        <tr>
                            <td>电话号码组合过其他姓名</td>
                            <td>{{user_info_check.check_search_info.phone_with_other_names}}</td>
                        </tr>
                        <tr>
                            <td>电话号码组合过其他身份证</td>
                            <td>{{user_info_check.check_search_info.phone_with_other_idcards}}</td>
                        </tr>
                        <tr>
                            <td>电话号码注册过的相关企业数量</td>
                            <td>{{user_info_check.check_search_info.register_org_cnt}}</td>
                        </tr>
                        <tr>
                            <td>电话号码注册过的相关企业类型</td>
                            <td>{{user_info_check.check_search_info.register_org_type}}</td>
                        </tr>
                        <tr>
                            <td>电话号码出现过的公开信息网站</td>
                            <td>{{user_info_check.check_search_info.arised_open_web}}</td>
                        </tr>

                    </table>
                </div>
            </div>


            <div class="table" style="padding-left: 0px">
                <span class="">用户信息检测（黑名单）</span>
                <div class="tabbox  textCenter">
                    <table>
                        <tr>
                            <td rowspan="9" width="150">黑名单信息</td>
                            <td >黑中介分数</td>
                            <td>{{user_info_check.check_black_info.phone_gray_score}}</td>
                        </tr>
                        <tr>
                            <td>直接联系人中黑名单人数</td>
                            <td>{{user_info_check.check_black_info.contacts_class1_blacklist_cnt}}</td>
                        </tr>
                        <tr>
                            <td>间接联系人中黑名单人数</td>
                            <td>{{user_info_check.check_black_info.contacts_class2_blacklist_cnt}}</td>
                        </tr>
                        <tr>
                            <td>直接联系人人数</td>
                            <td>{{user_info_check.check_black_info.contacts_class1_cnt}}</td>
                        </tr>
                        <tr>
                            <td>引起黑名单的直接联系人数量</td>
                            <td>{{user_info_check.check_black_info.contacts_router_cnt}}</td>
                        </tr>
                        <tr>
                            <td>直接联系人中引起间接黑名单占比</td>
                            <td>{{user_info_check.check_black_info.contacts_router_ratio}}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">1.2行为监测</h5>
                <div class="tabbox  textCenter">
                    <table>
                        <tr>
                            <th>分析点</th>
                            <th >结果</th>
                            <th>证据</th>
                            <th>标记分</th>
                        </tr>
                        <tr  v-for="behavior_check in behavior_checks">
                            <td>{{behavior_check.check_point_cn}}</td>
                            <td>{{behavior_check.result}}</td>
                            <td>{{behavior_check.evidence}}</td>
                            <td>{{behavior_check.score}}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">1.3信息校验</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>检查项</th>
                            <th>结果</th>
                        </thead>
                        <tbody>
                            <tr v-for="basic_check_item in basic_check_items">
                                <td>{{basic_check_item.check}}</td>
                                <td>{{basic_check_item.result}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
            

            <div>
                <h3 style="padding-left: 0px">
                    2.通话社交
                </h3>
            </div>
            <div class="table" style="padding-left: 0px">
                <h5 class="h5">2.1社交分析摘要</h5>
                <span>朋友圈</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>魔蝎变量</th>
                            <th>近3月</th>
                            <th>近6月</th>
                            <th>备注</th>
                        </thead>
                        <tbody>

                            <tr>
                                <td>朋友圈大小</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                            </tr>
                            <tr>
                                <td>朋友圈亲密度</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                            </tr>
                            <tr>
                                <td>朋友圈中心地</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                            </tr>
                            <tr>
                                <td>朋友圈是否在本地</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                            </tr>
                            <tr>
                                <td>互通电话的号码数目</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

             <div class="table" style="padding-left: 0px">
                <span>朋友圈联系人数量</span>
                <div class="tabbox">
                    <table>
                        <tbody>

                            <tr v-for="info_peoplenum in info_peoplenums">
                                <td>{{info_peoplenum.check}}</td>
                                <td>{{info_peoplenum.result}}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>联系人Top3（近3月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>对方号码</th>
                            <th>归属地</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>被叫时长（秒）</th>
                        </thead>
                        <tbody>

                            <tr v-for="peer_num_top_list3month in peer_num_top_list3months">
                                <td>{{peer_num_top_list3month.peer_number}}</td>
                                <td>{{peer_num_top_list3month.peer_num_loc}}</td>
                                <td>{{peer_num_top_list3month.dial_cnt}}</td>
                                <td>{{peer_num_top_list3month.call_time}}</td>
                                <td>{{peer_num_top_list3month.dial_cnt}}</td>
                                <td>{{peer_num_top_list3month.dialed_cnt}}</td>
                                <td>{{peer_num_top_list3month.dial_time}}</td>
                                <td>{{peer_num_top_list3month.dialed_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>联系人Top3（近6月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>对方号码</th>
                            <th>归属地</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>被叫时长（秒）</th>
                        </thead>
                        <tbody>

                            <tr v-for="peer_num_top_list6month in peer_num_top_list6months">
                                <td>{{peer_num_top_list6month.peer_number}}</td>
                                <td>{{peer_num_top_list6month.peer_num_loc}}</td>
                                <td>{{peer_num_top_list6month.dial_cnt}}</td>
                                <td>{{peer_num_top_list6month.call_time}}</td>
                                <td>{{peer_num_top_list6month.dial_cnt}}</td>
                                <td>{{peer_num_top_list6month.dialed_cnt}}</td>
                                <td>{{peer_num_top_list6month.dial_time}}</td>
                                <td>{{peer_num_top_list6month.dialed_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>联系人号码归属地Top3（近3月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>通话地</th>
                            <th>通话次数</th>
                            <th>通话号码数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>被叫时长（秒）</th>
                        </thead>
                        <tbody>
                                                  
                            <tr v-for="location_top_list3month in location_top_list3months">
                                <td>{{location_top_list3month.location}}</td>
                                <td>{{location_top_list3month.call_cnt}}</td>
                                <td>{{location_top_list3month.peer_number_cnt}}</td>
                                <td>{{location_top_list3month.call_time}}</td>
                                <td>{{location_top_list3month.dial_cnt}}</td>
                                <td>{{location_top_list3month.dialed_cnt}}</td>
                                <td>{{location_top_list3month.dial_time}}</td>
                                <td>{{location_top_list3month.dialed_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>联系人号码归属地Top3（近6月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>通话地</th>
                            <th>通话次数</th>
                            <th>通话号码数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>被叫时长（秒）</th>
                        </thead>
                        <tbody>
                                                  
                            <tr v-for="location_top_list6month in location_top_list6months">
                                <td>{{location_top_list6month.location}}</td>
                                <td>{{location_top_list6month.call_cnt}}</td>
                                <td>{{location_top_list6month.peer_number_cnt}}</td>
                                <td>{{location_top_list6month.call_time}}</td>
                                <td>{{location_top_list6month.dial_cnt}}</td>
                                <td>{{location_top_list6month.dialed_cnt}}</td>
                                <td>{{location_top_list6month.dial_time}}</td>
                                <td>{{location_top_list6month.dialed_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>用户行为分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>短信次数</th>
                            <th>手机号码</th>
                            <th>流量使用</th>
                            <th>消费金额</th>
                            <th>月份</th>
                            <th>归属地</th>
                            <th>运营商</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>被叫时长（秒）</th>
                            <th>充值次数</th>
                            <th>充值金额</th>
                        </thead>
                        <tbody>

                            <tr v-for="cell_behavior in cell_behaviors">
                                <td>{{cell_behavior.sms_cnt}}</td>
                                <td>{{cell_behavior.cell_phone_num}}</td>
                                <td>{{cell_behavior.net_flow}}</td>
                                <td>{{cell_behavior.total_amount}}</td>
                                <td>{{cell_behavior.cell_mth}}</td>
                                <td>{{cell_behavior.cell_loc}}</td>
                                <td>{{cell_behavior.cell_operator_zh}}</td>
                                <td>{{cell_behavior.call_cnt}}</td>
                                <td>{{cell_behavior.call_time}}</td>
                                <td>{{cell_behavior.dial_cnt}}</td>
                                <td>{{cell_behavior.dial_time}}</td>
                                <td>{{cell_behavior.dialed_cnt}}</td>
                                <td>{{cell_behavior.dialed_time}}</td>
                                <td>{{cell_behavior.rechange_cnt}}</td>
                                <td>{{cell_behavior.rechange_amount}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
             <div class="table" style="padding-left: 0px">
                <span>亲情号通话分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近1月数量</th>
                            <th>近3月数量</th>
                            <th>近6月数量</th>
                            <th>近3月平均数量</th>
                            <th>近6月平均数量</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_family_detail in call_family_details">
                                <td>{{call_family_detail.app_point_zh}}</td>
                                <td>{{call_family_detail.item.item_1m}}</td>
                                <td>{{call_family_detail.item.item_3m}}</td>
                                <td>{{call_family_detail.item.item_6m}}</td>
                                <td>{{call_family_detail.item.avg_item_3m}}</td>
                                <td>{{call_family_detail.item.avg_item_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>通话时段（近三个月）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>通话时间段</th>
                            <th>通话次数</th>
                            <th>通话号码数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长</th>
                            <th>被叫时长</th>
                            <th>最后一次通话时间</th>
                            <th>第一次通话时间</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_duration_detail3m in call_duration_detail3ms">
                                <td>{{call_duration_detail3m.time_step_zh}}</td>
                                <td>{{call_duration_detail3m.item.total_cnt}}</td>
                                <td>{{call_duration_detail3m.item.uniq_num_cnt}}</td>
                                <td>{{call_duration_detail3m.item.total_time}}</td>
                                <td>{{call_duration_detail3m.item.dial_cnt}}</td>
                                <td>{{call_duration_detail3m.item.dialed_cnt}}</td>
                                <td>{{call_duration_detail3m.item.dial_time}}</td>
                                <td>{{call_duration_detail3m.item.dialed_time}}</td>
                                <td>{{call_duration_detail3m.item.latest_call_time}}</td>
                                <td>{{call_duration_detail3m.item.farthest_call_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>通话时段（近六个月）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>通话时间段</th>
                            <th>通话次数</th>
                            <th>通话号码数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>被叫次数</th>
                            <th>主叫时长</th>
                            <th>被叫时长</th>
                            <th>最后一次通话时间</th>
                            <th>第一次通话时间</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_duration_detail6m in call_duration_detail6ms">
                                <td>{{call_duration_detail6m.time_step_zh}}</td>
                                <td>{{call_duration_detail6m.item.total_cnt}}</td>
                                <td>{{call_duration_detail6m.item.uniq_num_cnt}}</td>
                                <td>{{call_duration_detail6m.item.total_time}}</td>
                                <td>{{call_duration_detail6m.item.dial_cnt}}</td>
                                <td>{{call_duration_detail6m.item.dialed_cnt}}</td>
                                <td>{{call_duration_detail6m.item.dial_time}}</td>
                                <td>{{call_duration_detail6m.item.dialed_time}}</td>
                                <td>{{call_duration_detail6m.item.latest_call_time}}</td>
                                <td>{{call_duration_detail6m.item.farthest_call_time}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>      


            <div class="table" style="padding-left: 0px">
                <span>联系人区域汇总（近3月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>地区名称</th>
                            <th>通话号码数</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>

                            <th>被叫次数</th>
                            <th>被叫时长（秒）</th>
                            <th>主叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>主叫平均时长（秒）</th>
                            <th>被叫平均时长（秒）</th>
                            <th>主叫次数占比</th>
                            <th>主叫时长占比</th>
                            <th>被叫次数占比</th>
                            <th>被叫时长占比</th>
                        </thead>
                        <tbody>

                            <tr v-for="contact_region3month in contact_region3months">
                                <td>{{contact_region3month.region_loc}}</td>
                                <td>{{contact_region3month.region_uniq_num_cnt}}</td>
                                <td>{{contact_region3month.region_call_cnt}}</td>
                                <td>{{contact_region3month.region_call_time}}</td>
                                <td>{{contact_region3month.region_dial_cnt}}</td>
                                <td>{{contact_region3month.region_dial_time}}</td>
                                <td>{{contact_region3month.region_dialed_cnt}}</td>
                                <td>{{contact_region3month.region_dialed_time}}</td>
                                <td>{{contact_region3month.region_avg_dial_time}}</td>
                                <td>{{contact_region3month.region_avg_dialed_time}}</td>
                                <td>{{contact_region3month.region_dial_cnt_pct}}%</td>
                                <td>{{contact_region3month.region_dial_time_pct}}%</td>
                                <td>{{contact_region3month.region_dialed_cnt_pct}}%</td>
                                <td>{{contact_region3month.region_dialed_time_pct}}%</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>



            <div class="table" style="padding-left: 0px">
                <span>联系人区域汇总（近6月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>地区名称</th>
                            <th>通话号码数</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>

                            <th>被叫次数</th>
                            <th>被叫时长（秒）</th>
                            <th>主叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>主叫平均时长（秒）</th>
                            <th>被叫平均时长（秒）</th>
                            <th>主叫次数占比</th>
                            <th>主叫时长占比</th>
                            <th>被叫次数占比</th>
                            <th>被叫时长占比</th>
                        </thead>
                        <tbody>

                            <tr v-for="contact_region6month in contact_region6months">
                                <td>{{contact_region6month.region_loc}}</td>
                                <td>{{contact_region6month.region_uniq_num_cnt}}</td>
                                <td>{{contact_region6month.region_call_cnt}}</td>
                                <td>{{contact_region6month.region_call_time}}</td>
                                <td>{{contact_region6month.region_dial_cnt}}</td>
                                <td>{{contact_region6month.region_dial_time}}</td>
                                <td>{{contact_region6month.region_dialed_cnt}}</td>
                                <td>{{contact_region6month.region_dialed_time}}</td>
                                <td>{{contact_region6month.region_avg_dial_time}}</td>
                                <td>{{contact_region6month.region_avg_dialed_time}}</td>
                                <td>{{contact_region6month.region_dial_cnt_pct}}%</td>
                                <td>{{contact_region6month.region_dial_time_pct}}%</td>
                                <td>{{contact_region6month.region_dialed_cnt_pct}}%</td>
                                <td>{{contact_region6month.region_dialed_time_pct}}%</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>



            <div class="table" style="padding-left: 0px">
                <span>是否呼叫指定联系人号码（近6月通话次数降序）</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>姓名</th>
                            <th>号码</th>
                            <th>关系</th>
                            <th>归属地</th>
                            <th>短信</th>
                            <th>通话次数</th>
                            <th>通话时长（秒）</th>
                            <th>主叫次数</th>
                            <th>主叫时长（秒）</th>
                            <th>被叫次数</th>
                            <th>被叫时长（秒）</th>
                            <th>第一次通话时间</th>
                            <th>最后一次通话时间</th>
                        </thead>
                        <tbody>

                            <tr >
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td><td>身份证号码有效性</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
            



            <div>
                <h3 style="padding-left: 0px">
                    3.风险状况
                </h3>
            </div>
            <div class="table" style="padding-left: 0px">
                <h5 class="h5">3.1通话风险分析摘要</h5>
                <span>近一个月通话风险分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近1月通话次数</th>
                            <th>近1月通话时长（秒）</th>
                            <th>近1月主叫通话次数</th>
                            <th>近1月主叫通话时长（秒）</th>
                            <th>近1月被叫通话次数</th>
                            <th>近1月被叫通话时长（秒）</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_risk_analysi in call_risk_analysis">
                                <td>{{call_risk_analysi.analysis_desc}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_cnt_1m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_time_1m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_cnt_1m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_time_1m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_cnt_1m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_time_1m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>近三个月通话风险分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近3月通话次数</th>
                            <th>近3月通话时长（秒）</th>
                            <th>近3月主叫通话次数</th>
                            <th>近3月主叫通话时长（秒）</th>
                            <th>近3月被叫通话次数</th>
                            <th>近3月被叫通话时长（秒）</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_risk_analysi in call_risk_analysis">
                                <td>{{call_risk_analysi.analysis_desc}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_cnt_3m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_time_3m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_cnt_3m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_time_3m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_cnt_3m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_time_3m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <span>近六个月通话风险分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近6月通话次数</th>
                            <th>近6月通话时长（秒）</th>
                            <th>近6月主叫通话次数</th>
                            <th>近6月主叫通话时长（秒）</th>
                            <th>近6月被叫通话次数</th>
                            <th>近6月被叫通话时长（秒）</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_risk_analysi in call_risk_analysis">
                                <td>{{call_risk_analysi.analysis_desc}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_cnt_6m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_time_6m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_cnt_6m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dial_point.call_dial_time_6m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_cnt_6m}}</td>
                                <td>{{call_risk_analysi.analysis_point.call_analysis_dialed_point.call_dialed_time_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

            





             <div>
                <h3 style="padding-left: 0px">
                    4.活跃程度
                </h3>
            </div>
             <div class="table" style="padding-left: 0px">
                <h5 class="h5">4.1活跃分析摘要</h5>
                <span>活跃识别</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近1月数量</th>
                            <th>近3月数量</th>
                            <th>近6月数量</th>
                            <th>近3月平均数量</th>
                            <th>近6月平均数量</th>
                        </thead>
                        <tbody>

                            <tr v-for="active_degree in active_degrees">
                                <td>{{active_degree.app_point_zh}}</td>
                                <td>{{active_degree.item.item_1m}}</td>
                                <td>{{active_degree.item.item_3m}}</td>
                                <td>{{active_degree.item.item_6m}}</td>
                                <td>{{active_degree.item.avg_item_3m}}</td>
                                <td>{{active_degree.item.avg_item_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
             <div class="table" style="padding-left: 0px">
                <h5 class="h5">4.2通话活跃度分析摘要</h5>
                <span>通话活跃分析</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近1月数量</th>
                            <th>近3月数量</th>
                            <th>近6月数量</th>
                            <th>近3月平均数量</th>
                            <th>近6月平均数量</th>
                        </thead>
                        <tbody>

                            <tr v-for="call_time_detail in call_time_details">
                                <td>{{call_time_detail.app_point_zh}}</td>
                                <td>{{call_time_detail.item.item_1m}}</td>
                                <td>{{call_time_detail.item.item_3m}}</td>
                                <td>{{call_time_detail.item.item_6m}}</td>
                                <td>{{call_time_detail.item.avg_item_3m}}</td>
                                <td>{{call_time_detail.item.avg_item_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
            





             <div>
                <h3 style="padding-left: 0px">
                    5.消费情况
                </h3>
            </div>
             <div class="table" style="padding-left: 0px">
                <h5 class="h5">5.1消费分析摘要</h5>
                <span>消费识别</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>分析项</th>
                            <th>近1月数量</th>
                            <th>近3月数量</th>
                            <th>近6月数量</th>
                            <th>近3月平均数量</th>
                            <th>近6月平均数量</th>
                        </thead>
                        <tbody>

                            <tr v-for="consumption_detail in consumption_details">
                                <td>{{consumption_detail.app_point_zh}}</td>
                                <td>{{consumption_detail.item.item_1m}}</td>
                                <td>{{consumption_detail.item.item_3m}}</td>
                                <td>{{consumption_detail.item.item_6m}}</td>
                                <td>{{consumption_detail.item.avg_item_3m}}</td>
                                <td>{{consumption_detail.item.avg_item_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

             <div class="table" style="padding-left: 0px">
                <span>消费细类统计</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>消费类别</th>
                            <th>近1月</th>
                            <th>近3月</th>
                            <th>近6月</th>
                            <th>近3月均</th>
                            <th>近6月均</th>
                        </thead>
                        <tbody>

                            <tr>
                                <td>消费总金额（分）</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                                <td>消费总金额（分）</td>
                                <td>数据类别</td>
                                <td>身份证号码有效性</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
              



            <div>
                <h3 style="padding-left: 0px">
                    6.漫游详情统计
                </h3>
            </div>
             <div class="table" style="padding-left: 0px">
                <h5 class="h5">6.1漫游分析摘要</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>漫游地</th>
                            <th>近3月漫游天数</th>
                            <th>近6月漫游天数</th>
                            <th>近3月连续漫游天数</th>
                            <th>近6月连续漫游天数</th>
                            <th>近3月漫游地最大连续漫游天数</th>
                            <th>近6月漫游地最大连续漫游天数</th>
                        </thead>
                        <tbody>

                            <tr  v-for="roam_analysi in roam_analysis">
                                <td>{{roam_analysi.roam_location}}</td>
                                <td>{{roam_analysi.roam_day_cnt_3m}}</td>
                                <td>{{roam_analysi.roam_day_cnt_6m}}</td>
                                <td>{{roam_analysi.continue_roam_cnt_3m}}</td>
                                <td>{{roam_analysi.continue_roam_cnt_6m}}</td>
                                <td>{{roam_analysi.max_roam_day_cnt_3m}}</td>
                                <td>{{roam_analysi.max_roam_day_cnt_6m}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>
             <div class="table" style="padding-left: 0px">
                <h5 class="h5">6.2漫游详单</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>漫游日期</th>
                            <th>漫游地</th>
                        </thead>
                        <tbody>

                            <tr  v-for="roam_detail in roam_details">
                                <td>{{roam_detail.roam_day}}</td>
                                <td>{{roam_detail.roam_location}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

     
            <div>
                <h3 style="padding-left: 0px">
                   7.用户出行分析
                </h3>
            </div>
            <div class="table" style="padding-left: 0px">
                <h5 class="h5">7.用户出行分析</h5>
                <span>用户出行数据</span>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>目的地</th>
                            <th>出发时间</th>
                            <th>回程时间</th>
                            <th>出发地</th>
                            <th>时间段</th>
                        </thead>
                        <tbody>

                            <tr v-for="trip_info in trip_infos">
                                <td>{{trip_info.trip_dest}}</td>
                                <td>{{trip_info.trip_start_time}}</td>
                                <td>{{trip_info.trip_end_time}}</td>
                                <td>{{trip_info.trip_leave}}</td>
                                <td>{{trip_info.trip_type}}</td>
                            </tr>
                          
                        </tbody>

                    </table>
                </div>
            </div>

      </div>

      <div v-if="cstatus===2" class="nomseg">
          <span>查询成功，暂无数据</span>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
           
            return { 
              carriertitle:'',
              basic_check_items:'',
              // 行为检测
              behavior_checks:'',
              //朋友圈联系人数量
              info_peoplenums:'',
              // 联系人top3 （3月）
              peer_num_top_list3months:'',
               // 联系人top3 （6月）
              peer_num_top_list6months:'',
              // 联系人号码归属地top3 （3月）
              location_top_list3months:'',
              // 联系人号码归属地top3 （6月）
              location_top_list6months:'',
              // 用户行为分析
              cell_behaviors:'', 

              // 联系人区域汇总 （3月）
              contact_region3months:'', 

              // 联系人区域汇总 （6月）
              contact_region6months:'',
              // 通话风险分析 （1月）
              call_risk_analysis:'',
              // 活跃程度分析
              active_degrees:'',
              // 消费活跃程度分析
              consumption_details:'',
              // 通话活跃程度分析
              call_time_details:'',
              // 亲情号通话分析
              call_family_details:'',
              // 通话时段3个月
              call_duration_detail3ms:'',
              // 通话时段6个月
              call_duration_detail6ms:'',
              // 漫游地分析
              roam_analysis:'',
              // 漫游详单
              roam_details:'',
              // 用户信息检测
              user_info_check:'',
              // 用户出行
              trip_infos:'',
              cstatus:'',
            }
        },
        methods:{
          goBack(){
            this.$router.push('/moerCredit');
          },
          goBack1(){
            this.$router.push('/moxie');
          },
          goBack2(){
            this.$router.push('/moxieQuery');
          },

        },
        computed: {

        },
        mounted(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get(this.HOST+'/api/v1/carrier',{
              params:{
                account_name:localStorage.getItem('name'),
                id_number:localStorage.getItem('cardId'),
                account_mobile:localStorage.getItem('phone'),
              },
            })
            .then(res=>{
              console.log(res.data);
              if(res.data==='登录超时'){
                    this.$message('登录超时，请重新登录');
                    this.$router.push('/login');
              }else if(res.data===''||res.data===null||res.data==='{}'){
                this.$message('暂无信息');
              }else{
                let msgData=res.data;
                // const msgData=localStorage.getItem('msgData');
                // const newmsgData=JSON.parse(msgData);
                // const carrier=newmsgData.mx_carrier;
                if(typeof(msgData)!=='undefined'){
                    const yunyingshang={}
                    for(let i=0;i<msgData.report.length;i++){
                      if(msgData.report[i].key=="source_name_zh" ){
                        yunyingshang.source_name_zh=msgData.report[i].value;
                      }
                      if(msgData.report[i].key=="task_id" ){
                        yunyingshang.task_id=msgData.report[i].value;
                      }
                      if(msgData.report[i].key=="data_gain_time" ){
                        yunyingshang.data_gain_time=msgData.report[i].value;
                      }
                      if(msgData.report[i].key=="update_time" ){
                        yunyingshang.update_time=msgData.report[i].value;
                      }
                    }
                    for(let i=0;i<msgData.user_basic.length;i++){
                      if(msgData.user_basic[i].key=="name" ){
                        yunyingshang.name=msgData.user_basic[i].value;
                      }
                      if(msgData.user_basic[i].key=="id_card" ){
                        yunyingshang.id_card=msgData.user_basic[i].value;
                      }
                      if(msgData.user_basic[i].key=="gender" ){
                        yunyingshang.gender=msgData.user_basic[i].value;
                      }
                      if(msgData.user_basic[i].key=="age" ){
                        yunyingshang.age=msgData.user_basic[i].value;
                      }
                      if(msgData.user_basic[i].key=="constellation" ){
                        yunyingshang.constellation=msgData.user_basic[i].value;
                      }
                      if(msgData.user_basic[i].key=="native_place" ){
                        yunyingshang.native_place=msgData.user_basic[i].value;
                      }
                    }
                    for(let i=0;i<msgData.cell_phone.length;i++){
                      if(msgData.cell_phone[i].key=="mobile" ){
                        yunyingshang.mobile=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="reg_time" ){
                        yunyingshang.reg_time=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="in_time" ){
                        yunyingshang.in_time=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="package_name" ){
                        yunyingshang.package_name=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="bill_certification_day" ){
                        yunyingshang.bill_certification_day=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="phone_attribution" ){
                        yunyingshang.phone_attribution=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="available_balance" ){
                        yunyingshang.available_balance=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="email" ){
                        yunyingshang.email=msgData.cell_phone[i].value;
                      }
                      if(msgData.cell_phone[i].key=="address" ){
                        yunyingshang.address=msgData.cell_phone[i].value;
                      }
                    }
                    // console.log(yunyingshang);
                    const info_jioayan=[];
                    const basic_check_items_info=msgData.basic_check_items;
                    for(let i=0;i<basic_check_items_info.length;i++){
                      
                      if(basic_check_items_info[i].check_item=='idcard_check'){
                        let infor={};
                        infor.check="身份证号码有效性";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='email_check'){
                        let infor={};
                        infor.check="邮箱有效性";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='address_check'){
                        let infor={};
                        infor.check="地址有效性";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='call_data_check'){
                        let infor={};
                        infor.check="通话记录完整性";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='idcard_match'){
                        let infor={};
                        infor.check="身份证号码是否与运营商数据匹配";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='name_match'){
                        let infor={};
                        infor.check="姓名是否与运营商数据匹配";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='is_name_and_idcard_in_court_black'){
                        let infor={};
                        infor.check="申请人姓名+身份证号码是否出现在法院黑名单";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='is_name_and_idcard_in_finance_black'){
                        let infor={};
                        infor.check="申请人姓名+身份证号码是否出现在金融机构黑名单";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='is_name_and_mobile_in_finance_black'){
                        let infor={};
                        infor.check="申请人姓名+手机号码是否出现在金融机构黑名单";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='mobile_silence_3m'){
                        let infor={};
                        infor.check="号码沉默度(近3月)";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='mobile_silence_6m'){
                        let infor={};
                        infor.check="号码沉默度(近6月)";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='arrearage_risk_3m'){
                        let infor={};
                        infor.check="欠费风险度(近3月)";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='arrearage_risk_6m'){
                        let infor={};
                        infor.check="欠费风险度(近6月)";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }

                      if(basic_check_items_info[i].check_item=='binding_risk'){
                        let infor={};
                        infor.check="亲情网风险度";
                        infor.result=basic_check_items_info[i].result;

                        info_jioayan.push(infor);
                      }
                    }
                    // console.log(info_jioayan)

                    //朋友圈联系人数量
                    const info_peoplenum=[];
                    const basic_check_info_peoplenum=msgData.friend_circle.summary;
                    for(let i=0;i<basic_check_info_peoplenum.length;i++){
                      console.log(basic_check_info_peoplenum.length)
                      if(basic_check_info_peoplenum[i].key=='friend_num_3m'){
                        let infor={};
                        infor.check="近3月朋友联系数量";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='good_friend_num_3m'){
                        let infor={};
                        infor.check="近3月好朋友联系数量（联系10次以上）";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='friend_city_center_3m'){
                        let infor={};
                        infor.check="近3月朋友圈中心城市";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='is_city_match_friend_city_center_3m'){
                        let infor={};
                        infor.check="近3月朋友圈中心地是否与手机归属地一致";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='inter_peer_num_3m'){
                        let infor={};
                        infor.check="近3月互通电话号码数目";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='friend_num_6m'){
                        let infor={};
                        infor.check="近6月朋友联系数量";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='good_friend_num_6m'){
                        let infor={};
                        infor.check="近6月好朋友联系数量（联系10次以上）";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='friend_city_center_6m'){
                        let infor={};
                        infor.check="近6月朋友圈中心城市";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='is_city_match_friend_city_center_6m'){
                        let infor={};
                        infor.check="近6月朋友圈中心地是否与手机归属地一致";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }

                      if(basic_check_info_peoplenum[i].key=='inter_peer_num_6m'){
                        let infor={};
                        infor.check="近6月互通电话号码数目";
                        infor.result=basic_check_info_peoplenum[i].value;

                        info_peoplenum.push(infor);
                      }
                    }
                    // console.log(info_peoplenum);
                    
                    this.carriertitle=yunyingshang;
                    this.basic_check_items=info_jioayan;
                    // 行为检测
                    this.behavior_checks=msgData.behavior_check;
                    //朋友圈联系人数量
                    this.info_peoplenums=info_peoplenum;
                    // 联系人top3 （3月）
                    this.peer_num_top_list3months=msgData.friend_circle.peer_num_top_list[0].top_item;
                     // 联系人top3 （6月）
                    this.peer_num_top_list6months=msgData.friend_circle.peer_num_top_list[1].top_item;
                    // 联系人号码归属地top3 （3月）
                    this.location_top_list3months=msgData.friend_circle.location_top_list[0].top_item;
                    // 联系人号码归属地top3 （6月）
                    this.location_top_list6months=msgData.friend_circle.location_top_list[1].top_item;
                    // 用户行为分析
                    this.cell_behaviors=msgData.cell_behavior[0].behavior; 

                    // 联系人区域汇总 （3月）
                    this.contact_region3months=msgData.contact_region[0].region_list; 

                    // 联系人区域汇总 （6月）
                    this.contact_region6months=msgData.contact_region[1].region_list;
                    // 通话风险分析 （1月）
                    this.call_risk_analysis=msgData.call_risk_analysis;
                    // 活跃程度分析
                    this.active_degrees=msgData.active_degree;
                    // 消费活跃程度分析
                    this.consumption_details=msgData.consumption_detail;
                    // 通话活跃程度分析
                    this.call_time_details=msgData.call_time_detail;
                    // 亲情号通话分析
                    this.call_family_details=msgData.call_time_detail;
                    // 通话时段3个月
                    this.call_duration_detail3ms=msgData.call_duration_detail[0].duration_list;
                    // 通话时段6个月
                    this.call_duration_detail6ms=msgData.call_duration_detail[1].duration_list;
                    // 漫游地分析
                    this.roam_analysis=msgData.roam_analysis;
                    // 漫游详单
                    this.roam_details=msgData.roam_detail;
                    // 用户信息检测
                    this.user_info_check=msgData.user_info_check[0];
                    // 用户出行
                    this.trip_infos=msgData.trip_info;

                    this.cstatus=1;

                }else{
                    this.cstatus=2;
                }
                

              } 
            })
            .catch(error=>{
              alert('暂无服务');
              console.log(error);
                console.log(error.response);
            })
        }
    }

</script>

<style scoped>
  .huifa{
    min-height: 92.5vh;
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
    background: #fff;
    box-sizing: border-box;
  }
  .huifa_header{
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  }
  .huifa_header span{
    cursor: pointer;
  }
  .huifa_header span:hover{
    color: rgb(22,155,213)
  }
  .huifa_main{
    width: 40%;
    height: 400px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button{
      background:#3c88f6;
      height: 45px;
      width: 330px;
      border-radius:10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 40px;
      padding-left: 40px;
  }
  .wrapper_button{
    text-align:right;
    padding-right:20px;
  }

  
   h1, h2, h3, h4, h5, h6, table, tr, td {
      padding: 0;
      padding-left: 10px;
      margin: 0;
      box-sizing: border-box;
      font-size: 14px;
      white-space: nowrap;
      margin: 0 auto;
  }

  .box {
      width: 70%;
      margin: 0 auto;
      padding-bottom: 20px;
  }

  .table {
      margin: 0 auto 30px;
  }

  .tabbox {
      padding: 0;
      width: 100%;
      overflow-x: scroll;
  }

  table {
      width: 100%;
      border: 1px solid #ccc;
      border-collapse: collapse;
      margin: 0 auto;
  }

  .center {
      text-align: center;
  }

  .left {
      padding-left: 10px;
      text-align: left;
  }

  th {
      text-align: center;
      height: 30px;
      border-right: 1px solid #ccc;
  }

  .th {

      background: rgb(70, 140, 180);
  }

  table td {
      white-space: normal;
  }

  td {
      height: 30px;
      border: 1px solid #ccc;
  }

  tr:nth-child(even) {
      background: rgb(235, 235, 235)
  }

  .sort {
      height: 30px;
      line-height: 30px;
      width: 100%;
      margin: 0 auto;
      font-size: 12px;
      color: rgb(119, 119, 119);
      text-align: left;
      font-weight: 100;
      padding: 0;
  }

  h3 {
      font-size: 18px;
      font-weight: 700;
      width: 100%;
      /*margin: 30px auto;*/
  }

  .dropdown-menu {
      z-index: 10000;
  }

  .tips {
      position: fixed;
      left: 0px;
      top: -48px;
      width: 100%;
      font-size: 20px;
      color: white;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #00796B;

      transition: top 0.4s;
  }

  @media screen and (max-width: 1500px){

    .el-button{
        height: 45px;
        width: 240px;
        border-radius:4px; 
        font-size: 18px;
        letter-spacing: 40px;
        padding-left: 40px;
    }
    .wrapper_button{
      padding-right:10px;
    }
  }
</style>
