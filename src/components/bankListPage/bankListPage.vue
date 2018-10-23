<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">111111111</div>
            <div class="swiper-slide">222222222</div>
            <div class="swiper-slide">333333333</div>
        </div>
    </div>
</template>
<script>
// 引入swipei插件，我是通过npm下载的，文件在node_modules
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

 var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    speed:1000//可选选项，自动滑动
})

export default {
    components:{
        Swiper
    }
   
    
}
</script>
<style lang="less">

</style>

