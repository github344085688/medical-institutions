<template>
  <div class="slottable">
    <box-cards :paddings="paddingw" :marginas="0" >
      <slot name="selec"></slot>
    </box-cards>
    <div class="table_boxs">
      <slot name="tabletil"></slot>
      <div class="table_box">
        <slot name="tablebox"></slot>
      </div>
      <div>
        <slot name="pagings"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import boxCards from './boxCards.vue';
  export default {
    props:{
      paddingw:{
        type: Array,
        default: [10,10,10,10]
      },
    },
    data() {
      return {


      }
    },

    created(){

    },
    mounted () {

    },
    methods: {
    },
    components: {
      boxCards
    },
  }
</script>
<style scoped lang="less">
  .slottable{ width: 100%; height:auto; box-sizing: border-box;  border-bottom: #e7eaec 1px solid ;align-items: flex-start; border-left: #e7eaec solid 1px;border-right: #e7eaec solid 1px;

    .table_boxs{background:#f7f8f8; width: 100%; padding: 15px; box-sizing: border-box;
      .table_box{width: 100%;  padding: 0; border: none;

      }
    }
  }
</style>
