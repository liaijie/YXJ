<template>
    <ApplyNow  :imgUrl="img" :guid="bank"></ApplyNow>
</template>
<script>
//引入立即办卡模版组件
import ApplyNow from  './ApplyNow' 
console.log("666")
export default {
    //注册组件
    components:{
        ApplyNow,
    },
    data:function(){
        return{
            img:"sh.jpg",
            bank:'/SHguid'
        }
    }
}
</script>
<style lang="less">
</style>
