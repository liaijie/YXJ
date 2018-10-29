<template>
      <!-- 头部轮播图 -->
      <div class="applyCard">
          <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="(item,index) in headerSwiper" :key="index" >
                    <router-link :to="item.url">
                      <img :src="'static/applyCard/headerSwiper/'+item.img" alt="">
                    </router-link>
                </div>
            </div>
          <div class="swiper-pagination"></div>
          <Message class="msg"></Message>
        </div>
        <!-- 银行列表 -->
        <div class="bankList">
              <p class="title">快速办卡</p>
              <ul>
                <router-link  v-for="(item,index) in bankList" :key="index" tag="li" :to="item.url">
                        <div>
                          <img :src="'static/applyCard/bankList/' + item.img" alt="">
                        </div>
                        <div>
                            <span class='bankName'>{{item.text}}</span>
                            <span class='info'>{{item.info}}</span>
                        </div>
                        <span v-if="item.tag !=''"  class="tag">
                          <img :src="'static/applyCard/bankList/'+item.tag" alt="">
                        </span>
                </router-link>
              </ul>
        </div>
        <Footer class="footer"></Footer>
        <GoHome></GoHome>
    </div>
</template>
<script>
// 引入swipei插件，我是通过npm下载的，文件在node_modules
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import Footer from '../footer/Footer'
import Message from "./Message"

export default {
    components:{
        //注册轮播组件
        Swiper,
        Footer,
        Message
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
          {img:"jtyh.jpg",url:"/JTapplyNow"},
          {img:"msyh.jpg",url:"/MSapplyNow"},
          {img:"zxyh.jpg",url:"/ZXapplyNow"},
        ],
        bankList:[
          {text:"交通银行",img:"jt.png",url:"/JTapplyNow",info:"星期五5%优惠",tag:"zhp.png"},
          {text:"中信银行",img:"zx.png",url:"/ZXapplyNow",info:"新户得拉杆箱",tag:"gep.png"},
          {text:"民生银行",img:"ms.png",url:"/MSapplyNow",info:"最快三秒审核",tag:"yxp.png"},
          {text:"平安银行",img:"pa.png",url:"/PAapplyNow",info:"每周三享五折",tag:"mpp.png"},
          {text:"光大银行",img:"gd.png",url:"/GDapplyNow",info:"10元享电影、美食",tag:"yxp.png"},
          {text:"工商银行",img:"gs.png",url:"/GSapplyNow",info:"境外消费31%返现",tag:""},
          {text:"上海银行",img:"sh.png",url:"/SHapplyNow",info:"消费满立减",tag:""},
          {text:"广发银行",img:"gf.png",url:"/GFapplyNow",info:"新户消费返现6%",tag:""},
          {text:"中国银行",img:"zg.png",url:"/ZGapplyNow",info:"免年费，优惠多",tag:""},
          {text:"浦发银行",img:"pf.png",url:"/PFapplyNow",info:"送4888刷卡金",tag:""},
        ]

    }
  },

}
</script>
<style lang="less" scpoed>
  *{
    margin: 0;
    padding: 0;
    list-style:none;
  }
 html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color:#f8f8f8;
  }
  .applyCard{
        position:relative;
      .swiper-container{
        margin-bottom: .266667rem;
        position:relative;
        .swiper-slide{
          img{
            width:100%;
            height:3.973333rem;
          }
        }
      }
      .bankList{
        background-color: #fff;
        margin-bottom:.2rem;
          .title{
            padding-top:.306667rem;
            padding-left: .346667rem;
            padding-bottom: .306667rem;
            font-size: .373333rem;
            color: #2c2c2c;
            border-bottom: 1px solid #e6e6e6;
            }
          ul{
            width:100%;
            overflow: hidden;
            li{
              width:50%;
              // height:3.043333rem;
              height:3.08rem;
              box-sizing: border-box;
              float: left;
              border-bottom:1px solid #e6e6e6;
              padding-left: .333333rem;
              padding-top: .866667rem;
              position:relative;
              div{
                float: left;
                text-align: center;
                img{
                width:1.066667rem;
                height:1.066667rem;
                margin-right: .2rem;
                }
              span{
                display:block;
                &.bankName{
                  margin-bottom: .24rem;
                  font-size: .413333rem;
                }
                }
              }
              .tag{
                display:block;
                width:.693333rem;
                height:.373333rem;
                position:absolute;
                top:.933333rem;
                right:.4rem;
                img{
                  width:100%;
                }
              }
              &:nth-child(odd){
                  border-right:1px solid #e6e6e6;
              }
            
            }
          }
      }
      .msg{
        position:absolute;
        top:0;
        left:1.333333rem;
        z-index:10;
      }
  }

</style>

