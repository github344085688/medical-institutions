<template>
  <slot-table  :paddingw="[10,10,10,10]">
    <!-- -->
    <div class="select_box" slot="selec">
      <div class="select_btn">
        <el-select v-model="value" placeholder="请选择" style="width: 120px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="select_btn">
        <el-date-picker v-model="selectvaltime" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                        class="times"
                        :default-value="date">
        </el-date-picker>
      </div>
      <div class="select_btn">
        <el-input placeholder="姓名/病情种类/当前设备名称" v-model="inputselect" clearable></el-input>
      </div>
      <div class="select_btn">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <!-- -->
    <table-title titlecar="病人列表" addtielr="添加病人" @input_click="servicesChange" slot="tabletil"></table-title>


    <div class="table_bo" slot="tablebox">


      <div class="overvis" :class="{'overfl':overfls}" >

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" :rules="[ { required: true, message: '年龄不能为空'}, { type: 'number', message: '年龄必须为数字值'}]">
            <el-input type="age" v-model.number="ruleForm.age" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>


          <el-form-item label="分组" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="编号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="服药时间">
            <el-date-picker
              v-model="ruleForm.value9"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              default-value="2010-10-01">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="状态" >
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="病情种类" prop="name">
            <div style="width: 100%; padding: 15px; background: #fff; border: 1px solid #eee; border-radius: 4px;">
              <el-tag  :key="tag"  v-for="tag in dynamicTags"   closable  :disable-transitions="false"   @close="handleClose(tag)"> {{tag}}  </el-tag>
              <el-input class="input-new-tag"  v-if="inputVisible"  v-model="inputValue"  ref="saveTagInput" size="small"  @keyup.enter.native="handleInputConfirm"  @blur="handleInputConfirm" >
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >立即创建</el-button>
            <el-button @click="resetForm">取消</el-button>
          </el-form-item>
        </el-form>
        <div class="fenge">
        </div>
      </div><!-- -->

      <div class="table_chang">
        <div class="btn" >分组管理</div>
        <div class="btn">开始服药</div>
        <div class="btn">移动分组</div>
      </div>
      <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%;"
                @selection-change="handleSelectionChange(tableData)">
        <el-table-column fixed type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="sex" label="性别" width="50"></el-table-column>
        <el-table-column prop="age" label="年龄" width="50"></el-table-column>
        <el-table-column prop="tel" label="电话" width="150"></el-table-column>
        <el-table-column prop="yis" label="医生" width="120"></el-table-column>
        <el-table-column prop="zip" label="护理人员" width="120"></el-table-column>
        <el-table-column prop="fz" label="分组" width="100"></el-table-column>
        <el-table-column prop="zip" label="编号" width="100"></el-table-column>
        <el-table-column prop="zip" label="社保卡号" width="120"></el-table-column>
        <el-table-column prop="zip" label="身份证号" width="120"></el-table-column>
        <el-table-column prop="zip" label="预计服药开始时间" width="150"></el-table-column>
        <el-table-column prop="zip" label="预计服药结束时间" width="150"></el-table-column>
        <el-table-column prop="zip" label="当前设备" width="120"></el-table-column>
        <el-table-column prop="zip" label="剩余服药次数" width="120"></el-table-column>
        <el-table-column prop="zip" label="状态" width="100"></el-table-column>
        <el-table-column prop="zip" label="病情种类" width="120"></el-table-column>
        <el-table-column prop="zip" label="备注" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <div class="scope_box">
              <div class="scopedai" @click="handleClick(scope.row)" >开始服药</div>
              <div class="scopedai" @click="physical(scope.row)">报告</div>
              <div class="scopedai" @click="histcases(scope.row)">病历</div>
              <!--<div class="scopedai" @click="addBar(scope.row)">记录</div>-->
              <div class="scopedai">绑定设备</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="reverseSelection()">切换第二、第三行的选中状态</el-button>
        <el-button @click="changSelection()">取消 选择</el-button>
      </div>
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
        overfls: true,
        ruleForm: {
          name: '',
          region: '',
          value9:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          age: '',
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',

        //表格数据

        tableData: [{
          ids: '01',
          name: '王小',
          sex: '女',
          age: '30',
          tel: '18859287026',
          yis: '王小虎',
          zip: '王小虎',
          fz: '01'

        },
          {
            ids: '01',
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'

          },{
            ids: '01',
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'

          },{
            ids: '01',
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'

          },{
            ids: '01',
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'

          },{
            ids: '01',
            name: '王小',
            sex: '女',
            age: '30',
            tel: '18859287026',
            yis: '王小虎',
            zip: '王小虎',
            fz: '01'

          }
        ],



        value: '',
        multipleSelection: [],




      }
    },
    components: {
      tableTitle,
      paGings,
      slotTable
    },
    created() {
      /*  let shuxin = this.gewindowwidth();
        this.lodup.width = shuxin.widowsW - 200;*/
      this.date=this.gettady();

    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      },
      reverseSelection() {
        this.tableData.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });

      },
      changSelection() {
        console.log(this.multipleSelection);
      },
      handleSelectionChange(val) {
        console.log(this.multipleSelection);
        this.multipleSelection = val;
      },
      servicesChange(){
        this.overfls=false;
      },
      resetForm(){
        this.overfls=true;
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      getpageSize(val){
        console.log(val)
      },
      getpagCurrent(val){
        console.log(val)
      },
      physical: function(val) {
       // this.$emit('eventName',{conname:'mypatient',vals:val})
        this.$router.push({ name: 'examination',params: {plan: 'PhoTos',python:0, entrance:1, vals:val}});
      },
      histcases: function(val) {
      //  brdge.$emit('eventName',{conname:'mypatient',vals:val})
       this.$router.push({ name: 'Physical',params: {plan: 'PhoTos',python:1, entrance:1, vals:val}});
      }

    }

  }
</script>
<style lang="less">
  .select_box{ display: flex; width: 100%; height: auto; justify-content: flex-start;flex-direction:row;align-content: center;flex-wrap:nowrap;
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
