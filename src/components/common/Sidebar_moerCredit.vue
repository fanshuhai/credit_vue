<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu themeG_b" :default-active="onRoutes"  
          unique-opened  router>
            <template v-for="item1 in items">
            <!-- 判断一级菜单有子节点 -->
                <template v-if="item1.subs.length>0">
                  <el-submenu class="themeG_b" :index="item1.index" :key="item1.index">
                <!-- 判断二级菜单有子节点 -->
                    <template slot="title">
                          <i :class="item1.icon"></i><span slot="title">{{ item1.title }}</span>
                    </template>
                    <template v-for="item2 in item1.subs">
                    <!-- 判断三级菜单有子节点 -->
                        <template v-if="item2.subs.length>0">
                            <el-submenu class="themeG_b" :index="item2.index" :key="item2.index">
                                <template slot="title">
                                      <i :class="item2.icon"></i><span slot="title">{{ item2.title }}</span>
                                </template>
                                <el-menu-item class="themeG_b" v-for="item3 in item2.subs" :index="item3.index" :key="item3.index">
                                  <i :class="item3.icon"></i><span slot="title">{{ item3.title }}</span>
                                </el-menu-item>
                            </el-submenu>
                        </template>

                        <template v-else>
                          <el-menu-item class="themeG_b" :index="item2.index" :key="item2.index">
                              <i :class="item2.icon"></i><span slot="title">{{ item2.title }}</span>
                          </el-menu-item>
                        </template>
                    </template>
                  </el-submenu>
                </template>
             <!-- 判断一级菜单没有子节点 -->
                <template v-else>
                  <el-menu-item :index="item1.index" :key="item1.index">
                      <i :class="item1.icon"></i><span slot="title">{{ item1.title }}</span>
                  </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                // collapse: false,
                items: [
                    {
                        icon: 'el-icon-homePage',
                        index: 'moerCreditPersonal',
                        title: '个人征信报告',
                        // subs: [
                            
                        //         {
                        //             icon: 'el-icon-basicLine',
                        //             index: 'baseline',
                        //             title: '准入基线'
                        //         },
                        // ]
                    },
                    {
                        icon: 'el-icon-personal',
                        index: '3',
                        title: '个人信息核查',
                        subs: [
                            {
                                index: '3-1',
                                title: '身份核查',
                                subs: [
                                    {
                                        index: 'idVerification',
                                        title: '身份核查'
                                    },
                                ]
                            },
                        	
                            // 个人信息核查-个人账户核查 _ start   hedi 2018.10.12
                            {
                                index: '3-2',
                                title: '个人账户核查',
                                subs: [
                                    {
                                        index: 'bankCardCheck',
                                        title: '银行卡核查'
                                    },
                                    {
                                        index: 'unionpayPortrait',
                                        title: '银联消费画像'
                                    },
                                    {
                                        index: 'bankCardValidation',
                                        title: '银行卡有效性验证'
                                    },
                                ]
                            },
                            // -end
                        	{
                            //   personalCreditFraud
                                index: '3-3',
                                title: '个人信用反欺诈',
                                subs: [
                                    {
                                        index: 'perUnionPayVerification',
                                        title: '个人银联账单验证'
                                    },
                            		{
		                                index: 'headLendFull',
		                                title: '多头借贷全量核查'
		                            },
		                            {
		                                index: 'headLendInformation',
		                                title: '多头借贷信息核查'
		                            },
		                            {
		                                index: 'headLendOverdue',
		                                title: '多头借贷逾期核查'
		                            }
                                ]
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-frand',
                        index: '6',
                        title: '计时计费',
                        subs: [
                                {
                                    icon: 'el-icon-basicLine',
                                    index: 'billing',
                                    title: '计时计费表'
                                }
                        ]
                    },
                ],
            }
        },
        methods:{
           
        },
        computed: {
            onRoutes(){
                if(this.$route.path.replace('/','') == 'onlineReviewReport') {
                    return 'onlineReviewDetail'
                } else if(this.$route.path.replace('/','') == 'senceStrategyRule') {
                    return 'senceStrategy'
                } else if(this.$route.path.replace('/','') == 'senceStrategyHistory') {
                    return 'senceStrategy'
                } else if(this.$route.path.replace('/','') == 'senceStrategyRuleHistory') {
                    return 'senceStrategy'
                } else if(this.$route.path.replace('/','') == 'interfaceDetail') {
                    return 'admittanceStrategy'
                } else {
                    return this.$route.path.replace('/','');
                }  
            },
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
            if(sessionStorage.getItem('sideData')){
                let sideData=sessionStorage.getItem('sideData');
                let sideRoute=JSON.parse(sideData);
                this.items=sideRoute.subs;
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom:0;
    }
    .el-menu{
    	border:0 ;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 206px;
    }
    .el-menu-item.is-active{
        color: #fff;
        background: #8bd7c4;
        /*border-right: 5px solid #0b8efe;*/
    }
    .sidebar > ul {
        height:100%;
    }
</style>
