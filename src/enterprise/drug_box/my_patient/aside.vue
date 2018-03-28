<template>
    <div class="decicema">
          <el-row >
            <el-col :span="24">
              <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1" @click="aside(1)">
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{$t("message.my_patient.Patient_list")}}</span>
                </el-menu-item>
                <el-menu-item index="2" @click="aside(2)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">{{$t("message.my_patient.Medical_Examination")}}</span>
                </el-menu-item>
                <el-menu-item index="3" @click="aside(3)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">{{$t("message.my_patient.Historical_records")}}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        lodup: {
          width: 0,
          height: 0,
        }
      }
    },
    created(){
   /*   let shuxin = this.gewindowwidth();
      this.lodup.width = shuxin.widowsW - 200;*/
    },
    methods: {
      aside(key){
        switch (key) {
          case 1:
            this.$router.push({ path: '/enterprise/mypatient'});
            break;
          case 2:
            this.$router.push({ name: 'examination'});
            break;
          case 3:
            this.$router.push({ name: 'Physical' });
            break;
          default:
            this.$router.push({path: '/enterprise'});
        }
      }
    }
  }
</script>

<style  lang="less">
  .el-menu{border-right:none;}
</style>
