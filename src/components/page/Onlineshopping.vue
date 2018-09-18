<!--suppress ALL -->
<template>
  <div  style="padding:0 0 20px 0;background:#fff;">
    <div  v-if="cstatus===1" class="box">
            <div>
                <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                    淘宝报告
                </h3>
                <div style="text-align: right;font-size: 10px">
                    报告编号：639672c0-8689-22e7-84c5-00163e1d50ad
                </div>
            </div>
            <div>
                <h3 style="padding-left: 0px">
                    1.基本信息
                </h3>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">1.1 用户及账号基本信息</h5>
                <div class="tabbox">
                    <table>
                        <tr>
                            <td>姓名：</td>
                            <td>{{userAndAccountBasicInfo.taobao_name}}</td>
                            <td>邮箱：</td>
                            <td>{{userAndAccountBasicInfo.taobao_email}}</td>
                        </tr>
                        <tr>
                            <td>电话号码：</td>
                            <td>{{userAndAccountBasicInfo.taobao_phone_number}}</td>
                            <td>关联支付宝账号：</td>
                            <td>{{userAndAccountBasicInfo.alipay_account}}</td>
                        </tr>
                        <tr>
                            <td>vip等级：</td>
                            <td>{{userAndAccountBasicInfo.taobao_vip_level}}</td>
                            <td>vip值：</td>
                            <td>{{userAndAccountBasicInfo.taobao_vip_count}}</td>
                        </tr>
                        <tr>
                            <td>天猫等级：</td>
                            <td>{{userAndAccountBasicInfo.tmall_level}}</td>
                            <td>天猫vip值：</td>
                            <td>{{userAndAccountBasicInfo.tmall_vip_count}}</td>
                        </tr>
                        <tr>
                            <td>天猫信誉：</td>
                            <td colspan="3">{{userAndAccountBasicInfo.tmall_apass}}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div>
                <h3 style="padding-left: 0px">
                    2.财富信息
                </h3>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">2.1 总资产</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>魔蝎变量</th>
                            <th>当前</th>

                        </thead>
                        <tbody>

                        <tr>
                            <td>账户余额（元）</td>
                            <td>{{totalssets.balance}}</td>
                        </tr>
                        <tr>
                            <td>余额宝余额（元）</td>
                            <td>{{totalssets.yue_e_bao_amt}}</td>
                        </tr>
                        <tr>
                            <td>历史累计收益(元)</td>
                            <td>{{totalssets.total_profit}}</td>
                        </tr>
                        <tr>
                            <td>花呗授信额度（元）</td>
                            <td>{{totalssets.huai_bei_limit}}</td>
                        </tr>
                        <tr>
                            <td>花呗可授信额度（元）</td>
                            <td>{{totalssets.huai_bei_can_use_limit}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 style="padding-left: 0px">
                    3.地址分析
                </h3>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">3.1 基本地点分析</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>魔蝎变量</th>
                            <th>结果</th>
                            <th>证据</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>本人收货地址变化情况</td>
                            <td>{{fundamentalPointAnalysis.self_address_change}}</td>
                            <td>使用[{{fundamentalPointAnalysis.self_address_cnt}}]个地址，平均每个地址使用[{{fundamentalPointAnalysis.avg_self_address_cnt}}]次</td>
                        </tr>
                        <tr>
                            <td>本人收货城市变化情况</td>
                            <td>{{fundamentalPointAnalysis.self_city_change}}</td>
                            <td>地址分布在[{{fundamentalPointAnalysis.self_city_cnt}}]个城市，平均每个城市使用[{{fundamentalPointAnalysis.avg_self_city_cnt}}]次</td>
                        </tr>
                        <tr>
                            <td>非本人收货地址变化情况</td>
                            <td>{{fundamentalPointAnalysis.nonself_address_change}}</td>
                            <td>使用[{{fundamentalPointAnalysis.nonself_address_cnt}}]个地址，平均每个地址使用[{{fundamentalPointAnalysis.avg_nonself_address_cnt}}]次</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">3.2 常用地址（收货次数top3）</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>魔蝎变量</th>
                            <th>top1</th>
                            <th>top2</th>
                            <th>top3</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>收货地址</td>
                            <td>{{commonlyUsedAddress.deliver_address.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_address.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_address.top3}}</td>
                        </tr>
                        <tr>
                            <td>收货城市</td>
                            <td>{{commonlyUsedAddress.deliver_city.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_city.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_city.top3}}</td>
                        </tr>
                        <tr>
                            <td>地址类型</td>
                            <td>{{commonlyUsedAddress.deliver_address_type.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_address_type.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_address_type.top3}}</td>
                        </tr>
                        <tr>
                            <td>持续使用月数</td>
                            <td>{{commonlyUsedAddress.use_month.top1}}</td>
                            <td>{{commonlyUsedAddress.use_month.top2}}</td>
                            <td>{{commonlyUsedAddress.use_month.top3}}</td>
                        </tr>
                        <tr>
                            <td>最后送货时间距今天数</td>
                            <td>{{commonlyUsedAddress.last_deliver_past_cur.top1}}</td>
                            <td>{{commonlyUsedAddress.last_deliver_past_cur.top2}}</td>
                            <td>{{commonlyUsedAddress.last_deliver_past_cur.top3}}</td>
                        </tr>
                        <tr>
                            <td>首次送货时间</td>
                            <td>{{commonlyUsedAddress.first_deliver_time.top1}}</td>
                            <td>{{commonlyUsedAddress.first_deliver_time.top2}}</td>
                            <td>{{commonlyUsedAddress.first_deliver_time.top3}}</td>
                        </tr>
                        <tr>
                            <td>最后送货时间</td>
                            <td>{{commonlyUsedAddress.last_deliver_time.top1}}</td>
                            <td>{{commonlyUsedAddress.last_deliver_time.top2}}</td>
                            <td>{{commonlyUsedAddress.last_deliver_time.top3}}</td>
                        </tr>
                        <tr>
                            <td>收货人姓名</td>
                            <td>{{commonlyUsedAddress.deliver_name.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_name.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_name.top3}}</td>
                        </tr>
                        <tr>
                            <td>收货人号码</td>
                            <td>{{commonlyUsedAddress.deliver_phone.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_phone.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_phone.top3}}</td>
                        </tr>
                        <tr>
                            <td>送货总金额（元）</td>
                            <td>{{commonlyUsedAddress.deliver_amt.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_amt.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_amt.top3}}</td>
                        </tr>
                        <tr>
                            <td>送货总次数</td>
                            <td>{{commonlyUsedAddress.deliver_cnt.top1}}</td>
                            <td>{{commonlyUsedAddress.deliver_cnt.top2}}</td>
                            <td>{{commonlyUsedAddress.deliver_cnt.top3}}</td>
                        </tr>
                        <tr>
                            <td>收货总金额（元）</td>
                            <td>{{commonlyUsedAddress.receiving_amt.top1}}</td>
                            <td>{{commonlyUsedAddress.receiving_amt.top2}}</td>
                            <td>{{commonlyUsedAddress.receiving_amt.top3}}</td>
                        </tr>
                        <tr>
                            <td>收货总次数</td>
                            <td>{{commonlyUsedAddress.receiving_cnt.top1}}</td>
                            <td>{{commonlyUsedAddress.receiving_cnt.top2}}</td>
                            <td>{{commonlyUsedAddress.receiving_cnt.top3}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">3.3 收件详细信息</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                            <th>魔蝎变量</th>
                            <th>近3月</th>
                            <th>近6月</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>最多收件人姓名</td>
                            <td>{{recepiptDetails.max_deliver_name_3}}</td>
                            <td>{{recepiptDetails.max_deliver_name_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件人电话</td>
                            <td>{{recepiptDetails.max_deliver_phone_3}}</td>
                            <td>{{recepiptDetails.max_deliver_phone_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件人联系地址</td>
                            <td>{{recepiptDetails.max_deliver_address_3}}</td>
                            <td>{{recepiptDetails.max_deliver_address_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件城市</td>
                            <td>{{recepiptDetails.max_deliver_city_3}}</td>
                            <td>{{recepiptDetails.max_deliver_city_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件人是否是默认联系人</td>
                            <td>{{recepiptDetails.is_default_3}}</td>
                            <td>{{recepiptDetails.is_default_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件人收件数</td>
                            <td>{{recepiptDetails.max_cnt_3}}</td>
                            <td>{{recepiptDetails.max_cnt_6}}</td>
                        </tr>
                        <tr>
                            <td>默认收件人收件数</td>
                            <td>{{recepiptDetails.default_deliver_cnt_3}}</td>
                            <td>{{recepiptDetails.default_deliver_cnt_6}}</td>
                        </tr>
                        <tr>
                            <td>最多收件城市收件数</td>
                            <td>{{recepiptDetails.max_deliver_city_cnt_3}}</td>
                            <td>{{recepiptDetails.max_deliver_city_cnt_6}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 style="padding-left: 0px">
                4.消费分析
            </h3>
            <div class="table" style="padding-left: 0px">
                <h5 class="h5">4.1 消费分析</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                          <tr>
                              <th>月份</th>
                              <th v-for="(val,key,index) in totalConsumption.total_consum_amt">{{key}}</th>
                          </tr>
                        </thead>
                        <tr>
                              <td>消费金额（元）</td>
                              <td v-for="(val,key,index) in totalConsumption.total_consum_amt">{{val}}</td>
                        </tr>
                        <tr>
                              <td>消费次数</td>
                              <td v-for="(val,key,index) in totalConsumption.total_consum_times">{{val}}</td>
                        </tr>
                        <tr>
                              <td>消费类别</td>
                              <td v-for="(val,key,index) in totalConsumption.total_category_cnt">{{val}}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">4.2 本人收货的消费</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                          <tr>
                              <th>月份</th>
                              <th v-for="(val,key,index) in receivingConsumption.self_consum_amt">{{key}}</th>
                          </tr>
                        </thead>
                        <tr>
                              <td>消费金额（元）</td>
                              <td v-for="(val,key,index) in receivingConsumption.self_consum_amt">{{val}}</td>
                        </tr>
                        <tr>
                              <td>消费次数</td>
                              <td v-for="(val,key,index) in receivingConsumption.self_consum_times">{{val}}</td>
                        </tr>
                        <tr>
                              <td>消费类别</td>
                              <td v-for="(val,key,index) in receivingConsumption.self_category_cnt">{{val}}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">4.3 特殊品消费</h5>
                <div class="tabbox">
                    <table>
                        <thead>
                          <tr>
                              <th>月份</th>
                              <th v-for="(val,key,index) in specialConsumption.virtual_goods_amt">{{key}}</th>
                          </tr>
                        </thead>
                        <tr>
                              <td>虚拟物品消费金额（元）</td>
                              <td v-for="(val,key,index) in specialConsumption.virtual_goods_amt">{{val}}</td>
                        </tr>
                        <tr>
                              <td>虚拟物品消费金额占比（%）</td>
                              <td v-for="(val,key,index) in specialConsumption.virtual_goods_rate">{{val}}</td>
                        </tr>
                        <tr>
                              <td>虚拟物品消费次数</td>
                              <td v-for="(val,key,index) in specialConsumption.virtual_goods_cnt">{{val}}</td>
                        </tr>
                        <tr>
                              <td>彩票消费金额（元）</td>
                              <td v-for="(val,key,index) in specialConsumption.lottery_amt">{{val}}</td>
                        </tr>
                        <tr>
                              <td>彩票消费金额占比（%）</td>
                              <td v-for="(val,key,index) in specialConsumption.lottery_rate">{{val}}</td>
                        </tr>
                        <tr>
                              <td>彩票消费笔数</td>
                              <td v-for="(val,key,index) in specialConsumption.lottery_cnt">{{val}}</td>
                        </tr>

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
                userAndAccountBasicInfo:'',
                totalssets:'',
                fundamentalPointAnalysis:'',
                commonlyUsedAddress:'',
                recepiptDetails:'',
                totalConsumption:'',
                receivingConsumption:'',
                specialConsumption:'',
                cstatus:'',

            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        created(){
           
        },
        computed: {

        },
        mounted(){

                const msgData=localStorage.getItem('msgData');
                const newmsgData=JSON.parse(msgData);
                const mxTaobao={};
                if(typeof(newmsgData.mx_taobao)!=='undefined'){
                    //1.基本信息
                    mxTaobao.basicInfo = newmsgData.mx_taobao[0].basic_info;
                    //2.财富信息
                    mxTaobao.wealthInfo = newmsgData.mx_taobao[0].wealth_info;
                    //3.地址分析
                    mxTaobao.addressAnalysis = newmsgData.mx_taobao[0].address_analysis;
                    //4.消费分析
                    mxTaobao.consumptionAnalysis = newmsgData.mx_taobao[0].consumption_analysis;

                    //1.1用户及账户基本信息
                    mxTaobao.userAndAccountBasicInfo = newmsgData.mx_taobao[0].basic_info.user_and_account_basic_info;
                    this.userAndAccountBasicInfo=mxTaobao.userAndAccountBasicInfo;

                    //2.1总资产
                    mxTaobao.totalssets = newmsgData.mx_taobao[0].wealth_info.totalssets;
                    this.totalssets=mxTaobao.totalssets;

                    //3.1基本点分析
                    mxTaobao.fundamentalPointAnalysis = newmsgData.mx_taobao[0].address_analysis.fundamental_point_analysis;
                    this.fundamentalPointAnalysis=mxTaobao.fundamentalPointAnalysis;
                    //3.2常用地址
                    mxTaobao.commonlyUsedAddress = newmsgData.mx_taobao[0].address_analysis.commonly_used_address;
                    this.commonlyUsedAddress=mxTaobao.commonlyUsedAddress;
                    //3.3收件详细地址
                    mxTaobao.recepiptDetails = newmsgData.mx_taobao[0].address_analysis.receipt_details;
                    this.recepiptDetails=mxTaobao.recepiptDetails;

                    //4.1总体消费
                    mxTaobao.totalConsumption = newmsgData.mx_taobao[0].consumption_analysis.total_consumption;
                    this.totalConsumption=mxTaobao.totalConsumption;
                    //4.2本人收货消费
                    mxTaobao.receivingConsumption = newmsgData.mx_taobao[0].consumption_analysis.receiving_consumption;
                    this.receivingConsumption=mxTaobao.receivingConsumption;
                    //4.3特殊品消费
                    mxTaobao.specialConsumption = newmsgData.mx_taobao[0].consumption_analysis.special_consumption;
                    this.specialConsumption=mxTaobao.specialConsumption;
                    this.cstatus=1;
                
                }else{
                    this.cstatus=2;
                }
        }

    }

</script>

<style scoped>
    div, h1, h2, h3, h4, h5, h6, table, tr, td {
        padding: 0;
        padding-left: 10px;
        margin: 0;
        box-sizing: border-box;
        font-size: 14px;
        white-space: nowrap;
        margin: 0 auto;
    }

    .box {
        width: 100%;
        background: #fff;
        width: 95%;

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
        white-space:normal;
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
</style>
