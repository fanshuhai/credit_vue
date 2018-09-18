<template>
  <div>

    <div class="header_info">学历信息</div>
    <div v-if="cstatus===1" v-for="chsi in chsis" class="case_info">
      <div class="case_info_header">{{chsi.edu_level}}学历信息</div>
      <div class="case_detail">
        <div class="case_detail_left">姓名：</div>
        <div class="case_detail_right">{{chsi.real_name}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">性别：</div>
        <div class="case_detail_right">{{chsi.sex}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">入学时间：</div>
        <div class="case_detail_right">{{chsi.enrollment_time}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">毕业时间：</div>
        <div class="case_detail_right">{{chsi.graduate_time}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学历类别：</div>
        <div class="case_detail_right">{{chsi.edu_type}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学历层次：</div>
        <div class="case_detail_right">{{chsi.edu_level}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">毕业学校：</div>
        <div class="case_detail_right">{{chsi.graduate_school}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">毕业结论：</div>
        <div class="case_detail_right">{{chsi.graduate}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">专业：</div>
        <div class="case_detail_right">{{chsi.specialty}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学习形式：</div>
        <div class="case_detail_right">{{chsi.edu_form}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">证书编号：</div>
        <div class="case_detail_right">{{chsi.certificate_no}}</div>
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
              cstatus:'',
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        created(){
            
        },
        computed: {

        },
        mounted(){
          const msgData=localStorage.getItem('msgData');
          const newmsgData=JSON.parse(msgData);
          // const xueli=newmsgData.mx_chsi[0].education_list[0];
          // console.log(xueli);
          const xueli={};
          if(typeof(newmsgData.mx_chsi)==='undefined'){
            this.cstatus=2;
          }else{
            xueli.mx_chsi=newmsgData.mx_chsi[0].education_list;
            this.chsis=xueli.mx_chsi;
            this.cstatus=1;
          }
        }

    }

</script>

<style scoped>
    .header_info{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 20px;
      margin-bottom: 10px; 
      box-sizing: border-box;
    }
    .case_info{
      height: auto;
      box-sizing:border-box;
      padding: 5px 10px;
      background: #fff;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .case_info_header{
      width: 100%;
      height:36px;
      background: #fff;
      line-height: 36px;
      padding-left: 10px; 
      color: #999;
      font-size: 14px;
      font-weight: bold; 
    }
    .case_detail{
      height: auto;
      min-height: 36px;
      border-top: 1px solid #ddd;
    }
    .case_detail_left,.case_detail_right{
      height: auto;
      min-height: 36px;
      line-height: 36px;
      font-weight: bold;
      display: inline-block;
      vertical-align: top;
    }
    .case_detail_left{
      width: 13%;
      padding-left: 10px;
    }
    .case_detail_right{
      width: 85%;
      height: auto;
    }
</style>
