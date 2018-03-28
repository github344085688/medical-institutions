<template>

  <div class="upPhoto">

      <box-cards :paddings="[12, 12, 12, 12]">
        <div class="names"><i class="el-icon-tickets"></i><span>上传{{patientname}}的{{tit[patientId.python]}}</span></div>
        <el-button type="info" @click="handleEdit()"><i class="el-icon-arrow-left"></i>返回病人信息列表</el-button>
        <el-button type="info" @click="uphandleEdit()">查看病人{{tit[patientId.python]}}<i class="el-icon-arrow-right"></i></el-button>
      </box-cards>

    <el-form ref="newform" :model="newform" :rules="rules">

      <el-form-item label="" prop="expvmFiles">
        <el-upload
          class="upload-demo"
          drag
          ref="uploadfile"
          :action="upload_url"
          :file-list="fileList2"
          :auto-upload="false"
          :before-upload="newFiles"
          multiple
          list-type="picture"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>

        </el-upload>
      </el-form-item>

      <el-form-item style="text-align:center">
        <el-button type="primary" @click="newSubmitForm()" class="yes-btn">
          确 定
        </el-button>
        <el-button @click="resetForm('newform')">
          重 置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import boxCards from '../boxCards.vue'
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
        fileList2: [],
        upload_url: '../../../assets/img/zp.jpg',
        uploadForm: new FormData(),
        rules: {},
        newform: {}
      }
    },
    created() {

    },
    mounted () {
      if(this.patientId.python==1){


      }
      this.patientname= this.patientId.patientname;
    },
    methods: {
      newFiles(file) {
        this.uploadForm.append('file[]', file);
        console.log(this.uploadForm);
        return false
      },
      newSubmitForm() {
        this.$refs.uploadfile.submit()
        let _this = this;
        this.newExp(this.uploadForm).done((data) => {
          if (data.code == 0) {
            _this.uploadForm = new FormData();
            console.log(data);
          }
        })
          .fail(function () {
            console.log("error");
          });
      },
      newExp(data) {
        return $.ajax({
          headers: {
            "api-version": "1.1"
          },
          type: "post",
          url: 'http://api.zayata.com/index.php?s=/Home/File/uploadPicture',
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          data: data,
          dataType: 'json',
        })

      },
      resetForm() {
        this.uploadForm = new FormData();
        this.fileList2 = [];
        this.upload_url = 'df';
        this.rules = {};
        this.newform = {};
      },
      handleEdit() {
        this.$emit('gethandle-edit',{conname:'examinationRecord',python:this.patientId.python,patientids:this.patientId.patientids,patientname:this.patientId.patientname});
      },
      uphandleEdit() {
        this.$emit('gethandle-edit',{conname:'PhoTos',python:this.patientId.python,patientids:this.patientId.patientids,patientname:this.patientId.patientname});
      },

    },
    components: {
      boxCards
    },
  }
</script>

<style lang="less">
  .upPhoto{background-color:#fff; width: 100%; border-left: #e7eaec solid 1px;border-right: #e7eaec solid 1px;border-bottom: #e7eaec 1px solid ;
      .names{ flex: 2;  height: 35px; line-height: 35px; padding-left: 15px; color: #58666e;  }
      .addup{width: 250px; height: 50px; background-color: #5daf34;}
      .el-form{ padding: 0 15px;}
      .el-upload{display:block;}
      .el-upload__tip{text-align: center}
      .el-upload-dragger{ margin: auto;}
      .el-icon-document{ display: none;}
      .el-icon-close{ font-size: 35px; vertical-align: middle; margin-top: 20px;}
  }

</style>
