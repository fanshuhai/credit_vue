import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import QRCode from 'qrcode';                         //二维码
// import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/theme-green/moerCredit.css'; 
import "babel-polyfill";
import $ from 'jquery';

Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;
Vue.use(QRCode);;

// axios.defaults.baseURl='http://10.1.2.113:9990';
// axios.defaults.headers.common['Authorization']=AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
// 登录接口
   Vue.prototype.HOSTLogin='http://123.59.181.202:8071';
// 测试登录接口
//Vue.prototype.HOSTLogin='http://10.3.1.227:8071';


// Vue.prototype.HOST1='http://10.1.2.125:9990';
// // xueting
// Vue.prototype.HOST2='http://10.1.2.63:9990';
// // yuanjie
// Vue.prototype.HOST3='http://10.1.2.32:9990';
//接口ip和端口
   Vue.prototype.HOST='http://123.59.181.202:9990';
   // 小马哥
   Vue.prototype.HOST1='http://123.59.181.202:9990';
   // xueting
   Vue.prototype.HOST2='http://123.59.181.202:9990';
   // yuanjie
   Vue.prototype.HOST3='http://123.59.181.202:9990';


// 测试  接口ip和端口
//Vue.prototype.HOST='http://10.3.1.227:9990';
//Vue.prototype.HOST1='http://10.3.1.227:9990';
//// xueting
//Vue.prototype.HOST2='http://10.3.1.227:9990';
//// yuanjie
//Vue.prototype.HOST3='http://10.3.1.227:9990';

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = sessionStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');