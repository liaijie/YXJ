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
            img:"jt.jpg",
            bank:'/JTguid'
        }
    }
}
</script>
<style lang="less" scoped>
.applyNow{
    height:100%;
}
</style>
