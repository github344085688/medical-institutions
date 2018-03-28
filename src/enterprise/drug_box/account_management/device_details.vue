<template>
  <slot-table :paddingw="[0,0,0,0]">
    <table-title titlecar="病人列表" @input_click="servicesChange" slot="tabletil" ></table-title>
    <!-- -->
    <div slot="tabletil">
    <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%;"
              @selection-change="handleSelectionChange(tableData)"  >
      <el-table-column prop="name"label="日期" width="120"></el-table-column>
      <el-table-column prop="sex" label="病情种类" width="150"></el-table-column>
      <el-table-column prop="age" label="在用设备数" width="150"></el-table-column>
      <el-table-column prop="tel" label="患者总数" width="150"></el-table-column>
      <el-table-column prop="yis" label="患者（1~17岁）" width="120"></el-table-column>
      <el-table-column prop="zip" label="患者（18~30岁）" width="120"></el-table-column>
      <el-table-column prop="fz"  label="患者（1~17岁）" width="100"></el-table-column>
      <el-table-column prop="zip" label="患者（1~17岁）" width="100"></el-table-column>
      <el-table-column prop="zip" label="患者（1~17岁）" width="120"></el-table-column>
      <el-table-column prop="zip" llabel="患者（1~17岁）" width="120"></el-table-column>
      <el-table-column prop="zip" label="预计服药开始时间" width="150"></el-table-column>
    </el-table>
    </div>
    <!-- -->

    <pa-gings @handleSize="getpageSize" @handleCurrent="getpagCurrent" :pagesizes=1 :totals=20 slot="pagings"></pa-gings>
  </slot-table>

</template>
<script>
  import tableTitle from '../components/table_title.vue';
  import paGings  from "../components/pagings.vue";
  import slotTable from '../components/slottable.vue';
  export default {
    data() {
      return {
        activeNames: ['0'],
        //搜索栏目
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
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        date: '',
        //时间
        selectvaltime: '',
        inputselect: '',
        //搜索栏目
        //添加数据
        //表格数据

        tableData: [{
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'
          }
        ],
      }
    },
    components: {
      paGings,
      slotTable,
      tableTitle

    },
    created() {


    },
    methods: {
      servicesChange(){
        this.overfls=false;
      },
      getpageSize(val){
        console.log(val)
      },
      getpagCurrent(val){
        console.log(val)
      },


    }

  }
</script>
<style lang="less">
  .select_box{ display: flex; width: 100%; justify-content: flex-start;flex-direction:row;align-content: center;flex-wrap:nowrap;
    .select_btn{ margin-right:5px;
      /* .el-input__inner{ width: 200px;}*/
      .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
        width: 200px;
      }
    }
  }
  .table_bo{background:#fff; width: 100%;box-sizing: border-box; padding: 15px; box-sizing: border-box; border-right: 1px solid #e7eaec;border-left: 1px solid #e7eaec;border-bottom: 1px solid #e7eaec;
    .overvis{ height:auto;}
    .overfl{ height:0px; overflow: hidden;}
    .table_chang{width: 100%; height:40px; display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row;
      .btn{color: #007337;cursor: pointer; padding-left:20px;padding-right:20px;  background: #fff; line-height: 40px; border-top:1px solid #eee;border-right:1px solid #eee;
        &:nth-of-type(1){ border-left:1px solid #eee; border-radius:4px 0 0 0; }
        &:last-child{border-radius: 0 4px 0 0 ;}
        &:hover{ background: #007337; color: #fff;}
      }
    }
  }


  .scope_box{ display: flex;justify-content:space-between;align-items:center;
    .scopedai{  width: 40px; cursor: pointer;
      &:hover{background:#b3e19d;}
    }
  }
  .fenge{ width: 100%; margin-top: 120px; height: 1px; border-top: 1px solid #fff; margin-bottom: 50px; border-bottom: 1px solid #e8e8e8;}
  .el-tag + .el-tag { margin-left: 10px;  }
  .button-new-tag {margin-left: 10px; height: 32px; line-height: 30px; padding-top: 0; padding-bottom: 0;}
  .input-new-tag { width: 90px; margin-left: 10px; vertical-align: bottom;}

</style>
