<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="(item,index) in headerSwiper" :key="index" >
                <router-link to="/">
                  <img :src="'static/applyCard/headerSwiper/'+item.img" alt="">
                </router-link>
            </div>
        </div>
      <div class="swiper-pagination"></div>
    </div>
</template>
<script>
// 引入swipei插件，我是通过npm下载的，文件在node_modules
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    components:{
        //注册轮播组件
        Swiper
    },
    mounted:function(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay:true,
        speed:2000,
        loop:true,
        //分页器配置
        pagination: {
          el: '.swiper-pagination',
        },

      })
    },
  methods:{

  },
  data:function(){
      return {
        headerSwiper:[
          {img:"jtyh.jpg",url:""},
          {img:"msyh.jpg",url:""},
          {img:"zxyh.jpg",url:""},
        ]

    }
  }
   
    
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }

</style>

