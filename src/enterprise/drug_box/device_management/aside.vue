<template>
    <div class="decicema">
          <el-row >
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">药品管理</span>
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
      let shuxin = this.gewindowwidth();
      this.lodup.width = shuxin.widowsW - 200;
    },
    methods: {
      aside(key){
        switch (key) {
          case 1:

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
