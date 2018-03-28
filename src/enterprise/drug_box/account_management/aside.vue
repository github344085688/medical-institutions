<template>
    <div class="decicema">
          <el-row >
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1" @click="aside(1)">
                  <i class="el-icon-menu"></i>
                  <span slot="title">组织架构</span>
                </el-menu-item>
                <el-menu-item index="2" @click="aside(2)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">职位管理</span>
                </el-menu-item>
                <el-menu-item index="3" @click="aside(3)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="4" @click="aside(4)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">权限管理</span>
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

    },
    methods: {
      aside(key){
        switch (key) {
          case 1:
            this.$root.brdge.$emit('datasts','deviceDetails')
           // this.$router.push({ path: '/enterprise/mypatient'});
            break;
          case 2:
            this.$root.brdge.$emit('datasts','datastaTistics')
           // this.$router.push({ name: 'examination'});
            break;
          case 3:
            this.$root.brdge.$emit('datasts','deviceDetails')
           /// this.$router.push({ name: 'Physical' });
            break;
          default:

        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style  lang="less">
  .el-menu{border-right:none;}
</style>
