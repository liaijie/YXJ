<template>
    <ApplyNow class="applyNow" :imgUrl="img" :guid="guid" :bank="bank"></ApplyNow>
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
            img:"ms.jpg",
            guid:'/MSguid',
            bank:'MS'
        }
    }
}
</script>
<style lang="less" scoped>
</style>
