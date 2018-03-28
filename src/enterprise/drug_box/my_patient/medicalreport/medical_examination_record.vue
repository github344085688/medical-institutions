<template>
<div class="examination_record">
  <examination-record :is="currentTab" @gethandle-edit="setthandleEdit"  :patient-id="popsdash" ></examination-record>
</div>
</template>
<script>
import examinationRecord from './examination_record.vue';
import PhoTos from '../../components/medicalreport/Photos.vue';
import UpPhoto  from "../../components/medicalreport/upPhoto.vue";

  export default {
    data() {
      return {
        currentTab: 'examinationRecord',
        popsdash:{
          patientids:0,
          patientname:'',
          python:1,
          expurt:0
        }
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created(){

    },
    mounted(){
      this.fetchDate();

    },
    activated(){

    },
    beforeDestroy(){

    },
    methods: {
      fetchDate(){
        if(this.$route.params.plan=='PhoTos'){
           this.currentTab =this.$route.params.plan;
           this.popsdash.patientids=this.$route.params.vals.ids;
           this.popsdash.patientname=this.$route.params.vals.name;
           this.popsdash.python=this.$route.params.python;
           this.popsdash.entrance=this.$route.params.entrance;
        }else {

        }


      },
      setthandleEdit(val){
        this.currentTab = val.conname;
        this.popsdash.patientids = val.patientids;
        this.popsdash.patientname = val.patientname;
        this.popsdash.python = val.python;
      }
    },
    components: {
      examinationRecord,
      PhoTos,
      UpPhoto
    },
  }
</script>
<style lang="less">
  .select_box{ width: 100%; height:50px; display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row;
    .select_btn{margin-left: 5px;
      &:first-child{margin-left: 0;}
    }
  }
  .table_box{width: 100%; min-height:300px;padding: 20px ;background: #f7f7f7;border-right: 1px solid #d4d4d4;border-bottom: 1px solid #d4d4d4;border-left: 1px solid #d4d4d4;border-radius:  0 0 4px 4px;
  }
  .examination_record{ width: 100%; height:auto;}

</style>
