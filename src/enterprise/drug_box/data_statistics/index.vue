<template>
  <div class="examination_record">
   <datasta-tistics :is="currentTab"  ></datasta-tistics>
  </div>
</template>
<script>
   import datastaTistics from './datastatistics';
   import deviceDetails from './device_details';
  export default {
    data() {
      return {
        currentTab: 'deviceDetails',
      }
    },
    watch: {

    },
    created(){
      this.$root.brdge.$on('datasts', value => {
        this.currentTab=value;
         console.log(value)
      })

    },
    mounted(){


    },
    activated(){

    },
    beforeDestroy(){
      this.$root.brdge.$off('datasts')
    },
    methods: {
    },
    components: {
      datastaTistics,
      deviceDetails
    },
  }
</script>
<style lang="less">


</style>
