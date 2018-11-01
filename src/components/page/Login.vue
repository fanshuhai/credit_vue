<template>
    <div id="login-wrap" class="login-wrap">
        <canvas id="canvas" class="canvas"></canvas>
        <div class="ms-title">大数据智能风控平台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <input class="login-msg" v-model="ruleForm.username" placeholder="用户名"></input>
                </el-form-item>
                <el-form-item prop="password">
                    <input  class="login-msg" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter="submitForm('ruleForm')"></input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <!-- <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>


<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.defaults.withCredentials=true;
                        this.$axios.get('http://123.59.181.202:8071/login',{
                          params:{
                            username:this.ruleForm.username,
                            password:this.ruleForm.password,
                          }
                        })
                        .then(res=>{
                          // console.log(res.data);
                          let data=res.data;
                          if(data.status=='101'){
                            sessionStorage.setItem('ms_username',this.ruleForm.username);
                            sessionStorage.setItem('centername',data.shiroUser.name);
                            sessionStorage.setItem('id_p',data.shiroUser.id);
                            this.$router.push('/');
                          };
                          if(data==='' || data===null || data==='{}'){
                            this.$message.error('暂无服务');
                          }
                        })
                        .catch(error=>{
                            // alert(error.response.data)
                            
                            // console.log(error.response);
                            if(error.response.data.status=='401'){
                               this.$message.error('账号密码错误');
                            } else if(error.response.data.status=='404'){
                               this.$message.error('账号被冻结');
                            }else{
                               this.$message.error('暂无服务'); 
                            }
                            if(error.response==='' || error.response===null || error.response==='{}'){
                                this.$message.error('暂无服务');
                            }
                        })
                    }
                });
            }
        },
        mounted() {
            // (function() {
            //     var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
            //     // Main
            //     initHeader();
            //     initAnimation();
            //     addListeners();

            //     function initHeader() {
            //         width = window.innerWidth;
            //         height = window.innerHeight;
            //         target = {x: width/2, y: height/2};

            //         largeHeader = document.getElementById('login-wrap');
            //         largeHeader.style.height = height+'px';

            //         canvas = document.getElementById('canvas');
            //         canvas.width = width;
            //         canvas.height = height;
            //         ctx = canvas.getContext('2d');

            //         // create points
            //         points = [];
            //         for(var x = 0; x < width; x = x + width/20) {
            //             for(var y = 0; y < height; y = y + height/20) {
            //                 var px = x + Math.random()*width/20;
            //                 var py = y + Math.random()*height/20;
            //                 var p = {x: px, originX: px, y: py, originY: py };
            //                 points.push(p);
            //             }
            //         }

            //         // for each point find the 5 closest points
            //         for(var i = 0; i < points.length; i++) {
            //             var closest = [];
            //             var p1 = points[i];
            //             for(var j = 0; j < points.length; j++) {
            //                 var p2 = points[j]
            //                 if(!(p1 == p2)) {
            //                     var placed = false;
            //                     for(var k = 0; k < 5; k++) {
            //                         if(!placed) {
            //                             if(closest[k] == undefined) {
            //                                 closest[k] = p2;
            //                                 placed = true;
            //                             }
            //                         }
            //                     }

            //                     for(var k = 0; k < 5; k++) {
            //                         if(!placed) {
            //                             if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
            //                                 closest[k] = p2;
            //                                 placed = true;
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //             p1.closest = closest;
            //         }

            //         // assign a circle to each point
            //         for(var i in points) {
            //             var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            //             points[i].circle = c;
            //         }
            //     }

            //     // Event handling
            //     function addListeners() {
            //         if(!('ontouchstart' in window)) {
            //             window.addEventListener('mousemove', mouseMove);
            //         }
            //         window.addEventListener('scroll', scrollCheck);
            //         window.addEventListener('resize', resize);
            //     }

            //     function mouseMove(e) {
            //         var posx;
            //         var posy;
            //         var posx = posy = 0;
            //         if (e.pageX || e.pageY) {
            //             posx = e.pageX;
            //             posy = e.pageY;
            //         }
            //         else if (e.clientX || e.clientY)    {
            //             posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            //             posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            //         }
            //         target.x = posx;
            //         target.y = posy;
            //     }

            //     function scrollCheck() {
            //         if(document.body.scrollTop > height) animateHeader = false;
            //         else animateHeader = true;
            //     }

            //     function resize() {
            //         width = window.innerWidth;
            //         height = window.innerHeight;
            //         largeHeader.style.height = height+'px';
            //         canvas.width = width;
            //         canvas.height = height;
            //     }

            //     // animation
            //     function initAnimation() {
            //         animate();
            //         for(var i in points) {
            //             shiftPoint(points[i]);
            //         }
            //     }

            //     function animate() {
            //         if(animateHeader) {
            //             ctx.clearRect(0,0,width,height);
            //             for(var i in points) {
            //                 // detect points in range
            //                 if(Math.abs(getDistance(target, points[i])) < 4000) {
            //                     points[i].active = 0.3;
            //                     points[i].circle.active = 0.6;
            //                 } else if(Math.abs(getDistance(target, points[i])) < 20000) {
            //                     points[i].active = 0.1;
            //                     points[i].circle.active = 0.3;
            //                 } else if(Math.abs(getDistance(target, points[i])) < 40000) {
            //                     points[i].active = 0.02;
            //                     points[i].circle.active = 0.1;
            //                 } else {
            //                     points[i].active = 0;
            //                     points[i].circle.active = 0;
            //                 }

            //                 drawLines(points[i]);
            //                 points[i].circle.draw();
            //             }
            //         }
            //         requestAnimationFrame(animate);
            //     }

            //     function shiftPoint(p) {
            //         TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            //             y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            //             onComplete: function() {
            //                 shiftPoint(p);
            //             }});
            //     }

            //     // Canvas manipulation
            //     function drawLines(p) {
            //         if(!p.active) return;
            //         for(var i in p.closest) {
            //             ctx.beginPath();
            //             ctx.moveTo(p.x, p.y);
            //             ctx.lineTo(p.closest[i].x, p.closest[i].y);
            //             ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            //             ctx.stroke();
            //         }
            //     }

            //     function Circle(pos,rad,color) {
            //         var _this = this;

            //         // constructor
            //         (function() {
            //             _this.pos = pos || null;
            //             _this.radius = rad || null;
            //             _this.color = color || null;
            //         })();

            //         this.draw = function() {
            //             if(!_this.active) return;
            //             ctx.beginPath();
            //             ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            //             ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            //             ctx.fill();
            //         };
            //     }

            //     // Util
            //     function getDistance(p1, p2) {
            //         return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            //     }
                
            // })();
        },
        // created(){
        
        // }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        min-width: 1000px;
        overflow: hidden;
        background-size: contain;
        background-position: center center;
        z-index: 1;
        background: url(../../assets/img/login-bg.jpg);
    }
    .ms-title{
        position: absolute;
        top:32%;
        left: 61.8%;
        width:100%;
        text-align: center;
        font-size: 2.5em;
        letter-spacing: 0.1em;
        color: #fff;
        -webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);

    }
    .ms-title::before {
        content: '';
        width: 10em;
        height: 6em;
        /*min-width: 3.5em;
        min-height: 3.5em;*/
        background: url(../../assets/img/logo.png) no-repeat center center;
        background-size: contain;
        position: absolute;
        right: 62%;
        top: -205%;
        /*border-radius: 50%;*/
        /*z-index: -1;*/
        /*-webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);*/
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:65%;
        -webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
        width:25vw;
        height:20vh;
        border-radius: 5px;
    }
    .el-input--small{
        font-size: 18px;
        color: #000;
        height: 60px;
    }
    .login-msg {
        background: rgba(255,255,255,0);
        width: 100%;
        height: 36px;
        border:0;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
        box-sizing:border-box;
        padding:10px;
        color: #fff;
        margin-bottom: 20px;
        outline-style: none;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width: 100%;
        height: 54px;
        color: #fff;
        font-size: 2em;
        background:#3f6887; 
        opacity: 0.53;
        letter-spacing: 0.5em;
        border: 0;
    }
    @media screen and (max-width: 1400px) {
        .login-wrap{
            position: relative;
            width:1366px;
            min-width: 1000px;
            overflow: hidden;
            background-size: cover;
        }
        
        .ms-title{
            position: absolute;
            top:32%;
            left: 61.8%;
            width:100%;
            text-align: center;
            font-size: 2em;
            letter-spacing: 0.1em;
            color: #fff;
            -webkit-transform: translate3d(-50%,-50%,0);
            transform: translate3d(-50%,-50%,0);

        }
        .ms-title::before {
            width: 8em;
            top:-190%;
            right: 63%;
        }
        .login-btn button{
            height: 40px;
            font-size: 1.2em;
        }
    }

    @media screen and (max-width: 1500px){
        .login-wrap{
            position: relative;
            width:1440px;
            min-width: 1000px;
            overflow: hidden;
            background-size: cover;
        }
        
        .ms-title{
            position: absolute;
            top:32%;
            left: 59.8%;
            width:100%;
            text-align: center;
            font-size: 2em;
            letter-spacing: 0.1em;
            color: #fff;
            -webkit-transform: translate3d(-50%,-50%,0);
            transform: translate3d(-50%,-50%,0);

        }
        .ms-title::before {
            width: 8em;
            top:-190%;
            right: 63%;
        }
        .login-btn button{
            height: 40px;
            font-size: 1.2em;
        }
        .ms-login{
            top:60%;
        }
    }
</style>