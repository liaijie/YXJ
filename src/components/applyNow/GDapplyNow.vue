<template>
    <ApplyNow class="applyNow" :imgUrl="img" :guid="bank"></ApplyNow>
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
            img:"gd.jpg",
            bank:'/GDguid'
        }
    }
}
</script>
<style lang="less" scoped>
</style>
