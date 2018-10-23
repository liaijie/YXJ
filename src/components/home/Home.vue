<template>
   <div class="home">
       <div class="header">
           <!-- 顶部图片 -->
           <img class="bg" src="static/home/menu/banner.png" alt="">
           <img class="logo" src="static/home/menu/logo.png" alt="">
       </div>
       <div class="menuList">
           <ul>
               <li v-for='(item,index) in menuList' :key="index" :class="item.img.split('.')[0]" @click="goToPage(item.url)">
                   <img :src="'static/home/menu/'+item.img"  alt="">
                   <p>{{item.text}}</p>
               </li>
           </ul>
       </div>
       <!-- 推荐 -->
       <div class="tui">
           <p class="title">为您推荐</p>
           <a href="">
               <img src="static/home/tuijian/01.png" alt="">
           </a>
       </div>
       <!-- 最新活动 -->
       <div class="newActivity">
           <p class="title">最新活动</p>
           <!-- 活动列表 -->
           <ul class="list">
               <li v-for="(item,index) in activityList" :key="index">
                   <div class="cardImg">
                       <img :src="'static/home/activity/'+item.img">
                   </div>
                   <div class="text">
                       <p class="cardTitle">{{item.title}}</p>
                       <p class="info">{{item.info}}</p>
                   </div>
                   <div class="btn">
                       <p class="top">{{item.top}}</p>
                       <p class="bot">{{item.bot}}</p>
                   </div>
               </li>
           </ul>
       </div>
   </div>
</template>
<script>
export default {
  name: 'home',
  data:function(){
      return{
          menuList:[
              {text:"办信用卡",img:'card.png',url:"/banklist"},
              {text:"进度查询",img:'serch.png'},
              {text:"开始赚钱",img:'vip.png'},
              {text:"兑换中心",img:'dui.png'},
              {text:"赏金任务",img:'task.png'},
              {text:"用户中心",img:'user.png'}
          ],
        activityList:[
            {title:'"颜"系列信用卡',info:"4小时1000元航班延误险",img:"01.png",top:"刷卡免年费",bot:"超高颜值神器"},
            {title:'Youth Elite优逸白',info:"新户达标5积分兑换耳机",img:"03.png",top:"首年免年费",bot:"双倍积分"},
            {title:'浦发梦竟信用卡',info:"ROG电竞鼠标、鼠标垫",img:"02.png",top:"线下活动体验",bot:"新户专享"},
        ]
      }
  },
  methods:{
    goToPage:function(url){
          this.$router.push(url)
    }

  }
    
}
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.home{
    background-color: #e6e6e6;
    .header{
    width:100%;
    height:4.266667rem;
    overflow: hidden;
    position:relative;
    .bg{
        width:100%;
        height:4.266667rem
        }
    .logo{
        position:absolute;
        top:.786667rem;
        right:.68rem;
         }
    }
    .menuList{
        width:100%;
        height:6.266667rem;
        background-color: #fff;
        margin-bottom:.266667rem;
        position:relative;
        // 使用为元素来实现分割线
        &::before{
                    content:"";
                    width: 33.244444444%;
                    height:6.266667rem;
                    border-left: .013333rem solid #e6e6e6;
                    border-right: .013333rem solid #e6e6e6;
                    position:absolute;
                    left:33.244444444%;
                    top:0;
                }
        &::after{
                    content:"";
                    width: 100%;
                    height:.013333rem;
                    border-top: .013333rem solid #e6e6e6;
                    position:absolute;
                    left:0;
                    top:3.133333rem;
                }
        ul{
            overflow: hidden;
            position:relative;
            li{
                float: left;
                width:33.244444444%;
                height:3.133333rem;
                text-align:center;
                padding-top: .826667rem;
                box-sizing: border-box;
                img{
                    width: .786667rem;
                    height:.773333rem;
                    margin-bottom: .52rem;
                }
                p{
                    width:100%;
                    font-size: .373333rem;
                }
            }
        }
    }
    .tui{
        width:100%;
        height:3.44rem;
        background-color: #fff;
        padding-top:.466667rem;
        padding-left: .4rem;
        padding-right: .4rem;
        padding-bottom: .466667rem;
        box-sizing: border-box;
        margin-bottom: .266667rem;
        .title{
            font-size: .4rem;
            color: #333333;
            margin-bottom: .48rem;
        }
        a{
            img{
                height:1.653333rem;
                width:100%;
            }
        }
    }
    .newActivity{
        background-color: #fff;
        padding: .52rem .4rem .506667rem .4rem;
        .title{
            font-size: .4rem;
            color:#333;
            padding-bottom: .333333rem;
            border-bottom:.013333rem solid #e6e6e6;
        }
        .list{
            // width:100%;
            // height:1.52rem;
            li{
                width:100%;
                height:1.52rem;
                padding-top:.4rem;
                padding-bottom: .4rem;
                border-bottom: 1px solid #e6e6e6;
                div{
                float: left;
                &.cardImg{
                    width: 2.4rem;
                    margin-right:.64rem;
                    img{
                        width:100%;
                    }
                }
                 &.text{
                     text-align: center;
                     width: 3.666667rem;
                     margin-right: .64rem;
                     .cardTitle{
                          font-size: .373333rem;
                          line-height: .773333rem;
                          font-weight: bold;
                     }
                     .info{
                         font-size:.32rem
                     }
                    
                 }
                 &.btn{
                     font-size: .24rem;
                     width:1.64rem;
                     text-align: center;
                     margin-top:.266667rem;
                     .top{
                         border:1px solid #ff2e3c;
                         color:#ff2e3c;
                         margin-bottom:.133333rem;
                     }
                     .bot{
                         border:1px solid #a757df;
                         color: #a757df
                     }
                 }

                }
            }
        }
    }
}


</style>


