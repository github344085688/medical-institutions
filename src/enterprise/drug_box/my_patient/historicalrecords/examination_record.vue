<template>
  <slot-table :paddingw="[10,10,10,10]">
    <div class="selec_box" slot="selec">
      <el-select v-model="value" placeholder="请选择" style="width: 120px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="select_btn">
        <el-input placeholder="姓名/病情种类/当前设备名称" v-model="inputselect" clearable></el-input>
      </div>
      <div class="select_btn">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <!-- -->
    <table-title titlecar="病人列表" @input_click="servicesChange" slot="tabletil"></table-title>
    <el-table :data="tableData" border tooltip-effect="dark" style="width: 100%;"  slot="tablebox">
      <el-table-column fixed prop="date" label="病人名称" width="80"></el-table-column>
      <el-table-column prop="name" label="分组" width="80"></el-table-column>
      <el-table-column prop="province" label="编号" width="80"></el-table-column>
      <el-table-column prop="city" label="社保卡号"></el-table-column>
      <el-table-column prop="address" label="身份证号"></el-table-column>
      <el-table-column prop="zip" label="病历数"></el-table-column>
      <el-table-column prop="updata" label="最新上传日期"></el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)">查看历史病历</el-button>
          <el-button @click="uphandleEdit(scope.$index, scope.row)">上传历史病历</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- -->
    <pa-gings @handleSize="getpageSize" @handleCurrent="getpagCurrent" :pagesizes=1 :totals=20 slot="pagings"></pa-gings>
  </slot-table>
</template>
<script>
  import slotTable from '../../components/slottable.vue';
  import tableTitle from '../../components/table_title.vue';
  import paGings  from "../../components/pagings.vue";

  export default {
    props: {
      patientId: {
        type:Object
      }
    },
    data() {
      return {

        options: [{
          value: '分组名称1',
          label: '分组名称1'
        }, {
          value: '分组名称2',
          label: '分组名称2'
        }, {
          value: '全部',
          label: '全部'
        }],
        inputselect: '',

        tableData: [{
          date: '小张',
          name: '王小虎',
          province: '01',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '小张',
          province: '02',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '普陀区',
          province: '03',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '金沙',
          province: '04',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '王小虎',
          province: '05',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '王小虎',
          province: '06',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }, {
          date: '小张',
          name: '王小虎',
          province: '07',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          updata:''
        }],

        value:''

      }
    },

    created(){

    },
    mounted(){

    },
    methods: {
      handleEdit(index, row) {
        this.$emit('gethandle-edit',{conname:'PhoTos',python:1,patientids:row.province,patientname:row.name,stages:'case', index:index, row:row});
      },
      uphandleEdit(index, row) {
        this.$emit('gethandle-edit',{conname:'upPhoto',python:1,patientids:row.province,patientname:row.name,stages:'case', index:index,row:row});
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      servicesChange(){

      },
      getpageSize(val){
        console.log(val)
      },
      getpagCurrent(val){
        console.log(val)
      },


    },
    components: {
      slotTable,
      tableTitle,
      paGings
    },
  }
</script>
<style lang="less">
  .selec_box{display: inherit;}
  .selec_box{display: inherit;
    .select_btn{margin-left: 5px;
      &:first-child{margin-left: 0;}
    }
  }
  .el-button{ padding-left: 5px; padding-right: 5px;}

</style>
