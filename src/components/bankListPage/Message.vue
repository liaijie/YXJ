<template>
    <div>
        <transition  name="msg">
                <p v-if="show">{{msg}}</p>
        </transition>    
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            msg:"",
            show:false,
            timer:""
        }
    },
    mounted:function(){
       this.timer = setInterval(()=>{
            this.show=true
            this.randomMsg()
            setTimeout(()=>{
                this.show=false
            },5000)
        },10000)
    },
    beforeDestroy:function(){
            clearInterval(this.timer)
    },
    methods:{
        randomMsg:function(){
            // 姓名数组
            var names = ['赵','钱','孙','李','周','吴','郑','王','冯','陈','蒋','沈','韩','杨','朱','秦','许','何','吕','施','张','孔','曹','严','金','魏','陶'];
            // 银行数组
            var banks = ['交通银行','浦发银行','中信银行','民生银行','平安银行','光大银行','招商银行','工商银行','兴业银行']
            // 姓名数组长度
            var nameLength = names.length;
            // 随机获取一个名字
            var name = names[parseInt(Math.random()*nameLength)];
            // 银行数组长度
            var bankLength = banks.length;
            //随机获取一个银行
            var bank = banks[parseInt(Math.random()*bankLength)]
            // 获取当前时间
            var time = new Date()
            // 获取月
            var month = ("0" + (time.getMonth()+1)).slice(-2)
            // 获取日
            var day = ("0"+time.getDate()).slice(-2)
            // 获取时
            var hour = ("0"+time.getHours()).slice(-2)
            // 获取分
            // var  minu = ("0"+time.getMinutes()).slice(-2)
            var minu = time.getMinutes()
            var minu1 = minu-parseInt(Math.random()*minu)
            var minu2 = ('0'+minu1).slice(-2)
            // 获取秒
            var second = time.getSeconds()
            // 红包金额
            var money = parseInt(Math.random()*100+89)
            var num1 = parseInt(Math.random()*10)
            this.msg = name +(second%2==0 ?'** 于':'* 于')+ month + '月/'+ day + '日'  + hour + ':' + minu2 + (num1%2==0?'申请了一张'+ bank + '信用卡':"领取了" + money + "元红包")
            console.log( this.msg)
        }
    }
}
</script>
<style lang="less">
  
 .msg-enter-active, .msg-leave-active {
   transition: all 3s;
 }
 .msg-enter, .msg-leave-to{
   opacity: 0;
 }
 .msg{
     p{ 
         font-size: .24rem;
         height: .32rem;
         line-height: 1.5;
         color:#fff;
         background-color: rgba(255,0,0,.5);
         border-radius:.266667rem;
         padding: .066667rem .266667rem;
         position:relative;
         top:.266667rem;
         left:2.5rem;
     }
 }
  

</style>


