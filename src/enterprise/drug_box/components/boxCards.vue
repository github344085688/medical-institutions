<template>
  <div class="box-card" :style="{
  paddingTop: paddings[0] + 'px',
  paddingRight: paddings[1] + 'px',
  paddingBottom: paddings[2] + 'px',
  paddingLeft: paddings[3] + 'px',
  marginBottom: marginas + 'px'}
">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'boxCards',
  props: {
    paddings:{
      type: Array,
      default: [1,1,1,1]
    },
    marginas:{
      type: Number,
      default: 35
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .box-card {box-sizing: border-box; vertical-align: middle; height: auto;  width: 100%; background-color:#e9ebec; border-bottom: #d7d8d9 1px solid ;display: flex; flex-wrap: nowrap;justify-content: space-between; align-items:center;}
</style>
