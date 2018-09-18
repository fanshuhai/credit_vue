<template>
    <div class="wrapper">
        <v-head></v-head>
        <!-- <v-sidebar></v-sidebar> -->
        <div class="content-box" >
            <!-- <v-tags></v-tags> -->
            <div class="content">
                <transition name="move" mode="out-in">
                    <!-- <keep-alive> -->
                        <router-view></router-view>
                    <!-- </keep-alive> -->
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    // import vSidebar from './Sidebar.vue';
    //import vTags from './Tags.vue';
    import bus from '../common/bus';
    export default {
        data(){
            return {
                // collapse: false
            }
        },
        components:{
            //vHead, vSidebar, vTags
            vHead
        },
        // created(){
        //     // bus.$on('collapse', msg => {
        //     //     this.collapse = msg;
        //     // })
        // }
        mounted(){
            //固定totalinfo页侧边栏
          //   var sideHeight=$(".el-aside").height();
          //   $('.content-box').scroll(function(){ 
          //     var height=$(window).height();//显示的窗口的高度  
          //     var scrollTop=0; 
          //     //为了兼容IE/谷歌/火狐  
          //     if($(".content-box").scrollTop()>0){  
          //         scrollTop=$(".content-box").scrollTop();
          //     } 
    
          //     if(scrollTop+height>sideHeight){  
          //         $(".sidebar-el-menu").css({  
          //             "position":"fixed",  
          //             "left":0,  
          //             "bottom":0  
          //         });  
          //     }else{  
          //         $(".sidebar-el-menu").css({  
          //             "position":"static",  
          //         });  
          //     }  
          // })
        }
    }
</script>
<style scoped>
.content{
    padding:0 0 0 0px;
}
.content-box{
    left: 0px;
    padding: 0;
    margin: 0;
}
</style>                                     