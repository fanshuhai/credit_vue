<template>
    <div class="totalInfo">
      <el-container>
          <el-header>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content">
                    <span>选择查询机构：</span>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <span>姓名：</span>
                  <el-input style="width:150px" placeholder="请输入内容" v-model="input1" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>身份证号：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input2" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <span>手机号码：</span>
                  <el-input style="width:240px" placeholder="请输入内容" v-model="input3" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content">
                  <el-button @click='' type="success">查询</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-container style="width:100%;">
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" 
             :default-openeds="['1','2','3','4','5']" router>
                <template v-for="item in items">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.index">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
              input1:'',
              input2:'',
              input3:'',
              options: [
                {
                  value: '选项1',
                  label: '摩尔征信'
                }, {
                  value: '选项2',
                  label: '汇法网'
                }, {
                  value: '选项3',
                  label: '魔蝎'
                }, {
                  value: '选项4',
                  label: '同盾'
                }, {
                  value: '选项5',
                  label: '鹏元'
                }, {
                  value: '选项6',
                  label: '国政通'
                }, {
                  value: '选项7',
                  label: '商汤'
                }, {
                  value: '选项8',
                  label: '全部'
                }
              ],
              items: [
                  {
                      icon: 'el-icon-setting',
                      index: '1',
                      title: '个人信息',
                      subs: [
                          {
                              index: 'perInfoBasic',
                              title: '基本信息'
                          },
                          {
                              index: '',
                              title: '学历'
                          },
                          {
                              index: '',
                              title: '资格证书'
                          },
                          {
                              index: 'upload',
                              title: '投资'
                          },
                          {
                              index: '',
                              title: '任职'
                          },
                          {
                              index: '',
                              title: '偿付能力'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-tickets',
                      index: '2',
                      title: '信贷信息',
                      subs: [
                          {
                              index: '',
                              title: '银行信贷'
                          },
                          {
                              index: '',
                              title: '信用卡'
                          },
                          {
                              index: '',
                              title: '担保'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-message',
                      index: '3',
                      title: '司法信息',
                      subs: [
                          {
                              index: 'lawCasedetail',
                              title: '法律案件详情'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-date',
                      index: '4',
                      title: '反欺诈信息',
                      subs: [
                          {
                              index: 'breach_Blacklist',
                              title: '失信黑名单'
                          },
                          {
                              index: 'netcredit_Blacklist',
                              title: '网贷黑名单'
                          },
                          {
                              index: 'highrisk_list',
                              title: '高风险名单'
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-star-on',
                      index: '5',
                      title: '公共信息',
                      subs: [
                          {
                              index: '',
                              title: '网购消费'
                          },
                          {
                              index: '',
                              title: '运营商'
                          },
                          {
                              index: '',
                              title: '社保'
                          },
                          {
                              index: '',
                              title: '公积金'
                          },
                          {
                              index: '',
                              title: '寿险'
                          },
                          {
                              index: '',
                              title: '车险'
                          },
                          {
                              index: '',
                              title: '水电'
                          }
                      ]
                  }
              ],
              value:'',
              activeIndex:'',

            }
        },
        methods:{
          goBack(){
            this.$router.go(-0);
          },
          // basic_info(){
          //   this.$router.push('/perInfoBasic')
          // },
          onRoutes(){
              return this.$route.path.replace('/','');
          }
        },
        computed: {

        },
        created:{

        }
    }

</script>

<style scoped>
  .totalInfo{
    height: auto;
    width: 100%;
    padding:0;
    margin: 0;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-container{
    height: auto;
    width: 75%;
    margin: 0 auto;
  }
  .el-header{
    background: #fff;
    margin-bottom: 10px;
  } 
  .el-header .el-row{
    padding: 15px 0;
  }
  .el-main{
    padding: 0;
    margin-left: 20px;
    box-sizing:border-box;
  } 
  .personal_detailed{
    width: 100%;
    height: 310px;
    background: #fff;
    margin-bottom: 10px;
  }
  .sidebar{
      display: block;
      position: absolute;
      left: 0;
      top: 70px;
      bottom:0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
      width: 200px;
  }
  .sidebar > ul {
      height:100%;
  }
</style>
