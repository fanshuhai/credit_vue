<template>
  <div>
    <div class="header_info">学历信息</div>
    <div class="case_info">
      <div class="case_info_header">本科学历信息</div>
      <div class="case_detail">
        <div class="case_detail_left">姓名：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].real_name}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">性别：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].sex}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">民族：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].nation}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">出身日期：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].birth_date}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">身份证号：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].id_card}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">学号：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].student_id}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">院校名称：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].school_name}}</div>
      </div>

      <div class="case_detail"  style="height:auto;">
        <div class="case_detail_left">分校：</div>
        <div class="case_detail_right" style="height:auto;">{{chsi.studentInfo_list[0].branch_school}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">系：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].department}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">专业：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].specialty}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">班级：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].class_name}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学历层次：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].level}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学历类别：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].edu_type}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学习形式：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].edu_form}}</div>
      </div>

      <div class="case_detail">
        <div class="case_detail_left">入学时间：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].enrollment_time}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">学籍状态：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].status}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">离校时间：</div>
        <div class="case_detail_right">{{chsi.studentInfo_list[0].leave_school_time}}</div>
      </div>

       <div class="case_detail">
        <div class="case_detail_left">证书编号：</div>
        <div class="case_detail_right">{{chsi.education_list[0].certificate_no}}</div>
      </div>
    </div>
  </div>   
</template>

<script>
    const msgData=localStorage.getItem('msgData');
    const newmsgData=JSON.parse(msgData);
    const xueli=newmsgData.mx_chsi[0];
    console.log(xueli);
    export default {
        data() {
            return { 
              chsi:xueli,
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
        },
        computed: {

        },

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
      width: 8%;
      padding-left: 10px;
    }
    .case_detail_right{
      width: 88%;
      height: auto;
    }
</style>
