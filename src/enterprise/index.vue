<template>
    <div class="enterprise">
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {}
        },
        beforeCreate(){

        },

        created(){

          //this.$router.push({name: 'drugbox'})
        },
        components: {},
        computed: {}
    }
</script>

<style  lang="less">
  .enterprise{ height: 100%; width: 100%;}
</style>
