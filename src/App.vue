<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      locale:'zh',
      // activeIndex: '1',
      //activeIndex2: '1'
    }
  }

}
</script>

<style lang="less">

  html,body{ margin:0;height: 100%; font-size: 14px !important;  width: 100%;font-family: "Microsoft YaHei";padding:0;-webkit-touch-callout: none; background: #f8f8f8; -webkit-text-size-adjust: none; margin: 0 ;  -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale; }
  div{ box-sizing: border-box; font-size: 14px;}
  #app { width: 100%; height: 100%; background: #f8f8f8; overflow: hidden; position: relative;}
  div{ box-sizing: border-box;}
  /* @media only screen and (max-width:320px){html{font-size: 14px;}}*/

</style>
