<template>
    <div class="header">
        <!-- 折叠按钮 -->
       <!--  <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div> -->
        <div class="logo"></div>
        <div class="sidebar header-center">
            <el-menu :default-active="activeIndex"  mode="horizontal"   text-color="#fff" active-text-color="#fff" router>
                <el-menu-item class="intelligenceRisk" index="moerCreditPersonal">摩尔征信</el-menu-item>
                <!-- <el-menu-item index=''  class="bigScreen"><a href="123.59.181.202:9001/realtimeofcarloan/bigscreen" target="_blank">实时大屏</a></el-menu-item> -->
                <!-- <el-menu-item index="3">智能评分卡</el-menu-item> -->
                <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>  -->
                <!-- <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="2-4-1">选项1</el-menu-item>
                      <el-menu-item index="2-4-2">选项2</el-menu-item>
                      <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                  </el-submenu> -->
                <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
            </el-menu>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
               <!--  <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
                <!-- 用户头像 -->
                <div class="user-avator"><img src="static/img/me.png"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}，欢迎您！ <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                       <!--  <a href="http://blog.gdfengshuo.com/about/" target="_blank">
                            <el-dropdown-item>关于作者</el-dropdown-item>
                        </a>
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a> -->
                        <el-dropdown-item   command="pMessage">个人信息</el-dropdown-item>
                        <el-dropdown-item   command="queryEnter">查询记录</el-dropdown-item>
                        <el-dropdown-item   command="changePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                // collapse: false,
                fullscreen: false,
                name: 'admin',
                message: 2,
                activeIndex:'moerCreditPersonal',
            }
        },
        computed:{
            username(){
                let username = sessionStorage.getItem('centername');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    sessionStorage.removeItem('ms_username');
                    
                    this.$axios.defaults.withCredentials=true;
                    this.$axios.get(this.HOSTLogin+'/logout')
                    .then(res=>{
                      console.log(res.data);
                      let data=res.data;
                      if(data.status=='102'){
                        this.$message({
                            type:'success',
                            message:data.message
                        });
                      };
                    })
                    .catch(error=>{
                        // console.log(error.response);
                        if(error.response.data.status=='401'){
                           this.$message.error(data.message);
                        }
                    })

                    this.$router.push('/login');
                }else if(command=='pMessage'){
                    this.$router.push('/pMessage');

                }else if(command=='queryEnter'){
                    this.$router.push('/queryLoy');
                    
                }else if(command=='changePassword'){
                    this.$router.push('/changePassword');
                }

            },
            // 侧边栏折叠
            // collapseChage(){
            //     this.collapse = !this.collapse;
            //     bus.$emit('collapse', this.collapse);
            // },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        color: #fff;
        background: #fff;
        z-index: 999;
    }
    /*.collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 60px;
    }*/
    .header .logo{
        float: left;
        width:250px;
        height: 60px;
        line-height: 60px;
        background-image:url(../../assets/img/logo.png);
        background-size:50% 50%;
        background-repeat: no-repeat;
        background-position: center;

    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 60px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #f0f0f0;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:30px;
        height:30px;
        /*border-radius: 50%;*/
    }
    .el-dropdown-link{
        color: #606266;
        font-weight: bold;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .header-center{
        float: left;
        height: 60px;
        width: 60%;
    }
    .el-menu,.el-menu .el-menu-item,.template{
        height: 100%;
        background:#fff;
    }
    .el-menu--horizontal{
        border:0;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        /*border-bottom: 0px solid #4b7bc1 !important;
        background: #4b7bc1;*/
    }
    .el-menu .el-menu-item{
        font-size: 16px;
        font-weight: bold;
    }
    .el-menu .el-menu-item:hover,.el-menu .el-menu-item:focus,.el-menu .el-menu-item a:hover,.el-menu .el-menu-item a:focus{
        /*background: #4b7bc1 !important;*/
    }

    .bigScreen a{
        display: block;
        height:100%;
        position: relative;
        left: -30%;
        text-align: center;
        width: 160%;

    }
    .bigScreen a:hover{
        color: #30af90;
    }
    .intelligenceRisk{
        color: #30af90 !important;
        border-bottom: 2px solid #30af90 !important;
    }
    @media screen and (max-width: 1500px){
        .user-avator img{
            width:15px;
            height:15px;
        }  
    }
</style>
