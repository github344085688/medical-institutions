<template>
  <slot-table :paddingw="[10,10,10,10]">
    <div class="title_all" slot="selec">组织架构</div>
    <!-- -->
    <div class="organizationa" slot="tabletil">
      <div class="Jurisdiction">
        <div class="Jurisdiction_title">
          <img src="../../../assets/img/icon_qx.png" >
          组织架构：{{data[0].label}}原有部门
        </div>
        <el-tree :data="data" :props="defaultProps" node-key="id"  @node-click="handleNodeClick" :render-content="renderContent"
                 default-expand-all >
        </el-tree>
      </div>
      <div class="Jurisdi_box" >
        <div class="Jurisdiction_title"><img src="../../../assets/img/icon_qx.png" > {{data[0].label}}
          <span v-for="item in titlename" class="">{{item}} <i class="el-icon-arrow-right"></i></span></div>
        <div class="Jurisdi_just" v-if="!mockdata.titlename">
          <div style="padding:80px 0; width: 100%; text-align: center;"> 没有选择左边的科室！！</div>
        </div>
        <div class="Jurisdi_just" v-if="mockdata.titlename">
          <el-form :model="mockdata" :rules="rules" ref="mockdata" label-width="100px" class="demo-ruleForm">
            <el-row class="fmninput" v-if="mockdata.titlename">
              <el-col :span="18">
                <el-form-item  :label="mockdata.titlename" prop="label">
                  <el-input v-model="mockdata.label"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" class="buttons"><el-button @click="removeDomain(mockdata)" v-if="!mockdata.children">删除</el-button></el-col>
            </el-row>
            <div class="childre">
              <el-form-item  v-for="(item, index) in mockdata.children"
                             :label="'科室名' "
                             :key="item.key"
                             :prop="'children.' + index + '.label'"
                             :rules="{  required: true, message: '域名不能为空', trigger: 'blur'  }"  >
                <el-input  v-model="item.label"></el-input>
                <div class="buttons">
                  <el-button  @click="removeDomain(item)"  v-if="!item.children">删除</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button @click="addDomain">新增科室</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <!--<el-button @click="resetForm()">重置</el-button>-->
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </slot-table>
</template>
<script>
  import slotTable from '../components/slottable.vue';
  let id = 1000;
  export default {
    data() {
      return {
        data: [
          {
            id: "455",
            pid: "0",
            label: "厦门第五医院",
            children: [
              {
                id: "456",
                pid: "455",
                label: "内务科"
              },
              {
                id: "457",
                pid: "455",
                label: "病区"
              },
              {
                id: "458",
                pid: "455",
                label: "行政科",
                children: [
                  {
                    id: "492",
                    pid: "458",
                    label: "信息科"
                  },
                  {
                    id: "493",
                    pid: "458",
                    label: "基建科",
                    children: [
                      {
                        id: "492",
                        pid: "458",
                        label: "信科",
                        children: [
                          {
                            id: "492",
                            pid: "458",
                            label: "科"
                          },
                          {
                            id: "493",
                            pid: "458",
                            label: "基"
                          }

                        ]
                      },
                      {
                        id: "493",
                        pid: "458",
                        label: "基科"
                      }

                    ]
                  },
                  {
                    id: "494",
                    pid: "458",
                    label: "总科"
                  },
                  {
                    id: "495",
                    pid: "458",
                    label: "内科"
                  }
                ]
              },
              {
                id: "459",
                pid: "455",
                label: "保卫科"
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        ruleForm: {
          label: '',
          children:[{
            label: ''
          }]
        },
        rules: {
          label: [
            { required: true, message: '科室名不能为空', trigger: 'blur' },
          ]
        },
        titlename:[],
        mockdata:{
          titlename:'单位名称',
          label:'厦门市第三医院',
        },
        changedash:{},
        changenode:{},

      }
    },
    components: {
      slotTable
    },
    created() {
      this.mockdata.label=this.data[0].label;
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm() {
        this.mockdata=this.changedash;
      },
      removeDomain(item) {
        if(this.mockdata.children){
          let index = this.mockdata.children.indexOf(item)
          if (index !== -1) {
            this.mockdata.children.splice(index, 1)
          }
        }
        else {
          this.mockdata=new Object();
        }
        console.log(item);
        console.log(this.mockdata);


      },
      addDomain() {
        const newChild = { id: id++, label: 'testtest'};
        if (!this.mockdata.children) {
          this.$set(this.mockdata, 'children', []);
        }
        this.mockdata.children.push(newChild);
        console.log(this.mockdata);
      },
      append(node, data) {
        this.changedash=data;
        this.changenode=node;
        this.mockdata=new Object();
        this.mockdata= JSON.parse(JSON.stringify(data) );
        this.$set(this.mockdata,'titlename','科室名');
        console.log(this.mockdata);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      handleNodeClick(node, data){
      },

      renderContent(h, { node, data, store }) {
        const chis=node.childNodes.length;
        if(chis==0){
          return (
            <span ><span  style="width:300px;">{node.label}</span>
          <el-button style="font-size: 12px; margin-left:15px;" type="text" on-click={ () => this.append(node,data) }>编辑</el-button>
          </span>);
        }else {
          return (
            <span ><span style="width:300px;">{node.label}</span>
          <el-button style="font-size: 12px; margin-left:15px;" type="text" on-click={ () => this.append(node,data) }>编辑</el-button>
          </span>);
        }
      }
    }
  };
</script>
<style lang="less">
  .title_all{width: 100%; height: 100%;
    img{ width: 20px; height: auto;}
  }
  .organizationa{width: 100%; min-height: 600px; display: flex;
    .Jurisdiction{ flex: 4;
      .el-tree{ height: 90%; border: #e0e0e0 solid 1px; padding-top: 15px;
        .el-tree-node__content{ padding:18px 0;}
      }
      .Jurisdiction_title{ line-height: 45px; width: 100%; padding-left: 10px; height: 45px; border-top: #e0e0e0 solid 1px;border-left: #e0e0e0 solid 1px;border-right: #e0e0e0 solid 1px;
        img{ width: 20px; height: auto; padding-right: 10px;}
      }
    }
    .Jurisdi_box{ flex: 6; padding-left: 25px; display: block;
      .Jurisdiction_title{ line-height: 45px; width: 100%; padding-left: 10px; height: 45px; border-top: #e0e0e0 solid 1px;border-left: #e0e0e0 solid 1px;border-right: #e0e0e0 solid 1px;
        img{ width: 20px; height: auto; padding-right: 15px;}
        span{ display:inline-block;
          &:last-child i{ display: none; }
        }
      }
      .Jurisdi_just{height: 90%; border: #e0e0e0 solid 1px; background: rgba(124, 163, 103, 0.15);
        .fmninput{padding: 30px 20px 10px 20px; border-bottom: #e0e0e0 solid 1px ;background: #ffffff; display: flex;
          .buttons{padding-left: 20px;}
        }
        .childre{padding: 20px 5%;
          .el-form-item__content{ display: flex;
            .el-input{padding-right: 10px;}
            .buttons{ display: inline-block; width: 150px; }
            .button{ padding-left: 10px;}
          }
        }
      }
    }
  }
</style>


