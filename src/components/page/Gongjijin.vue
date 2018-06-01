<!--suppress ALL -->
<template>
  <div>
      <div class="box">
        <div class="tabbable" name="TABLE" id="content">
            <div>
                <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                    公积金报告
                </h3>
                <div style="text-align: right;font-size: 10px">
                    报告编号：无
                </div>
            </div>
            <div class="tab-content">

                <div>
                    <h3 style="padding-left: 0px">
                        1. 基本信息
                    </h3>
                </div>

                            <div class="table" style="padding-left: 0px">
                    <h5 class="h5">1.1 用户基本信息</h5>
                    <div class="tabbox">
                        <table>
                            <tbody><tr>
                                <td>姓名：</td>
                                <td>{{userinfo.real_name}}</td>
                                <td>证件号码：</td>
                                <td>{{userinfo.certificate_number}}</td>
                                <td>证件类型：</td>
                                <td>{{userinfo.certificate_type}}</td>
                            </tr>
                            <tr>
                                <td>性别：</td>
                                <td>{{userinfo.gender}}</td>
                                <td>年龄：</td>
                                <td>{{userinfo.age}}</td>
                                <td>出生地区：</td>
                                <td>{{userinfo.native_place}}</td>
                            </tr>
                            <tr>
                                <td>邮箱：</td>
                                <td>{{userinfo.email}}</td>
                                <td>家庭地址：</td>
                                <td>{{userinfo.home_address}}</td>
                                <td>手机号码：</td>
                                <td>{{userinfo.mobile}}</td>
                            </tr>
                            <tr>
                                <td>公积金地区：</td>
                                <td>{{userinfo.description}}</td>
                                <td>单位名称：</td>
                                <td>{{userinfo.corporation_name}}</td>
                                <td>单位类型：</td>
                                <td>{{userinfo.compay_type}}</td>
                            </tr>
                        </tbody></table>
                    </div>
                </div>


                <div class="table" style="padding-left: 0px">
                    <h5 class="h5">1.2 用户基本信息校验</h5>
                    <div class="tabbox">
                        <table>
                            <tbody><tr>
                                <th style="width: 50%;">检查项</th>
                                <th>结果</th>
                            </tr>
                            <tr>
                                <td>身份证号码是否有效</td>
                                <td>{{usercheck.certificate_number_check}}</td>
                            </tr>
                            <tr>
                                <td>家庭地址与公积金地区是否匹配</td>
                                <td>{{usercheck.description_is_match_home_address}}</td>
                            </tr>
                            <tr>
                                <td>出生地区与公积金地区是否匹配</td>
                                <td>{{usercheck.native_place_is_match_description}}</td>
                            </tr>
                            <tr>
                                <td>家庭地址与出生地区是否匹配</td>
                                <td>{{usercheck.home_address_is_match_native_place}}</td>
                            </tr>

                        </tbody></table>
                    </div>
                </div>

                <div class="table" style="padding-left: 0px">
                    <h5 class="h5">1.3 账号基本信息</h5>
                    <div class="tabbox">
                        <table>
                                                    <tbody><tr>
                                <td>账号余额（元）：</td>
                                <td>{{fundinfo.balance}}</td>
                                <td>公积金存缴状态：</td>
                                <td> {{fundinfo.pay_status}}</td>
                                <td>开户日期：</td>
                                <td>{{fundinfo.begin_date}}</td>
                            </tr>
                            <tr>
                                <td>月缴金额（元）：</td>
                                <td>{{fundinfo.monthly_total_income}}</td>
                                <td>单位月缴金额（元）：</td>
                                <td>{{fundinfo.monthly_corporation_income}}</td>
                                <td>个人月缴金额（元）：</td>
                                <td>{{fundinfo.monthly_customer_income}}</td>
                            </tr>
                            <tr>
                                <td>基数（元）：</td>
                                <td>{{fundinfo.base_number}}</td>
                                <td>单位月缴比例：</td>
                                <td>{{fundinfo.corporation_ratio}}</td>
                                <td>个人月缴比例：</td>
                                <td>{{fundinfo.customer_ratio}}</td>
                            </tr>
                            <tr>
                                <td>最后缴费日期：</td>
                                <td>{{fundinfo.last_pay_date}}</td>
                                <td>最早缴费日期：</td>
                                <td>{{fundinfo.earlyest_time}}</td>
                                <td>近24个月内公积金缴费公司数：</td>
                                <td>{{fundinfo.corporation_name_num}}</td>
                            </tr>
                            <tr>
                                <td>贷款金额（元）：</td>
                                <td>{{fundinfo.loan_amount}}</td>
                                <td>贷款年限：</td>
                                <td>{{fundinfo.loan_periods}}</td>
                                <td>剩余贷款（元）：</td>
                                <td>{{fundinfo.loan_remain_amount}}</td>
                            </tr>
                        </tbody></table>
                    </div>
                </div>

                <div>
                    <h3 style="padding-left: 0px">
                        2. 缴费信息
                    </h3>
                </div>

                <div class="table" style="padding-left: 0px">
                    <h5 class="h5">2.1 月缴纳信息</h5>
                    <div class="tabbox">
                        <table>
                           <thead>
                            <tr><th>魔蝎变量</th>
                            <th>近6月</th>
                            <th>近12月</th>
                            <th>近24月</th>
                            <th>近24月均</th>

                            </tr></thead>
                            <tbody>

                            <tr>
                                <td>缴存金额（元）</td>
                                <td>{{paymentinfo.income_6}}</td>
                                <td>{{paymentinfo.income_12}}</td>
                                <td>{{paymentinfo.income_24}}</td>
                                <td>{{paymentinfo.income_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>未缴月数</td>
                                <td>{{paymentinfo.un_month_6}}</td>
                                <td>{{paymentinfo.un_month_12}}</td>
                                <td>{{paymentinfo.un_month_24}}</td>
                                <td>{{paymentinfo.un_month_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>取出金额（元）</td>
                                <td>{{paymentinfo.outcome_6}}</td>
                                <td>{{paymentinfo.outcome_12}}</td>
                                <td>{{paymentinfo.outcome_24}}</td>
                                <td>{{paymentinfo.outcome_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>取出笔数</td>
                                <td>{{paymentinfo.outcome_num_6}}</td>
                                <td>{{paymentinfo.outcome_num_12}}</td>
                                <td>{{paymentinfo.outcome_num_24}}</td>
                                <td>{{paymentinfo.outcome_num_avg_24}}</td>
                            </tr>

                            <tr>
                                <td>最大连续缴存月数</td>
                                <td>{{paymentinfo.max_month_6}}</td>
                                <td>{{paymentinfo.max_month_12}}</td>
                                <td>{{paymentinfo.max_month_24}}</td>
                                <td>{{paymentinfo.max_month_avg_24}}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 style="padding-left: 0px">
                        3. 还款信息
                    </h3>
                </div>

                <div class="table" style="padding-left: 0px">
                    <h5 class="h5">3.1 月还款信息</h5>
                    <div class="tabbox">
                        <table>
                                                    <thead>
                            <tr><th>魔蝎变量</th>
                            <th>近6月</th>
                            <th>近12月</th>
                            <th>近24月</th>
                            <th>近24月均</th>

                            </tr></thead>
                            <tbody>

                            <tr>
                                <td>还款月数</td>
                                <td>{{repayinfo.repay_month_6}}</td>
                                <td>{{repayinfo.repay_month_12}}</td>
                                <td>{{repayinfo.repay_month_24}}</td>
                                <td>{{repayinfo.repay_month_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>最大连续还款月数</td>
                                <td>{{repayinfo.repay_continues_month_6}}</td>
                                <td>{{repayinfo.repay_continues_month_12}}</td>
                                <td>{{repayinfo.repay_continues_month_24}}</td>
                                <td>{{repayinfo.repay_continues_month_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>逾期还款合同数占比(%)</td>
                                <td>{{repayinfo.delay_repay_ratio_6}}</td>
                                <td>{{repayinfo.delay_repay_ratio_12}}</td>
                                <td>{{repayinfo.delay_repay_ratio_24}}</td>
                                <td>{{repayinfo.delay_repay_ratio_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>还款合同数</td>
                                <td>{{repayinfo.repay_num_6}}</td>
                                <td>{{repayinfo.repay_num_12}}</td>
                                <td>{{repayinfo.repay_num_24}}</td>
                                <td>{{repayinfo.repay_num_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>还款金额（元）</td>
                                <td>{{repayinfo.repay_amount_6}}</td>
                                <td>{{repayinfo.repay_amount_12}}</td>
                                <td>{{repayinfo.repay_amount_24}}</td>
                                <td>{{repayinfo.repay_amount_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>还款本金（元）</td>
                                <td>{{repayinfo.repay_capital_6}}</td>
                                <td>{{repayinfo.repay_capital_12}}</td>
                                <td>{{repayinfo.repay_capital_24}}</td>
                                <td>{{repayinfo.repay_capital_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>还款利息（元）</td>
                                <td>{{repayinfo.repay_interest_6}}</td>
                                <td>{{repayinfo.repay_interest_12}}</td>
                                <td>{{repayinfo.repay_interest_24}}</td>
                                <td>{{repayinfo.repay_interest_avg_24}}</td>
                            </tr>
                            <tr>
                                <td>还款罚息（元）</td>
                                <td>{{repayinfo.repay_penalty_6}}</td>
                                <td>{{repayinfo.repay_penalty_12}}</td>
                                <td>{{repayinfo.repay_penalty_24}}</td>
                                <td>{{repayinfo.repay_penalty_avg_24}}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
    const user_info=newmsgData.mx_fund[0].user_basic_info;
    const user_check=newmsgData.mx_fund[0].user_basic_info_check;
    const fund_info=newmsgData.mx_fund[0].fund_basic_info;
    const repay_info=newmsgData.mx_fund[0].repay_info;
    const payment_info=newmsgData.mx_fund[0].payment_info;
    console.log(user_check)
    export default {
        data() {
            return {
                userinfo:user_info,
                usercheck:user_check,
                fundinfo:fund_info,
                repayinfo:repay_info,
                paymentinfo:payment_info,
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        computed: {

        },

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

    .h5 {
        width: 100%;
        height: 30px;
        margin: 0 auto;
        border-bottom: none;
        background: rgb(70, 140, 180);
        line-height: 30px;

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
