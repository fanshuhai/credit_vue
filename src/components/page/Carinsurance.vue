<template>
  <div>
    <div class="box">
            <div>
                <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                    车险报告
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
                <h5 class="h5">1.1 用户基本信息</h5>
                <div class="tabbox">
                    <table>
                        <tr>
                            <td>保单号：</td>
                            <td>魔蝎测试</td>
                            <td>被保险人：</td>
                            <td>淘宝未提供</td>
                        </tr>
                        <tr>
                            <td>投保人：</td>
                            <td>13333333333</td>
                            <td>身份证号：</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>保险公司：</td>
                            <td>0</td>
                            <td>险种名字：</td>
                            <td>西湖区湖畔花园XX号X栋</td>
                        </tr>
                        <tr>
                            <td>被保险车牌号：</td>
                            <td>18600000000</td>
                            <td>保险生效起始时间：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>保险有效终止时间：</td>
                            <td>18600000000</td>
                            <td>汽车的厂牌和型号：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>汽车发动机号：</td>
                            <td>18600000000</td>
                            <td>汽车车架号：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>被保险车牌号：</td>
                            <td>18600000000</td>
                            <td>保险生效起始时间：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>核定载重质量：</td>
                            <td>18600000000</td>
                            <td>核定座位：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>车辆类型：</td>
                            <td>18600000000</td>
                            <td>车辆使用性质：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>保单状态：</td>
                            <td>18600000000</td>
                            <td>保险生效起始时间：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>被保险车牌号：</td>
                            <td>18600000000</td>
                            <td>保单总保额：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>保单总保费：</td>
                            <td>18600000000</td>
                            <td>已支付保费：</td>
                            <td>900000000000000000</td>
                        </tr>
                        <tr>
                            <td>欠缴保费金额：</td>
                            <td>18600000000</td>
                            <td>保费支付日期：</td>
                            <td>900000000000000000</td>
                        </tr>

                        <tr>
                            <td>支付方式</td>
                            <td colspan="3">18600000000</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div>
                <h3 style="padding-left: 0px">
                    2.承保险种
                </h3>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">2.1 机动车损失保险</h5>
                <div class="tabbox">
                    <table>
                        <tbody>

                        <tr>
                            <td>承保险种：</td>
                            <td>医疗保险</td>
                            <td>保险金额：</td>
                            <td>医疗保险</td>
                            <td>保费金额：</td>
                            <td>医疗保险</td>
                        </tr>
                        <tr>
                            <td>实际支付金额：</td>
                            <td>医疗保险</td>
                            <td>承保险种费率系数：</td>
                            <td>医疗保险</td>
                            <td>费率浮动原因：</td>
                            <td>医疗保险</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div class="table" style="padding-left: 0px">
                <h5 class="h5">2.2 机动车第三者责任保险</h5>
                <div class="tabbox">
                    <table>
                        <tbody>

                        <tr>
                            <td>承保险种：</td>
                            <td>医疗保险</td>
                            <td>保险金额：</td>
                            <td>医疗保险</td>
                            <td>保费金额：</td>
                            <td>医疗保险</td>
                        </tr>
                        <tr>
                            <td>实际支付金额：</td>
                            <td>医疗保险</td>
                            <td>承保险种费率系数：</td>
                            <td>医疗保险</td>
                            <td>费率浮动原因：</td>
                            <td>医疗保险</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

      

    </div>
  </div>   
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
    const security=newmsgData.mx_security[0];
    console.log(security);
    export default {
        data() {
            return { 
              society:security,
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
