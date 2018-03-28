<template>

    <div class="table_tit">
      <div class="bg-purple" ><i class="el-icon-tickets"></i>{{titlecar}}</div>
       <div class="bg-purple-light" v-if="addtielr!=''" @click="increment"><el-button type="primary" ><i class="el-icon-plus" ></i>{{addtielr}}</el-button> </div>
    </div>

</template>
<script>
  export default {
    props: {
      titlecar: {
        default:'',
        type:String
      },
      addtielr: {
        default:'',
        type:String
      }
    },
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      increment() {
        this.$emit('input_click')
      }

    }

  }
</script>
<style lang="less">
    .table_tit{width: 100%;display: flex; overflow: hidden; height:50px;background: #eee;border: 1px solid #d4d4d4;border-radius: 4px 4px 0 0; padding: 0;margin-top: 15px;
      .bg-purple{flex:1;vertical-align: middle; line-height: 50px; color: #007337; padding-left: 20px;}
      .el-button--primary{height:48px;width: 100%; border-radius: 0; border: none;}
    }

</style>
