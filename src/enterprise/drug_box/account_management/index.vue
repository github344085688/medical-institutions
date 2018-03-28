<template>
  <div class="examination_record"  >
   <datasta-tistics :is="currentTab"  ></datasta-tistics>
  </div>
</template>
<script>
   import organizationalStructure from './organizational_structure';

  export default {
    data() {
      return {
        currentTab: 'organizationalStructure',
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
      organizationalStructure
    },
  }
</script>
<style lang="less">


</style>
