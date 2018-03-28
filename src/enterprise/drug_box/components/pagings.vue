<template>

  <el-pagination style="margin-top: 20px;"
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :current-page.sync="currentPage1"
                 :page-size="pagesizes"
                 layout="total, prev, pager, next"
                 :total="totals">
  </el-pagination>

</template>
<script>  export default {
  props: {
    pagesizes: {
      default:25,
      type:Number
    },
    totals: {
      default:1020,
      type:Number
    }
  },
  data() {
    return {
      currentPage1: 5
    };
  },
  methods: {
    handleSizeChange(val) {
     this.$emit('handleSize',val);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrent',val);
    }
  }
}
</script>
<style lang="less">
  .el-dialog, .el-pager li,.el-pagination button.disabled,.el-pagination .btn-next, .el-pagination .btn-prev{ background: #f7f7f7;}

</style>
