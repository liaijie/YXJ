<template>
    <h1>{{msg}}</h1>
</template>
<script>
export default {
    data:function(){
        return {
            msg:""

        }
    },
    mounted:function(){
        // setInterval(function(){
        //     randomMsg()
        // },1000)
        this.randomMsg()

    },
    methods:{
        randomMsg:function(){
            // 姓名数组
            var names = ['赵','钱','孙','李','周','吴','郑','王','冯','陈','蒋','沈','韩','杨','朱','秦','许','何','吕','施','张','孔','曹','严','金','魏','陶'];
            // 数组长度
            var nameLength = names.length;
            // 随机获取一个名字
            var name = names[parseInt(Math.random()*nameLength)];
            // 获取当前时间
            var time = new Date()
            // 获取月
            var month = ("0" + (time.getMonth()+1)).slice(-2)
            // 获取日
            var day = ("0"+time.getDate()).slice(-2)
            // 获取时
            var hour = ("0"+time.getHours()).slice(-2)
            // 获取分
            var  minu = ("0"+time.getMinutes()).slice(-2)
            this.msg = month + '/'+ day + '/' + hour + '/' + minu

        }
    }
}
</script>
<style lang="less">

</style>


