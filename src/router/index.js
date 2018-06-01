import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/moerCredit'
            // redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    // path: '/dashboard',
                    path: '/moerCredit',
                    component: resolve => require(['../components/page/MoerCredit.vue'], resolve),
                    meta: { title: '征信查询' }
                },
                {
                    path: '/queryResult',
                    component: resolve => require(['../components/page/QueryResult.vue'], resolve),
                    meta: { title: '查询结果' }
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
                            path:'/moxie',
                            component:resolve => require(['../components/outsidenet/Moxie.vue'], resolve),
                            meta: { title: '魔蝎科技结果-查询' },
                        },
                    ]

                },
                {
                    path: '/totalInfo',
                    component: resolve => require(['../components/page/TotalInfo.vue'], resolve),
                    meta: { title: '详细信息' },
                    children:[
                        {
                            path:'/perInfoBasic',
                            component:resolve => require(['../components/page/PerInfoBasic.vue'], resolve),
                            meta: { title: '个人信息-基本信息' },
                        },
                        {
                            path:'/xueli',
                            component:resolve => require(['../components/page/Xueli.vue'], resolve),
                            meta: { title: '司法信息-法律案件详情' },
                        },
                        {
                            path:'/lawCasedetail',
                            component:resolve => require(['../components/page/LawCasedetail.vue'], resolve),
                            meta: { title: '司法信息-法律案件详情' },
                        },
                        {
                            path:'/breach_Blacklist',
                            component:resolve => require(['../components/page/Breach_Blacklist.vue'], resolve),
                            meta: { title: '反欺诈信息-失信黑名单' },
                        },
                        {
                            path:'/netcredit_Blacklist',
                            component:resolve => require(['../components/page/Netcredit_Blacklist.vue'], resolve),
                            meta: { title: '反欺诈信息-网贷黑名单' },
                        },
                        {
                            path:'/highrisk_list',
                            component:resolve => require(['../components/page/Highrisk_list.vue'], resolve),
                            meta: { title: '反欺诈信息-高风险名单' },
                        },
                        {
                            path:'/gongjijin',
                            component:resolve => require(['../components/page/Gongjijin.vue'], resolve),
                            meta: { title: '公共信息-公积金' },
                        },
                        {
                            path:'/onlineshopping',
                            component:resolve => require(['../components/page/Onlineshopping.vue'], resolve),
                            meta: { title: '公共信息-网购消费' },
                        },
                        {
                            path:'/yunyingshang',
                            component:resolve => require(['../components/page/Yunyingshang.vue'], resolve),
                            meta: { title: '公共信息-运营商' },
                        },
                        {
                            path:'/societysecurity',
                            component:resolve => require(['../components/page/Societysecurity.vue'], resolve),
                            meta: { title: '公共信息-社保' },
                        },
                        {
                            path:'/carinsurance',
                            component:resolve => require(['../components/page/Carinsurance.vue'], resolve),
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
        {
            path: '*',
            redirect: '/404'
        }
    ],
   // mode:'history'
})
