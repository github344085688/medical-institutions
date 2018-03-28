<template>
  <div class="concentw">
    <header>
      <div class="logo"><img src="../../assets/logo.png"/></div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">{{ $t("message.header.my_patient") }}</el-menu-item>
        <el-menu-item index="2">{{ $t("message.header.device_management") }}</el-menu-item>
        <el-menu-item index="3">{{ $t("message.header.drug_recording") }}</el-menu-item>
        <el-menu-item index="4">{{ $t("message.header.drug_management") }}</el-menu-item>
        <el-menu-item index="5">{{ $t("message.header.data_statistics") }}</el-menu-item>
        <el-menu-item index="6">{{ $t("message.header.account_management") }}</el-menu-item>
      </el-menu>
    </header>
    <section>
      <aside>
        <router-view name="aside"></router-view>
      </aside>
      <article>
        <router-view name="article" ></router-view>
      </article>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'concentw',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    computed: {

    },
    beforeCreate(){

    },
    created() {

    },
    mounted: () => {

    },
    methods: {
      handleSelect(key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({ path: '/enterprise' });
            break;
          case '2':
            this.$router.push({ path: '/enterprise/devicemantcont'});
            break;
          case '3':
            this.$router.push({path: '/enterprise/drugrecording'});
            break;
          case '4':
            this.$router.push({path: '/enterprise/drugmanagement'});
            break;
          case '5':
            this.$router.push({path: '/enterprise/datastatistics'});
            break;
          case '6':
            this.$router.push({path: '/enterprise/accountmanagement'});
            break;
          default:
            this.$router.push({path: '/enterprise'});
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/less/publicks.less";
  .concentw {width: 100%;height: 100%; background: #f5f5f5; position: relative;
    header {display: flex ; flex-direction: row ;border-bottom: #e9e9e9 solid 2px;
      flex-wrap: wrap ;justify-content: flex-start ;align-items: center ;align-content: flex-start ;height: 60px;
      width: 100%;   z-index: 12; position: absolute; top:0; left: 0; box-sizing: border-box;
      .el-menu-demo{border-bottom: #e9e9e9 solid 2px !important; box-sizing: border-box!important;}
      .el-menu{ background: #f7f7f7;}
      .is-active{ color: #007337!important;}
      .el-menu-demo {border-bottom: none}
      .logo { width: 100px; margin-right: 50px;
        img {  width: 100px;}
      }
    }
    section{ width: 100%; height: 100%; display:block; padding-top:60px; box-sizing: border-box; border-top: #ccc solid 1px;
      aside { width:100% ; background: #fff;padding-left: 120px;
        .el-menu-item{display: inline-block;}
        .el-menu{background: #fff;}
      }
      article { flex:none;background: #f5f5f5; height: 100%; box-sizing: border-box;padding: 15px; overflow-x: hidden; }
    }
   /* @media (device-width: 768px) and (-webkit-min-device-pixel-ratio: 2){

    }*/
    @media only screen and (min-width: 1024px) {
      section{ width: 100%; height: 100%; display: flex; padding-top: 60px; box-sizing: border-box;
        aside { width:200px !important;  border-right: #e6e6e6 1px solid;background: #f7f7f7;padding-left: 10px;
          .el-menu{background: #f7f7f7;}
        }
        article { flex:1;background: #f5f5f5; height: 100%; box-sizing: border-box;padding: 15px; overflow-x: hidden; }
      }
    }
  }
</style>



