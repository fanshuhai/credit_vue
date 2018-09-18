<template>
    <div class="sidebar">
<!--         <el-menu class="sidebar-el-menu" :default-active="onRoutes" 

        :collapse="collapse"  unique-opened router>
            <template v-for="item in items">
                <template>
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon" style="padding-left:40px;"></i><span slot="title" >{{ item.title }}</span>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu> -->
        <ul class="sidebar_main"> 
            <li class="personal" :class="{'active':isActive}" @click="personal">个人</li>
            <li class="company" :class="{'active2':isActive2}" @click="company">企业</li>
        </ul>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                isActive:true,
                isActive2:false,
            }
        },
        methods:{
            personal(){
                // this. isActive=true,
                // this. isActive2=false,
                // this.$router.push('moerCredit');
                alert(this.$route.path.replace('/',''))
            },
            company(){
                // this. isActive=false,
                // this. isActive2=true,
                // this.$router.push('moerCreditCompany'); 
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            },
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        },
        mounted:{

        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
    }
    .sidebar_main{
        width: 180px;
        min-height: 50px;
        height: 100%;
        padding-top: 20px;
    }
    .sidebar_main li{
        min-height: 50px;
        line-height: 50px;
        padding-left: 80px;
        color: #666;
        font-family: 'Source Han Sans CN';
        margin-bottom: 40px;
    }
    .sidebar_main .personal{
        cursor: pointer;
    }
    .sidebar_main .personal:before{
        background-image: url(../../assets/img/homepage/personal.png);
    }
    .sidebar_main .company:before{
        background-image: url(../../assets/img/homepage/company.png);
    }
    .sidebar_main li:before{
        content:'';
        width: 50px;
        height: 50px;
        background-size: 25px 25px; 
        background-repeat:no-repeat; 
        background-position: center; 
        display: inline-block;
        position: absolute;
        left: 30px;
    }
    .active,.active2{
        border-right: 5px solid #3c88f6;
    }
</style>
