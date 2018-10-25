<template>
    <div class="applyNow">
        <!-- <div class="img" style="'backgroundImg:url(static/applyNow/'+imgUrl')'"> -->
        <div class="img">
            <img :src="'static/applyNow/' + imgUrl" alt="">
            <!-- <img src="static/applyNow/zs.jpg" alt=""> -->
        </div>
        <router-link tag="span" :to="guid" class="guid">办卡指南</router-link>
        <router-link tag="span" to="/" class="goHome">
                <img src="static/applyNow/home.png" alt="">
        </router-link>
        <div class="goHome">
        </div>
        <div class="btn">立即办卡</div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../footer/Footer'
export default {
    props:['imgUrl','guid'],
    components:{
        Footer
    }
}
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
html,body{
    width:100%;
    height:100%;
}
.applyNow{
    width:100%;
    height: auto;
    // padding-bottom:.666667rem;
    padding-bottom:1.333333rem;
    .img{
        width:100%;
        height:calc(100% - 1.333333rem);
        img{
            width:100%;
            height:100%;
        }
    }
    .btn{
        width:100%;
        height: 1.333333rem;
        background-color: #ff7828;
        font-size: .426667rem;
        text-align: center;
        color:#fff;
        line-height: 1.333333rem;
        position:fixed;
        left:0;
        bottom:0;
    }
    span.guid{
        display:block;
        width: .64rem;
        height: 1.933333rem;
        background-color: rgba(255,255,255,.4);
        color:#fff;
        padding: .133333rem .16rem;
        box-sizing: border-box;
        position:fixed;
        top:.52rem;
        right:0;
        font-size:.32rem;
        border-radius: .133333rem 0 0 .133333rem;
    }
    span.goHome{
            width: 1.173333rem;
            height: 1.173333rem;
            position:fixed;
            right:0;
            bottom:4.8rem;
        img{
            width: 1.173333rem;
            height: 1.173333rem;
        }
    }
}

</style>

