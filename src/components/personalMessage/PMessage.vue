<template>
    <div class="wrapper">
       <table border="0" cellpadding="0" cellspacing="0">
           <tr>
               <td>姓名</td>
               <td>{{msg_show.name}}</td>
           </tr>
           <tr>
               <td>公司</td>
               <td>摩尔龙</td>
           </tr>
           <tr>
               <td>部门</td>
               <td>{{msg_show.deptname}}</td>
           </tr>
           <tr>
               <td>手机</td>
               <td>{{msg_show.phone}}</td>
           </tr>
           <tr>
               <td>邮箱</td>
               <td>{{msg_show.email}}</td>
           </tr>
       </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg_show:'',
            }
        },
        methods:{
         
        },
        components:{

        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
            // 
            this.$axios.defaults.withCredentials=true;
            this.$axios.get(this.HOST+'/api/v1/userInfo',{
                params:{
                  userid:sessionStorage.getItem('id_p'),
                }
              })
              .then(res=>{
                console.log(res.data);
                if(data==='' || data===null || data==='{}'){
                  this.$message.error('暂无信息');
                }
                let data=res.data;
                this.msg_show=data;
              })
              .catch(error=>{
                  // alert(error.response.data)
                  console.log(error.response);
                  
                  if(error.response==='' || error.response===null || error.response==='{}'){
                      this.$message.error('暂无信息');
                  }
              })
        }
    }
</script>
<style scoped>
    .wrapper{
        margin:10px 10px 0 0;
        height: auto;
        background: #fff;
    }
    .wrapper table{
        width: 100%;
        margin:0;
        margin:0;
    }
    .wrapper table tr{
        height: 50px;
        line-height: 50px;
        font-family: SourceHanSansCN-Regular;
        color: #333;
        font-weight: 300;
    }
    .wrapper table tr:nth-child(odd){
        background: #fff;
    }
    .wrapper table tr:nth-child(even){
        background: #ddd;
    }
    .wrapper table tr td:nth-child(1){
        width: 200px;
        text-align: right;
        padding-right: 60px;
    }
    
</style>