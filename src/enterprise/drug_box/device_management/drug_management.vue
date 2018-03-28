<template>
  <slot-table :paddingw="[10,10,10,10]">
    <div class="select_box" slot="selec">
      <div class="select_btn">

      </div>
      <div class="select_btn">
        <el-input placeholder="姓名/病情种类/当前设备名称" v-model="inputselect" clearable></el-input>
      </div>
      <div class="select_btn">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <!-- -->
    <div class="kit" slot="tabletil">
      <dl v-for="item in 9">
        <dt><img src="../../../assets/img/u1753.png" class="meidus" /></dt>
        <dd>
          <ul>
            <li>智能药盒</li>
            <li>编辑</li>
          </ul>
          <ul>
            <li>设备使用人</li>
            <li>周智毅</li>
          </ul>
          <ul>
            <li>设备管理人</li>
            <li>王宇翔</li>
          </ul>
          <ul>
            <li>设备序列号</li>
            <li>ASDQHWQIWEQWE1</li>
          </ul>
          <ul>
            <li>在线状态</li>
            <li>在线</li>
          </ul>
        </dd>
        <dd>
          <ul>
            <li>电池状态:</li>
            <li>23%</li>
          </ul>
          <ul>
            <li>旋转检测:</li>
            <li>正常</li>
          </ul>
          <ul>
            <li>开盖检测:</li>
            <li>开盖</li>
          </ul>
          <ul>
            <li>WiFi信号:</li>
            <li>较强</li>
          </ul>
          <ul>
            <li>GSM信号:</li>
            <li>较强</li>
          </ul>
        </dd>
        <dd>
          <ul>
            <li class="tex_conet">
              <el-button type="primary">服药提醒</el-button>
            </li>
            <li class="tex_conet">
              <el-button type="primary">服药记录</el-button>
            </li>
          </ul>
          <ul>
            <li class="tex_conet">
              <el-button type="primary">更换绑定</el-button>
            </li>
            <li class="tex_conet">
              <el-button type="primary">绑定用户</el-button>
            </li>
          </ul>
          <ul>
            <li class="tex_conet">
              <el-button type="primary">更多操作</el-button>
            </li>
          </ul>
        </dd>
      </dl>

    </div>

    <!-- -->
    <pa-gings @handleSize="getpageSize" @handleCurrent="getpagCurrent" :pagesizes=1 :totals=20
              slot="pagings"></pa-gings>
  </slot-table>
</template>
<script>
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


      }
    },
    components: {
      paGings,
      slotTable

    },
    created() {


    },
    methods: {

      getpageSize(val){
        console.log(val)
      },
      getpagCurrent(val){
        console.log(val)
      },


    }

  }
</script>

<style lang="less"  >
  @import "../../../assets/less/defuale.less";
  .select_box{ display: flex; width: 100%; justify-content: flex-start;flex-direction:row;align-content: center;flex-wrap:nowrap;
    .select_btn{ margin-right:5px;
      .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
        width: 200px;
      }
    }
  }

  @media (device-width: 768px) and (-webkit-min-device-pixel-ratio: 2){

  }
   @media (device-width: 768px) and (-webkit-min-device-pixel-ratio: 2){
     .kit {
       dl {
         width: 100%;
         dt{
           img{
             width: 100%;height: auto;
           }
         }
       }
     }

 }
  @media only screen and (min-width: 1024px) {
    .kit{
      dl{width: 49%;
        dt{
          img{
           width: 100%;height: auto;
          }
        }
      }
    }

  }
  .kit{background:#fff;width: 100%; padding: 15px; box-sizing: border-box; border: 1px solid #e7eaec;.fexcent;
    dl{  background: #fff; height: 200px; position: relative; margin-bottom: 15px;.boxshadow;.fexcnowrap; border-radius: 8px;
      dt{ flex: 0.7;  align-self: center; text-align: center;
        img{align-self: center;vertical-align: middle;}
      }
      dd{flex: 1; padding: 0; margin: 0;
        &:nth-of-type(1){ flex: 1;}
        &:nth-of-type(2){ flex: 0.7;
          li{
              &:nth-of-type(1){ flex: 1.5;}
              &:nth-of-type(2){ flex: 1;}
            }
          }
        &:nth-of-type(3){ flex: 1;border-radius: 0 8px 8px 0;
          li{list-style-type:none; padding: 4px 0;overflow-x: auto;
            &:nth-of-type(1){ flex: 1;}
            &:nth-of-type(2){ flex: 1;}
          }
        }
        ul{ display: flex; width: 100%; padding: 0; margin: 0;
          li{ list-style-type:none; padding: 4px 0;overflow-x: auto;
            .el-button{padding: 12px 5px;}
            &:nth-of-type(1){ flex: 1;}
            &:nth-of-type(2){ flex: 1;}
          }
          .tex_conet{ text-align: center;}
        }
      }
    }
  }

</style>
