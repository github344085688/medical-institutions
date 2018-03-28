<template>
  <div class="loding">
    <select v-model="locale">
      <option>
        zh
      </option>
      <option>
        en
      </option>
    </select>
    <div class="loding_box">
      <div class="loup_box" :style="{
      'width': lodup.width+ 'px',
      'height':lodup.height+ 'px',
      'top':lodup.toppo+ '%' ,
       'marginTop':'-'+lodup.m_top+ 'px',
       'marginLeft':lodup.m_le+ 'px',
       'left':lodup.left+ '%',
       }" >
        <div class="log_box"><img src="../assets/img/logo.png"/></div>
        <div class="link_box"><p>{{ $t("message.lodings.enterprise_edition") }}</p></div>
        <div class="input_box">
          <el-input  :placeholder="$t('message.lodings.please_ente')" clearable></el-input>
          <p><span></span></p>
          <el-input  :placeholder="$t('message.lodings.please_password')" clearable></el-input>
          <p><span></span></p>
          <div  class="lianxiwom"  > {{ $t("message.lodings.please_lianxi") }}<span class="span">{{ $t("message.lodings.please_women") }}</span></div>
          <el-button type=" success" @click="routers">{{ $t("message.lodings.lodingup") }}</el-button>
        </div>
      </div>
    </div>
    <footer>Copyright © 2015-2017   www.zayacare.com  All Rights Reserved.  巨烨健康   版权所有</footer>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        locale:'zh',
        lodup:{
          width:0,
          height:0,
          m_top:0,
          m_le:0,
          toppo:0,
          left:0
        }
      }
    },
    watch:{
      locale(val){
        this.$i18n.locale=val;
        this.$store.dispatch('setlanguage',val)
      }
    },
    created(){
      let shuxin=this.gethigth(360,490);
      this.lodup. width=shuxin.width;
      this.lodup. height=shuxin.height;
          this.lodup.m_top=shuxin.rety;
          this.lodup.m_le=shuxin.retx;
          this.lodup.toppo=shuxin.retop;
          this.lodup.left=shuxin.left;

   /*   this.getajax("/Home/Device/get_device_list_by_uid",
        {
          access_token: "MTUxNjc4ODUxNLq4hribepuqvrKGgLV1pZi5pKSainxmhLuyc3Y",
          uid: 375
        }
      ).done(function (data) {
        console.log(data)

      });*/
    },
    mounted: ()=> {
    },
    components: {},
    methods: {
      routers: function () {
        this.$router.push({path: './enterprise'});
      }
    },
    computed: {

    }
  }

</script>

<style  lang="less">
  .loding{width: 100% ; height: 100%;
    .routerview{ margin-top: 200px; padding-top: 150px;}
  }
  .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden;
    background: url("../assets/img/loding_bg768.jpg")no-repeat center center;
    background-size: 768px 1024px;
    footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 150px;  line-height: 150px; vertical-align: middle; font-size: 12px;}
  }
  select{ position: absolute; top:0; right: 0;z-index:100;}
  /*5*/
  @media (device-width: 768px) and (device-height: 1024px)and (-webkit-min-device-pixel-ratio: 2)  {
    .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden;
      background: url("../assets/img/loding_bg768.jpg")no-repeat center center;
      background-size: 768px 1024px;
      footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 120px;  line-height: 120px; vertical-align: middle; font-size: 12px;}
    }
  }
  @media (device-width: 1024px) and (device-height: 768px)and (-webkit-min-device-pixel-ratio: 2)  {
    .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden;
      background: url("../assets/img/loding_bg768.jpg")no-repeat center center;
      background-size: 1024px 768px;
    }
    footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 120px;  line-height: 120px; vertical-align: middle; font-size: 12px;}
  }
  @media (device-width: 1024px) and (device-height: 1366px)and (-webkit-min-device-pixel-ratio: 2)  {
    .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden;
      background: url("../assets/img/loding_bg768.jpg")no-repeat center center;
      background-size: 1024px 1366px;
    }
    footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 150px;  line-height: 150px; vertical-align: middle; font-size: 12px;}
  }
  @media (device-width: 1024px) and (device-height: 1366px)and (-webkit-min-device-pixel-ratio: 2)  {
    .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden;
      background: url("../assets/img/loding_bg768.jpg")no-repeat center center;
      background-size: 1024px 1366px;
    }
    footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 150px;  line-height: 150px; vertical-align: middle; font-size: 12px;}
  }
  @media  (min-width: 1367px) and (max-width: 1920px)  {
    .loding_box{width: 100% ; height: 100%; position: relative; overflow: hidden; background: url("../assets/img/loding_bg.jpg")no-repeat center center; background-size: 100% 100%;
     }
    footer{ position: absolute; bottom: 0; width: 100%; text-align: center; height: 50px; vertical-align: middle; font-size: 12px;}
  }
  .loup_box{  background:rgba(255, 255, 255, 0.6); border-radius: 20px; position: absolute; box-sizing: border-box; padding: 15px 15px;
    .log_box{width: 100%; height: 10%;
      img{ height: 100%; width: auto;}
    }
    .link_box{width: 50%; height: 10%; background: #fff; border-radius: 15px 15px 0 0 ; margin-top: 5%; line-height: 50px; text-align: center; color: #14cc4c;}
    .input_box{ width: 100%; height: 77%; background: #fff;border-radius: 0 15px 15px 15px ; box-sizing: border-box; padding: 15% 5%;
       p{width: 100%; height: 15%; display: block;  margin: 0; padding: 0; vertical-align:middle;
          span{vertical-align: middle; font-size: 12px; padding: 15px; color: #e6a23c;}
       }
      .lianxiwom{ text-align: right; font-size: 14px;margin-top: 15%; color: #666666;
          span{color:#14cc4c; }
      }
      .el-button{width: 100%; background: #14cc4c; color: #ffffff; margin-top:5%;}
    }

  }
</style>
