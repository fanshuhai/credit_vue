import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/moerCreditPersonal'
            // redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/moerCredit',
                    component: resolve => require(['../components/page/MoerCredit.vue'], resolve),
                    meta: { title: '征信查询' },
                    children:[
                        {
                            path: '/moerCreditPersonal',
                            component: resolve => require(['../components/personalTotalBasic/MoerCreditPersonal.vue'], resolve),
                            meta: { title: '个人征信报告' }
                        },
                        // 个人信息核查-身份核查
                        {
                            path: '/idVerification',
                            component: resolve => require(['../components/personalIfoVe/idVerification/IdVerification.vue'], resolve),
                            meta: { title: '身份核查' }
                        },
                        // 个人信息核查-个人账户核查 _ start   hedi 2018.10.12
                        {
                            path:'/bankCardCheck',
                            component:resolve => require(['../components/personalAccountChecked/bankCardCheck.vue'], resolve),
                            meta: { title: '银行卡核查' },
                        },
                        {
                            path:'/unionpayPortrait',
                            component:resolve => require(['../components/personalAccountChecked/unionpayPortrait.vue'], resolve),
                            meta: { title: '银联消费画像' },
                        },
                        {
                            path:'/bankCardValidation',
                            component:resolve => require(['../components/personalAccountChecked/bankCardValidation.vue'], resolve),
                            meta: { title: '银行卡有效性验证' },
                        },
                        //-end
                        //个人信用反欺诈-多头借贷全量核查（zhu）
                        {
                            path:'/perUnionPayVerification',
                            component:resolve => require(['../components/page/personalCreditFraud/perUnionPayVerification.vue'], resolve),
                            meta: { title: '个人银联账单验证' },
                        },
		                {
		                    path:'/headLendFull',
		                    component:resolve => require(['../components/page/personalCreditFraud/headLendFull.vue'], resolve),
		                    meta: { title: '多头借贷全量核查' },
		                },
		                {
		                    path:'/headLendInformation',
		                    component:resolve => require(['../components/page/personalCreditFraud/headLendInformation.vue'], resolve),
		                    meta: { title: '多头借贷信息核查' },
		                },
		                {
		                    path:'/headLendOverdue',
		                    component:resolve => require(['../components/page/personalCreditFraud/headLendOverdue.vue'], resolve),
		                    meta: { title: '多头借贷逾期核查' },
		                },
                        // 计时计费表
                        {
                            path:'/billing',
                            component:resolve => require(['../components/billingOverview/Billing.vue'], resolve),
                            meta: { title: '计时计费表' },
                        }
                        
                    ]
                },
                {
                    path: '/personal',
                    component: resolve => require(['../components/personalMessage/Personal.vue'], resolve),
                    meta: { title: '信息管理' },
                    children:[
                        {
                            path:'/pMessage',
                            component:resolve=>require(['../components/personalMessage/PMessage.vue'],resolve),
                            meta: { title: '个人信息' }
                        },
                        {
                            path:'/queryLoy',
                            component:resolve=>require(['../components/personalMessage/QueryLoy.vue'],resolve),
                            meta: { title: '查询记录' }
                        },
                        {
                            path:'/changePassword',
                            component:resolve=>require(['../components/personalMessage/ChangePassword.vue'],resolve),
                            meta: { title: '修改密码' }
                        },
                    ]
                },
                {
                    path: '/moerCreditCompany',
                    component: resolve => require(['../components/page/MoerCreditCompany.vue'], resolve),
                    meta: { title: '征信查询' }
                },
                {
                    path: '/huifa',
                    component: resolve => require(['../components/outsidenet/Huifa.vue'], resolve),
                    meta: { title: '汇法网查询' },

                },
                {
                    path:'/tongdun',
                    component:resolve => require(['../components/outsidenet/Tongdun.vue'], resolve),
                    meta: { title: '同盾科技-查询' },
                },
                {
                    path:'/moxie',
                    component:resolve => require(['../components/outsidenet/Moxie.vue'], resolve),
                    meta: { title: '魔蝎科技-查询' },
                },
                {
                    path:'/moxieFund',
                    component:resolve => require(['../components/outsidenet/Moxie_fund.vue'], resolve),
                    meta: { title: '魔蝎科技-公积金报告' },
                },
                {
                    path:'/moxieSecurity',
                    component:resolve => require(['../components/outsidenet/Moxie_security.vue'], resolve),
                    meta: { title: '魔蝎科技-社保报告' },
                },
                {
                    path:'/MoxieCarinsurance',
                    component:resolve => require(['../components/outsidenet/Moxie_carinsurance.vue'], resolve),
                    meta: { title: '魔蝎科技-车险报告' },
                },
                {
                    path:'/moxieSecurity',
                    component:resolve => require(['../components/outsidenet/Moxie_security.vue'], resolve),
                    meta: { title: '魔蝎科技-车险报告' },
                },
                {
                    path:'/moxieSecurity',
                    component:resolve => require(['../components/outsidenet/Moxie_security.vue'], resolve),
                    meta: { title: '魔蝎科技-车险报告' },
                },
                {
                    path:'/moxieSecurity',
                    component:resolve => require(['../components/outsidenet/Moxie_security.vue'], resolve),
                    meta: { title: '魔蝎科技-车险报告' },
                },
                {
                    path:'/moxieTaobao',
                    component:resolve => require(['../components/outsidenet/Moxie_taobao.vue'], resolve),
                    meta: { title: '魔蝎科技-淘宝报告' },
                },
                {
                    path:'/moxieCarrier',
                    component:resolve => require(['../components/outsidenet/Moxie_carrier.vue'], resolve),
                    meta: { title: '魔蝎科技-运营商报告' },
                },
                {
                    path:'/moxieCarrier',
                    component:resolve => require(['../components/outsidenet/Moxie_carrier.vue'], resolve),
                    meta: { title: '魔蝎科技-运营商报告' },
                },
                {
                    path:'/moxieChsi',
                    component:resolve => require(['../components/outsidenet/Moxie_chsi.vue'], resolve),
                    meta: { title: '魔蝎科技-学历信息报告' },
                },
                {
                    path: '/threenQuery',
                    component: resolve => require(['../components/outsidenet/ThreenQuery.vue'], resolve),
                    meta: { title: '三网查询结果' },
                    children:[
                        {
                            path:'/huifaQuery',
                            component:resolve => require(['../components/outsidenet/HuifaQuery.vue'], resolve),
                            meta: { title: '汇法网结果-查询' },
                        },
                        {
                            path:'/tongdunQuery',
                            component:resolve => require(['../components/outsidenet/TongdunQuery.vue'], resolve),
                            meta: { title: '同盾科技结果-查询' },
                        },
                        {
                            path:'/moxieQuery',
                            component:resolve => require(['../components/outsidenet/MoxieQuery.vue'], resolve),
                            meta: { title: '魔蝎科技结果-查询' },
                        },
                    ]

                },
                {
                    path: '/totalInfo',
                    component: resolve => require(['../components/personalTotalBasic/TotalInfo.vue'], resolve),
                    meta: { title: '详细信息' },
                    children:[
                        {
                            path: '/queryResult',
                            component: resolve => require(['../components/personalTotalBasic/QueryResult.vue'], resolve),
                            meta: { title: '查询结果'}
                        },
                        {
                            path:'/perInfoBasic',
                            component:resolve => require(['../components/personalTotalBasic/PerInfoBasic.vue'], resolve),
                            meta: { title: '个人信息-基本信息' },
                        },
                        {
                            path:'/touzi',
                            component:resolve => require(['../components/personalTotalBasic/Touzi.vue'], resolve),
                            meta: { title: '个人信息-投资' },
                        },
                        {
                            path:'/renzhi',
                            component:resolve => require(['../components/personalTotalBasic/Renzhi.vue'], resolve),
                            meta: { title: '个人信息-任职' },
                        },
                        {
                            path:'/xueli',
                            component:resolve => require(['../components/personalTotalBasic/Xueli.vue'], resolve),
                            meta: { title: '个人信息-学历' },
                        },
                        {
                            path:'/lawCasedetail',
                            component:resolve => require(['../components/personalTotalBasic/LawCasedetail.vue'], resolve),
                            meta: { title: '司法信息-法律案件详情' },
                        },
                        {
                            path:'/breach_Blacklist',
                            component:resolve => require(['../components/personalTotalBasic/Breach_Blacklist.vue'], resolve),
                            meta: { title: '反欺诈信息-失信黑名单' },
                        },
                        {
                            path:'/netcredit_Blacklist',
                            component:resolve => require(['../components/personalTotalBasic/Netcredit_Blacklist.vue'], resolve),
                            meta: { title: '反欺诈信息-网贷黑名单' },
                        },
                        {
                            path:'/highrisk_list',
                            component:resolve => require(['../components/personalTotalBasic/Highrisk_list.vue'], resolve),
                            meta: { title: '反欺诈信息-高风险名单' },
                        },
                        {
                            path:'/gongjijin',
                            component:resolve => require(['../components/personalTotalBasic/Gongjijin.vue'], resolve),
                            meta: { title: '公共信息-公积金' },
                        },
                        {
                            path:'/onlineshopping',
                            component:resolve => require(['../components/personalTotalBasic/Onlineshopping.vue'], resolve),
                            meta: { title: '公共信息-网购消费' },
                        },
                        {
                            path:'/yunyingshang',
                            component:resolve => require(['../components/personalTotalBasic/Yunyingshang.vue'], resolve),
                            meta: { title: '公共信息-运营商' },
                        },
                        {
                            path:'/societysecurity',
                            component:resolve => require(['../components/personalTotalBasic/Societysecurity.vue'], resolve),
                            meta: { title: '公共信息-社保' },
                        },
                        {
                            path:'/carinsurance',
                            component:resolve => require(['../components/personalTotalBasic/Carinsurance.vue'], resolve),
                            meta: { title: '公共信息-车险' },
                        },
                    ]
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ],
   // mode:'history'
})
