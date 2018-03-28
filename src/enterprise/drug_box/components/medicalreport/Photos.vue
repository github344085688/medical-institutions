<template>
  <div class="grid">
    <box-cards :paddings="[12, 12, 12, 12]">
      <div class="names"><i class="el-icon-tickets"></i><span>{{patientname}}的{{tit[patientId.python]}}</span></div>
      <el-button type="info" @click="handleEdit()"><i class="el-icon-arrow-left"></i>返回信息列表</el-button>
      <el-button type="success" @click="uphandleEdit()"><i class="el-icon-plus"></i>上传{{tit[patientId.python]}}</el-button>
    </box-cards>
    <el-row>
      <el-col :span="6" v-for="(o, index) in 9" :key="o" :offset="index > 0 ? 0 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../../../assets/img/zp.jpg" class="image" preview="1" preview-text="描述文字">
          <div class="titles">
            <div class="time">{{ currentDate }}</div>
              <div class="del">删除</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Vue from 'vue'
  import preview from 'vue-photo-preview'
  import 'vue-photo-preview/dist/skin.css';
  Vue.use(preview);
  import boxCards from '../boxCards.vue';
  export default {
    props: {
      patientId: {
        type:Object
      }
    },

    data() {
      return {
        patientname:'',
        tit:['体检报告','历史病历'],
        currentDate: "2017-10-12"
      };
    },
    created(){
     /* this.$root.brdge.$on('examinations', value => {
        this.print(value)
      })*/
    },
    mounted () {
      this.patientname= this.patientId.patientname;
      console.log(this.patientId);
    },
    beforeDestroy(){
     //this.$root.brdge.$off('examinations')
    },
    methods: {
      handleEdit() {
        if(this.patientId.entrance){
          this.$router.push({ path: '/enterprise/mypatient'});
        }else {
          this.$emit('gethandle-edit',{conname:'examinationRecord',python:this.patientId.python,patientids:this.patientId.patientids,patientname:this.patientId.patientname});
        }

      },
      uphandleEdit() {
        this.$emit('gethandle-edit',{conname:'upPhoto',python:this.patientId.python,patientids:this.patientId.patientids,patientname:this.patientId.patientname});
      },
    },
    components: {
      boxCards
    },
  }
</script>
<style lang="less">
  .grid {display: flex;  flex-flow: row wrap; background-color:#fff;border-bottom: #e7eaec 1px solid ;align-items: flex-start; border-left: #e7eaec solid 1px;border-right: #e7eaec solid 1px;
    .names{ flex: 2;  height: 35px; line-height: 35px; padding-left: 15px; color: #58666e;  }
    .addup{width: 250px; height: 50px; background-color: #5daf34;}
    .el-row{ padding: 0 20px;}
    .el-col-6{margin-left:0; margin-bottom: 25px; margin-right: 0; padding-left: 3px; padding-right: 3px;
      .image {width: 100%;display: block; cursor: pointer;}
    }
    .titles{ display: flex; height:35px; align-items:center; line-height: 35px; flex-direction: row; flex-wrap: nowrap; justify-content: space-between;
      .time { flex: 1; font-size: 13px; padding: 5px;     color: #999;  }
      .del{flex: 0 0 80px; background-color: #f56c6c; order: 2; height: 35px;  text-align: center; color: #fff; cursor: pointer;
        &:hover{background-color: #fab6b6;}
      }
    }
  }
</style>


