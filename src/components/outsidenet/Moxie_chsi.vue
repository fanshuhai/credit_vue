<template>
  <div class="huifa">
      <div class="huifa_header">
        当前位置：<span @click="goBack">首页</span>>><span @click="goBack1">魔蝎科技（第三方数据查询）</span>>><span @click="goBack2">魔蝎科技查询结果</span>>>学历信息报告
      </div>
      <div v-if="cstatus===1" class="box">
              <div>
                  <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
                      学历信息报告
                  </h3>
                  <div style="text-align: right;font-size: 10px">
                      报告编号：无
                  </div>
              </div>
              <div>
                  <h3 style="padding-left: 0px">
                      1.学历信息
                  </h3>
              </div>

              <div class="table" v-for="chsi in chsis" style="padding-left: 0px">
                  <h5 class="h5">{{chsi.edu_level}}学历信息</h5>
                  <div class="tabbox">
                      <table>
                          <tr>
                              <td>姓名：</td>
                              <td>{{chsi.real_name}}</td>
                              <td>性别：</td>
                              <td>{{chsi.sex}}</td>
                          </tr>
                          <tr>
                              <td>入学时间：</td>
                              <td>{{chsi.enrollment_time}}</td>
                              <td>毕业时间：</td>
                              <td>{{chsi.graduate_time}}</td>
                          </tr>
                          <tr>
                              <td>学历类别：</td>
                              <td>{{chsi.edu_type}}</td>
                              <td>学历层次：</td>
                              <td>{{chsi.edu_level}}</td>
                          </tr>
                          <tr>
                              <td>毕业学校：</td>
                              <td>{{chsi.graduate_school}}</td>
                              <td>毕业结论：</td>
                              <td>{{chsi.graduate}}</td>
                          </tr>
                          <tr>
                              <td>专业：</td>
                              <td>{{chsi.specialty}}</td>
                              <td>学习形式：</td>
                              <td>{{chsi.edu_form}}</td>
                          </tr>
                          <tr>
                              <td>证书编号：</td>
                              <td>{{chsi.certificate_no}}</td>
                          </tr>
                      </table>
                  </div>
              </div>

      </div>

      <div v-if="cstatus===2" class="nomseg">
        <span>查询成功，暂无数据</span>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return { 
              chsis:'',
              cstatus:1,
            }
        },
        methods:{
          goBack(){
            this.$router.push('/moerCredit');
          },
          goBack1(){
            this.$router.push('/moxie');
          },
          goBack2(){
            this.$router.push('/moxieQuery');
          },

        },
        computed: {

        },
        mounted(){
            this.$axios.defaults.withCredentials=true;
            this.$axios.get('http://123.59.181.202:9990/api/v1/chsi',{
              params:{
                account_name:localStorage.getItem('name'),
                id_number:localStorage.getItem('cardId'),
                account_mobile:localStorage.getItem('phone'),
              },
            })
            .then(res=>{
              console.log(res.data);
              if(res.data==='登录超时'){
                    this.$message('登录超时，请重新登录');
                    this.$router.push('/login');
              }else if(res.data===''||res.data===null||res.data==='{}'){
                this.$message('暂无信息');
              }else{
                let msgData=res.data;
                if(msgData!=="undefined"){
                  console.log(msgData);
                  this.chsis=msgData[0].education_list;
                  this.cstatus=1;
           
                }else{
                  this.cstatus=2;
                }
                

              } 
            })
            .catch(error=>{
              alert('暂无服务');
              console.log(error);
                console.log(error.response);
            })
        }
    }

</script>

<style scoped>
  .huifa{
    min-height: 92.5vh;
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
    background: #fff;
    box-sizing: border-box;
  }
  .huifa_header{
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  }
  .huifa_header span{
    cursor: pointer;
  }
  .huifa_header span:hover{
    color: rgb(22,155,213)
  }
  .huifa_main{
    width: 40%;
    height: 400px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button{
      background:#3c88f6;
      height: 45px;
      width: 330px;
      border-radius:10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 40px;
      padding-left: 40px;
  }
  .wrapper_button{
    text-align:right;
    padding-right:20px;
  }

  
   h1, h2, h3, h4, h5, h6, table, tr, td {
      padding: 0;
      padding-left: 10px;
      margin: 0;
      box-sizing: border-box;
      font-size: 14px;
      white-space: nowrap;
      margin: 0 auto;
  }

  .box {
      width: 70%;
      margin: 0 auto;
      padding-bottom: 20px;
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

  @media screen and (max-width: 1500px){

    .el-button{
        height: 45px;
        width: 240px;
        border-radius:4px; 
        font-size: 18px;
        letter-spacing: 40px;
        padding-left: 40px;
    }
    .wrapper_button{
      padding-right:10px;
    }
  }
</style>
